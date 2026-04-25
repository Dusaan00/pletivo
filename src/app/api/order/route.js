import {
  createCheckoutState,
  getPaymentMethodLabel,
  getShippingMethodLabel,
} from "../../../lib/checkout";
import {
  createMailTransporter,
  getMailConfigError,
  getMailErrorMessage,
} from "../../../lib/mail";
import { validateOrderPayload } from "../../../lib/orderValidation";

function formatPrice(value) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req) {
  try {
    const payload = await req.json();
    const validation = validateOrderPayload(payload);

    if (!validation.success) {
      return Response.json(
        {
          success: false,
          error: validation.errors[0] || "Zkontrolujte prosím údaje objednávky.",
        },
        { status: 400 },
      );
    }

    const { customer, cart, checkout } = validation.data;

    const mailConfigError = getMailConfigError();

    if (mailConfigError) {
      return Response.json(
        {
          success: false,
          error: mailConfigError,
        },
        { status: 500 },
      );
    }

    const normalizedCheckout = createCheckoutState({
      items: cart.items,
      shippingMethod: checkout.shippingMethod || customer.shippingMethod,
      paymentMethod: checkout.paymentMethod || customer.paymentMethod,
      paymentProvider: checkout?.paymentProvider ?? null,
      paymentStatus: checkout?.paymentStatus || "pending",
      mode: checkout?.mode || "manual",
    });

    const orderNumber = `PG-${Date.now()}`;
    const transporter = createMailTransporter();

    const itemsHtml = cart.items
      .map(
        (item) => `
          <tr>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${escapeHtml(item.name)}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${escapeHtml(
              (item.options || [])
                .map((option) => `${option.name}: ${option.value}`)
                .join(", "),
            )}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee; text-align: right;">${formatPrice(item.unitPrice)}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee; text-align: right;">${formatPrice(item.unitPrice * item.quantity)}</td>
          </tr>
        `,
      )
      .join("");

    const internalHtml = `
      <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.6;">
        <h2>Nová objednávka ${orderNumber}</h2>
        <p><strong>Zákazník:</strong> ${escapeHtml(customer.fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(customer.email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(customer.phone)}</p>
        <p><strong>Firma:</strong> ${escapeHtml(customer.company)}</p>
        <p><strong>IČO:</strong> ${escapeHtml(customer.ico)}</p>
        <p><strong>Adresa:</strong> ${escapeHtml(customer.street)}, ${escapeHtml(customer.postalCode)} ${escapeHtml(customer.city)}</p>
        <p><strong>Doprava:</strong> ${escapeHtml(getShippingMethodLabel(normalizedCheckout.shippingMethod))}</p>
        <p><strong>Platba:</strong> ${escapeHtml(getPaymentMethodLabel(normalizedCheckout.paymentMethod))}</p>
        <p><strong>Režim checkoutu:</strong> ${escapeHtml(normalizedCheckout.mode)}</p>
        <p><strong>Platební stav:</strong> ${escapeHtml(normalizedCheckout.paymentStatus)}</p>
        <p><strong>Souhlas s obchodními podmínkami:</strong> ano (${escapeHtml(checkout.termsVersion)})</p>
        <p><strong>Připraveno na platební bránu:</strong> ${normalizedCheckout.supportsGateway ? "ano" : "částečně"}</p>
        <p><strong>Poznámka:</strong> ${escapeHtml(customer.note || "Bez poznámky")}</p>
        <h3>Položky objednávky</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align: left; padding: 8px 12px;">Produkt</th>
              <th style="text-align: left; padding: 8px 12px;">Varianta</th>
              <th style="text-align: center; padding: 8px 12px;">Množství</th>
              <th style="text-align: right; padding: 8px 12px;">Cena za kus</th>
              <th style="text-align: right; padding: 8px 12px;">Cena celkem</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>
        <p style="margin-top: 20px;"><strong>Mezisoučet:</strong> ${formatPrice(cart.subtotal || 0)}</p>
      </div>
    `;

    const customerHtml = `
      <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.6;">
        <h2>Děkujeme za objednávku</h2>
        <p>Dobrý den, ${escapeHtml(customer.fullName)},</p>
        <p>
          objednávku jsme přijali pod číslem <strong>${orderNumber}</strong>.
          Nyní objednávku zkontrolujeme a následně Vám potvrdíme dopravu,
          termín a způsob platby.
        </p>
        <p><strong>Zvolená doprava:</strong> ${escapeHtml(getShippingMethodLabel(normalizedCheckout.shippingMethod))}</p>
        <p><strong>Zvolená platba:</strong> ${escapeHtml(getPaymentMethodLabel(normalizedCheckout.paymentMethod))}</p>
        <p><strong>Mezisoučet objednávky:</strong> ${formatPrice(cart.subtotal || 0)}</p>
        <p>
          Objednávka byla odeslána se souhlasem s obchodními podmínkami ve znění
          účinném ke dni ${escapeHtml(checkout.termsVersion)}.
        </p>
        <p>
          Pokud bude potřeba cokoli upřesnit, ozveme se na váš uvedený email nebo
          telefon.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 0.95em; color: #666;">
          Pletivo Grygov<br>
          Za Tratí 255, 783 73 Grygov<br>
          <a href="https://pletivogrygov.cz">www.pletivogrygov.cz</a>
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Objednávky Pletivo Grygov" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: customer.email,
      subject: `Nová objednávka ${orderNumber}`,
      html: internalHtml,
    });

    await transporter.sendMail({
      from: `"Pletivo Grygov" <${process.env.EMAIL_USER}>`,
      to: customer.email,
      subject: `Potvrzení objednávky ${orderNumber}`,
      html: customerHtml,
    });

    return Response.json({ success: true, orderNumber });
  } catch (error) {
    console.error("ORDER ERROR:", error);
    return Response.json(
      {
        success: false,
        error: getMailErrorMessage(error, "Objednávku se nepodařilo odeslat."),
      },
      { status: 500 },
    );
  }
}

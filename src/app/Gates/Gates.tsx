import "../Sass/_gates.scss";
import Link from "next/link";
import { basePath } from "../functions/Env";
import SliderGates from "../functions/SliderGates";
import { RiShoppingCart2Line } from "react-icons/ri";

function Gates() {
  return (
    <section className="gates">
      <div className="gates-texts">
        <h1 className="gates-h1">Brány a branky Pletivo Grygov</h1>
        <p className="gates-p">
          Níže můžete vidět příklady bran, které jsme jako firma u zákazníků
          instalovali a můžeme tedy tyto brány a branky instalovat i u vás, ať
          už jste soukromá osoba nebo firma. Většinu bran a branek nemáme ihned
          skladem, dodáváme je na zakázku, některé brány/branky jsou vyrobeny u
          nás v našich dílnách.
        </p>
      </div>
      <div className="gates-container">
        <div className="gates-card-wrapper">
          <SliderGates>
            <div className="gates-card-item">
              {" "}
              <Link href="/form" className="gates-card-link">
                <img
                  src={`${basePath}/land/gateland.webp`}
                  alt="Pletiva poplastovaná pvc"
                  className="gates-card-img"
                />
                <p className="badge">Brány Pletivo Grygov</p>
                <h2 className="gates-card-h2-title">
                  Montáž od Pletivo Grygov
                </h2>
                <button className="gates-card-button">Odeslat poptávku</button>
              </Link>
            </div>

            <div className="gates-card-item">
              <Link href="/form" className="gates-card-link">
                <img
                  src={`${basePath}/gates/brana2.webp`}
                  alt="Pletivo zinkové bezinal"
                  className="gates-card-img"
                />
                <p className="badge">Brány Pletivo Grygov</p>
                <h2 className="gates-card-h2-title">
                  Montáž od Pletivo Grygov
                </h2>
                <button className="gates-card-button">Odeslat poptávku</button>
              </Link>
            </div>

            <div className="gates-card-item">
              <Link href="/form" className="gates-card-link">
                <img
                  src={`${basePath}/gates/brana3.webp`}
                  alt="Panely 3D zelené"
                  className="gates-card-img"
                />
                <p className="badge">Brány Pletivo Grygov</p>
                <h2 className="gates-card-h2-title">
                  Montáž od Pletivo Grygov
                </h2>
                <button className="gates-card-button">Odeslat poptávku</button>
              </Link>
            </div>

            <div className="gates-card-item">
              <Link href="/form" className="gates-card-link">
                <img
                  src={`${basePath}/gates/brana4.webp`}
                  alt="Panely 3D zelené"
                  className="gates-card-img"
                />
                <p className="badge">Brány Pletivo Grygov</p>
                <h2 className="gates-card-h2-title">
                  Montáž od Pletivo Grygov
                </h2>
                <button className="gates-card-button">Odeslat poptávku</button>
              </Link>
            </div>

            <div className="gates-card-item">
              <Link href="/form" className="gates-card-link">
                <img
                  src={`${basePath}/gates/brana5.webp`}
                  alt="Panely 3D zelené"
                  className="gates-card-img"
                />
                <p className="badge">Brány Pletivo Grygov</p>
                <h2 className="gates-card-h2-title">
                  Montáž od Pletivo Grygov
                </h2>
                <button className="gates-card-button">Odeslat poptávku</button>
              </Link>
            </div>

            <div className="gates-card-item">
              <Link href="/form" className="gates-card-link">
                <img
                  src={`${basePath}/gates/brana6.webp`}
                  alt="Panely 3D zelené"
                  className="gates-card-img"
                />
                <p className="badge">Brány Pletivo Grygov</p>
                <h2 className="gates-card-h2-title">
                  Montáž od Pletivo Grygov
                </h2>
                <button className="gates-card-button">Odeslat poptávku</button>
              </Link>
            </div>

            <div className="gates-card-item">
              <Link href="/form" className="gates-card-link">
                <img
                  src={`${basePath}/gates/brana7.webp`}
                  alt="Panely 3D zelené"
                  className="gates-card-img"
                />
                <p className="badge">Brány Pletivo Grygov</p>
                <h2 className="gates-card-h2-title">
                  Montáž od Pletivo Grygov
                </h2>
                <button className="gates-card-button">Odeslat poptávku</button>
              </Link>
            </div>

            <div className="gates-card-item">
              <Link href="/form" className="gates-card-link">
                <img
                  src={`${basePath}/gates/brana8.webp`}
                  alt="Panely 3D zelené"
                  className="gates-card-img"
                />
                <p className="badge">Brány Pletivo Grygov</p>
                <h2 className="gates-card-h2-title">
                  Montáž od Pletivo Grygov
                </h2>
                <button className="gates-card-button">Odeslat poptávku</button>
              </Link>
            </div>

            <div className="gates-card-item">
              <Link href="/form" className="gates-card-link">
                <img
                  src={`${basePath}/gates/brana9.webp`}
                  alt="Panely 3D zelené"
                  className="gates-card-img"
                />
                <p className="badge">Brány Pletivo Grygov</p>
                <h2 className="gates-card-h2-title">
                  Montáž od Pletivo Grygov
                </h2>
                <button className="gates-card-button">Odeslat poptávku</button>
              </Link>
            </div>

            <div className="gates-card-item">
              <Link href="/form" className="gates-card-link">
                <img
                  src={`${basePath}/gates/brana11.webp`}
                  alt="Panely 3D zelené"
                  className="gates-card-img"
                />
                <p className="badge">Brány Pletivo Grygov</p>
                <h2 className="gates-card-h2-title">
                  Montáž od Pletivo Grygov
                </h2>
                <button className="gates-card-button">Odeslat poptávku</button>
              </Link>
            </div>
          </SliderGates>
        </div>
      </div>

      <div className="gates-produkty">
        <h2 className="gates-h2">
          Další příklady bran, která pro vás můžeme realizovat:
        </h2>
        <div className="gatee-products">
          <div className="gatee-product">
            <div className="gatee-product-image">
              <img
                src={`${basePath}/gates/jekl.webp`}
                alt="Jeklová branka/brána – laťka"
              />
            </div>
            <div className="gatee-product-text">
              <div className="gatee-product-pricing">
                <h3>Jeklová branka/brána – laťka</h3>
              </div>
            </div>
            <div className="btn-buy">
              <Link href="/form">
                <button>
                  Objednat
                  <RiShoppingCart2Line />
                </button>
              </Link>
            </div>
          </div>

          <div className="gatee-product">
            <div className="gatee-product-image">
              <img
                src={`${basePath}/gates/brankavypln.webp`}
                alt="Branka – výplň svařované pletivo"
              />
            </div>
            <div className="gatee-product-text">
              <div className="gatee-product-pricing">
                <h3>Branka – výplň svařované pletivo</h3>
              </div>
            </div>
            <div className="btn-buy">
              <Link href="/form">
                <button>
                  Objednat
                  <RiShoppingCart2Line />
                </button>
              </Link>
            </div>
          </div>

          <div className="gatee-product">
            <div className="gatee-product-image">
              <img
                src={`${basePath}/gates/gatentracit.webp`}
                alt="Brána dvoukřídlá - Antracit - svařované pletivo"
              />
            </div>
            <div className="gatee-product-text">
              <div className="gatee-product-pricing">
                <h3>Brána dvoukřídlá - Antracit - svařované pletivo</h3>
              </div>
            </div>
            <div className="btn-buy">
              <Link href="/form">
                <button>
                  Objednat
                  <RiShoppingCart2Line />
                </button>
              </Link>
            </div>
          </div>

          <div className="gatee-product">
            <div className="gatee-product-image">
              <img
                src={`${basePath}/gates/ggate.webp`}
                alt="Jeklová brána/branka – výplň panel"
              />
            </div>
            <div className="gatee-product-text">
              <div className="gatee-product-pricing">
                <h3>Jeklová brána/branka – výplň panel</h3>
              </div>
            </div>
            <div className="btn-buy">
              <Link href="/form">
                <button>
                  Objednat
                  <RiShoppingCart2Line />
                </button>
              </Link>
            </div>
          </div>

          <div className="gatee-product">
            <div className="gatee-product-image">
              <img
                src={`${basePath}/gates/jeklgate.webp`}
                alt="Jeklová brána/branka"
              />
            </div>
            <div className="gatee-product-text">
              <div className="gatee-product-pricing">
                <h3>Jeklová brána/branka antracit</h3>
              </div>
            </div>
            <div className="btn-buy">
              <Link href="/form">
                <button>
                  Objednat
                  <RiShoppingCart2Line />
                </button>
              </Link>
            </div>
          </div>

          <div className="gatee-product">
            <div className="gatee-product-image">
              <img
                src={`${basePath}/gates/jeklgateii.webp`}
                alt="Jeklová brána/branka"
              />
            </div>
            <div className="gatee-product-text">
              <div className="gatee-product-pricing">
                <h3>Jeklová brána/branka Zinková</h3>
              </div>
            </div>
            <div className="btn-buy">
              <Link href="/form">
                <button>
                  Objednat
                  <RiShoppingCart2Line />
                </button>
              </Link>
            </div>
          </div>

          <div className="gatee-product">
            <div className="gatee-product-image">
              <img
                src={`${basePath}/gates/jeklgg.webp`}
                alt="Jeklová brána/branka"
              />
            </div>
            <div className="gatee-product-text">
              <div className="gatee-product-pricing">
                <h3>Jeklová branka zelená</h3>
              </div>
            </div>
            <div className="btn-buy">
              <Link href="/form">
                <button>
                  Objednat
                  <RiShoppingCart2Line />
                </button>
              </Link>
            </div>
          </div>

          <div className="gatee-product">
            <div className="gatee-product-image">
              <img
                src={`${basePath}/gates/gatezn.webp`}
                alt="Jeklová brána/branka"
              />
            </div>
            <div className="gatee-product-text">
              <div className="gatee-product-pricing">
                <h3>Jeklová branka zelená</h3>
              </div>
            </div>
            <div className="btn-buy">
              <Link href="/form">
                <button>
                  Objednat
                  <RiShoppingCart2Line />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gates;

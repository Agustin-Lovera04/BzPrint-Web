import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import "./Libreria_Style.css";
import { useEffect } from "react";
const cardsData = [
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
  {
    badge: "NEW",
    title: "Premium Design",
    description: "Hover to reveal stunning effects",
    price: "$49.99",
  },
];
const Libreria = () => {
  useEffect(() => {
    window.AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="container-fluid">
      <div className="p-0 m-0 sc1_libreria">
        <h1 className="var-h1 text-center p-2">Tienda</h1>

        <div className="row justify-content-center row_ppal_grid_libreria">
          <div
            className="col-7 img1_grid_container"
            data-aos="zoom-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              src="/images/grid1_libreria.png"
              alt="libreria"
              className="img1_grid img-fluid"
            />
          </div>

          <div className="col-4 d-flex flex-column gap_grid p-0">
            <div
              className="img2_grid_container d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="900"
            >
              <h3 className="title_img_grid">Resaltadores</h3>
              <button className="btn">Ver más</button>
            </div>
            <div
              className="img3_grid_container d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="900"
            >
              <h3 className="title_img_grid text-light">Cuadernillos</h3>
              <button className="btn">Ver más</button>
            </div>
          </div>
        </div>

        <div
          className="row justify-content-center row2_grid_libreria"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div
            className="col-11 img1_grid_container"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <img
              src="/images/grid4_libreria.png"
              alt="libreria"
              className="img1_grid img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="sc2_libreria">
        <div className="row row_filters_libreria">
          <div className="col-md-5 col-8 input_buscar">
            <input type="text" placeholder="Buscar producto" />
            <button className="btn">Buscar</button>
          </div>

          <div className="btn_categorias_container_mobile btn col-4 text-center">
            <button
              className="btn btn_categorias_mobile dropdown-toggle"
              type="button"
              id="dropdownCategorias"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorías
            </button>
            <ul
              className="dropdown-menu dropdown-menu-start"
              aria-labelledby="dropdownCategorias"
            >
              <li>
                <Link className="dropdown-item" to="/libreria/categoria1">
                  Categoria 1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/libreria/categoria2">
                  Categoria 2
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/libreria/categoria3">
                  Categoria 3
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/libreria/categoria4">
                  Categoria 4
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex">
          <div className="col-2 box_categorias">
            <h4 className="fw-bold">Categorías</h4>
            <div className="d-flex flex-column">
              <Link
                to={"/libreria/categoria"}
                className="text-muted var-txt text-decoration-none"
              >
                Categoria
              </Link>
              <Link
                to={"/libreria/categoria2"}
                className="text-muted var-txt text-decoration-none"
              >
                Categoria
              </Link>
              <Link
                to={"/libreria/categoria3"}
                className="text-muted var-txt text-decoration-none"
              >
                Categoria
              </Link>
              <Link
                to={"/libreria/categoria4"}
                className="text-muted var-txt text-decoration-none"
              >
                Categoria
              </Link>
            </div>
          </div>
          <div className="cards_container_libreria">
            <Cards cards={cardsData} />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Libreria;

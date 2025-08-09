import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./Products_Container_Style.css";
import { db } from "../../firebase/client";
import Render_Products from "../Render_Products/Render_Products";
import { useLocation, useSearchParams } from "react-router-dom";

const Products_Container = ({ prodsHardcode }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const productsRef = collection(db, "PRODUCTS");
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const page = searchParams.get("page") || "1";
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getDocs(productsRef);
        const prodsData = data.docs.map((p) => ({
          ...p.data(),
        }));
        setProducts(prodsData);
        setLoading(false);
      } catch (error) {
        setError(
          "Hubo un error al recuperar los productos. Inténtalo nuevamente más tarde o contáctanos vía WhatsApp."
        );
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  let productsToRender = products;
  if (category) {
    productsToRender = products.filter((p) => p.category === category);
  }

  return (
    <div className="cards-container">
      {loading ? (
        <>Cargando...</>
      ) : error ? (
        <>{error}</>
      ) : (
        <>
          <Render_Products
            prods={productsToRender}
            page={parseInt(page)}
            setSearchParams={setSearchParams}
            category={category}
          />
        </>
      )}
    </div>
  );
};

export default Products_Container;

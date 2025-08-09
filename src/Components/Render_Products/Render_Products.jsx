import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import { useEffect } from "react";

const Render_Products = ({ prods, page, setSearchParams, category }) => {
  const itemsPerPage = 16;
  const itemOffset = (page - 1) * itemsPerPage; // Calcula el offset basado en la prop 'page'
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = prods.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(prods.length / itemsPerPage);

  useEffect(() => {
    if (page > pageCount && pageCount > 0) {
      setSearchParams(
        (prev) => {
          prev.set("page", "1");
          return prev;
        },
        { replace: true }
      );
    }
  }, [category, page, pageCount, setSearchParams]);

  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    setSearchParams(
      (prev) => {
        prev.set("page", newPage.toString());
        return prev;
      },
      { replace: true }
    );
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center gap-2 flex-wrap mb-5">
      {currentItems.map((p) => (
        <Card key={p.codigo} prod={p} />
      ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Sig. >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        forcePage={page - 1} // fuerza la página actual a ser la que está en la URL
        previousLabel="< Ant."
        renderOnZeroPageCount={null}
        containerClassName={"pagination"} // El contenedor principal
        pageClassName={"page-item"} // Cada ítem de página (los números)
        pageLinkClassName={"page-link"} // Los enlaces dentro de cada ítem
        previousClassName={"page-item"} // El botón de "anterior"
        previousLinkClassName={"page-link"} // El enlace del botón "anterior"
        nextClassName={"page-item"} // El botón de "siguiente"
        nextLinkClassName={"page-link"} // El enlace del botón "siguiente"
        breakClassName={"page-item"} // El ítem para los puntos suspensivos
        breakLinkClassName={"page-link"} // El enlace de los puntos suspensivos
        activeClassName={"active"} 
      />
    </div>
  );
};

export default Render_Products;
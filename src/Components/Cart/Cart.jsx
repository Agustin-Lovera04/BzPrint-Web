import './Cart.Style.css'
const Cart = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center var-h1">Carrito</h1>
      <div className="row justify-content-around">
          <div className="col-4 text-center var-txt fw-bold">Producto</div>
          <div className="col-4 text-center var-txt fw-bold">Cantidad</div>
          <div className="col-2 text-center var-txt fw-bold">Precio</div>
          <div className="col-2 text-center var-txt fw-bold">Subtotal</div>
      </div>
      <div className="row justify-content-around align-items-start sc2_row_cart">
        <div className="col-4 d-flex flex-column justify-content-center gap-4">
            <button className="btn">Vaciar carrito</button>
            <div className="alert alert-warning">
              <h3 className="var-h3">Costo Envío  </h3>
              <p className="var-txt">El costo base del envío es $1.500</p>
            </div>
        </div>
        <div className="col-4 d-flex flex-column justify-content-center">
          <table>
            <thead>
              <tr>
            <th>Costo</th>
            <th>Envio</th>
            <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
            <td>1000</td>
            <td>1000</td>
            <td>1000</td>

              </tr>
            </tbody>
          </table>

          <button className="btn">Confirmar compra</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
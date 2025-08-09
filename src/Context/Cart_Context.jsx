import { createContext, useEffect, useState } from "react";


//1- Creamos canal de comunicacion "createContext", con los estados iniciales para el funcionamento del carrito
export const CartContext = createContext({})

//2- Creamos el provider donde ira la logica, con un children desestrucurado
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(()=>{
        const getSavedCart = sessionStorage.getItem('cart')
        return getSavedCart ? JSON.parse(getSavedCart) : []
    })

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart))
    },[cart])


//3- Creamos logicas
    const vaciarCart = () => {
        setCart([])
    }


    const aggProdEnCart = (prod, cantidad, detalles) => {
        const { codigo } = prod;

        if(!detalles){
            detalles: '-'
        }

        try {
            let copiaCart = [...cart]
            let existeProd = copiaCart.findIndex((p) => p.codigo === codigo)
            if(existeProd === -1){
                prod.cantidad = cantidad
                prod.detalles = detalles
                copiaCart.push(prod)
            }else{
                copiaCart[existeProd].cantidad += cantidad 
            }

            setCart(copiaCart)
            return {succes: true}
        } catch (error) {
            return {error: error.message}
        }
    }


    const eliminarProd = (codigo) => {
        let copiaCart = cart.filter((p) => p.codigo !== codigo)
        setCart(copiaCart)
    }


    const decCantidadEnCart = (codigo) => {
        let copiaCart = [...cart]
        let idx = copiaCart.findIndex((p) => p.codigo === codigo)

        if(idx !== -1){
            copiaCart[idx].cantidad -1
            setCart(copiaCart)
        }
    }

    const incCantidadEnCart  = (codigo) => {
        let copiaCart = [...cart]
        let idx = copiaCart.findIndex((p) => p.codigo === codigo)

        if(idx !== -1){
            copiaCart[idx].cantidad +1
            setCart(copiaCart)
        }
    }

    const contador = () => {
        return cart.length
    }


    const calcTotal  = cart.reduce((acc,prod) => acc + (prod.precio_efectivo * prod.cantidad), 0)


//4- Hcamos el return del canal, enviandole el contexto con el provider y como

    const functionsContext = {
        vaciarCart,
        aggProdEnCart,
        eliminarProd,
        decCantidadEnCart,
        incCantidadEnCart,
        contador,
        calcTotal
    }


    return(
        <CartContext.Provider value={functionsContext}>
            {children}
        </CartContext.Provider>
    )
}
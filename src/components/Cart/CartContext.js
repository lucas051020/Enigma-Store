import { createContext, useState } from "react";
export const CartContext = createContext();
 

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
      if(isInCart(item.id)){
        setCartList(cartList.map(product => {
          return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
        }));
      } else {
        setCartList([...cartList, {...item, quantity}]);
      }
    }

    console.log('carrito: ', cartList);

    // const totalCost = () => {
    //   let cost = cartList.map (item => item.cost);
    //   return cost.reduce((prev, act) => prev + act.quantity * act.cost, 0);
    // }

    const totalProducts = () => cartList.reduce((acc, currentProduct) => acc + currentProduct.quantity, 0);


    const clear = () => {
      setCartList([]);
    };

    const removeItem = (itemId) => {
        setCartList(cartList.filter(item => item.id !== itemId));
    }

    const isInCart = (id) => {
      return cartList.find(item => item.id === id) ? true : false;
    }


  return (
    <CartContext.Provider value={{
        cartList,
        addItem,
        clear,
        //calcTotal,
        removeItem,
        isInCart,
        totalProducts,
        //calcDiscount,
        //totalCost,
        //totalPrice
      }} >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
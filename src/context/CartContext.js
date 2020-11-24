import React, { useContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage.js"
import storeItems from "../items.json"

const CartContext = React.createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", [])
  const [showCartItems, setShowCartItems] = useState(false)
  const formattedCart = cart.map(entry => {
    return { ...entry, item: storeItems.find(item => item.id === entry.itemId) }
  })
  const isCartEmpty = cart.length === 0

  useEffect(() => {
    if (isCartEmpty) setShowCartItems(false)
  }, [isCartEmpty])

  function addToCart(itemId, quantity = 1) {
    setCart(prevCart => {
      if (prevCart.some(entry => entry.itemId === itemId)) {
        return prevCart.map(entry => {
          if (entry.itemId === itemId)
            return { ...entry, quantity: entry.quantity + quantity }
          return entry
        })
      } else {
        return [...prevCart, { itemId, quantity }]
      }
    })
  }

  function removeFromCart(itemId) {
    setCart(prevCart => {
      return prevCart.filter(entry => entry.itemId !== itemId)
    })
  }

  function checkout() {
    setCart([])
    alert("Thank you for your purchase")
  }

  const value = {
    cart: formattedCart,
    showCart: !isCartEmpty,
    showCartItems,
    setShowCartItems,
    isCartEmpty,
    addToCart,
    removeFromCart,
    checkout
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

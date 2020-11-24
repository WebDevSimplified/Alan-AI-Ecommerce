import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { CartProvider } from "./context/CartContext"
import "tailwindcss/tailwind.css"

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

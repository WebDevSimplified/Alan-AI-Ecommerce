import CartItem from "./CartItem"
import classnames from "classnames"
import formatCurrency from "../util/formatCurrency"
import { useCart } from "../context/CartContext"

export default function Cart() {
  const {
    cart,
    showCartItems,
    setShowCartItems,
    showCart,
    checkout
  } = useCart()
  const totalCents = cart.reduce((sum, entry) => {
    return sum + entry.item.priceCents * entry.quantity
  }, 0)

  return (
    <section className={classnames({ invisible: !showCart })}>
      <div
        className={classnames(
          "mb-4",
          "top-0",
          "right-0",
          "mr-4",
          "mt-20",
          "fixed",
          { invisible: !showCartItems }
        )}
      >
        <div
          style={{ maxHeight: "calc(100vh - 6rem)" }}
          className="bg-white text-gray-700 body-font shadow-lg border rounded-lg flex flex-col"
        >
          <div className="overflow-y-auto px-4 pt-4">
            {cart.map(entry => (
              <CartItem key={entry.itemId} entry={entry} />
            ))}
          </div>
          <div className="flex justify-between items-end border-t border-b py-2 px-4">
            <span className="font-bold text-lg uppercase">Total</span>
            <span className="font-bold">
              {formatCurrency(totalCents / 100)}
            </span>
          </div>
          <button
            onClick={checkout}
            className="text-white py-2 px-4 text-lg bg-purple-500 rounded hover:bg-purple-700 m-4"
          >
            Check out
          </button>
        </div>
      </div>
      <button
        onClick={() => setShowCartItems(prev => !prev)}
        className="fixed top-0 right-0 mr-4 mt-4 w-12 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <div className="bg-red-500 rounded-full text-xs absolute w-6 h-6 flex justify-center items-center right-0 bottom-0 transform translate-x-2 translate-y-2">
          {cart.length}
        </div>
      </button>
    </section>
  )
}

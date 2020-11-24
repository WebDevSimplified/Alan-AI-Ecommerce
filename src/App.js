import storeItems from "./items.json"
import Store from "./components/Store"
import Cart from "./components/Cart"

function App() {
  return (
    <>
      <Store items={storeItems} />
      <Cart />
    </>
  )
}

export default App

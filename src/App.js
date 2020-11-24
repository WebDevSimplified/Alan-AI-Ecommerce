import storeItems from "./items.json"
import Store from "./components/Store"
import Cart from "./components/Cart"
import useAlan from "./hooks/useAlan"

function App() {
  useAlan()

  return (
    <>
      <Store items={storeItems} />
      <Cart />
    </>
  )
}

export default App

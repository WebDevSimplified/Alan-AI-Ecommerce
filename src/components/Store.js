import StoreItem from "./StoreItem"

export default function Store({ items }) {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map(item => (
            <StoreItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

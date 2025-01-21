import MenuCard from "./menuCard";

export default function MenuGrid({ menuItems }) {
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-xl mb-2 text-stone-600 capitalize">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 pb-4 mb-4">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <MenuCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  desc={item.desc}
                />
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

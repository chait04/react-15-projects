import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

//dynamic stuff
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

//manuall stuff
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      //if clicked thing(button) is all
      setMenuItems(items);
      return;
    }
    const navItems = items.filter((item) => item.category === category); //if the clicked thing(button) is equal to item.category
    setMenuItems(navItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

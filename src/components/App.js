import Header from "./Header";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  return (
    <>
      <Header />
      <ItemForm />
      <ShoppingList items={itemData} />
    </>
  );
}

export default App;
import { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import SearchBar from "./components/Layout/SearchBar/SearchBar";
import CartProvider from "./store/CartProvider";
import useHttp from "./components/hooks/use-http";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [productos, setProductos] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hiddenCartHandler = () => {
    setCartIsShown(false);
  };
  

  useEffect(() => {
    const transformMeals = (data) => {
      setProductos(data);
      // console.log("Products desde Appjs: ", data);
    };

    fetchMeals(
      {
        url: "https://proyectosobenmed-default-rtdb.firebaseio.com/Vuchumbee/productos.json/",
      },
      transformMeals
    );
  }, [fetchMeals]);

  return (
    <CartProvider>
      <div className="max-w-6xl">
      {cartIsShown && <Cart onHideCart={hiddenCartHandler} />}
      <Header onShowCart={showCartHandler} />
      
      <main>
        {/* <Dropdown /> */}
        <SearchBar products={productos} isLoading={isLoading} error={error} />
      </main>
      </div>
      
    </CartProvider>
  );
}

export default App;
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ViewCount from "./components/ViewCount/ViewCount";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <ViewCount initialValue={0} />
      <Outlet />
      <footer>Soy un footer /copy copyright 2023</footer>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { path: "/", Component: ItemListContainer },
        { path: "/category/:brandid", Component: ItemListContainer },
        { path: "/products/:id", Component: ItemDetailContainer },
      ],
    },
    {
      path: "*",
      Component: () => <h2>Error: Not Found</h2>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

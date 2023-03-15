import Header from "./components/Header";
import CategoriesSidebar from "./components/CategoriesSidebar";
import NewFactForm from "./components/NewFactForm";
import "./App.css";
import FactList from "./components/FactList";

function App() {
  return (
    <>
      <Header />
      <NewFactForm />
      <main className="main">
        <CategoriesSidebar />
        <FactList />
      </main>
    </>
  );
}

export default App;

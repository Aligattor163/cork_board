import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import MenuRight from "./components/MenuRight";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <MainBoard />
        <MenuRight />
      </main>
    </div>
  );
}

export default App;

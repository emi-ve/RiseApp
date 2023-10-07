import Header from "./components/Header/Header";
import "./App.css";
// import Todo from "./components/todo";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <ParentComponent />
    </div>
  );
}

export default App;

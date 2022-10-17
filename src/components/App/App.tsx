import "./App.css";
import "../Info/Info";
import Info from "../Info/Info";
import dataGentleman from "../../data/dataGentleman";

const App = (): JSX.Element => {
  const lenghtGentleman = dataGentleman.length;

  return (
    <header className="main-header">
      <h1 className="main-title">The pointing gentlemen</h1>
      <Info counts={lenghtGentleman} />
    </header>
  );
};

export default App;

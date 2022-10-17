import "./App.css";
import "../Info/Info";
import Info from "../Info/Info";

const App = (): JSX.Element => {
  return (
    <header className="main-header">
      <h1 className="main-title">The pointing gentlemen</h1>
      <Info counts={3} />
    </header>
  );
};

export default App;

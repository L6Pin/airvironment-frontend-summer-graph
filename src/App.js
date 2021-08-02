import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Header } from "./components/Header/Header";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Login} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default connect(null, null)(App);

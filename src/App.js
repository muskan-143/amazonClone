import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
import SignInPage from "./components/SignInPage";
import RegisterPage from "./components/RegisterPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/checkOut" Component={CheckOut} />
        <Route exact path="/signIn" Component={SignInPage} />
        <Route exact path="/register" Component={RegisterPage} />
      </Routes>
    </div>
  );
}
export default App;

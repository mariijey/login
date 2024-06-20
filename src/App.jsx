import Login from "./Components/auth/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "./Components/auth/Register";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/register" element = {<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

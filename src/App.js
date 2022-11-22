import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Error404 from './components/Error404'
import "./App.css"


function App() {
  const active = {
    color: "white",
    backgroundColor: "black",
    padding: 1

  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" style={({ isActive }) => isActive ? active : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({ isActive }) => isActive ? active : undefined} >About</NavLink>
            </li>
            <li>
              <NavLink to="/users" style={({ isActive }) => isActive ? active : undefined}>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css"
import "./Components/styles.css"
import Home from "./Components/Home.jsx"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Results from "./Components/Results.jsx"

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/search">
        <Results />
      </Route>
    </Router>
  )
}

export default App

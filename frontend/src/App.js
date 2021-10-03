import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import FileList from "./Components/FileList";
import FileUpload from "./Components/FileUpload";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/list" component={FileList} exact/>
          <Route path="/upload" component={FileUpload} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

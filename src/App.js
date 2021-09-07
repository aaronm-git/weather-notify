import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./components/Contexts/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
// Components
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Container className="bg-white" style={{ paddingTop: "80px" }}>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;

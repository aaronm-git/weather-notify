import "./App.css";
import Header from "./components/layout/Header";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
// Pages
import Dashboard from "./components/Dashboard";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <Container className="bg-white">
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

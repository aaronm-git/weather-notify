import "./App.css";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
// Components
import Header from "./components/layout/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

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

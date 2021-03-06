import Layout from "./components/layout/Layout";
import User from "./components/User";
import Users from "./components/users/Users";
import ContactUs from "./components/ContactUs/ContactUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import UsersForm from "./components/users/UsersForm";
import MyClickCounter from "./components/UseEffectDmeo/MyClickCounter";
import Products from "./components/products/Products";
import ProductsForm from "./components/products/ProductsForm";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/users/add">
            <UsersForm />
          </Route>
          <Route path="/counter">
            <MyClickCounter />
          </Route>

          <Route path="/products/add">
            <ProductsForm />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

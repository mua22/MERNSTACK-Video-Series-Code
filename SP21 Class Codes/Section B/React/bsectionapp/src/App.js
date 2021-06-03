import ClickCounter from "./components/ClickCounter";
import Friends from "./components/friends/Friends";
import Layout from "./components/layout/Layout";
import Products from "./components/products/Products";
import Student from "./components/Student";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./components/pages/ContactUs";
import LandingPage from "./components/landingPage/LandingPage";
import ProductsForm from "./components/products/ProductsForm";
import PageNotFound from "./components/pages/PageNotFound";
function App() {
  // You can do any thing with js here
  const handleAssignmentSubmission = (name) => {
    alert(name + " Submitted Assignment");
  };
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>

          <Route path="/products/add">
            <ProductsForm />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

import ClickCounter from "./components/ClickCounter";
import Friends from "./components/friends/Friends";
import Layout from "./components/layout/Layout";
import Products from "./components/products/Products";
import Student from "./components/Student";
function App() {
  // You can do any thing with js here
  const handleAssignmentSubmission = (name) => {
    alert(name + " Submitted Assignment");
  };
  return (
    <>
      <Layout>
        <Products />
        {/* <ClickCounter /> */}
        {/* <Friends /> */}
        {/* <Student
          name="Kashif"
          onSubmitAssignment={handleAssignmentSubmission}
        /> */}
      </Layout>
    </>
  );
}

export default App;

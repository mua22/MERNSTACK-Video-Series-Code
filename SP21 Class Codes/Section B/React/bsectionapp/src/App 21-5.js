import Layout from "./components/layout/Layout";
import Student from "./components/Student";
function App() {
  // You can do any thing with js here
  const handleAssignmentSubmission = (name) => {
    alert(name + " Submitted Assignment");
  };
  return (
    <div className="container">
      <h1>Hello B Section</h1>
      <p>test paragraph</p>
      <Layout bgColor="blue" color="white">
        <h2>This is From App Component</h2>
        <p>This paragraph is from App Component</p>
      </Layout>
      <Student name="Kashif" onSubmitAssignment={handleAssignmentSubmission} />
      <Student name="Noman" onSubmitAssignment={handleAssignmentSubmission} />
      <Student name="Ali" onSubmitAssignment={handleAssignmentSubmission} />
    </div>
  );
}

export default App;

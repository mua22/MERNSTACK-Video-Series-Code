import Layout from "./components/layout/Layout";
import Student from "./components/Student";
function App() {
  // You can do any thing with js here
  const handleAssignmentSubmission = (name) => {
    alert(name + " Submitted Assignment");
  };
  return (
    <div className="container">
      <Layout>
        <Student
          name="Kashif"
          onSubmitAssignment={handleAssignmentSubmission}
        />
      </Layout>
    </div>
  );
}

export default App;

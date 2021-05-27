import Friends from "./components/friends/Friends";
import Layout from "./components/layout/Layout";
import Student from "./components/Student";
function App() {
  // You can do any thing with js here
  const handleAssignmentSubmission = (name) => {
    alert(name + " Submitted Assignment");
  };
  return (
    <>
      <Layout>
        <Friends />
        {/* <Student
          name="Kashif"
          onSubmitAssignment={handleAssignmentSubmission}
        /> */}
      </Layout>
    </>
  );
}

export default App;

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
      <Student name="Kashif" onSubmitAssignment={handleAssignmentSubmission} />
      <Student name="Noman" onSubmitAssignment={handleAssignmentSubmission} />
      <Student name="Ali" onSubmitAssignment={handleAssignmentSubmission} />
    </div>
  );
}

export default App;

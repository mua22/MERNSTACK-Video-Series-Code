import User from "./components/User";

function App() {
  return (
    <div>
      <h1>Greetings</h1>
      <p>Hello A Section</p>
      <User
        firstName="Usman"
        email="usman.akram@gmail.com"
        avatar="https://reqres.in/img/faces/6-image.jpg"
        showAvatar={true}
      />
      <User
        firstName="Noman"
        email="noman.akram@gmail.com"
        avatar="https://reqres.in/img/faces/8-image.jpg"
      />
      <User
        firstName="Haseeb"
        email="haseeb@gmail.com"
        avatar="https://reqres.in/img/faces/9-image.jpg"
        showAvatar={true}
      />
    </div>
  );
}

export default App;

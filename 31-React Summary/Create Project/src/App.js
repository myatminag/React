import Todo from "./components/Todo";

function App(props) {
  return <div>
    <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Learn Nodejs, Express js' />
      <Todo text='Learn Mongodb' />

  </div>;
}

export default App;

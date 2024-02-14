import "./App.css";
import { Todo } from "./components/Todo";



function App() {
  return (
    <div className="w-full h-screen flex flex-wrap flex-col justify-center items-center bg-gradient-to-t from-violet-500 to-fuchsia-500">
      <h1 className="text-3xl font-medium md:text-4xl md:font-semibold my-6 text-white " >TODO APP</h1>
       <Todo/>

    </div>
  );
}

export default App;

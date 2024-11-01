// App.js
import Mainheading from "./components/mainheading";
import AddItem1 from "./components/AddItem1";
import AddItem2 from "./components/AddItem2";
import AddItem3 from "./components/AddItem3";
import "./App.css";

function App() {
  return (
    <div className="Todo-App">
      <Mainheading />
      <AddItem1 />
      <div className="items23">
        <AddItem2 />
        <AddItem3 />
      </div>
    </div>
  );
}

export default App;

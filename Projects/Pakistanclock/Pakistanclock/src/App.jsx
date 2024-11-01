import MainH from "./components/MainHeading";
import Slogan from "./components/Slogan";
import UpdateTime from "./components/UpdateTime";
import './App.css';
function App() {
  return (
    <div className="Clock">
      <div className="innerClock">
      <MainH></MainH>
      <Slogan></Slogan>
      <UpdateTime></UpdateTime>
    </div>
    </div>
  );
}

export default App;

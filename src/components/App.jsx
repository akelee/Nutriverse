import { getNutritionInfo } from "../api/api";
import "../styles/App.css";
import Navbar from "./Navbar";

// text - action - color - background color

// function SomeComponent(props) {
//   return (
//     <div onClick={props.action} classsName="some-component">
//       <h1 style={{color: props.color}}>My very first React component</h1>
//     </div>
//   )
// }

// function Button() {
//   return (
//     <button>This is my button</button>
//   )
// }

function App() {
  return <Navbar />;
}

export default App;
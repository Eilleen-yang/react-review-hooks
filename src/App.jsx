import "./App.css";
import Time from "./Clock";
import TaskApp from "./reducer";
import Effect from "./useEffect";
import Ref from "./useRef";

function App() {
  return (
    <>
      <Effect />
      <Ref />
      <Time />
      <TaskApp />
    </>
  );
}

export default App;

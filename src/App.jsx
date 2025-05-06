import "./App.css";
import Time from "./Clock";
import FormStatus from "./Form/FormStatus";
import OptimisticForm from "./Form/OptimisticForm";
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
      d-------------------------b
      <FormStatus />
      <OptimisticForm />
    </>
  );
}

export default App;

import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "./redux/store";
import "./styles.css";

export default function App() {
  // useEffect(function () {
  //   console.log(count);
  //   // setInterval(function () {
  //   //   // setCount((count) => count + 1);
  //   //   // console.log(count);
  //   // }, 1000);
  // }, []);
  // console.log(Counter);
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./containers/Home";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

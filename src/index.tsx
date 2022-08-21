import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider dir="rtl">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

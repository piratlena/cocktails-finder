import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/bootstrapReset.scss";

import AppRouter from "./routes/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;

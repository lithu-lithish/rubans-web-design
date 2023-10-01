import { RouterProvider, useNavigate } from "react-router-dom";
import routes from "./routes/routes";
import "./index.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;

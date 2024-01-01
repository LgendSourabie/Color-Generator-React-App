import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  return (
    <main className="container">
      <Form />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;

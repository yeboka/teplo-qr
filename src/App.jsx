import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.jsx";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

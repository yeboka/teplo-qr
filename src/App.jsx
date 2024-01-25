import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import MainContainer from "./components/MainContainer.jsx";
import Box from "./pages/Box.jsx";

export default function App() {

    return (
        <MainContainer>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Layout/>}/>
                    <Route path="/boxes/:name" element={<Box />} />
                </Routes>
            </BrowserRouter>
        </MainContainer>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

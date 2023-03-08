import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to ="/notes" />}>
        </Route>
        <Route path="/notes" element={<Home />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

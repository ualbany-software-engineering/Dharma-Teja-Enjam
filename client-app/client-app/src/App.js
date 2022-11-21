import { ShowProfileList } from "./components/showProfileList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateProfile } from "./components/createProfile";
import { AdditionNumbers } from "./components/additionNumbers";
import LoginProfile from './components/LoginPage';
import RegisterProfile from './components/RegisterPage';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Routes>   
            <Route exact path="/" element={<ShowProfileList/>} />  
            <Route path="/create-profile" element={<CreateProfile/>} />
            <Route path="/addition-numbers" element={<AdditionNumbers />} />
            <Route path="/login" element={<LoginProfile/>} />
            <Route path="/register" element={<RegisterProfile />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

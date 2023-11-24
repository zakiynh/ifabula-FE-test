import Home from "./views/HomePage";
import QuestOne from "./views/QuestOne";
import { Route, Routes } from "react-router-dom";
import QuestTwo from "./views/QuestTwo";
import QuestThree from "./views/QuestThree";
import QuestFour from "./views/QuestFour";
import QuestFive from "./views/QuestFive";
import QuestSix from "./views/QuestSix";
import LoginPage from "./views/LoginPage";
import QuestSeven from "./views/QuestSeven";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quest-one" element={<QuestOne />} />
          <Route path="/quest-two" element={<QuestTwo />} />
          <Route path="/quest-three" element={<QuestThree />} />
          <Route path="/quest-four" element={<QuestFour />} />
          <Route path="/quest-five" element={<QuestFive />} />
          <Route path="/quest-six" element={<QuestSix />} />
          <Route path="/quest-seven" element={<QuestSeven />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

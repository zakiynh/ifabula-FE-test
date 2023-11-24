import { useNavigate } from "react-router-dom";
import CardQuest from "../components/CardQuest";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  const username = localStorage.getItem("username");
  return (
    <div>
      <div className="mt-4 ml-10 flex justify-between">
        <div>
          <h1>Home</h1>
          <p>This is Ifabula FE-Test!</p>
          <br />
          <p>Welcome, {username}!</p>
        </div>
        <div>
          <h3 onClick={handleLogout} className="font-bold cursor-pointer p-10">Logout</h3>
        </div>
      </div>

      <div>
        <CardQuest />
      </div>
    </div>
  );
}

export default Home;

import { useNavigate } from "react-router-dom";
import CardQuest from "../components/CardQuest";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    if (!user_id) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("scope");
    navigate("/");
  };

  const user_id = localStorage.getItem("user_id");
  return (
    <div>
      <div className="mt-4 ml-10 flex justify-between">
        <div>
          <h1>Home</h1>
          <p>This is Ifabula FE-Test!</p>
          <br />
          <p>Welcome, {user_id}!</p>
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

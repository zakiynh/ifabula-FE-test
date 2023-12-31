import { useState } from "react";
import { useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { login } from "../store/actions/questAction";
import swal from "../helpers/swal"

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      const loginData = await dispatch(login({ user_id: username, password}));

      if (loginData) {
        localStorage.setItem("user_id", loginData.user_id);
        localStorage.setItem("scope", loginData.scope);

        navigate("/home");
      } else {
        swal("error", "401 - UNAUTHORIZED", "error");
      }
    } else {
      swal("error", "401 - UNAUTHORIZED", "error");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center justify-center h-screen"
    >
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <div className="w-64">
        <label className="block mb-4">
          <span className="text-gray-700">Username:</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginPage;

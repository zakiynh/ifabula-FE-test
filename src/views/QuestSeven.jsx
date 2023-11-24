import { useState } from "react";
import { Link } from "react-router-dom";

function QuestSeven() {
  const [hashedString, setHashedString] = useState("");
  
  const inputHandler = (e) => {
    hashString(e.target.value);
  }

  const hashString = async (input) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    try {
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);

      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashedString = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      setHashedString(input ? hashedString : "");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-4 ml-10">
        <div>
          <h1>Quest 7</h1>
          <p>Hashing string using sha256.</p>
        </div>
        <Link to="/home" className="ml-auto mr-10">
          <h3 className="font-bold py-2 px-4 rounded">Back To Home</h3>
        </Link>
      </div>
      <div className="flex">
        <div className="relative overflow-x-auto mt-10 p-7">
            <input type="text" onChange={inputHandler} className="border-2 border-gray-400 rounded-md p-2" />
            <button className="border-2 border-gray-400 rounded-md p-2 ml-2">Hash</button>

          <h1>Hashed String: {hashedString}</h1>
        </div>
      </div>
    </div>
  );
}

export default QuestSeven;

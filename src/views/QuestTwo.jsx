import { Link } from "react-router-dom";
import TableQuest from "../components/TableQuest";

function QuestTwo() {
  const showActions = true;
  return (
    <div>
      <div className="flex justify-between items-center mt-4 ml-10">
        <div>
          <h1>Quest 2</h1>
          <p>Edit the Data on Quest 1.</p>
        </div>
        <Link to="/home" className="ml-auto mr-10">
          <h3 className="font-bold py-2 px-4 rounded">Back To Home</h3>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative overflow-x-auto mt-10 p-7">
          <TableQuest showActions={showActions} />
        </div>
      </div>
    </div>
  );
}

export default QuestTwo;

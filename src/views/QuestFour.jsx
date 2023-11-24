import { Link } from "react-router-dom";
import TableThree from "../components/TableThree";

function QuestFour() {
    return (
        <div>
          <div className="flex justify-between items-center mt-4 ml-10">
            <div>
              <h1>Quest 4</h1>
              <p>Data Table from API, showing 10 data only.</p>
            </div>
            <Link to="/home" className="ml-auto mr-10">
              <h3 className="font-bold py-2 px-4 rounded">Back To Home</h3>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative overflow-x-auto mt-10 p-7">
              <TableThree showAllData={false} showActions/>
            </div>
          </div>
        </div>
      );
}

export default QuestFour;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../store/actions/questAction";

function QuestEight() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.question);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between items-center mt-4 ml-10">
        <div>
          <h1>Quest 8</h1>
          <p>Get Data From Express.</p>
        </div>
        <Link to="/home" className="ml-auto mr-10">
          <h3 className="font-bold py-2 px-4 rounded">Back To Home</h3>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="max-w-2xl p-6 shadow-lg bg-slate-900">
          {data ? (
            <div>
              <h1 className="text-2xl font-bold mb-4">
                Hello! This is {data.name}
              </h1>
              <p className="text-desc">{data.description}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestEight;

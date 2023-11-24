import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hitEndAction } from "../store/actions/hitEndAction";

function CardQuest() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickHandler = (goTo) => {
        navigate("/" + goTo)
        dispatch(hitEndAction());
    }
  return (
    <div className="grid grid-cols-5 gap-4 justify-center p-4">
      <Link
        to="/quest-one"
        className="max-w-sm cursor-pointer overflow-hidden shadow-2xl mt-10 ml-4 rounded-lg card-quest"
      >
        <div className="card-text">
          <h1 className="">Quest 1</h1>
          <p className="mt-4">Json array of object with information.</p>
        </div>
      </Link>
      <Link
        to="/quest-two"
        className="max-w-sm cursor-pointer overflow-hidden shadow-2xl mt-10 ml-4 rounded-lg card-quest"
      >
        <div className="card-text">
          <h1 className="">Quest 2</h1>
          <p className="mt-4">Edit the Data on Quest 1.</p>
        </div>
      </Link>
      <div
        onClick={() => clickHandler("quest-three")}
        className="max-w-sm cursor-pointer overflow-hidden shadow-2xl mt-10 ml-4 rounded-lg card-quest"
      >
        <div className="card-text">
          <h1 className="">Quest 3</h1>
          <p className="mt-4">Data Table from API.</p>
        </div>
      </div>
      <div
        onClick={() => clickHandler("quest-four")}
        className="max-w-sm cursor-pointer overflow-hidden shadow-2xl mt-10 ml-4 rounded-lg card-quest"
      >
        <div className="card-text">
          <h1 className="">Quest 4</h1>
          <p className="mt-4">Data Table from API, showing 10 data only.</p>
        </div>
      </div>
      <div
        onClick={() => clickHandler("quest-five")}
        className="max-w-sm cursor-pointer overflow-hidden shadow-2xl mt-10 ml-4 rounded-lg card-quest"
      >
        <div className="card-text">
          <h1 className="">Quest 5</h1>
          <p className="mt-4">Function action to delete the data.</p>
        </div>
      </div>
      <div
        onClick={() => clickHandler("quest-six")}
        className="max-w-sm cursor-pointer overflow-hidden shadow-2xl mt-10 ml-4 rounded-lg card-quest"
      >
        <div className="card-text">
          <h1 className="">Quest 6</h1>
          <p className="mt-4">Function to delete 1 key from object.</p>
        </div>
      </div>
      <Link
        to="/quest-seven"
        className="max-w-sm cursor-pointer overflow-hidden shadow-2xl mt-10 ml-4 rounded-lg card-quest"
      >
        <div className="card-text">
          <h1 className="">Quest 7</h1>
          <p className="mt-4">Hashing string using sha256.</p>
        </div>
      </Link>
    </div>
  );
}

export default CardQuest;

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteKey, deleteRow, hitEndAction } from "../store/actions/hitEndAction";

function TableThree({ showActions, showAllData, showDeleteKeyButton, showDeleteButton }) {
  const dispatch = useDispatch();
  const hitAPI = useSelector((state) => state.hitEnd.hitEnd);

  useEffect(() => {
    dispatch(hitEndAction());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteRow(id));
  };

  const handleDeletekey = (index, key) => {
    const updatedData = [...hitAPI];
    updatedData[index][key] = {...updatedData[index]};
    delete updatedData[index][key];
    dispatch(deleteKey(updatedData));
  }

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = Math.ceil(hitAPI.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const dataToUse = showAllData ? hitAPI : hitAPI.slice(startIndex, endIndex);

  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-7">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Body
            </th>
            {showActions && (
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {dataToUse.map((q, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {q.id}
              </th>
              <td className="px-6 py-4">{q.title}</td>
              <td className="px-6 py-4">{q.body}</td>
              <td className="px-6 py-4">
                {showDeleteButton && (
                  <button
                    onClick={() => handleDelete(q.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                )}
                {showDeleteKeyButton && (
                  <button
                    onClick={() => handleDeletekey(index, "id")}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete Key
                  </button>
                )}
                </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!showAllData && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mx-2 px-4 py-2 bg-gray-300 rounded"
          >
            Previous
          </button>
          <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="mx-2 px-4 py-2 bg-gray-300 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default TableThree;

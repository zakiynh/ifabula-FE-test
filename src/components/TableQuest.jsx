import dataBook from "../../dataBook.json";
import { useEffect, useState } from "react";

function TableQuest({ showActions }) {
  const [quest, setQuest] = useState(dataBook);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    setQuest(dataBook);
  }, []);

  const editTitle = (id, e) => {
    e.preventDefault();
    const updatedData = [...quest];
    console.log(updatedData, "updatedData")
    const index = updatedData.findIndex((q) => q.id === id);
    console.log("index: ", index);
    updatedData[index].title = e.target.value;
    setQuest(updatedData);
  };

  const editDescription = (id, e) => {
    e.preventDefault();
    const updatedData = [...quest];
    const index = updatedData.findIndex((q) => q.id === id);
    updatedData[index].description = e.target.value;
    setQuest(updatedData);
  };

  const handleEditButton = (index) => {
    setEditedData(quest[index]);
    setEditingIndex(index);
  };

  const handleSave = () => {
    setEditingIndex(null);
  };

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
              Description
            </th>
            {showActions && (
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {quest.map((q, index) => (
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
              <td className="px-6 py-4">
                {editingIndex === index ? (
                  <input
                    type="text"
                    className="border-2 border-gray-400 rounded-md p-2 w-full"
                    value={editedData.title}
                    onChange={($event) => editTitle(q.id, $event)}
                  />
                ) : (
                  q.title
                )}
              </td>
              <td className="px-6 py-4">
                {editingIndex === index ? (
                  <textarea
                  className="border-2 border-gray-400 rounded-md p-2 w-full"
                    value={editedData.description}
                    onChange={($event) => editDescription(q.id, $event)}
                  />
                ) : (
                  q.description
                )}
              </td>
              {showActions && (
                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <button
                      onClick={() => handleSave(index)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditButton(index)}
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableQuest;

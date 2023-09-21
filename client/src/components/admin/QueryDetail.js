import React, { useState, useEffect } from "react";

export default function QueryDetail() {
  const [data, setData] = useState(null);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8081/get/all/query");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedName(data.queryForms[index].name);
  };

  const handleUpdate = async (index) => {
    try {
      const updatedData = { ...data.queryForms[index], name: editedName };
      await fetch(`http://localhost:8081/update/query/${data.queryForms[index]._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      fetchData();
      setEditIndex(-1);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      await fetch(`http://localhost:8081/delete/query/${data.queryForms[index]._id}`, {
        method: "DELETE",
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Render the fetched data
  return (
    <div className="h-auto rounded-lg p-10">
      <div className="w-[80vw] rounded-lg flex-wrap">
        {data ? (
          <div>
            <h2 className="text-white flex justify-center text-3xl mb-5 font-semibold">Student Query List</h2>
            <table className="text-white">
              <thead className="bg-gray-800">
                <tr>
                  <th className="py-2 px-10 text-white">SrNo.</th>
                  <th className="py-2 text-white">Name</th>
                  <th className="py-2 text-white">Email</th>
                  <th className="py-2 text-white">Mobile No</th>
                  <th className="py-2 text-white">Applied Course</th>
                  <th className="py-2 text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.queryForms.map((queryForm, index) => (
                  <tr key={queryForm._id}>
                    <td className="py-0 px-8 text-white">{index + 1}.</td>
                    <td className="py-0 text-white">
                      {editIndex === index ? (
                        <input
                          type="text"
                          value={editedName}
                          onChange={(e) => setEditedName(e.target.value)}
                          className="bg-white text-black px-2 py-1 rounded"
                        />
                      ) : (
                        queryForm.name
                      )}
                    </td>
                    <td className="py-0 px-2 text-white">{queryForm.email}</td>
                    <td className="py-0 px-10 text-white">{queryForm.mobileNo}</td>
                    <td className="py-0 px-10 text-white">{queryForm.courseToApply}</td>
                    <td className="py-2 px-2 text-white">
                      {editIndex === index ? (
                        <button
                          className="bg-green-500 text-white px-6 py-2 rounded mx-3"
                          onClick={() => handleUpdate(index)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="bg-blue-500 text-white px-6 py-2 rounded mx-3"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}
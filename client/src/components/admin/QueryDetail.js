import React, { useState, useEffect } from "react";

export default function QueryDetail() {
  const [data, setData] = useState(null);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedData, setEditedData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8081/get/all/query");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("Error fetching data: " + error.message);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedData({ ...data.queryForms[index] });
  };

  const handleUpdate = async (index) => {
    try {
      const updatedData = { ...data.queryForms[index], ...editedData };
      const response = await fetch(`http://localhost:8081/update/query/${data.queryForms[index]._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      fetchData(); // Refetch data to update the component state
      setEditIndex(-1); // Reset edit mode
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("Error updating data: " + error.message);
    }
  };

  // Render the fetched data and error messages
  return (
    <div className="h-auto rounded-lg p-10">
      <div className="w-[80vw] rounded-lg flex-wrap">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          data && (
            <div>
              <h2 className="text-white flex justify-center text-3xl mb-5 font-semibold">Student Query List</h2>
              <table className="text-white">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="py-2 px-10 text-white">SrNo.</th>
                    <th className="py-2 text-white">Name</th>
                    <th className="py-2 pl-5 text-white">Email</th>
                    <th className="py-2 pl-16 text-white">Mobile No</th>
                    <th className="py-2 pl-28 px-10  text-white">Applied Course</th>
                  </tr>
                </thead>
                <tbody>
                  {data.queryForms.map((queryForm, index) => (
                    <tr key={queryForm._id}>
                      <td className="py-0 px-8 pl-10 text-white">{index + 1}.</td>
                      <td className="py-0 pl-5 text-white">
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editedData.name}
                            onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                            className="bg-white text-black px-2 py-1 rounded"
                          />
                        ) : (
                          queryForm.name
                        )}
                      </td>
                      <td className="py-0 pl-16 text-white">
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editedData.email}
                            onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
                            className="bg-white text-black px-2 py-1 rounded"
                          />
                        ) : (
                          queryForm.email
                        )}
                      </td>
                      <td className="py-2 pl-28 px-10 text-white">
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editedData.mobileNo}
                            onChange={(e) =>
                              setEditedData({ ...editedData, mobileNo: e.target.value })
                            }
                            className="bg-white text-black px-2 py-1 rounded"
                          />
                        ) : (
                          queryForm.mobileNo
                        )}
                      </td>
                      <td className="py-2 pl-28 px-10  text-white">
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editedData.courseToApply}
                            onChange={(e) =>
                              setEditedData({ ...editedData, courseToApply: e.target.value })
                            }
                            className="bg-white text-black px-2 py-1 rounded"
                          />
                        ) : (
                          queryForm.courseToApply
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>
    </div>
  );
}

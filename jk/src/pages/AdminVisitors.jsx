import { useEffect, useState } from "react";

export default function AdminVisitors() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/admin/visitors", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setVisitors(data));
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Visitors</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">IP</th>
            <th className="border p-2">Browser</th>
            <th className="border p-2">Visited At</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((v) => (
            <tr key={v._id}>
              <td className="border p-2">{v.ip}</td>
              <td className="border p-2">{v.userAgent}</td>
              <td className="border p-2">
                {new Date(v.visitedAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
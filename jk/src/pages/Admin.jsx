import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import AdminCharts from "../components/AdminCharts";

// 🔹 Group data by date (for charts)
function groupByDate(items) {
  const map = {};
  items.forEach((i) => {
    const d = new Date(
      i.createdAt || i.visitedAt
    ).toLocaleDateString();
    map[d] = (map[d] || 0) + 1;
  });

  return Object.keys(map).map((d) => ({
    date: d,
    count: map[d],
  }));
}

// 🔹 Count today messages / visitors
function todayCount(items) {
  const today = new Date().toLocaleDateString();
  return items.filter(
    (i) =>
      new Date(i.createdAt || i.visitedAt).toLocaleDateString() === today
  ).length;
}

export default function Admin() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [messages, setMessages] = useState([]);
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    fetch("http://localhost:5000/api/admin/messages", { headers })
      .then((res) => res.json())
      .then(setMessages);

    fetch("http://localhost:5000/api/admin/visitors", { headers })
      .then((res) => res.json())
      .then(setVisitors);
  }, [token]);

  // 🔹 Stats for cards
  const totalMessages = messages.length;
  const totalVisitors = visitors.length;
  const todayMessages = todayCount(messages);

  // 🔹 Charts data
  const messageChart = groupByDate(messages);
  const visitorChart = groupByDate(visitors);

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="ml-64 w-full">
        <AdminTopbar user={user} />

        {/* 🔥 DASHBOARD CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
          {/* Total Messages */}
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">Total Messages</p>
            <h2 className="text-3xl font-bold">{totalMessages}</h2>
          </div>

          {/* Total Visitors */}
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">Total Visitors</p>
            <h2 className="text-3xl font-bold">{totalVisitors}</h2>
          </div>

          {/* Today Messages */}
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">Today Messages</p>
            <h2 className="text-3xl font-bold">{todayMessages}</h2>
          </div>

          {/* Last Login */}
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">Last Login</p>
            <p className="font-medium">
              {user?.lastLogin
                ? new Date(user.lastLogin).toLocaleString()
                : "First login"}
            </p>
          </div>
        </div>

        {/* 👇 Nested routes render here (messages / visitors if needed) */}
        <Outlet />

        {/* 🔹 Charts Section */}
        <main className="p-6 bg-slate-100 min-h-screen grid gap-6">
          <AdminCharts
            title="Messages per Day"
            data={messageChart}
          />

          <AdminCharts
            title="Visitors per Day"
            data={visitorChart}
          />
        </main>
      </div>
    </div>
  );
}
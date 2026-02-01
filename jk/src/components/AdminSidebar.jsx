import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded transition ${
      isActive
        ? "bg-orange-500 text-black font-semibold"
        : "text-gray-300 hover:bg-gray-700"
    }`;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-black p-6">
      <h1 className="text-2xl font-bold mb-10 text-orange-500">
        MPXIRE ADMIN
      </h1>

      <nav className="flex flex-col gap-3">
        <NavLink to="/admin" end className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/admin/messages" className={linkClass}>
          Messages
        </NavLink>

        <NavLink to="/admin/visitors" className={linkClass}>
          Visitors
        </NavLink>
      </nav>
    </aside>
  );
}
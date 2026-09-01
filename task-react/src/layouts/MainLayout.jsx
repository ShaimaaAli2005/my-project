import { NavLink, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark py-3 mb-4">
        <div className="container">
          <span className="navbar-brand fw-bold fs-4 text-warning">🎓 كورس آكاديمي</span>
          <div className="navbar-nav d-flex gap-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active fw-bold text-warning" : "nav-link text-white"}
            >
              الرئيسية
            </NavLink>
            <NavLink 
              to="/courses" 
              className={({ isActive }) => isActive ? "nav-link active fw-bold text-warning" : "nav-link text-white"}
            >
              الكورسات
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="container pb-5">
        <Outlet />
      </div>
    </div>
  );
}
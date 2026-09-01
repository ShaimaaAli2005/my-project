// src/pages/CoursesLayout.jsx
import { Outlet } from "react-router-dom";

export default function CoursesLayout() {
  return (
    <div className="courses-wrapper py-2">
      <div className="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom border-secondary border-opacity-25">
        <h2 className="fw-bold text-white mb-0">
          📚 الدورات التدريبية
        </h2>
      </div>

      {/* الريندر الخاص بالـ Nested Routes */}
      <Outlet />
    </div>
  );
}
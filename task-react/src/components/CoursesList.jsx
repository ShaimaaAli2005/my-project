// src/components/CoursesList.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const initialCourses = [
  { id: 1, title: "React.js Masterclass", category: "Frontend", price: "$99" },
  { id: 2, title: "Node.js API Development", category: "Backend", price: "$120" },
  { id: 3, title: "Bootstrap 5 & Responsive Design", category: "Frontend", price: "$50" },
];

export default function CoursesList() {
  const [courses] = useState(initialCourses);
  const [filterCat, setFilterCat] = useState("All");
  const [seconds, setSeconds] = useState(0);

  // Mounting & Cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Filter Handler
  const handleFilter = (category) => {
    setFilterCat(category);
  };

  const filteredCourses = filterCat === "All"
    ? courses
    : courses.filter((c) => c.category === filterCat);

  return (
    <div>
      {/* Alert bar for timer */}
      <div className="alert alert-custom d-flex justify-content-between align-items-center mb-4 p-3">
        <h5 className="mb-0 fw-bold">قائمة الدورات المتاحة</h5>
        <span className="badge bg-info text-dark fs-6 px-3 py-2 rounded-pill">
          ⏱️ الوقت في الصفحة: {seconds} ثانية
        </span>
      </div>

      {/* Filter Buttons */}
      <div className="d-flex gap-2 mb-4">
        <button 
          onClick={() => handleFilter("All")} 
          className={`btn ${filterCat === "All" ? "btn-accent" : "btn-outline-custom"}`}
        >
          الكل
        </button>
        <button 
          onClick={() => handleFilter("Frontend")} 
          className={`btn ${filterCat === "Frontend" ? "btn-accent" : "btn-outline-custom"}`}
        >
          Frontend
        </button>
        <button 
          onClick={() => handleFilter("Backend")} 
          className={`btn ${filterCat === "Backend" ? "btn-accent" : "btn-outline-custom"}`}
        >
          Backend
        </button>
      </div>

      {/* Course Cards Grid */}
      <div className="row g-4">
        {filteredCourses.map((course) => (
          <div key={course.id} className="col-md-4">
            <div className="card custom-card h-100 p-3">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title fw-bold text-white mb-0">{course.title}</h5>
                  </div>
                  <p className="text-secondary small mb-3">التصنيف: {course.category}</p>
                </div>
                
                <div>
                  <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-25 mb-3 px-3 py-2 rounded-pill d-inline-block">
                    {course.price}
                  </span>
                  <Link to={`/courses/${course.id}`} className="btn btn-accent w-100 text-center">
                    التفاصيل ⬅️
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
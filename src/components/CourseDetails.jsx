import { useParams, Link } from "react-router-dom";
export default function CourseDetails() {
  const { courseId } = useParams();

  return (
    <div className="card custom-card p-4 my-3 shadow-lg">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="card-title text-info fw-bold mb-0">
            📌 تفاصيل الكورس رقم: #{courseId}
          </h3>
          <span className="badge bg-primary bg-opacity-25 text-info px-3 py-2 rounded-pill">
            مُفعل الان
          </span>
        </div>

        <hr className="border-secondary border-opacity-25 my-3" />

        <p className="text-secondary fs-5 mb-4">
          هنا يتم عرض التفاصيل والمعلومات الخاصة بالكورس بناءً على الـ <code className="text-warning bg-dark px-2 py-1 rounded">Route Parameter ({courseId})</code>.
        </p>

        <div className="d-flex gap-2">
          <Link to="/courses" className="btn btn-accent d-inline-flex align-items-center gap-2">
            <span>⬅️</span>
            <span>العودة للقائمة</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
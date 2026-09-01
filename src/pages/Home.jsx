
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container py-4">
      {/* Hero Section */}
      <div className="hero-section text-center py-5 px-3 mb-5 rounded-4 border border-secondary border-opacity-25">
        <span className="badge bg-info text-dark fw-bold mb-3 px-3 py-2 rounded-pill">
          ⚡ منصة التعلم الذكي
        </span>
        
        <h1 className="display-4 fw-bold mb-3 text-white">
          طوّر مهاراتك مع <span className="text-info">DevAcademy</span> 🚀
        </h1>
        
        <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: "600px" }}>
          تعلّم أحدث تقنيات الـ Web Development والدوال التفاعلية بأسلوب عملي وبسيط.
        </p>
        
        <Link to="/courses" className="btn btn-accent btn-lg px-4 fs-6">
          استكشف الكورسات
        </Link>
      </div>

      {/* Features Section */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 p-4 custom-card text-center">
            <div className="fs-1 mb-2">💻</div>
            <h5 className="fw-bold mb-2 text-white">تطبيق عملي</h5>
            <p className="text-secondary small mb-0">
              مشاريع حقيقية تشمل React Hooks, Router, و State Management.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 p-4 custom-card text-center">
            <div className="fs-1 mb-2">⚡</div>
            <h5 className="fw-bold mb-2 text-white">سرعة وكفاءة</h5>
            <p className="text-secondary small mb-0">
              تطبيقات Single Page Application (SPA) بدون إعادة تحميل الصفحة.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 p-4 custom-card text-center">
            <div className="fs-1 mb-2">🎯</div>
            <h5 className="fw-bold mb-2 text-white">تنسيق عصري</h5>
            <p className="text-secondary small mb-0">
              تصميم متجاوب بالكامل مع الشاشات المختلفة بـ Bootstrap و CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-3">عذراً، الصفحة غير موجودة!</p>
      <Link to="/" className="btn btn-primary">
        العودة للصفحة الرئيسية
      </Link>
    </div>
  );
}
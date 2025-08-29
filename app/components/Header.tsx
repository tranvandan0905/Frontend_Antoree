"use client";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-3 border-bottom position-sticky top-0 z-50">
      <Container className="d-flex justify-content-between align-items-center">
        <a href="#" className="fw-bold fs-4 text-primary">YourLogo</a>
        <nav className="d-flex gap-4">
          <a href="/user" className="text-dark fw-medium">Trang Chủ</a>
          <div className="dropdown">
            <a href="/user/quiz" className="text-dark fw-medium " data-bs-toggle="dropdown">Thi Thử TOEIC</a>
            
          </div>
          <div className="dropdown">
            <a href="/user/method" className="text-dark fw-medium " data-bs-toggle="dropdown">Phương Pháp Học</a>
          </div>
          <div className="dropdown">
            <a href="/user/blog" className="text-dark fw-medium " data-bs-toggle="dropdown">Tài Liệu TOEIC</a>
          </div>
           <div className="dropdown">
            <a href="/user/faq" className="text-dark fw-medium " data-bs-toggle="dropdown">FAQ</a>
          </div>
          <div className="dropdown">
            <a href="/user/stories" className="text-dark fw-medium " data-bs-toggle="dropdown">Câu Chuyện Thành Công</a>
          </div>
          <div className="dropdown">
            <a href="/user/about" className="text-dark fw-medium " data-bs-toggle="dropdown">Về Chúng Tôi</a>
          </div>
        </nav>
      </Container>
    </header>
  );
}

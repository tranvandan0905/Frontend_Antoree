"use client";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" bg="white" variant="light" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4 text-primary">
          YourLogo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="/user" className="fw-medium">Trang Chủ</Nav.Link>
            <Nav.Link href="/user/quiz" className="fw-medium">Thi Thử TOEIC</Nav.Link>
            <Nav.Link href="/user/method" className="fw-medium">Phương Pháp Học</Nav.Link>
            <Nav.Link href="/user/learning" className="fw-medium">Lộ Trình Học</Nav.Link>
            <Nav.Link href="/user/blog" className="fw-medium">Tài Liệu TOEIC</Nav.Link>
            <Nav.Link href="/user/stories" className="fw-medium">Câu Chuyện Thành Công</Nav.Link>
            <Nav.Link href="/user/about" className="fw-medium">Về Chúng Tôi</Nav.Link>
            <Nav.Link href="/user/faq" className="fw-medium">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import { Container, Row, Col, Nav } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-3">
            <h3 className="text-primary">QuizUp</h3>
            <p>Nền tảng luyện thi TOEIC/IELTS thông minh, giúp học đúng trọng tâm và bứt phá điểm số.</p>
            <div className="d-flex gap-3">
              <Link href="#" className="text-light">FB</Link>
              <Link href="#" className="text-light">YT</Link>
              <Link href="#" className="text-light">TT</Link>
            </div>
          </Col>

          <Col md={2} xs={6} className="mb-3">
            <h5>Khám phá</h5>
            <Nav className="flex-column">
              <Link href="#" className="text-light p-0 mb-1">Lộ trình học</Link>
              <Link href="#" className="text-light p-0 mb-1">Tài liệu</Link>
              <Link href="#" className="text-light p-0 mb-1">Blog chia sẻ</Link>
              <Link href="#" className="text-light p-0">Test online</Link>
            </Nav>
          </Col>

          <Col md={2} xs={6} className="mb-3">
            <h5>Hỗ trợ</h5>
            <Nav className="flex-column">
              <Link href="#" className="text-light p-0 mb-1">Câu hỏi thường gặp</Link>
              <Link href="#" className="text-light p-0 mb-1">Liên hệ</Link>
              <Link href="#" className="text-light p-0">Góp ý</Link>
            </Nav>
          </Col>

          <Col md={2} xs={6} className="mb-3">
            <h5>Pháp lý</h5>
            <Nav className="flex-column">
              <Link href="#" className="text-light p-0 mb-1">Điều khoản dịch vụ</Link>
              <Link href="#" className="text-light p-0">Chính sách bảo mật</Link>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col className="text-center border-top pt-3">
            <p className="mb-0">© 2025 QuizUp. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

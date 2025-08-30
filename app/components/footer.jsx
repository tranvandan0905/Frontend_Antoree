"use client";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    
      <section
        className="text-center text-white py-5"
        style={{ background: "linear-gradient(135deg, #353739, #615771)" }}
      >
        <Container>
          <h2 className="mb-3">Tham Gia Cộng Đồng QuizUp Ngay Hôm Nay!</h2>
          <p className="mb-4" style={{ opacity: 0.9, fontSize: "1.15rem" }}>
            Bắt đầu hành trình chinh phục mục tiêu của bạn với bài test trình độ hoàn toàn miễn phí.
          </p>

          <Link href="/user/quiz" passHref >
            <button
              as="a"
              size="lg"
              className="fw-bold text-uppercase shadow-lg"
              style={{
                background: "linear-gradient(135deg, #ff6a00, #ee0979)",
                border: "none",
                borderRadius: "30px",
                padding: "12px 28px",
                letterSpacing: "1px",
              }}
            >
              🚀 Làm Bài TEST Ngay!!!
            </button>
          </Link>

        </Container>
      </section>
      <footer className="bg-dark text-light pt-5">
        <Container>
          <Row className="mb-4">
            <Col md={4} className="mb-3">
              <h3 className="text-primary">QuizUp</h3>
              <p>
                Nền tảng luyện thi TOEIC/IELTS thông minh, giúp học đúng trọng tâm và bứt phá điểm số.
              </p>
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
      <a
        href="tel:0123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="float-icon phone"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          alt="Phone"
        />
      </a>

      <a
        href="https://zalo.me/0123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="float-icon zalo"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906382.png"
          alt="Zalo"
        />
      </a>

      <style jsx>{`
  .float-icon {
    position: fixed;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    animation: pulse 1.5s infinite;
  }
  .float-icon img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  /* Phone nằm dưới */
  .float-icon.phone {
    bottom: 20px;
  }

  /* Zalo nằm trên */
  .float-icon.zalo {
    bottom: 90px; /* cách icon dưới 70px (60 + margin 10) */
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 174, 239, 0.6);
    }
    70% {
      transform: scale(1.1);
      box-shadow: 0 0 0 20px rgba(0, 174, 239, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 174, 239, 0);
    }
  }
`}</style>
    </>
  );
}

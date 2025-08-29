"use client";
import { Container, Row, Col, Button, Image, Modal, Form, Card } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import { momolead } from "./services/bankingService";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleLead = async () => {
    if (!email.trim()) {
      alert("Vui lòng nhập email trước khi thanh toán!");
      return;
    }

    const confirmEmail = confirm(
      "Bạn chắc chắn email đã đúng chưa ?\nNếu sai email chúng tôi không chịu trách nhiệm!"
    );

    if (!confirmEmail) return;

    try {
      const result = await momolead(email);
      console.log(result);
      if (result?.payUrl) {
        window.location.href = result.payUrl;
      }
    } catch (error) {
      console.log(error);
      alert("Có lỗi xảy ra khi xử lý thanh toán!");
    }
  };

  return (
    <Container className="text-center py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="TOEIC Test"
            fluid
            rounded
          />
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <h1 className="fw-bold">Mini Quiz TOEIC/IELTS</h1>
          <p className="lead mt-3">
            Thử sức với <strong>10 câu hỏi TOEIC trong 3 phút</strong>.
            Nhận ngay đáp án chi tiết và tài liệu TOEIC PDF miễn phí qua email.
          </p>
          <div className="d-flex gap-3 justify-content-center mt-4">
            <Link href="/quiz" passHref>
              <Button variant="primary" size="lg" className="px-4 py-2">
                🚀 Bắt đầu test ngay
              </Button>
            </Link>

            <Button
              variant="success"
              size="lg"
              className="px-4 py-2 fw-bold shadow-lg"
              onClick={() => setShowModal(true)}
            >
              🌟 1000 Câu TOEIC Full
            </Button>
          </div>
        </Col>
      </Row>

      {/* Modal Thanh toán */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Nội dung tài liệu!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <>
            <Card className="shadow-lg border-0 rounded-3 p-3 my-3">
              <Card.Body>
                <Card.Title className="text-primary fw-bold fs-4">
                  📘 Bộ tài liệu 1000 câu hỏi TOEIC
                </Card.Title>
                <Card.Text className="fs-6" style={{ lineHeight: "1.7" }}>
                  Bộ tài liệu được biên soạn bám sát cấu trúc đề thi thật, bao gồm đầy đủ
                  các Part từ 1 đến 7:
                  <br /> <br />
                  🎧 <b className="text-success">Listening:</b> nhiều ngữ cảnh giao tiếp thực tế <br />
                  📖 <b className="text-success">Reading:</b> câu hỏi đa dạng, sát với đề thi thật <br />
                  ✅ <b className="text-success">Đáp án & Giải thích chi tiết</b> cho từng câu hỏi <br />
                  🎯 Phù hợp cho cả{" "}
                  <b className="text-success">người mới bắt đầu</b> lẫn{" "}
                  <b className="text-success">người muốn nâng cao điểm số</b> <br />
                  <br />
                  📈 Tài liệu giúp bạn luyện kỹ năng, tăng tốc độ làm bài và làm quen với
                  áp lực thời gian trong kỳ thi TOEIC thực tế.
                  <br /> <br />
                  🔥 <b className="text-danger">Ưu đãi đặc biệt:</b> Giảm{" "}
                  <b>33%</b> chỉ trong tháng này!
                  <br />
                  💰 Giá gốc: <s>3.000.000 VNĐ</s> 👉{" "}
                  <b style={{ color: "red", fontSize: "18px" }}>Chỉ còn 1.000.000 VNĐ</b>
                </Card.Text>
              </Card.Body>
            </Card>

            <Form>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Nhập email của bạn..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="success"
                className="mt-3 w-100"
                onClick={handleLead}
              >
                📩 Thanh toán
              </Button>
            </Form>
          </>
        </Modal.Body>
      </Modal>
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

    </Container>
  );
}

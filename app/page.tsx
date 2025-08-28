"use client";
import { Container, Row, Col, Button, Image, Modal, Form, Card } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import { momolead } from "./services/bankingService";
export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const handleLead = async () => {

    try {
      const result = await momolead(email);
      console.log(result);
      if (result?.payUrl) {
        window.location.href = result.payUrl;
      }
    } catch (error) {
      console.log(error)
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

              <div className="text-center">
                <Button variant="danger" size="lg" className="px-4 fw-bold">
                  Mua ngay 🚀
                </Button>
              </div>
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
            <Button variant="success" className="mt-3 w-100" onClick={handleLead}>
              📩 Thanh toán
            </Button>
          </Form>
        </>

      </Modal.Body>
    </Modal>
  </Container>
);
}

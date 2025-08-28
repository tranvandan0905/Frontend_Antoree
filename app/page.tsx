"use client";
import { Container, Row, Col, Button, Image, Modal, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleLead = async () => {
    try {
      



    } catch (error) {
      console.error("Error submitting answers:", error);
    }


  }

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
            <h5>
              Bộ tài liệu bao gồm <b>1000 câu hỏi TOEIC</b> được biên soạn bám sát
              cấu trúc đề thi thật. Nội dung trải dài các Part từ 1 đến 7, bao gồm:
              <br /> <br />
              ✅ Câu hỏi Nghe hiểu (Listening) với nhiều ngữ cảnh thực tế <br />
              ✅ Câu hỏi Đọc hiểu (Reading) đa dạng, sát đề thi <br />
              ✅ Mỗi câu hỏi đều có <b>đáp án & giải thích chi tiết</b> <br />
              ✅ Phù hợp cho người mới bắt đầu ôn thi hoặc muốn nâng cao điểm số <br />
              <br />
              Tài liệu giúp bạn rèn luyện kỹ năng làm bài, tăng tốc độ, và làm quen
              với áp lực thời gian trong kỳ thi TOEIC thực tế.
              Với giá giảm 33% cho tháng này từ 3.000.000 VNĐ chỉ còn 1.000.000 VNĐ
            </h5>

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

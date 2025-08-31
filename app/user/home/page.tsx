"use client";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container fluid className="p-0">
      {/* HERO */}
      <section id="hero" className="py-5 text-center text-white" style={{ background: "linear-gradient(135deg,#4a5c78,#2b3a50)" }}>
        <Container>
          <h1 className="fw-bold display-6">Test Nhanh Trình Độ TOEIC/IELTS Sau 15 Phút</h1>
          <p className="lead mt-3 mb-4">
            Chấm dứt ôn thi lan man. Biết chính xác <b>điểm yếu</b> & cần cải thiện điều gì để <b>bứt phá band điểm</b>.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/user/quiz" className="btn btn-primary m-2">🚀 Test nhanh IELTS 15 phút</Link>
            <Link href="/user/quiz" className="btn btn-secondary m-2">🎯 Test nhanh TOEIC 15 phút</Link>
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">Không Chỉ Là Bài Test - Đây Là “Bác Sĩ” Bắt Bệnh Tiếng Anh</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="shadow-sm h-100 p-3 border-0 text-center">
                <h4>🎯 Xác Định Lỗ Hổng</h4>
                <p>Bài test chỉ ra bạn yếu ở dạng bài nào, ngữ pháp nào, từ vựng chủ đề gì.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm h-100 p-3 border-0 text-center">
                <h4>🗺️ Nhận Lộ Trình Học</h4>
                <p>Gợi ý lộ trình học cá nhân hóa dựa trên kết quả.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm h-100 p-3 border-0 text-center">
                <h4>⏱️ Tiết Kiệm Thời Gian</h4>
                <p>Chỉ 15 phút là có báo cáo phân tích trình độ.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">Hàng Ngàn Người Đã Tìm Ra Lối Đi Sau Khi Làm Bài Test Này</h2>
          <Row className="g-4 justify-content-center">
            {[
              { text: "Nhờ bài test mà mình mới biết mình yếu phần ngữ pháp nào để tập trung ôn luyện.", name: "Nguyễn Minh Anh, 7.5 IELTS" },
              { text: "Phần gợi ý lộ trình học quá đỉnh. Không còn học lan man nữa.", name: "Trần Hoàng Long, 850 TOEIC" }
            ].map((item, idx) => (
              <Col md={6} key={idx}>
                <Card className="p-4 shadow-sm border-0 h-100">
                  <blockquote className="mb-2 fst-italic">"{item.text}"</blockquote>
                  <cite className="text-muted">- {item.name}</cite>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">Câu Hỏi Thường Gặp (FAQ)</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <ul className="list-unstyled">
                <li className="mb-2"><Badge bg="success">✅</Badge> Bài test có miễn phí không? Hoàn toàn miễn phí.</li>
                <li className="mb-2"><Badge bg="info">ℹ️</Badge> Kết quả có chính xác không? Dựa trên cấu trúc đề thi thật.</li>
                <li className="mb-2"><Badge bg="danger">❌</Badge> Có cần đăng ký tài khoản? Không cần, chỉ cần email.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

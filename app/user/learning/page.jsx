"use client";
import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const learningPaths = [
  {
    goal: "beginner",
    tag: "Mất Gốc",
    tagColor: "#00875a",
    title: "Lộ trình Xây Lại Nền Tảng Tiếng Anh",
    description: "Dành cho những bạn mất gốc hoàn toàn, bắt đầu từ những viên gạch cơ bản nhất như phát âm, ngữ pháp và từ vựng nền tảng.",
    duration: "4 tháng",
    lectures: 80,
    price: "999.000đ",
    img: "https://source.unsplash.com/random/400x250/?abc,alphabet",
    link: "course-detail.html",
  },
  {
    goal: "toeic",
    tag: "Mục Tiêu TOEIC 550+",
    tagColor: "#0d6efd",
    title: "Lộ trình TOEIC đảm bảo đầu ra 550+",
    description: "Cung cấp kiến thức và kỹ năng cần thiết để bạn đạt được số điểm TOEIC tối thiểu cho việc tốt nghiệp hoặc yêu cầu công việc cơ bản.",
    duration: "3 tháng",
    lectures: 100,
    price: "1.299.000đ",
    img: "https://source.unsplash.com/random/400x250/?business,office",
    link: "course-detail.html",
  },
  {
    goal: "toeic",
    tag: "Mục Tiêu TOEIC 750+",
    tagColor: "#0d6efd",
    title: "Lộ trình Chinh phục TOEIC 750+",
    description: "Tập trung vào các chiến thuật làm bài nâng cao, từ vựng chuyên sâu và luyện đề chuyên sâu để bứt phá điểm số.",
    duration: "3 tháng",
    lectures: 120,
    price: "1.499.000đ",
    img: "https://source.unsplash.com/random/400x250/?presentation,meeting",
    link: "course-detail.html",
  },
  {
    goal: "ielts",
    tag: "Mục Tiêu IELTS 7.0+",
    tagColor: "#BF2600",
    title: "Lộ trình Bứt phá IELTS 7.0+ toàn diện 4 kỹ năng",
    description: "Chương trình học chuyên sâu, tập trung vào việc phát triển tư duy, từ vựng học thuật và kỹ năng làm bài cho cả 4 kỹ năng.",
    duration: "6 tháng",
    lectures: 150,
    price: "2.999.000đ",
    img: "https://source.unsplash.com/random/400x250/?travel,london",
    link: "course-detail.html",
  },
];

const whyUs = [
  { icon: "🎯", title: "Lộ Trình Cá Nhân Hóa", desc: "Học đúng trọng tâm, tập trung vào điểm yếu của bạn dựa trên kết quả test đầu vào." },
  { icon: "👩‍🏫", title: "Giảng Viên Chuyên Môn Cao", desc: "Đội ngũ giáo viên 990 TOEIC, 8.5+ IELTS với nhiều năm kinh nghiệm thực chiến." },
  { icon: "🤖", title: "Công Nghệ AI Hỗ Trợ", desc: "Hệ thống AI phân tích lỗi sai và đề xuất bài tập phù hợp, giúp bạn tiến bộ nhanh hơn." },
  { icon: "🏆", title: "Cam Kết Đầu Ra", desc: "Chúng tôi tự tin vào chất lượng và cam kết hỗ trợ đến khi bạn đạt được mục tiêu." },
];

export default function LearningPathsPage() {
  const [selectedGoal, setSelectedGoal] = useState("all");

  return (
    <main>
      <section className="text-center py-5 text-white" style={{ background: "linear-gradient(135deg, #353739ff, #615771ff)" }}>
        <Container>
          <h1>Tìm Lộ Trình Học Hoàn Hảo Dành Cho Bạn</h1>
          <p>Mỗi lộ trình được thiết kế bài bản, cá nhân hóa để giúp bạn đạt mục tiêu nhanh nhất, dù bạn là người mới bắt đầu hay muốn nâng cao điểm số.</p>
          <Form.Select
            style={{ maxWidth: 300, margin: "1rem auto" }}
            value={selectedGoal}
            onChange={(e) => setSelectedGoal(e.target.value)}
          >
            <option value="all">Tất cả mục tiêu</option>
            <option value="toeic">TOEIC</option>
            <option value="ielts">IELTS</option>
            <option value="beginner">Mất gốc</option>
          </Form.Select>
        </Container>
      </section>

      {/* Paths Grid */}
      <Container className="my-5">
        <Row className="g-4">
          {learningPaths
            .filter((path) => selectedGoal === "all" || path.goal === selectedGoal)
            .map((path, idx) => (
              <Col md={6} lg={4} key={idx}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={path.img} />
                  <Card.Body>
                    <span
                      className="badge mb-2"
                      style={{ backgroundColor: path.tagColor, color: "white" }}
                    >
                      {path.tag}
                    </span>
                    <Card.Title>{path.title}</Card.Title>
                    <Card.Text>{path.description}</Card.Text>
                    <div className="mb-2">
                      <span className="me-3">🕒 <strong>Thời lượng:</strong> {path.duration}</span>
                      <span>📚 <strong>Bài giảng:</strong> {path.lectures} video</span>
                    </div>
                    <div className="mb-3"><strong>{path.price}</strong></div>
                    <Button href={path.link} variant="primary">Xem Chi Tiết Lộ Trình</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>

      {/* Why Us */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Tại Sao Lộ Trình Học Của QuizUp Lại Hiệu Quả?</h2>
          <Row className="g-4">
            {whyUs.map((item, idx) => (
              <Col md={6} lg={3} key={idx} className="text-center">
                <div className="mb-2 display-4">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

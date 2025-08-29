"use client";
import { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Modal } from "react-bootstrap";

const storiesData = [
  {
    id: "ngocanh",
    name: "Ngọc Anh",
    category: "toeic",
    tag: "TOEIC 850+",
    image:"/images/z407811279454704d3b10be2c47b86e5bd170832bde562-16753562253021567389777.webp", 
    quote: 'Nhờ lộ trình cá nhân hóa, mình đã tập trung đúng vào điểm yếu và bứt phá ngoạn mục!',
    before: "550",
    after: "875",
    content: `
      <h3>Thử thách ban đầu</h3>
      <p>Ngọc Anh đến với QuizUp với mục tiêu ra trường, nhưng điểm đầu vào chỉ ở mức 550...</p>
      <h3>Giải pháp & Quá trình nỗ lực</h3>
      <ul>
        <li>Củng cố 10 chủ điểm ngữ pháp cốt lõi.</li>
        <li>Luyện tập chuyên sâu 500 câu hỏi Part 5.</li>
        <li>Học 300 từ vựng thường gặp trong Part 7.</li>
      </ul>
      <h3>Kết quả đột phá</h3>
      <p>Chỉ sau 3 tháng, Ngọc Anh đạt 875 TOEIC.</p>
    `,
  },
  {
    id: "minhquan",
    name: "Minh Quân",
    category: "ielts",
    tag: "IELTS 7.0+",
    image:"/images/lovepik-man-png-image_400498686_wh1200.png",
    quote: "Mình chưa bao giờ nghĩ có thể đạt 7.0 IELTS Speaking...",
    before: "5.5",
    after: "7.0",
    content: `
      <h3>Thử thách ban đầu</h3>
      <p>Minh Quân có nền tảng Reading và Listening khá tốt...</p>
      <h3>Giải pháp & Quá trình nỗ lực</h3>
      <p>Lộ trình QuizUp tập trung vào từ vựng học thuật và luyện tập cấu trúc câu phức.</p>
      <h3>Kết quả đột phá</h3>
      <p>Sau 4 tháng, Quân đạt 7.0 overall.</p>
    `,
  },
  {
    id: "hoaithu",
    name: "Hoài Thu",
    category: "beginner",
    tag: "Vượt Rào Mất Gốc",
    image: "/images/anh-nguoi-mau-25.jpg",
    quote: "Từ mất gốc tiếng Anh, giờ mình đã tự tin giao tiếp và đạt 650 TOEIC...",
    before: "~300",
    after: "650",
    content: `
      <h3>Thử thách ban đầu</h3>
      <p>Hoài Thu gần như mất gốc tiếng Anh, điểm thi thử đầu vào chỉ khoảng 300...</p>
      <h3>Giải pháp & Quá trình nỗ lực</h3>
      <p>Lộ trình "Vượt rào mất gốc" giúp Thu xây dựng nền tảng từ những viên gạch đầu tiên...</p>
      <h3>Kết quả đột phá</h3>
      <p>Sau 4 tháng, Thu đạt 650 TOEIC.</p>
    `,
  },
];

export default function SuccessStoriesPage() {
  const [filter, setFilter] = useState("all");
  const [modalStory, setModalStory] = useState(null);

  const filteredStories =
    filter === "all"
      ? storiesData
      : storiesData.filter(story => story.category === filter);

  return (
    <main>
      <section className="py-5 text-white text-center" style={{ background: "linear-gradient(135deg, #353739ff, #615771ff)" }}>
        <Container>
          <h1>Hành Trình Tỏa Sáng Của Học Viên QuizUp</h1>
          <p>Đây là những câu chuyện về sự nỗ lực, quyết tâm và thành quả xứng đáng.</p>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <h2 className="mb-4 text-center">Khám Phá Các Câu Chuyện Thành Công</h2>

          <div className="mb-4 text-center">
            {["all", "toeic", "ielts", "beginner"].map(cat => (
              <Button
                key={cat}
                variant={filter === cat ? "primary" : "outline-primary"}
                className="me-2 mb-2"
                onClick={() => setFilter(cat)}
              >
                {cat === "all"
                  ? "Tất cả"
                  : cat === "toeic"
                  ? "TOEIC 850+"
                  : cat === "ielts"
                  ? "IELTS 7.0+"
                  : "Vượt Rào Mất Gốc"}
              </Button>
            ))}
          </div>

          <Row className="g-4">
            {filteredStories.map(story => (
              <Col md={4} key={story.id}>
                <Card className="h-100 shadow-sm">
                  <div className="position-relative">
                    <Card.Img variant="top" src={story.image}   style={{ width: "415px", height: "400px" }} />
                    <Badge
                      bg="secondary"
                      className="position-absolute"
                      style={{ top: "10px", left: "10px" }}
                    >
                      {story.tag}
                    </Badge>
                  </div>
                  <Card.Body>
                    <Card.Title>{story.name}</Card.Title>
                    <Card.Text><em>"{story.quote}"</em></Card.Text>
                    <div className="d-flex justify-content-between mb-2">
                      <div>
                        <small>Trước đây</small><br/>
                        <strong>{story.before}</strong>
                      </div>
                      <div className="align-self-center">→</div>
                      <div>
                        <small>Hiện tại</small><br/>
                        <strong>{story.after}</strong>
                      </div>
                    </div>
                    <Button variant="primary" onClick={() => setModalStory(story)}>
                      Xem chi tiết câu chuyện
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Modal
        show={modalStory !== null}
        onHide={() => setModalStory(null)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalStory?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalStory && (
            <div dangerouslySetInnerHTML={{ __html: modalStory.content }} />
          )}
        </Modal.Body>
      </Modal>
    </main>
  );
}

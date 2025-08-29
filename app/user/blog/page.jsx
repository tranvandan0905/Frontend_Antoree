"use client";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const blogPosts = [
  {
    category: "Ngữ Pháp",
    title: '5 Lỗi Ngữ Pháp "Kinh Điển" Khiến Bạn Mất Điểm Oan Trong Part 5 TOEIC',
    author: "Cô Mai Anh",
    date: "28/08/2025",
    excerpt:
      "Part 5 TOEIC không khó, nhưng lại đầy rẫy những cái bẫy ngữ pháp tinh vi. Hãy cùng khám phá 5 lỗi sai phổ biến nhất mà ngay cả những bạn khá tiếng Anh cũng thường mắc phải...",
    img: "/images/colorful-creative-mind-map-brainstorm_xlarge.png",
    link: "single-post.html",
  },
  {
    category: "Từ Vựng",
    title: 'Tổng Hợp 50 Cụm Từ Vựng TOEIC Chủ Đề "Văn Phòng" Hay Gặp Nhất',
    author: "Thầy Hoàng Long",
    date: "25/08/2025",
    excerpt:
      "Chủ đề văn phòng (Office) chiếm một tỷ trọng lớn trong các bài thi TOEIC. Nắm vững bộ 50 cụm từ này sẽ giúp bạn tăng ít nhất 50 điểm cho phần đọc hiểu...",
    img: "/images/images.png",
    link: "single-post.html",
  },
  {
    category: "Mẹo Thi",
    title: 'Chiến Thuật Phân Bổ Thời Gian Cho Part 7 TOEIC Để Không Bị "Cháy Giờ"',
    author: "Cô Mai Anh",
    date: "22/08/2025",
    excerpt:
      '"Em không kịp giờ làm Part 7" là câu nói quen thuộc của rất nhiều sĩ tử. Bài viết này sẽ cung cấp cho bạn một chiến thuật phân bổ thời gian chi tiết và hiệu quả...',
    img: "/images/Ảnh chụp màn hình 2025-08-29 170141.png",
    link: "single-post.html",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="py-5 text-center text-white" style={{ background: "linear-gradient(135deg, #353739ff, #615771ff)" }}>
        <Container>
          <h1>Blog &amp; Tài Liệu</h1>
          <p>Khám phá kho tàng kiến thức, mẹo thi và kinh nghiệm học tập từ các chuyên gia hàng đầu.</p>
        </Container>
      </section>

      {/* Blog content */}
      <Container className="my-5">
        <Row>
          {/* Posts */}
          <Col lg={8}>
            <Row className="g-4">
              {blogPosts.map((post, idx) => (
                <Col md={12} key={idx}>
                  <Card className="shadow-sm">
                    <Row className="g-0">
                      <Col md={5}>
                        <Card.Img src={post.img} alt={post.title} />
                      </Col>
                      <Col md={7}>
                        <Card.Body>
                          <a href="#" className="text-primary text-decoration-none">{post.category}</a>
                          <Card.Title as="h2" className="h5 mt-1">
                            <a href={post.link} className="text-dark text-decoration-none">{post.title}</a>
                          </Card.Title>
                          <Card.Text className="text-muted small">
                            Đăng bởi <strong>{post.author}</strong> vào {post.date}
                          </Card.Text>
                          <Card.Text>{post.excerpt}</Card.Text>
                          <Button href={post.link} variant="outline-primary" size="sm">
                            Đọc tiếp →
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <Card className="mb-4 p-3">
              <h5>Tìm kiếm</h5>
              <Form.Control type="search" placeholder="Nhập từ khóa..." className="mt-2" />
            </Card>

            <Card className="mb-4 p-3 text-center text-white" style={{ background: "linear-gradient(135deg, #353739ff, #615771ff)" }}>
              <h5>Biết Trình Độ, Rõ Lộ Trình</h5>
              <p>Làm bài test nhanh 15 phút để khám phá điểm mạnh, yếu của bạn!</p>
              <Button href="#" variant="light">Test Miễn Phí Ngay</Button>
            </Card>

            <Card className="mb-4 p-3">
              <h5>Danh mục</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="#">Ngữ Pháp (5)</a></li>
                <li><a href="#">Từ Vựng (8)</a></li>
                <li><a href="#">Mẹo Thi (12)</a></li>
                <li><a href="#">Luyện Nghe (4)</a></li>
                <li><a href="#">Luyện Đọc (7)</a></li>
              </ul>
            </Card>

            <Card className="mb-4 p-3">
              <h5>Bài viết gần đây</h5>
              <ul className="list-unstyled mb-0">
                {blogPosts.map((post, idx) => (
                  <li key={idx}><a href={post.link}>{post.title}</a></li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

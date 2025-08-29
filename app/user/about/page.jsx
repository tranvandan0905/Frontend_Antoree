"use client";
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";


export default function AboutPage() {
  const teamMembers = [
    {
      name: "Cô Mai Anh",
      role: "Giám đốc Học thuật",
      img: "/images/anh-nguoi-mau-25.jpg",
      credentials: [
        "9.0 IELTS, 990/990 TOEIC",
        "10+ năm kinh nghiệm giảng dạy",
        "Chứng chỉ TESOL quốc tế",
      ],
      quote: "Chìa khóa của việc học ngoại ngữ là tìm ra đúng phương pháp cho riêng mình.",
    },
    {
      name: "Anh Trần Minh",
      role: "Giám đốc Công nghệ (CTO)",
      img: "/images/lovepik-man-png-image_400498686_wh1200.png",
      credentials: [
        "Kỹ sư phần mềm tại Silicon Valley",
        "Chuyên gia về AI trong giáo dục",
        "Đam mê xây dựng sản phẩm ý nghĩa",
      ],
      quote: "Công nghệ tốt nhất là công nghệ phục vụ và nâng cao tiềm năng con người.",
    },
    {
      name: "Thầy Hoàng Long",
      role: "Trưởng phòng Luyện thi TOEIC",
      img: "/images/z407811279454704d3b10be2c47b86e5bd170832bde562-16753562253021567389777.webp",
      credentials: [
        "990/990 TOEIC (nhiều lần)",
        'Tác giả sách "Chinh phục TOEIC Part 5"',
        "Chuyên gia luyện thi cấp tốc",
      ],
      quote: "Mọi câu hỏi khó đều có mẹo giải nhanh, chỉ là bạn chưa biết mà thôi.",
    },
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar expand="lg" className="mb-4 shadow-sm bg-white">
        <Container>
      
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/user/contact">Liên Hệ</Nav.Link>
              <Nav.Link href="/user/privacy">Chính Sách Bảo Mật</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== HERO ===== */}
      <section className=" text-white text-center py-5" style={{ background: "linear-gradient(135deg, #353739ff, #615771ff)" }}>
        <Container>
          <h1 className="mb-3 fw-bold">Câu Chuyện Đằng Sau QuizUp</h1>
          <p className="lead">
            Chúng tôi không chỉ tạo ra một công cụ, mà còn xây dựng một con đường để bạn tự tin chinh phục mục tiêu Anh ngữ của mình.
          </p>
        </Container>
      </section>

      {/* ===== Our Story ===== */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <h2 className="mb-3">Hành trình của chúng tôi</h2>
              <p>
                QuizUp ra đời từ chính những trăn trở của chúng tôi khi còn là sinh viên,
                loay hoay tìm một phương pháp luyện thi TOEIC/IELTS hiệu quả. Giữa vô vàn tài liệu
                và các trung tâm đại trà, chúng tôi nhận ra điều thiếu sót lớn nhất là một lộ trình
                được "may đo" cho từng cá nhân.
              </p>
              <p>
                Với niềm tin rằng công nghệ có thể thay đổi cách chúng ta học, chúng tôi đã tập hợp
                những chuyên gia hàng đầu để tạo ra một nền tảng thông minh, giúp bạn học đúng trọng tâm,
                tiết kiệm thời gian và đạt kết quả cao nhất.
              </p>
            </Col>
            <Col md={6}>
              <img
                 src="/images/photo-3-16186323817721904173270.webp"
                alt="Đội ngũ QuizUp"
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4 text-center mb-5">
            <Col md={6}>
              <Card className="p-4 h-100 border-0 shadow-sm hover-shadow">
                <div className="display-4 mb-3">🎯</div>
                <h3>Sứ Mệnh</h3>
                <p>
                  Giúp 1 triệu người Việt Nam đạt được mục tiêu Anh ngữ thông qua công nghệ học tập cá nhân hóa, dễ tiếp cận và hiệu quả.
                </p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-4 h-100 border-0 shadow-sm hover-shadow">
                <div className="display-4 mb-3">🔭</div>
                <h3>Tầm Nhìn</h3>
                <p>
                  Trở thành nền tảng luyện thi thông minh và đáng tin cậy số 1 tại Việt Nam, là người bạn đồng hành trên con đường chinh phục ngoại ngữ.
                </p>
              </Card>
            </Col>
          </Row>
          <div className="text-center">
            <h2 className="mb-3">La bàn dẫn lối</h2>
            <p>
              Mọi tính năng, bài giảng và lộ trình học tại QuizUp đều được xây dựng dựa trên sứ mệnh và tầm nhìn này. Chúng tôi cam kết không ngừng đổi mới để mang đến trải nghiệm học tập tốt nhất cho bạn.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== Team ===== */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Gặp Gỡ Đội Ngũ Chuyên Gia</h2>
          <p className="text-center mb-5 text-muted">
            Đội ngũ của chúng tôi không chỉ giỏi về chuyên môn mà còn đầy nhiệt huyết, luôn sẵn sàng đồng hành cùng bạn.
          </p>
          <Row className="g-4">
            {teamMembers.map((member, idx) => (
              <Col md={4} key={idx}>
                <Card className="h-100 shadow-sm text-center p-4 team-card hover-shadow transition">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-circle mb-3"
                    style={{ width: "130px", height: "130px", objectFit: "cover", margin: "0 auto" }}
                  />
                  <h4>{member.name}</h4>
                  <p className="text-primary mb-2">{member.role}</p>
                  <ul className="text-start ps-3 mb-3">
                    {member.credentials.map((cred, i) => (
                      <li key={i}>{cred}</li>
                    ))}
                  </ul>
                  <blockquote className="fst-italic">"{member.quote}"</blockquote>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== Styles ===== */}
      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(12, 16, 25, 0.2) !important;
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }
        .team-card {
          background: #fff;
          border-radius: 15px;
        }
      `}</style>
    </>
  );
}

"use client";
import { Container, Row, Col, Button, Badge, Card } from "react-bootstrap";

export default function MethodPage() {
  const steps = [
    {
      tag: "T1: TEST",
      title: "Kiểm Tra Chẩn Đoán",
      desc:
        'Không chỉ là bài test, đây là "tấm phim X-quang" kiến thức của bạn. Bằng công nghệ AI, hệ thống sẽ phân tích và chỉ ra chính xác từng điểm yếu nhỏ nhất, từ chủ điểm ngữ pháp bạn hay sai đến dạng từ vựng bạn còn thiếu.',
      img: "https://source.unsplash.com/random/500x350/?analysis,chart",
    },
    {
      tag: "T2: TARGET",
      title: "Học Tập Nhắm Mục Tiêu",
      desc:
        "Ngừng lãng phí thời gian! Dựa trên kết quả chẩn đoán, QuizUp tự động xây dựng một lộ trình học cá nhân hóa. Bạn sẽ chỉ học những gì bạn cần, với các bài giảng video, bài tập và flashcard được thiết kế riêng để lấp đầy lỗ hổng kiến thức của bạn.",
      img: "https://source.unsplash.com/random/500x350/?target,focus",
    },
    {
      tag: "T3: TRACK",
      title: "Theo Dõi Tiến Độ",
      desc:
        "Thấy rõ sự tiến bộ mỗi ngày chính là động lực lớn nhất. Bảng điều khiển cá nhân sẽ trực quan hóa quá trình học của bạn bằng các biểu đồ, giúp bạn biết mình đã mạnh lên ở đâu và cần cố gắng thêm ở phần nào.",
      img: "https://source.unsplash.com/random/500x350/?dashboard,progress",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="method-hero py-5 text-center bg-primary text-white">
        <Container>
          <h1 className="mb-3">Học Thông Minh Hơn, Không Phải Chăm Chỉ Hơn</h1>
          <p className="lead mb-4">
            Khám phá Phương pháp 3T - Lộ trình học cá nhân hóa độc quyền giúp bạn bứt phá điểm số bằng cách học đúng trọng tâm, loại bỏ lãng phí thời gian.
          </p>
          <Button href="#" variant="light" size="lg" className="me-2">
            Bắt đầu miễn phí
          </Button>
          <Button href="#comparison" variant="outline-light" size="lg">
            Tìm hiểu thêm
          </Button>
        </Container>
      </section>

      {/* COMPARISON */}
      <section id="comparison" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Tại Sao Các Phương Pháp Học Truyền Thống Không Còn Hiệu Quả?</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 shadow-sm border-danger">
                <Card.Body>
                  <Card.Title className="text-danger">Cách Học Cũ</Card.Title>
                  <ul>
                    <li>Học lan man, dàn trải mọi kiến thức.</li>
                    <li>Không biết chính xác mình yếu ở đâu.</li>
                    <li>Tốn thời gian vào những phần đã biết.</li>
                    <li>Dễ nản chí vì không thấy sự tiến bộ.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm border-success">
                <Card.Body>
                  <Card.Title className="text-success">Phương Pháp 3T</Card.Title>
                  <ul>
                    <li>Học tập trung, đúng vào trọng tâm.</li>
                    <li>Biết rõ từng lỗ hổng kiến thức.</li>
                    <li>Tối ưu hóa thời gian cho phần còn yếu.</li>
                    <li>Tạo động lực nhờ thấy rõ sự tiến bộ.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* METHOD 3T */}
      <section id="method-3t" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Phương Pháp 3T Hoạt Động Như Thế Nào?</h2>
          {steps.map((step, idx) => (
            <Row key={idx} className="align-items-center mb-5">
              {idx % 2 === 0 ? (
                <>
                  <Col md={6}>
                    <img src={step.img} alt={step.title} className="img-fluid rounded shadow-sm" />
                  </Col>
                  <Col md={6}>
                    <Badge bg="primary" className="mb-2">{step.tag}</Badge>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={6}>
                    <Badge bg="primary" className="mb-2">{step.tag}</Badge>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </Col>
                  <Col md={6}>
                    <img src={step.img} alt={step.title} className="img-fluid rounded shadow-sm" />
                  </Col>
                </>
              )}
            </Row>
          ))}
        </Container>
      </section>

      {/* CTA */}
      <section id="cta-section" className="py-5 text-center bg-warning text-dark">
        <Container>
          <h2 className="mb-3">Trải Nghiệm Sức Mạnh Của Việc Học Thông Minh?</h2>
          <p className="mb-4">Hãy để phương pháp 3T giúp bạn vạch ra con đường ngắn nhất đến mục tiêu của mình.</p>
          <Button href="#" variant="dark" size="lg">Bắt đầu với bài Test Chẩn Đoán (Miễn Phí)</Button>
        </Container>
      </section>
    </main>
  );
}

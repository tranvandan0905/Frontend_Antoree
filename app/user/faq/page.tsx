"use client";
import { useState } from "react";
import { Container, Row, Col, Accordion, Form, Card, Button } from "react-bootstrap";

const faqData = [
  {
    category: "Về Bài Test Online",
    items: [
      {
        question: "Bài test online có miễn phí không?",
        answer: "Có. Bài test chẩn đoán đầu vào của chúng tôi hoàn toàn miễn phí. Bạn chỉ cần tạo một tài khoản để lưu lại kết quả và nhận lộ trình học cá nhân hóa.",
      },
      {
        question: "Kết quả bài test có chính xác không?",
        answer: "Kết quả của chúng tôi có độ chính xác cao, phản ánh tương đối đúng năng lực hiện tại của bạn. Bài test được xây dựng bởi đội ngũ chuyên gia học thuật và dựa trên cấu trúc đề thi thật. Tuy nhiên, điểm thi thật có thể dao động nhẹ do các yếu tố như tâm lý, điều kiện phòng thi.",
      },
    ],
  },
  {
    category: "Tài Khoản & Thanh Toán",
    items: [
      {
        question: "Làm thế nào để đặt lại mật khẩu?",
        answer: 'Tại trang đăng nhập, bạn vui lòng nhấp vào nút "Quên mật khẩu". Hệ thống sẽ gửi một đường link đặt lại mật khẩu mới vào email bạn đã đăng ký.',
      },
      {
        question: "QuizUp chấp nhận các hình thức thanh toán nào?",
        answer: "Chúng tôi chấp nhận thanh toán qua thẻ tín dụng/ghi nợ (Visa, Mastercard), chuyển khoản ngân hàng và các ví điện tử phổ biến như MoMo, ZaloPay.",
      },
    ],
  },
  {
    category: "Về Lộ Trình Học",
    items: [
      {
        question: "Lộ trình học được cá nhân hóa như thế nào?",
        answer: "Dựa trên kết quả chi tiết từ bài test đầu vào, hệ thống AI của chúng tôi sẽ xác định các lỗ hổng kiến thức của bạn. Lộ trình học sẽ ưu tiên các bài giảng và bài tập được thiết kế để lấp đầy những lỗ hổng đó trước, giúp bạn học đúng trọng tâm và hiệu quả nhất.",
      },
    ],
  },
  {
    category: "Vấn Đề Kỹ Thuật",
    items: [
      {
        question: "Website không hiển thị đúng trên trình duyệt của tôi?",
        answer: "Để có trải nghiệm tốt nhất, vui lòng sử dụng các trình duyệt hiện đại như Google Chrome, Firefox, hoặc Safari đã được cập nhật phiên bản mới nhất. Nếu vẫn gặp sự cố, bạn có thể thử xóa cache và cookie của trình duyệt.",
      },
    ],
  },
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQ
  const filteredFaq = faqData
    .map(section => ({
      ...section,
      items: section.items.filter(
        item =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(section => section.items.length > 0);

  return (
    <main>
      {/* HERO */}
      <section className="py-5 text-center bg-primary text-white">
        <Container>
          <h1 className="mb-2">Chúng Tôi Có Thể Giúp Gì Cho Bạn?</h1>
          <p className="mb-4">Tìm kiếm câu trả lời hoặc duyệt qua các chủ đề phổ biến bên dưới.</p>
          <Form.Control
            type="search"
            placeholder="Nhập câu hỏi của bạn..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="mt-3 mx-auto"
            style={{ maxWidth: "500px", borderRadius: "50px", padding: "10px 20px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          />
        </Container>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-5 bg-light">
        <Container>
          {filteredFaq.length > 0 ? (
            filteredFaq.map((section, idx) => (
              <div key={idx} className="mb-5">
                <h2 className="mb-3 text-primary">{section.category}</h2>
                <Accordion flush>
                  {section.items.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index} className="mb-2 shadow-sm rounded">
                      <Accordion.Header className="fw-semibold">{item.question}</Accordion.Header>
                      <Accordion.Body className="bg-white">{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            ))
          ) : (
            <p className="text-center text-muted fs-5">Rất tiếc, chúng tôi không tìm thấy câu trả lời nào phù hợp với tìm kiếm của bạn.</p>
          )}
        </Container>
      </section>

      {/* CONTACT SUPPORT */}
      <section className="py-5 bg-gradient-to-r from-primary to-secondary text-white">
        <Container>
          <h2 className="mb-4 text-center">Bạn Vẫn Cần Trợ Giúp?</h2>
          <p className="mb-5 text-center">Đừng ngần ngại liên hệ với đội ngũ hỗ trợ thân thiện của chúng tôi.</p>
          <Row className="g-4">
            {[
              { icon: "📧", title: "Email Hỗ Trợ", desc: "Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.", link: "mailto:support@quizup.com", linkText: "support@quizup.com" },
              { icon: "📞", title: "Hotline", desc: "Hỗ trợ từ 8:00 - 17:00, Thứ 2 - Thứ 6.", link: "tel:19001234", linkText: "1900 1234" },
              { icon: "💬", title: "Gửi Yêu Cầu", desc: "Mô tả vấn đề của bạn và chúng tôi sẽ giải quyết.", link: "#", linkText: "Gửi yêu cầu ngay", isButton: true },
            ].map((item, idx) => (
              <Col md={4} key={idx}>
                <Card className="p-4 h-100 text-center shadow-lg border-0" style={{ borderRadius: "20px", transition: "transform 0.3s" }}>
                  <div className="display-4 mb-3">{item.icon}</div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="mb-3">{item.desc}</p>
                  {item.isButton ? (
                    <Button href={item.link} variant="light" className="text-primary fw-bold px-4 py-2 rounded-pill shadow-sm">
                      {item.linkText}
                    </Button>
                  ) : (
                    <a href={item.link} className="text-decoration-none fw-medium text-primary">{item.linkText}</a>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

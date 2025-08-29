"use client";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Trường này là bắt buộc.";
    if (!formData.email.trim()) newErrors.email = "Trường này là bắt buộc.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Vui lòng nhập email hợp lệ.";
    if (!formData.subject) newErrors.subject = "Trường này là bắt buộc.";
    if (!formData.message.trim()) newErrors.message = "Trường này là bắt buộc.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
     
      setStatusMessage("Gửi tin nhắn thành công! Chúng tôi sẽ sớm liên hệ với bạn.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      setStatusMessage("Vui lòng kiểm tra lại các thông tin đã nhập.");
    }
  };

  return (
    <main>

      <section className="py-5 text-center  text-white" style={{ background: "linear-gradient(135deg, #353739ff, #615771ff)" }}>
        <Container>
          <h1 className="mb-3">Liên Hệ Với Chúng Tôi</h1>
          <p>Chúng tôi luôn sẵn sàng lắng nghe! Vui lòng chọn phương thức liên hệ phù hợp hoặc gửi tin nhắn cho chúng tôi.</p>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col md={5}>
              <Card className="p-4 shadow-sm border-0">
                <h3 className="mb-4">Thông Tin Trực Tiếp</h3>
                
                <div className="mb-3 d-flex align-items-start">
                  <span className="me-3 fs-3">📍</span>
                  <div>
                    <h5>Địa chỉ văn phòng</h5>
                    <p>Tầng 5, Tòa nhà ABC, 123 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh</p>
                  </div>
                </div>

                <div className="mb-3 d-flex align-items-start">
                  <span className="me-3 fs-3">📧</span>
                  <div>
                    <h5>Email</h5>
                    <p>Hỗ trợ học viên: <a href="mailto:hotro@quizup.vn">hotro@quizup.vn</a></p>
                    <p>Hợp tác: <a href="mailto:hoptac@quizup.vn">hoptac@quizup.vn</a></p>
                  </div>
                </div>

                <div className="mb-3 d-flex align-items-start">
                  <span className="me-3 fs-3">📞</span>
                  <div>
                    <h5>Hotline</h5>
                    <p>Tư vấn & Hỗ trợ nhanh</p>
                    <a href="tel:19001234" className="fw-semibold fs-5">1900 1234</a>
                  </div>
                </div>

                <div className="mb-3 d-flex align-items-start">
                  <span className="me-3 fs-3">🕒</span>
                  <div>
                    <h5>Giờ làm việc</h5>
                    <p>Thứ 2 - Thứ 6: 08:00 - 17:30</p>
                    <p>Thứ 7: 08:00 - 12:00</p>
                  </div>
                </div>

                <div>
                  <h5>Kết nối với chúng tôi</h5>
                  <div className="d-flex gap-3">
                    <a href="#" title="Facebook" className="btn btn-outline-primary btn-sm">FB</a>
                    <a href="#" title="YouTube" className="btn btn-outline-danger btn-sm">YT</a>
                    <a href="#" title="TikTok" className="btn btn-outline-dark btn-sm">TT</a>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={7}>
              <Card className="p-4 shadow-sm border-0">
                <h3 className="mb-4 text-center">Gửi Tin Nhắn Cho Chúng Tôi</h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Họ và Tên</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Chủ đề</Form.Label>
                    <Form.Select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      isInvalid={!!errors.subject}
                    >
                      <option value="">-- Vui lòng chọn --</option>
                      <option value="support">Hỗ trợ kỹ thuật</option>
                      <option value="sales">Tư vấn lộ trình học</option>
                      <option value="partnership">Hợp tác</option>
                      <option value="other">Khác</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Tin nhắn</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                  </Form.Group>

                  <Button type="submit" variant="primary">Gửi Tin Nhắn</Button>
                  {statusMessage && (
                    <p className={`mt-3 ${statusMessage.includes("thành công") ? "text-success" : "text-danger"}`}>
                      {statusMessage}
                    </p>
                  )}
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9541629832786!2d106.67529097491565!3d10.73800248940898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a4663cb9%3A0x90998e3b5e4b3abf!2zTmd1eeG7hW4gVsSDbiBMaW5oLCBQaMaw4budbmcgVMOibiBQaG9uZywgUXXhuq1uIDcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1724920808381!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="QuizUp Location"
          ></iframe>
        </Container>
      </section>
    </main>
  );
}

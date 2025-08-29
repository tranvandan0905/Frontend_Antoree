"use client";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
    const [quizType, setQuizType] = useState(null);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const questions = {
        ielts: [
            { question: "Which of the following is a synonym for 'ubiquitous'?", options: ["Rare", "Pervasive", "Hidden", "Complex"], answer: "Pervasive" },
            { question: "The government plans to ___ new policies to combat climate change.", options: ["implement", "implicate", "improvise", "imply"], answer: "implement" },
        ],
        toeic: [
            { question: "Ms. Chen asked her assistant to ___ the report before the deadline.", options: ["finalize", "final", "finally", "finality"], answer: "finalize" },
            { question: "The new software is not ___ with our current operating system.", options: ["compatible", "comparable", "compelling", "composing"], answer: "compatible" },
        ],
    };

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");

    const startQuiz = (type) => {
        setQuizType(type);
        setShowQuiz(true);
        setScore(0);
        setCurrentQuestionIndex(0);
        setSelectedOption("");
    };

    const handleNext = () => {
        const q = questions[quizType][currentQuestionIndex];
        if (selectedOption === q.answer) setScore(score + 1);

        if (currentQuestionIndex < questions[quizType].length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption("");
        } else {
            setShowQuiz(false);
            setShowResults(true);
        }
    };

    return (
        <Container fluid className="p-0">
            {/* HEADER */}


            {/* HERO */}
            <section id="hero" className="py-5 text-center text-white" style={{ background: "linear-gradient(135deg,#4a5c78,#2b3a50)" }}>
                <Container>
                    <h1 className="fw-bold display-6">
                        Test Nhanh Trình Độ TOEIC/IELTS Sau 15 Phút
                    </h1>
                    <p className="lead mt-3 mb-4">
                        Chấm dứt ôn thi lan man. Biết chính xác <b>điểm yếu</b> & cần cải thiện điều gì để <b>bứt phá band điểm</b>.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">

                        <Link href="/user/quiz" className="btn btn-primary m-2">
                            🚀 Test nhanh IELTS 15 phút
                        </Link>
                        <Link href="#features" className="btn btn-secondary m-2">
                            🎯 Test nhanh TOEIC 15 phút
                        </Link>
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

            {/* CTA */}
            <section id="final-cta" className="py-5 bg-dark text-white text-center">
                <Container>
                    <h2 className="mb-4">Đừng Đoán Mò Nữa! Kiểm Tra Trình Độ Ngay Bây Giờ</h2>
                    <Button variant="danger" size="lg" onClick={() => startQuiz("ielts")}>🚀 Bắt Đầu Test & Nhận Lộ Trình Học Miễn Phí</Button>
                </Container>
            </section>
            {/* QUIZ MODAL */}
            {showQuiz && (
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center">
                    <Card className="p-4 shadow-lg" style={{ maxWidth: "600px", width: "100%" }}>
                        <h4 className="mb-3">{`Bài test nhanh ${quizType.toUpperCase()}`}</h4>
                        <p className="fw-medium">{questions[quizType][currentQuestionIndex].question}</p>
                        <div className="d-flex flex-column gap-2">
                            {questions[quizType][currentQuestionIndex].options.map((opt, idx) => (
                                <Button
                                    key={idx}
                                    variant={selectedOption === opt ? "primary" : "outline-secondary"}
                                    onClick={() => setSelectedOption(opt)}
                                >
                                    {opt}
                                </Button>
                            ))}
                        </div>
                        <Button className="mt-3 w-100" onClick={handleNext}>
                            {currentQuestionIndex === questions[quizType].length - 1 ? "Nộp bài" : "Câu tiếp theo"}
                        </Button>
                    </Card>
                </div>
            )}

            {/* RESULTS MODAL */}
            {showResults && (
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center">
                    <Card className="p-4 shadow-lg text-center" style={{ maxWidth: "400px", width: "100%" }}>
                        <h2 className="mb-3">Kết Quả</h2>
                        <p className="fs-5 mb-4">Số câu đúng: <b>{score}</b> / {questions[quizType].length}</p>
                        <Button variant="success" onClick={() => setShowResults(false)}>Đóng</Button>
                    </Card>
                </div>
            )}
        </Container>
    );
}
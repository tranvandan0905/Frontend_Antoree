
"use client";
import { Container, Button, Navbar, Nav, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [navActive, setNavActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const slides = [
        { img: "https://source.unsplash.com/random/100x100/?woman,portrait", quote: "Nhờ bài test đầu vào, mình biết mình yếu ở phần ngữ pháp nào để tập trung ôn luyện.", author: "Ngọc Anh" },
        { img: "https://source.unsplash.com/random/100x100/?man,portrait", quote: "Lộ trình học chi tiết và dễ theo dõi. Cảm ơn QuizUp!", author: "Minh Quân" },
        { img: "https://source.unsplash.com/random/100x100/?person,portrait", quote: "Kho tài liệu và bài tập chất lượng giúp cải thiện kỹ năng đọc hiểu.", author: "Hoài Thu" },
    ];

    useEffect(() => {
        // Sticky header
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        // Auto slide testimonials
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, [slides.length]);

    return (
        <>



            <main>
                {/* Hero */}
                <section id="hero" className="text-center py-5 bg-light">
                    <Container>
                        <h1>Biết Ngay Trình Độ TOEIC/IELTS Của Bạn Sau 15 Phút</h1>
                        <p className="subtitle mb-4">Chấm dứt việc ôn thi lan man. Nhận ngay phân tích chi tiết điểm yếu và lộ trình học được cá nhân hóa.</p>
                        <div className="hero-cta">
                            <Link href="/user/home" className="btn btn-primary m-2">
                                LÀM BÀI TEST MIỄN PHÍ
                            </Link>
                            <Link href="#features" className="btn btn-secondary m-2">
                                Khám phá lộ trình học
                            </Link>
                        </div>
                        <p className="hero-trust mt-3">Đã có <strong>hơn 10.000+</strong> học viên bắt đầu từ đây</p>
                    </Container>
                </section>

                {/* Solution */}
                <section id="solution" className="py-5">
                    <Container>
                        <h2 className="mb-4">Tại Sao Luyện Thi Mãi Vẫn Không Tiến Bộ?</h2>
                        <Row className="g-4">
                            <Col md={4} className="text-center">
                                <div className="p-3 border rounded">
                                    <div className="icon display-4">🎯</div>
                                    <h5>Test Nhanh Trình Độ</h5>
                                    <p>Bài test đầu vào giúp xác định chính xác điểm mạnh, điểm yếu và trình độ hiện tại.</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-center">
                                <div className="p-3 border rounded">
                                    <div className="icon display-4">🩺</div>
                                    <h5>"Bắt Bệnh" Chuyên Sâu</h5>
                                    <p>Hệ thống tự động phân tích lỗi sai, chỉ ra lỗ hổng kiến thức về từ vựng và ngữ pháp.</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-center">
                                <div className="p-3 border rounded">
                                    <div className="icon display-4">🗺️</div>
                                    <h5>Lộ Trình Cá Nhân Hóa</h5>
                                    <p>Nhận ngay bản đồ học tập thiết kế riêng, tập trung vào những gì bạn thực sự cần.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-5 bg-light">
                    <Container>
                        <h2 className="mb-4">Học Viên Của Chúng Tôi Đã Bứt Phá Như Thế Nào?</h2>
                        <div className="d-flex overflow-hidden">
                            <div className="d-flex" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "all 0.5s ease" }}>
                                {slides.map((s, i) => (
                                    <div key={i} className="testimonial-card p-3 border rounded me-3" style={{ minWidth: "300px" }}>
                                        <img src={s.img} alt={s.author} className="rounded-circle mb-2" />
                                        <p className="testimonial-quote">{s.quote}</p>
                                        <p className="testimonial-author fw-bold">{s.author}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>
            </main>


        </>
    );
}

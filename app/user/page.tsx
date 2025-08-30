
"use client";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [navActive, setNavActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const slides = [
        { img: "/images/anh-nguoi-mau-25.jpg", quote: "Nhờ bài test đầu vào, mình biết mình yếu ở phần ngữ pháp nào để tập trung ôn luyện.", author: "Ngọc Anh" },
        { img: "/images/lovepik-man-png-image_400498686_wh1200.png", quote: "Lộ trình học chi tiết và dễ theo dõi. Cảm ơn QuizUp!", author: "Minh Quân" },
        { img: "/images/z407811279454704d3b10be2c47b86e5bd170832bde562-16753562253021567389777.webp", quote: "Kho tài liệu và bài tập chất lượng giúp cải thiện kỹ năng đọc hiểu.", author: "Hoài Thu" },
        { img: "/images/anh-nguoi-mau-25.jpg", quote: "Kho tài liệu và bài tập chất lượng giúp cải thiện kỹ năng đọc hiểu.", author: "Hoài Thu" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
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

                <section id="hero" className="text-center py-5 bg-light  text-white" style={{ background: "linear-gradient(135deg, #353739ff, #615771ff)" }}>
                    <Container>
                        <h1>Biết Ngay Trình Độ TOEIC/IELTS Của Bạn Sau 15 Phút</h1>
                        <p className="subtitle mb-4">Chấm dứt việc ôn thi lan man. Nhận ngay phân tích chi tiết điểm yếu và lộ trình học được cá nhân hóa.</p>
                        <div className="hero-cta">
                            <Link href="/user/home" className="btn btn-primary m-2">
                                LÀM BÀI TEST MIỄN PHÍ
                            </Link>
                            <Link href="/user/learning" className="btn btn-secondary m-2">
                                Khám phá lộ trình học
                            </Link>
                        </div>
                        <p className="hero-trust mt-3">Đã có <strong>hơn 10.000+</strong> học viên bắt đầu từ đây</p>
                    </Container>
                </section>

                <section id="solution" className="py-5 bg-white">
                    <Container>
                        <h2 className="mb-5 text-center fw-bold" >
                            Tại Sao Luyện Thi Mãi Vẫn Không Tiến Bộ?
                        </h2>
                        <Row className="g-4 justify-content-center">
                            {[
                                { icon: "🎯", title: "Test Nhanh Trình Độ", text: "Bài test đầu vào giúp xác định chính xác điểm mạnh, điểm yếu và trình độ hiện tại." },
                                { icon: "🩺", title: '"Bắt Bệnh" Chuyên Sâu', text: "Hệ thống tự động phân tích lỗi sai, chỉ ra lỗ hổng kiến thức về từ vựng và ngữ pháp." },
                                { icon: "🗺️", title: "Lộ Trình Cá Nhân Hóa", text: "Nhận ngay bản đồ học tập thiết kế riêng, tập trung vào những gì bạn thực sự cần." },
                            ].map((item, idx) => (
                                <Col md={4} key={idx}>
                                    <div className="p-4 h-100 shadow-sm rounded-4 text-center hover-scale" style={{ transition: "all 0.3s" }}>
                                        <div className="icon display-3 mb-3">{item.icon}</div>
                                        <h5 className="fw-bold mb-2">{item.title}</h5>
                                        <p className="text-secondary">{item.text}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                <section id="testimonials" className="py-5 bg-light">
                    <Container>
                        <h2 className="mb-5 text-center fw-bold" >
                            Học Viên Của Chúng Tôi Đã Bứt Phá Như Thế Nào?
                        </h2>
                        <div className="d-flex overflow-hidden position-relative">
                            <div
                                className="d-flex"
                                style={{
                                    transform: `translateX(0%)`,
                                    transition: "none",
                                }}
                            >
                                {slides.map((s, i) => (
                                    <div
                                        key={i}
                                        className="testimonial-card p-4 shadow-sm rounded-4 bg-white me-4"
                                        style={{ minWidth: "300px", maxWidth: "320px", textAlign: "center" }}
                                    >
                                        <img
                                            src={s.img}
                                            alt={s.author}
                                            className="rounded-circle mb-3"
                                            style={{ width: "80px", height: "80px", objectFit: "cover", margin: "0 auto" }}
                                        />
                                        <p className="testimonial-quote fst-italic text-secondary mb-2">"{s.quote}"</p>
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

"use client";
import { useEffect, useState } from "react";
import {
    Container,
    Card,
    Form,
    Button,
    Row,
    Col,
    Modal,
} from "react-bootstrap";
import Link from "next/link";
import { getQuizQuestions, CheckQuizAnswers } from "../services/quizService";
import { PostrequestDetail } from "../services/RequestDetailService";
import AlertToast from "../components/AlertToast";
export default function QuizPage() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [alert, setAlert] = useState({
        message: null,
        variant: "danger",
    });
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const data = await getQuizQuestions();
                setQuestions(data.data || []);
            } catch (err) {
                console.error("Error loading quiz:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchQuestions();
    }, []);
    const handleReset = () => {
        setAnswers({});
        setResult(null);
        setShowModal(false);
    };
    

    const handleAnswer = (qId, value) => {
        setAnswers((prev) => ({
            ...prev,
            [qId]: value,
        }));
    };
    const handleSubmit = async () => {
        try {
            const userAnswers = Object.entries(answers).map(([qId, userAnswer]) => ({
                questionId: qId,
                userAnswer,
            }));
            if (userAnswers.length < questions.length) {
                setAlert({
                    message: `lòng làm đủ ${questions.length} câu trước khi nộp!`,
                    variant: "danger",
                });
                return;
            }
            const res = await CheckQuizAnswers(userAnswers);
            setResult(res.data);
            setShowModal(true);
        } catch (err) {
            console.error("Error submitting answers:", err);
        }
    };
    const handleRequestDetail = async () => {
        try {
            const data = await PostrequestDetail(email)
            if (data.data && Object.keys(data.data).length > 0) {
                setAlert({
                    message: data.message,
                    variant: "success",
                });
            } else {
                setAlert({
                    message: data.message,
                    variant: "danger",
                });
            }


        } catch (error) {
            console.error("Error submitting answers:", error);
        }


    }

    if (loading) {
        return <p className="text-center mt-4">Đang tải câu hỏi...</p>;
    }

    return (
        <Container className="py-4">
            <AlertToast alert={alert} setAlert={setAlert} />
           
            <div className="mb-3">
                <Link href="/" passHref>
                    <Button variant="outline-secondary" size="sm">
                        ⬅ Quay lại
                    </Button>
                </Link>
            </div>
            <h2 className="text-center fw-bold mb-4">📘 Bài test TOEIC nhanh</h2>
            {questions.length === 0 ? (
                <p className="text-center">Không có câu hỏi nào.</p>
            ) : (
                <Row className="justify-content-center">
                    <Col md={8}>
                        {questions.map((q, index) => (
                            <Card key={q._id} className="mb-3 shadow-sm">
                                <Card.Body>
                                    <Card.Title>
                                        {index + 1}. {q?.question}
                                    </Card.Title>
                                    <Form>
                                        {q?.options?.map((opt, i) => (
                                            <Form.Check
                                                key={i}
                                                type="radio"
                                                name={`q${index}`}
                                                label={opt}
                                                value={opt}
                                                checked={answers[q._id] === opt}
                                                onChange={() => handleAnswer(q._id, opt)}
                                            />
                                        ))}
                                    </Form>
                                </Card.Body>
                            </Card>
                        ))}
                        <div className="text-center mt-4 d-flex justify-content-center gap-3">
                            <Button variant="primary" size="lg" onClick={handleSubmit}>
                                ✅ Nộp bài
                            </Button>
                            <Button variant="warning" size="lg" onClick={handleReset}>
                                🔄 Làm lại
                            </Button>
                        </div>

                    </Col>
                </Row>
            )}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Kết quả bài test</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    {result && (
                        <>
                            <h5>
                                🎉 Bạn làm đúng {result.correct}/{result.total} câu
                            </h5>
                            <p className="mt-3">
                                Bạn muốn nhận <strong>lời giải chi tiết + 100 câu TOEIC miễn
                                    phí</strong>?
                            </p>
                            <Form>
                                <Form.Group>
                                    <Form.Control
                                        type="email"
                                        placeholder="Nhập email của bạn..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="success" className="mt-3 w-100" onClick={handleRequestDetail}>
                                    📩 Nhận Free
                                </Button>
                            </Form>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </Container>
    );
}

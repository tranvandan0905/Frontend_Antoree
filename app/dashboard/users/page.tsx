"use client";
import { useEffect, useState } from "react";
import { getLead } from "../../services/leadService";
import { getrequestDetail } from "../../services/RequestDetailService";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function UsersPage() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>("all");
    const [mode, setMode] = useState<"lead" | "free">("lead"); 
    useEffect(() => {
        fetchLead();
    }, []);

    const fetchLead = async () => {
        setLoading(true);
        try {
            const data = await getLead();
            setUsers(data.data || []);
            setMode("lead");
            setFilter("all");
        } catch (err) {
            console.error("Error loading lead:", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchRequestDetail = async () => {
        setLoading(true);
        try {
            const data = await getrequestDetail();
            setUsers(data.data || []);
            setMode("free");
            setFilter("all");
        } catch (err) {
            console.error("Error loading request detail:", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="border" role="status" />
                <span className="ms-2">Đang tải dữ liệu...</span>
            </div>
        );
    }

    // Lọc theo filter
    const filteredUsers = users.filter((u) => {
        if (filter === "sent") return u.isSent === true;
        if (filter === "unsent") return u.isSent === false;
        return true;
    });

    return (
        <Container className="mt-4">
            {/* Thanh nút chọn chế độ và bộ lọc */}
            <div className="d-flex justify-content-between mb-3">
                {/* Nhóm nút bên trái */}
                <div className="d-flex gap-2">
                    <Button
                        variant={mode === "free" ? "warning" : "outline-warning"}
                        onClick={fetchRequestDetail}
                    >
                        Users Free
                    </Button>
                    <Button
                        variant={mode === "lead" ? "primary" : "outline-primary"}
                        onClick={fetchLead}
                    >
                        Users mua tài liệu
                    </Button>
                </div>

          
                <div>
                    <ButtonGroup>
                        <Button
                            variant={filter === "sent" ? "success" : "outline-success"}
                            onClick={() => setFilter("sent")}
                        >
                            Đã gửi
                        </Button>
                        <Button
                            variant={filter === "unsent" ? "secondary" : "outline-secondary"}
                            onClick={() => setFilter("unsent")}
                        >
                            Chưa gửi
                        </Button>
                    </ButtonGroup>
                </div>
            </div>


   
            <Table striped bordered hover responsive className="text-center shadow-sm">
                <thead className="table-dark">
                    <tr>
                        <th>Email</th>
                        <th>Giá tiền</th>
                        <th>Trạng thái</th>
                        <th>Thời gian thực hiện</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((u) => (
                            <tr key={u._id}>
                                <td>{u.email}</td>
                              
                                <td>{u.score ?? 0}</td>
                                <td>
                                    {u.isSent ? (
                                        <Badge bg="success">Đã gửi</Badge>
                                    ) : (
                                        <Badge bg="secondary">Chưa gửi</Badge>
                                    )}
                                </td>
                                <td>{new Date(u.createdAt).toLocaleString("vi-VN")}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>Không có dữ liệu</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

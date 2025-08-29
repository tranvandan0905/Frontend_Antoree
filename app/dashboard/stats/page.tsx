"use client";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { stats as fetchStatsService } from "../../services/leadService";

export default function StatsPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await fetchStatsService();
        setStats(data);
      } catch (err) {
        console.error("Lỗi khi load thống kê:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Đang tải thống kê...</p>
      </div>
    );
  }

  if (!stats) {
    return <p className="text-center mt-5">Không có dữ liệu!</p>;
  }

  // Chart doanh thu theo tháng
  const revenueChart = {
    labels: stats.revenueByMonth.map((x) => x.month),
    datasets: [
      {
        label: "Doanh thu (VND)",
        data: stats.revenueByMonth.map((x) => x.total),
        backgroundColor: "#4BC0C0",
        borderRadius: 8,
      },
    ],
  };

  // Chart trình duyệt
  const browserChart = {
    labels: Object.keys(stats.browserCount),
    datasets: [
      {
        data: Object.values(stats.browserCount),
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <Container fluid className="mt-4">
      {/* Tiêu đề */}
      <h2 className="text-center fw-bold mb-4">📊 Dashboard Thống kê</h2>

      {/* Cards tổng quan */}
      <Row className="g-4">
        <Col md={3}>
          <Card className="p-3 text-center shadow-sm border-0 rounded-4 bg-light">
            <h6 className="text-muted">Tổng doanh thu</h6>
            <h3 className="fw-bold text-success">
              {stats.totalRevenue.toLocaleString()} đ
            </h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center shadow-sm border-0 rounded-4 bg-light">
            <h6 className="text-muted">Lượt truy cập</h6>
            <h3 className="fw-bold">{stats.totalVisitors}</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center shadow-sm border-0 rounded-4 bg-light">
            <h6 className="text-muted">Người dùng Free</h6>
            <h3 className="fw-bold text-primary">{stats.totalFree}</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center shadow-sm border-0 rounded-4 bg-light">
            <h6 className="text-muted">Người dùng đã mua</h6>
            <h3 className="fw-bold text-danger">{stats.totalFull}</h3>
          </Card>
        </Col>
      </Row>

      {/* Biểu đồ */}
      <Row className="mt-5 g-4">
        <Col md={6}>
          <Card className="p-4 shadow-sm border-0 rounded-4">
            <h5 className="fw-bold mb-3">📈 Doanh thu theo tháng</h5>
            <Bar data={revenueChart} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 shadow-sm border-0 rounded-4">
            <h5 className="fw-bold mb-3">🌐 Thống kê trình duyệt</h5>
            <Pie data={browserChart} />
          </Card>
        </Col>
      </Row>

      {/* Lịch sử truy cập */}
      <Row className="mt-5">
        <Col>
          <Card className="p-4 shadow-sm border-0 rounded-4">
            <h5 className="fw-bold mb-3">🕒 Lịch sử truy cập gần đây</h5>
            <Table hover responsive className="align-middle">
              <thead className="table-light">
                <tr>
                  <th>IP</th>
                  <th>Trình duyệt</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody>
                {stats.latestVisitors.map((v, i) => (
                  <tr key={i}>
                    <td>{v.ip || "-"}</td>
                    <td className="text-truncate" style={{ maxWidth: "250px" }}>
                      {v.userAgent || "Không xác định"}
                    </td>
                    <td>{new Date(v.visitedAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

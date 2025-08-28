import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";

import { FaTachometerAlt, FaUserFriends, FaChartLine } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-lg border-0 rounded-4">
            <CardBody className="text-center py-5">
              <FaTachometerAlt size={50} className="mb-3 text-primary" />
              <CardTitle className="mb-3 fs-2 fw-bold">Dashboard</CardTitle>
              <CardText className="fs-5 text-muted">
                Chào mừng bạn đến với trang quản trị 🚀  
              </CardText>
              <p className="text-secondary">
                Tại đây bạn có thể theo dõi <b>người dùng</b>, <b>hoạt động</b> và
                <b> báo cáo thống kê</b> một cách dễ dàng.
              </p>

              <Row className="mt-4">
                <Col md={4}>
                  <Card className="border-0 shadow-sm h-100 rounded-4">
                    <CardBody>
                      <FaUserFriends className="text-success mb-2" size={30} />
                      <h5>Người dùng</h5>
                      <p className="text-muted">Quản lý thông tin người dùng</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="border-0 shadow-sm h-100 rounded-4">
                    <CardBody>
                      <FaChartLine className="text-danger mb-2" size={30} />
                      <h5>Thống kê</h5>
                      <p className="text-muted">Xem báo cáo và biểu đồ</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="border-0 shadow-sm h-100 rounded-4">
                    <CardBody>
                      <FaTachometerAlt className="text-primary mb-2" size={30} />
                      <h5>Hoạt động</h5>
                      <p className="text-muted">Theo dõi các tác vụ mới nhất</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
   
    localStorage.removeItem("token"); 
    
    router.push("/");
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* Sidebar */}
        <Col xs={3} md={2} className="bg-dark text-white p-3">
          <h2 className="text-white mb-4">Admin</h2>
          <ListGroup variant="flush">
            <ListGroup.Item action href="/dashboard" className="bg-dark text-white border-0">
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item action href="/dashboard/users" className="bg-dark text-white border-0">
              Users
            </ListGroup.Item>
            <ListGroup.Item action href="/dashboard/stats" className="bg-dark text-white border-0">
              Stats
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col xs={9} md={10} className="bg-light p-4">
     
          <Navbar bg="light" expand="lg" className="mb-4 border-bottom">
            <Container fluid>
              <Navbar.Brand>Admin Dashboard</Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <div>{children}</div>
        </Col>
      </Row>
    </Container>
  );
}

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Card } from "react-bootstrap";
import { Loginadmin } from "../services/adminService";

export default function AdminLogin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await Loginadmin(name, password);
      if (data.data.error === false) {
        localStorage.setItem("token", data.data.token); 
        router.push("/dashboard"); 
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Lỗi kết nối server!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">🔐 Admin Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="w-100" variant="primary">
            Đăng nhập
          </Button>
        </Form>
      </Card>
    </div>
  );
}

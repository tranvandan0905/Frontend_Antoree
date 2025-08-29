"use client";
import { Container, Card } from "react-bootstrap";

export default function PrivacyPolicyPage() {
  return (
    <main className="page-content ">
      <section className="text-center mb-5 py-5  text-white  shadow-sm" style={{ background: "linear-gradient(135deg, #353739ff, #615771ff)" }}>
        <Container>
          <h1 className="mb-2 fw-bold">Chính Sách Bảo Mật</h1>
          <p className="text-white-50 fs-5">Cập nhật lần cuối: 29/08/2025</p>
        </Container>
      </section>

      <Container className="my-5 d-flex justify-content-center">
  <Card
    className="p-5 shadow-lg rounded-5 bg-white"
    style={{ maxWidth: "850px", width: "100%", transition: "all 0.3s" }}
  >
    <section className="mb-5 text-center">
      <h2 className="mb-3 text-primary fw-bold">1. Giới thiệu</h2>
      <p className="fs-6 text-secondary" style={{ lineHeight: 1.9 }}>
        Chào mừng bạn đến với <strong>QuizUp</strong>. Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn.
        Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn khi bạn sử dụng website của chúng tôi.
      </p>
    </section>
    <section className="mb-5">
      <h2 className="mb-3 text-primary fw-bold text-center">2. Thông tin chúng tôi thu thập</h2>
      <h3 className="mb-2 fw-semibold">a. Thông tin bạn cung cấp</h3>
      <p className="fs-6 text-secondary" style={{ lineHeight: 1.9 }}>
        Chúng tôi thu thập các thông tin bạn trực tiếp cung cấp khi đăng ký tài khoản, làm bài test hoặc liên hệ với chúng tôi, bao gồm:
      </p>
      <ul className="fs-6 text-secondary ps-4">
        <li>Họ và tên</li>
        <li>Địa chỉ email</li>
        <li>Mật khẩu (đã được mã hóa)</li>
        <li>Kết quả các bài test bạn đã thực hiện</li>
      </ul>

      <h3 className="mt-3 mb-2 fw-semibold">b. Thông tin thu thập tự động</h3>
      <p className="fs-6 text-secondary" style={{ lineHeight: 1.9 }}>
        Khi bạn truy cập website, chúng tôi có thể thu thập một số thông tin tự động như địa chỉ IP, loại trình duyệt, hệ điều hành, và các trang bạn đã xem.
      </p>
    </section>
    <section className="mb-5">
      <h2 className="mb-3 text-primary fw-bold text-center">3. Cách chúng tôi sử dụng thông tin</h2>
      <ul className="fs-6 text-secondary ps-4">
        <li>Cung cấp và duy trì dịch vụ, bao gồm việc tạo lộ trình học cá nhân hóa.</li>
        <li>Gửi các thông báo quan trọng về tài khoản và các cập nhật của khóa học.</li>
        <li>Gửi các thông tin marketing, tin tức (nếu bạn đồng ý nhận).</li>
        <li>Cải thiện và tối ưu hóa website của chúng tôi.</li>
      </ul>
    </section>
    <section className="mb-5">
      <h2 className="mb-3 text-primary fw-bold text-center">4. Chính sách Cookies</h2>
      <p className="fs-6 text-secondary" style={{ lineHeight: 1.9 }}>
        Chúng tôi sử dụng cookies để lưu trữ thông tin về phiên đăng nhập và các tùy chọn của bạn, giúp cải thiện trải nghiệm người dùng.
      </p>
    </section>
    <section className="mb-5">
      <h2 className="mb-3 text-primary fw-bold text-center">5. Quyền của bạn</h2>
      <p className="fs-6 text-secondary" style={{ lineHeight: 1.9 }}>
        Bạn có quyền truy cập, chỉnh sửa hoặc yêu cầu xóa dữ liệu cá nhân của mình. Vui lòng liên hệ với chúng tôi qua email{" "}
        <a href="mailto:hotro@quizup.vn" className="text-primary fw-semibold">hotro@quizup.vn</a> để thực hiện các quyền này.
      </p>
    </section>
    <section className="text-center">
      <h2 className="mb-3 text-primary fw-bold">6. Liên hệ</h2>
      <p className="fs-6 text-secondary" style={{ lineHeight: 1.9 }}>
        Nếu bạn có bất kỳ câu hỏi nào về Chính sách Bảo mật này, vui lòng liên hệ với chúng tôi.
      </p>
    </section>
  </Card>
  <style jsx>{`
    Card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0.75rem 1.5rem rgba(0,0,0,0.15);
    }
  `}</style>
</Container>


    </main>
  );
}

"use client";
import { Container } from "react-bootstrap";

export default function PrivacyPolicyPage() {
  return (
    <main className="page-content py-5">
      {/* Page Header */}
      <section className="text-center mb-5">
        <Container>
          <h1 className="mb-2">Chính Sách Bảo Mật</h1>
          <p className="text-muted">Cập nhật lần cuối: 29/08/2025</p>
        </Container>
      </section>

      {/* Content */}
      <Container>
        <section className="mb-4">
          <h2>1. Giới thiệu</h2>
          <p>
            Chào mừng bạn đến với QuizUp. Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn. 
            Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn khi bạn sử dụng website của chúng tôi.
          </p>
        </section>

        <section className="mb-4">
          <h2>2. Thông tin chúng tôi thu thập</h2>
          <h3>a. Thông tin bạn cung cấp</h3>
          <p>Chúng tôi thu thập các thông tin bạn trực tiếp cung cấp khi đăng ký tài khoản, làm bài test hoặc liên hệ với chúng tôi, bao gồm:</p>
          <ul>
            <li>Họ và tên</li>
            <li>Địa chỉ email</li>
            <li>Mật khẩu (đã được mã hóa)</li>
            <li>Kết quả các bài test bạn đã thực hiện</li>
          </ul>

          <h3>b. Thông tin thu thập tự động</h3>
          <p>Khi bạn truy cập website, chúng tôi có thể thu thập một số thông tin tự động như địa chỉ IP, loại trình duyệt, hệ điều hành, và các trang bạn đã xem.</p>
        </section>

        <section className="mb-4">
          <h2>3. Cách chúng tôi sử dụng thông tin</h2>
          <p>Thông tin của bạn được sử dụng cho các mục đích sau:</p>
          <ul>
            <li>Cung cấp và duy trì dịch vụ, bao gồm việc tạo lộ trình học cá nhân hóa.</li>
            <li>Gửi các thông báo quan trọng về tài khoản và các cập nhật của khóa học.</li>
            <li>Gửi các thông tin marketing, tin tức (nếu bạn đồng ý nhận).</li>
            <li>Cải thiện và tối ưu hóa website của chúng tôi.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>4. Chính sách Cookies</h2>
          <p>Chúng tôi sử dụng cookies để lưu trữ thông tin về phiên đăng nhập và các tùy chọn của bạn, giúp cải thiện trải nghiệm người dùng.</p>
        </section>

        <section className="mb-4">
          <h2>5. Quyền của bạn</h2>
          <p>
            Bạn có quyền truy cập, chỉnh sửa hoặc yêu cầu xóa dữ liệu cá nhân của mình. Vui lòng liên hệ với chúng tôi qua email 
            <a href="mailto:hotro@quizup.vn" className="text-primary ms-1">hotro@quizup.vn</a> để thực hiện các quyền này.
          </p>
        </section>

        <section className="mb-4">
          <h2>6. Liên hệ</h2>
          <p>Nếu bạn có bất kỳ câu hỏi nào về Chính sách Bảo mật này, vui lòng liên hệ với chúng tôi.</p>
        </section>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-5">
        <Container className="text-center">
          <p className="mb-0">© 2025 QuizUp. Đã đăng ký bản quyền.</p>
        </Container>
      </footer>
    </main>
  );
}

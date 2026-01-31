# Movie Backend API

🚀 Dự án backend cho ứng dụng xem phim K-Movie, được xây dựng bằng Node.js, Express và MongoDB.

## 📋 Giới thiệu
Đây là hệ thống API hỗ trợ các tính năng quản lý phim, danh sách xem sau (Watch Later) và quản lý thiết bị người dùng. Dự án được thiết kế theo cấu trúc MVC (Models - Views - Controllers) giúp dễ dàng mở rộng và bảo trì.

## 🛠️ Công nghệ sử dụng
- **Node.js & Express**: Framework chính để xây dựng server.
- **MongoDB & Mongoose**: Hệ quản trị cơ sở dữ liệu và thư viện ODM.
- **Dotenv**: Quản lý biến môi trường.
- **Nodemon**: Công cụ hỗ trợ phát triển (tự động restart server khi có thay đổi).

## 📂 Thu mục dự án
```text
Movie_BE/
├── src/
│   ├── config/      # Cấu hình database
│   ├── controllers/ # Xử lý logic nghiệp vụ
│   ├── models/      # Định nghĩa Schema MongoDB
│   ├── routes/      # Định nghĩa các endpoint API
│   └── app.js       # Khởi tạo Express app
├── .env             # Biến môi trường
├── server.js        # File chạy chính của server
└── package.json     # Thông tin dự án và dependencies
```

## ⚙️ Cài đặt & Chạy dự án

### 1. Yêu cầu hệ thống
- Node.js (phiên bản 18 trở lên)
- MongoDB (Local hoặc MongoDB Atlas)

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Cấu hình biến môi trường
Tạo file `.env` ở thư mục gốc và cấu hình như sau:
```env
PORT=3000
MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_db_name
```

### 4. Chạy server
Chế độ phát triển (sử dụng nodemon):
```bash
npm run dev
```

Chế độ production:
```bash
npm start
```

## 📡 API Endpoints

### Movies
- `GET /movies`: Lấy danh sách phim.
- Các API khác xem chi tiết tại `src/routes/movie.routes.js`.

### Watch Later
- `GET /watch-later`: Lấy danh sách xem sau.
- `POST /watch-later`: Thêm phim vào danh sách xem sau.
- Các API khác xem chi tiết tại `src/routes/watchLater.routes.js`.

### Devices
- `GET /devices`: Quản lý thông tin thiết bị.
- `POST /devices`: Đăng ký thiết bị mới.

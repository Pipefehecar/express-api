# 🚀 Express API with PostgreSQL

A robust REST API built with Express.js and PostgreSQL, featuring user management, authentication, and Swagger documentation.

## 📋 Features

- Express.js REST API
- PostgreSQL Database with Sequelize ORM
- Swagger API Documentation
- User Authentication & Authorization
- Environment Configuration
- CORS Support

## 🛠️ Prerequisites

- Node.js (v22 or higher)
- PostgreSQL
- npm or yarn

## ⚡ Quick Start

1. Clone the repository:
```bash

git clone https://github.com/yourusername/express-postgres-api.git
```
2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

## 📂 Project Structure

```
express-postgres-api/
├── src/
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── db.js         # Database connection
│   └── index.js      # Application entry point
├── swagger/          # Swagger documentation
└── README.md
```

## 🔗 API Documentation

API documentation is available through Swagger UI at:
```
http://localhost:3000/api/v1/api-docs
```

## 📡 Available Endpoints

- `GET /api/v1/users` - Get all users
- `POST /api/v1/users` - Create a new user
- `GET /api/v1/users/:id` - Get user by ID
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

## 🛠️ Development

Start the development server with hot reload:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## 🚀 Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
⭐ Made with ❤️ by Pipe Herrera ⭐
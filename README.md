# 🚀 Express API with PostgreSQL & MongoDB

A robust REST API built with Express.js using both PostgreSQL and MongoDB. Features user management with PostgreSQL and movie management with MongoDB, plus Swagger documentation.

## 📋 Features

- Express.js REST API
- Dual Database System:
  - PostgreSQL with Sequelize ORM (Users)
  - MongoDB with Mongoose ODM (Movies)
- Swagger API Documentation
- User & Movie Management
- Environment Configuration
- CORS Support

## 🛠️ Prerequisites

- Node.js (v22 or higher)
- PostgreSQL
- MongoDB
- npm or yarn

## ⚡ Quick Start

1. Clone the repository:
```bash
git clone https://github.com:Pipefehecar/express-api.git
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
express-dual-db-api/
├── src/
│   ├── models/
│   │   ├── mongoose/   # MongoDB models
│   │   └── sequelize/  # PostgreSQL models
│   ├── routes/         # API routes
│   ├── DB/     # Database connections
│   └── index.js        # Application entry point
├── swagger/            # Swagger documentation
└── README.md
```

## 🔗 API Documentation

API documentation is available through Swagger UI at:
```
http://localhost:3000/api/v1/api-docs
```

## 📡 Available Endpoints

### Users (PostgreSQL)
- `GET /api/v1/users` - Get all users
- `POST /api/v1/users` - Create a new user
- `GET /api/v1/users/:id` - Get user by ID
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

### Movies (MongoDB)
- `GET /api/v1/movies` - Get all movies
- `POST /api/v1/movies` - Create a new movie
- `GET /api/v1/movies/:id` - Get movie by ID
- `PUT /api/v1/movies/:id` - Update movie
- `DELETE /api/v1/movies/:id` - Delete movie

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

## 🤝 Environment Variables

```env
# Server Configuration
PORT=3000

# PostgreSQL Configuration
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=your_database_name
DB_HOST=localhost
DB_PORT=5432

# MongoDB Configuration
MONGO_URI=mongodb://username:password@localhost:27017/database_name
```

## 🗄️ Database Setup

### PostgreSQL
1. Create a PostgreSQL database
2. Update `.env` with your PostgreSQL credentials
3. Run migrations:
```bash
npm run migrate
```

### MongoDB
1. Start your MongoDB server
2. Update `.env` with your MongoDB URI
3. The collections will be created automatically

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
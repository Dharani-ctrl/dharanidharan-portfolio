# Portfolio Backend (Express.js + MongoDB)

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the server folder:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 3. Run Development Server
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PATCH /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/:category` - Get skills by category
- `POST /api/skills` - Create skill category
- `PATCH /api/skills/:id` - Update skill

### Experience
- `GET /api/experience` - Get all experience
- `GET /api/experience/:id` - Get single experience
- `POST /api/experience` - Create experience
- `PATCH /api/experience/:id` - Update experience
- `DELETE /api/experience/:id` - Delete experience

### Education
- `GET /api/education` - Get all education
- `GET /api/education/:id` - Get single education
- `POST /api/education` - Create education
- `PATCH /api/education/:id` - Update education
- `DELETE /api/education/:id` - Delete education

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PATCH /api/contact/:id` - Update contact status

## Database Schema

All models use MongoDB with Mongoose. See `/models` folder for schema definitions.

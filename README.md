# SkillSphere

SkillSphere is a comprehensive platform designed to enhance professional networking and skills sharing. This application brings together powerful features for collaboration, learning, and professional growth.

## Features

- 🗄️ **MongoDB Integration**: Robust database for storing user and post data.
- 🔐 **Authentication System with JWT**: Secure login and user sessions.
- ✉️ **Welcome Emails**: Personalized onboarding emails for new users.
- 🎨 **Design with Tailwind & DaisyUI**: Modern and responsive user interface.
- 🛡️ **Data Protection**: Strong measures to ensure user data security.
- 🤝 **Connection Requests**: Send, accept, and reject connection requests.
- 📝 **Creating and Sharing Posts**: Share updates and engage with the community.
- 🖼️ **Image Upload**: Upload images for posts and profiles, fully managed by Cloudinary.
- 👤 **Profile Creation and Updates**: Build and customize user profiles.
- 👥 **Suggested Users Feature**: Discover and connect with new professionals.
- 👍 **Like and Comment on Posts**: Engage with posts through likes and comments.
- ⌛ **And a lot more...**

## Built With

### Frontend

- **Framework**: [React](https://reactjs.org/) (built with [Vite](https://vitejs.dev/))
- **State Management**: [@tanstack/react-query](https://tanstack.com/query/latest)
- **Routing**: [react-router-dom](https://reactrouter.com/en/main)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)
- **Notifications**: [react-hot-toast](https://react-hot-toast.com/)
- **Icons**: [lucide-react](https://lucide.dev/)

### Backend

- **Server Framework**: [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) and [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Email Service**: [Mailtrap](https://mailtrap.io/)
- **Cloud Storage**: [Cloudinary](https://cloudinary.com/)
- **Environment Management**: [dotenv](https://www.npmjs.com/package/dotenv)

## Installation

To set up the SkillSphere project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/atlas/database) cluster configured
- [Cloudinary](https://cloudinary.com/) account
- Package Manager: npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   npm install
   ```

3. Configure the `.env` file:

   - Add your MongoDB URI, JWT secret, Mailtrap credentials, and Cloudinary keys.
   - Refer to the `.env` example in the documentation.

4. Start the development server:

   ```bash
   npm run dev
   ```

---

### User Onboarding

- **Sign Up/Login**: Users must create an account or log in to access the app.
- **Welcome Emails**: Receive a welcome email upon registration.

### Profile Management

- Create and update user profiles with images and details.
- Discover and connect with suggested users.

### Networking Features

- Send, accept, or reject connection requests.
- Share posts with images and captions.
- Like and comment on posts to engage with the community.

## Contributing

Contributions are welcome! If you'd like to improve this project, please fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Contact

Feel free to reach out if you have any questions!

- **GitHub**: [rajput-vishal01](https://github.com/rajput-vishal01)
- **Email**: [askvishal.me@gmail.com](mailto:askvishal.me@gmail.com)

---

Happy Networking! 🚀

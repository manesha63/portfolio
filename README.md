# Personal Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC.svg)](https://tailwindcss.com/)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Professional section with education, skills, and projects
- Personal section with hobbies and social connections
- Contact form with email integration
- Responsive design
- Smooth animations
- Easy to update and maintain

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

To start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000`

### Building for Production

To create a production build:
```bash
npm run build
```

## Environment Variables Setup

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create an email service (e.g., Gmail)
3. Create an email template
4. Get your service ID, template ID, and public key
5. Add them to your `.env` file as shown above
6. Add `.env` to your `.gitignore` file to keep your keys secure

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```
3. Make your changes
4. Test your changes thoroughly
5. Submit a pull request

### Code Style Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Follow the existing code structure
- Add comments for complex logic
- Keep components small and focused
- Use meaningful variable and function names

### Testing

Before submitting a pull request:
1. Run the test suite:
```bash
npm test
```
2. Ensure all tests pass
3. Add new tests for any new features

## Updating Content

### Professional Section

1. Education: Update the education details in `src/pages/Professional.tsx`
2. Skills: Modify the skills list in the Skills section
3. Projects: Add or modify projects in the Projects section
4. Resume: Replace `/public/resume.pdf` with your actual resume

### Personal Section

1. Hobbies: Update the hobbies section in `src/pages/Personal.tsx`
2. Photos: Add your photos to the `/public` directory and update the image paths
3. Social Links: Update the social media links with your profiles

### Home Page

1. Profile Picture: Replace `/public/profile.jpg` with your photo
2. Bio: Update the bio text in `src/pages/Home.tsx`

## Color Theme

The website uses the following color scheme:

- Primary: #0F172A (Midnight Navy Blue)
- Secondary: #38BDF8 (Bright Sky Blue Accent)
- Background: #1E293B (Dark Gray-Blue Background)
- Text Primary: #F8FAFC (Almost White)
- Text Secondary: #94A3B8 (Muted Light Gray-Blue)
- Button Hover / Accents: #3B82F6 (Bright Blue Hover)

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- EmailJS (contact form)
- React Router (navigation)

## License

This project is open source and available under the MIT License. See the [LICENSE](LICENSE) file for details.

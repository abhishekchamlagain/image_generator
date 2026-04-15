# Image Generator App

A simple React app that generates images based on user search queries using the Pixabay API.

## Features
- Search for images by name
- Display high-quality images from Pixabay
- Simple and beginner-friendly UI
- Built with React, Vite, and Tailwind CSS
- Error handling for searches with no results

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create .env File
Create a `.env` file in the root directory and add your Pixabay API key:
```
VITE_PIXABAY_API_KEY=your_api_key_here
```

Get your free API key: [Pixabay API](https://pixabay.com/api/)

### 3. Run the App
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## How to Use
1. Type an image name in the input field
2. Click "Generate Image" button
3. Wait for the image to load
4. See the generated image displayed below

## Technologies Used
- React
- Vite
- Tailwind CSS
- Pixabay API

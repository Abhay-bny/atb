# WebTouch Bar | Interactive Experience

An interactive Apple Touch Bar simulator with dynamic app contexts, authentic macOS aesthetics, and AI-powered shortcuts.

## Running Locally

To start the application on your machine:

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  **Access the app:**
    Open [http://localhost:9002](http://localhost:9002) in your browser.

## Features

- **Dynamic App Contexts**: The Touch Bar adapts as you switch between Safari, Music, Finder, and more.
- **AI Quick Actions**: Context-aware suggestions powered by Genkit and Google Gemini.
- **System Controls**: Fully functional Brightness and Volume sliders in the Control Strip.
- **Function Keys**: Toggle between app-specific controls and standard F1-F12 keys (Hold `Fn` or click the toggle).
- **macOS Theme**: Pixel-perfect replication of the Apple design language, including the "Space Gray" color palette and San Francisco-style typography.

## Environment Setup

To use the AI-powered quick actions, you will need a Gemini API key. Add it to your `.env` file:

```env
GOOGLE_GENAI_API_KEY=your_api_key_here
```

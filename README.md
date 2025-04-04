# 🎥 VidStream AI

A powerful video recording, streaming, and collaboration platform — built with Next.js, Electron, and Express. VidStream AI makes sharing videos with prospects and teams seamless, enriched with AI-powered features and desktop-native performance.

---

## 🚀 Features

### 🎬 Video Recording & Sharing
- Real-time screen and webcam capture
- Record in 720p and 1080p
- Dynamic video length based on user subscription
- Custom thumbnail embeds for email outreach

### ⚡ AI-Powered Intelligence
- AI-generated video summaries, titles, and descriptions
- Transcription and text extraction from recordings
- 1-time try AI features for guest users

### 📤 Instant Collaboration
- Share videos instantly via links
- Activity feed with viewer comments
- Email notifications when the first viewer watches a video
- View count tracking per video
- Workspaces to invite team members

### 🖥️ Desktop App
- Built with Electron
- Access user's native devices (camera, mic, screen)
- Preset saving for preferred devices
- Desktop-native notifications

### ☁️ Backend & Storage
- Express.js server with real-time socket support
- Video uploads to AWS
- CMS for in-app marketing
- Free and pro plans for different user tiers

---

## 🧱 Tech Stack

| Part        | Stack              |
|-------------|-------------------|
| Frontend    | Next.js           |
| Backend     | Express.js        |
| Desktop App | Electron.js       |
| Realtime    | WebSockets (via Express) |
| Payments    | Stripe *(Optional)* |
| Storage     | AWS S3            |
| AI          | OpenAI API        |

---

## 🛠️ Project Structure

```bash
vidstream-ai/
├── client/               # Next.js frontend
├── electron/             # Electron desktop app
├── express/              # Express backend API
├── .gitignore
├── README.md
# Clone the repo
git clone https://github.com/OM-TIWARI123/vidstream-ai.git
cd vidstream-ai

# Install client
cd client && npm install

# Install backend
cd ../express && npm install

# Install desktop app
cd ../electron && npm install

# Smart Factory AI Platform

Advanced AI-powered quality control and anomaly detection system built with cutting-edge computer vision and deep learning technologies.

<!-- This is a Python-based AI project with FastAPI backend and Next.js frontend -->

## 🚀 Features

- **Computer Vision AI**: CNN model with 98.2% accuracy for defect detection
- **Sensor Analytics**: LSTM Autoencoder for predictive maintenance
- **Real-time Processing**: Sub-second inference capabilities
- **Production Ready**: Containerized deployment with Docker

## 🏗️ Architecture

- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Backend**: FastAPI with Python 3.9
- **AI Models**: TensorFlow 2.13.0 (CNN + LSTM)
- **Deployment**: Docker + Vercel

## 📦 Quick Start

### Backend (Docker)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build manually
docker build -t smart-factory-backend .
docker run -p 8001:8001 smart-factory-backend
```

### Frontend (Development)

```bash
cd smart-factory-frontend
npm install
npm run dev
```

## 🌐 Deployment

### Backend Deployment

1. **Docker Hub** (Recommended):
   ```bash
   docker build -t yourusername/smart-factory-backend .
   docker push yourusername/smart-factory-backend
   ```

2. **Railway/Render/Heroku**:
   - Connect your GitHub repository
   - Set environment variables
   - Deploy automatically

### Frontend Deployment

1. **Vercel** (Recommended):
   ```bash
   cd smart-factory-frontend
   vercel --prod
   ```

2. **Set Environment Variables**:
   - `NEXT_PUBLIC_API_URL`: Your backend API URL

## 🔧 Environment Variables

### Backend
- `PORT`: Server port (default: 8001)
- `IMG_MODEL_PATH`: Path to CNN model
- `SENSOR_MODEL_PATH`: Path to LSTM model
- `SCALER_PATH`: Path to scaler file
- `WINDOW_SIZE`: LSTM window size
- `ANOMALY_THRESHOLD`: Anomaly detection threshold

### Frontend
- `NEXT_PUBLIC_API_URL`: Backend API URL

## 📊 API Endpoints

- `POST /predict-image/`: Image quality analysis
- `POST /predict-sensor/`: Sensor anomaly detection

## 🛠️ Development

### Prerequisites
- Python 3.9+
- Node.js 18+
- Docker (for deployment)

### Local Development
```bash
# Backend
pip install -r requirements.txt
python scripts/backend_api.py

# Frontend
cd smart-factory-frontend
npm install
npm run dev
```

## 📈 Performance

- **Image Analysis**: 98.2% accuracy on test dataset
- **Sensor Detection**: 96.7% anomaly detection accuracy
- **Inference Time**: < 1 second per prediction
- **Training Data**: 50,000+ images, 10,000+ sensor sequences

## 🔒 Security

- Non-root Docker containers
- CORS enabled for frontend communication
- Environment variable configuration
- Input validation and error handling

## 📝 License

MIT License - see LICENSE file for details 
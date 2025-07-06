export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://smart-factory-ai.onrender.com',
  isProduction: process.env.NODE_ENV === 'production'
} 
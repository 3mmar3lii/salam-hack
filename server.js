require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./db/db');

const v1Routes = require('./routes');

// Middlewares
const { errorHandler } = require('./middlewares/error.middleware');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Database Connection
connectDB();

// API Routes
app.use('/api/v1', v1Routes);




// Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

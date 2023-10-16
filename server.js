const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', require('./routes/api/userRoutes'));
app.use('/api/thoughts', require('./routes/api/thoughtRoutes'));
app.use('/api/reactions', require('./routes/api/reactionRoutes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

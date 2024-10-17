const express= require('express');
const cors= require('cors');
const connectDB= require('./config/db');


connectDB();

const app = express();
app.use(cors());

app.use(express.json()); // This should come before any routes that expect JSON input

// Routes
app.use('/api/category', require('./routes/categoryRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>
console.log(`server running at ${PORT}`));
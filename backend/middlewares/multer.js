const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

// Configure cloudinary with credentials from environment variables
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// Set up the storage for multer to use, specifying Cloudinary as the destination
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'kfc_product_images', // The target folder on Cloudinary
        allowedFormats: ['jpg', 'png', 'jpeg'], // Accepted file formats
        transformation: [{ width: 500, height: 500, crop: 'limit' }], // Image transformations
        public_id: (req, file) => file.originalname // Use the original filename as the public ID
    }
});

// Create a multer instance specifying our storage option
const upload = multer({ storage: storage });

// Export the configured multer upload middleware
module.exports = upload;

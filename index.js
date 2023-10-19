// Import necessary packages and modules
import express from 'express'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config();
// Create an Express.js app
const app = express();

// Set up environment variables for Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Define routes
app.get('/', (req, res) => {
    res.send("Hello, I am working with Supabase on the server.");
});

// Listen on a port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

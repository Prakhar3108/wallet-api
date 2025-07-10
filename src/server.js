import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js"; // Adjust the path as necessary
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js"; // Adjust the path as necessary

import job  from "./config/cron.js";

dotenv.config();

const app = express();

if (process.env.NODE_ENV==="production") job.start()  ;

// import cors from "cors";

//middleware
app.use(rateLimiter);

app.use(express.json());

// app.use((req, res, next) => {
//     console.log("Hey we hit a request, the method is:", req.method);
//     next();
// }); 

const PORT = process.env.PORT || 5001;

app.get("/api/health", (req,res) => {
res.status(200).json({status: "ok"});
});


async function initDB() {
    try {   
        await sql `CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        category varchar(255) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`;



        console.log("Database initialized successfully");
     } catch (error) {
        console.error("Error initializing database:", error);
        process.exit(1); 
     }
    
}


app.get("/", (req, res) => {
    res.send("Its working");
});

app.use("/api/transactions", transactionsRoute);



initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is up and running on PORT:", PORT); 
    });
});

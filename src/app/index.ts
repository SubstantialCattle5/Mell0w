import express from "express";
import hackathon from "./routes/hackathons";
import domains from "./routes/domains";

const app = express();

app.use(express.json());


app.use("/hackathons", hackathon);
app.use("/domains", domains);

export default app;

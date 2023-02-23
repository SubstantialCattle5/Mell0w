import express from "express";
import hackathon from "./routes/hackathons";
import domains from "./routes/domains";
import users from "./routes/users";

const app = express();

app.use(express.json());

app.use("/users", users);
app.use("/hackathons", hackathon);
app.use("/domains", domains);

export default app;

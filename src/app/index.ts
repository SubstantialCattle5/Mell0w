import express from "express";
import hackathon from "./routes/hackathons";
import domains from "./routes/domains";
import users from "./routes/users";
import admins from "./routes/admins";

const app = express();

app.use(express.json());

app.use("/user", users);
app.use("/admin" , admins) ; 
app.use("/hackathon", hackathon);
app.use("/domain", domains);

export default app;

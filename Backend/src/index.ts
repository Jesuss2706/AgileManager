import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookiesParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import usersRoute from "./routes/usersRoute";

dotenv.config();

const app = express();
const _PORT = process.env.PORT_APPLICATION;

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookiesParser());
app.use(bodyParser.json());

//routes
app.use("/api/users", usersRoute);
//app.use("/api/status", statusRoute);
//app.use("/api/priority", priorityRoute);
//app.use("/api/task", taskRoute);

app.use(express.static("public"));

const server = http.createServer(app);

server.listen(_PORT, () => {
  console.log(`Server running on http://localhost:${_PORT}/api`);
});

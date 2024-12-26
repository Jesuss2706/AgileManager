import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookiesParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import employeesRoute from "./routes/EmployeesRoute";

dotenv.config();

const app = express();
const _PORT = process.env.PORT_APPLICATION;

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookiesParser());
app.use(bodyParser.json());

//routes
app.use("/api/users", employeesRoute);
app.use(express.static("public"));

const server = http.createServer(app);

server.listen(_PORT, () => {
  console.log(`Server running on http://localhost:${_PORT}/api`);
});

import express from "express";
import cors from "cors";

import accountRoute from "./routes/Account";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/accounts", accountRoute);

app.listen(3001, () => console.log("server running at port 3001"));

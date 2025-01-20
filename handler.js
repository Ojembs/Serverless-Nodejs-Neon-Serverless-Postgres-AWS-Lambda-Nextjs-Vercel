const serverless = require("serverless-http");
const express = require("express");
const { getDbClients } = require('./src/db/clients.js')
const app = express();
const PORT = 3000

app.get("/", async (req, res, next) => {
  const sql = await getDbClients()
  const result = await sql`SELECT * FROM my_table;`
  return res.status(200).json({
    message: "Hello from root!",
    result: result
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// app.listen(PORT, () => {
//   console.log(`Server started on port: ${PORT}`)
// })

exports.handler = serverless(app);

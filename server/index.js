const express = require("express");

const app = express();

const page = (script) => {
  return `
    <html>
      <body>
        <div id="app"></div>
        <script type="module" src="script/${script}"></script>
      </body>
    </html>`;
}

app.use((req, res, next) => {
  console.log(req.path);
  next();
});


app.get("/index", (req, res) => {
  res.send(page("index.js"));
});

app.get("/other", (req, res) => {
  res.send(page("other.js"));
});

app.use("/script", express.static("/home/node/app/build/build"));

app.listen(3000, () => {console.log("server running")});

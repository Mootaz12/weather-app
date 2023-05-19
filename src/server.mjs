import express from "express";
import https from "https";
import path from "path";
import bodyParser from "body-parser";

const app = express();
app.use(express.static(path.join("")));
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/", function (req, res) {
  const place = req.body.place;

  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const location = weatherData.location.name;
      const weatherCondition = weatherData.current.condition.text;
      const imgUrl = weatherData.current.condition.icon;
      res.write(`<h1>${location}</h1>`);
      res.write(`<p>${weatherCondition}</p>`);
      res.write(`<img src="${imgUrl}" />`);
      res.send();
    });
  });
});
app.listen(8080, () => {
  console.log("listening on port 8080");
});

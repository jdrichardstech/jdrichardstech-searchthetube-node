const express = require("express");
const router = express.Router();
const search = require("youtube-search");

router.get("/", function(req, res, next) {
  const opts = {
    maxResults: 10,
    key: "AIzaSyCxSusaCdp2Tz_SV_ceSDKSdhvLSTZ7UEI"
  };
  let searchItem = req.query.item;
  search(searchItem, opts, function(err, results) {
    if (err) return console.log(err);

    let content = {
      results: results,
      item: searchItem
    };

    //this can be used to render the json from which you choose your values to display
    res.json(results);
    res.render("index", content);

    // let format = req.query.format == null ? "html" : req.query.format;

    // if (format == "json") {
    //   res.json(results);
    // } else {
    //   res.render("index", content);
    // }
  });
});
module.exports = router;

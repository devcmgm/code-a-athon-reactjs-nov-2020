
module.exports = (req, res) => {
 // localStorage.setItem("data", req.json);
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
}

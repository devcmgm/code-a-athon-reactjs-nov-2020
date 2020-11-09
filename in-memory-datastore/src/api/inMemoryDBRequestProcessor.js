
module.exports = (req, res) => {
  const PouchDB = require('pouchdb');
  const db = new PouchDB('my_database');

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
}

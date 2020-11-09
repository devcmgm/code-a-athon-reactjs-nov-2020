var PouchDB = require('pouchdb');
var db = new PouchDB('my_database');


module.exports = (req, res) => {
  db.put(JSON.stringify(req.json), function callback(err, result) {
    if (!err) {
      console.log('Successfully posted a todo!');
    } else {
      console.log('error:' + err)
    }
  });

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
}

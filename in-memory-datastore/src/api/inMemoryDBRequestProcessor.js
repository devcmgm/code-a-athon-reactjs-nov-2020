var PouchDB = require('pouchdb');
var db = new PouchDB('my_database');

function showTodos() {
  db.allDocs({include_docs: true, descending: true}, function(err, doc) {
   return doc.rows;
  });
}

module.exports = (req, res) => {
  db.put(res.json, function callback(err, result) {
    if (!err) {
      console.log('Successfully posted a todo!');
    }
  });
  var data =  db.allDocs({include_docs: true, descending: true}, function(err, doc) {
    return doc.rows;
  });

  res.json({
    body: req.body + data,
    query: req.query,
    cookies: req.cookies,
  })
}

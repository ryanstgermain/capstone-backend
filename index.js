const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const queries = require('./queries.js');
const knex = require('knex');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    queries.dbQueryGetAll().then(response => res.send(response))
})

app.get('/:id', (req, res) => {
    queries.dbQueryGetById(req.params.id).then(listings => res.send(listings))
})

app.post('/', (req, res) => {
    queries.dbQueryCreateListing(req.body).then(listings => res.send(listings))
})

app.delete('/:id', (req, res) => {
    queries.deleteListing(req.params.id).then(res.status(204).send())
})

app.put('/:id', (req, res) => {
    queries.dbQueryUpdateListing(req.params.id, req.body).then(updatedListingInfo => res.json(updatedListingInfo[0]))
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, function() {
    console.log(`Listening on ${port}`);
})

module.exports = app


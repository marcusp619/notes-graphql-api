'use strict';
const {graphql} = require('graphql');
const schema = require('./schema');

module.exports.queryNotes = (event, context, callback) => {
  graphql(schema, event.body)
    .then(result =>
      callback(null, {
        statusCode: 200,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(result),
      }),
    )
    .catch(callback);
};

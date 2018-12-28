'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = category =>
  dynamoDb
    .scan({
      TableName: 'note-app-gql-table',
      FilterExpression: "#tg = :ttt ",
      ExpressionAttributeNames: {
        "#tg": "tag"
      },
      ExpressionAttributeValues: {
        ":ttt": `${category}`
      }
    })
    .promise()
    .then(r => r.Items);
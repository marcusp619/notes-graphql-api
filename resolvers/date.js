'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = date =>
  dynamoDb
    .scan({
      TableName: 'note-app-gql-table',
      FilterExpression: "contains (#dt, :dddd)",
      ExpressionAttributeNames: {
        "#dt": "addedAt"
      },
      ExpressionAttributeValues: {
        ":dddd": `${date}`
      }
    })
    .promise()
    .then(r => r.Items);
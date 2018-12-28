'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = tag => {
  const params = {
    TableName: 'note-app-gql-table',
    Key: {
      tag: tag,
      addedAt: "1545983568441"
    },
  };
  return dynamoDb
    .get(params)
    .promise()
    .then(r => r.Item)
};

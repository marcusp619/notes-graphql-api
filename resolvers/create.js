'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuidv4 = require('uuid/v4')
module.exports = data => {
  const params = {
    TableName: 'note-app-gql-table',
    Item: {
      title: data.title,
      noteDescription: data.noteDescription,
      tag: data.tag,
      id: uuidv4(),
      addedAt: `${Date.now()}`,
    },
  };
  return dynamoDb
    .put(params)
    .promise()
    .then(result => params.Item);
};

import AWS from 'aws-sdk';

/**
 * Get and item from a dynamoDB instance
 * @param {string} tableName The name of the table to scan
 **/

module.exports.getAllPlayers = ( tableName  ) => {

  // create a new ddb
  const dynamodb = new AWS.DynamoDB();

  // construct the params for the get request
  const params = {
    "TableName": tableName
  };

  // make the getItem call
  dynamodb.scan(params, (err, data) => {
    if err throw err;
    return data;
  })

}

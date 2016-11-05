import AWS from 'aws-sdk';
import _ from 'underscore';

/**
 * Get and item from a dynamoDB instance
 * @param {string} tableName The name of the table to scan
 **/

module.exports.getAllPlayers = ( tableName ) => {

  AWS.config.update({
      region: "us-west-2"
  });

  // create a new ddb
  const dynamodb = new AWS.DynamoDB();

  // construct the params for the get request
  const params = {
    "TableName": tableName
  };

  // make the getItem call
  return new Promise((resolve, reject) => {
    dynamodb.scan(params, (err, data) => {
      if (err) reject(err);
      const players = [];
      data.Items.forEach((item) => {
        players.push(_.mapObject(item, (val, key) => {
          const value = _.values(val);
          const newItem = item[key] = value[0];
          return newItem;
        }));
      })
      resolve(players);
    });
  });

}

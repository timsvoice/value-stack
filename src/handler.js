'use strict';

import graphqlSchema from './lib/schema.js';
import { graphql } from 'graphql';

module.exports.graphql = function(event, context, callback) {

	const body = event.body;
	const query = JSON.parse(body).query;

	return graphql(graphqlSchema, query)
		.then((response) => {

			const data = {
				statusCode: 200,
				headers: {
					"Access-Control-Allow-Origin" : "*" // Required for CORS support to work
				},
				body: JSON.stringify(response)
			};

			callback(null, data)
		})
		.catch((error) => callback(error));
};

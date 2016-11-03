'use strict';

import graphqlSchema from './lib/schema.js';
import { graphql } from 'graphql';

module.exports.graphql = function(event, context, callback) {

	const body = event.body;
	const query = JSON.parse(body).query;

	return graphql(graphqlSchema, query)
		.then((response) => {
			callback(null, response)
		})
		.catch((error) => callback(error));
};

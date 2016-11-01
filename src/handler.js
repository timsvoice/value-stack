'use strict';

import graphqlSchema from './lib/schema.js';
import { graphql } from 'graphql';

module.exports.graphql = function(event, context, cb) {

	const query = event.body;

	return graphql(graphqlSchema, query)
    .then((response) => {
			cb(null, response)
    })
    .catch((error) => {
			cb(error)
    })
};

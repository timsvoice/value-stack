(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _schema = __webpack_require__(1);

	var _schema2 = _interopRequireDefault(_schema);

	var _graphql = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports.graphql = function (event, context, callback) {

		var body = event.body;
		var query = JSON.parse(body).query;
		console.log('Query', JSON.parse(body).query);
		return (0, _graphql.graphql)(_schema2.default, query).then(function (response) {
			console.log('Response', response);
			callback(null, response);
		}).catch(function (error) {
			return callback(error);
		});
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _graphqlTools = __webpack_require__(2);

	var _resolvers = __webpack_require__(3);

	var _resolvers2 = _interopRequireDefault(_resolvers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var schema = '\n  type Post {\n    name: String\n  }\n\n  # the schema allows the following query:\n  type RootQuery {\n    post: Post\n  }\n\n  # we need to tell the server which types represent the root query\n  # and root mutation types. We call them RootQuery and RootMutation by convention.\n  schema {\n    query: RootQuery\n  }\n';

	var graphqlSchema = (0, _graphqlTools.makeExecutableSchema)({
	  typeDefs: schema,
	  resolvers: _resolvers2.default
	});

	exports.default = graphqlSchema;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("graphql-tools");

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var resolvers = {
	  RootQuery: {
	    post: function post() {
	      return { name: 'Successful Query' };
	    }
	  }
	};

	exports.default = resolvers;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("graphql");

/***/ }
/******/ ])));
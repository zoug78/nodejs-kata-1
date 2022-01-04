const { GraphQLSchema, GraphQLSchemaConfig } = require('graphql');
const { queryType } = require('./query');


var schema = new GraphQLSchema({
    query: queryType
})

module.exports = {
    schema
}

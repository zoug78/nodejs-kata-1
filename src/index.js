var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var schema = require('./controller')

var root = {
    test: () => {
      return 'coucou';
    },
  };


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');
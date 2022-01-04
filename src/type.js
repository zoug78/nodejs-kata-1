const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql')

const typesAuthors = new GraphQLObjectType({
  name: 'Author',
  fields: {
    email: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
  }
})

const typesBooks = new GraphQLObjectType({
  name: 'Books',
  fields: {
    title: { type: GraphQLString },
    isbn: { type: GraphQLID },
    authors: { type: GraphQLString },
    description: { type: GraphQLString },
  }
})

const typesMagazines = new GraphQLObjectType({
  name: 'Magazines',
  fields: {
    title: { type: GraphQLString },
    isbn: { type: GraphQLID },
    authors: { type: GraphQLString },
    publishedAt: { type: GraphQLString },
  }
})

module.exports = { typesAuthors, typesBooks, typesMagazines};


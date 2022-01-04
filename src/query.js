const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} = require('graphql');

const { typesAuthors, typesBooks, typesMagazines } = require('./type')

const queryTypeAuthors = new GraphQLObjectType({
    name: 'Authors',
    fields: {
        Authors: {
            type: new GraphQLList(typesAuthors),
            resolve: () => {
                return new Promise((resolve, reject) => {
                    var csvData = [];
                    fs.createReadStream('../data/books.csv')
                        .pipe(parse({ delimiter: ';' }))
                        .on('data', function (csvrow) {
                            csvData.push(csvrow);
                        })
                        .on('end', function () {
                            resolve(csvData)
                        });
                })
            }
        },
    }
});

const queryTypeBooks = new GraphQLObjectType({
    name: 'Books',
    fields: {
        Books: {
            type: new GraphQLList(typesBooks),
            resolve: () => {
                return new Promise((resolve, reject) => {
                    var csvData = [];
                    fs.createReadStream('../data/books.csv')
                        .pipe(parse({ delimiter: ';' }))
                        .on('data', function (csvrow) {
                            csvData.push(csvrow);
                        })
                        .on('end', function () {
                            resolve(csvData)
                        });
                })
            }
        },
        Book: {
            type: new GraphQLList(typesBooks),
            args: {
                isbn: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (isbn) => {
                return new Promise((resolve, reject) => {
                    fs.createReadStream('../data/books.csv')
                        .pipe(parse({ delimiter: ';' }))
                        .on('data', function (csvrow) {
                            if (csvrow[1].contains(isbn))
                            resolve(csvrow)
                        })
                        .on('end', function () {
                            reject('book not found with isbn: ' + isbn)
                        });
                })
            }
        },
    }
});

const queryTypeMagazines = new GraphQLObjectType({
    name: 'Magazines',
    fields: {
        Magazines: {
            type: new GraphQLList(typesMagazines),
            resolve: () => {
                return new Promise((resolve, reject) => {
                    var csvData = [];
                    fs.createReadStream('../data/magazines.csv')
                        .pipe(parse({ delimiter: ';' }))
                        .on('data', function (csvrow) {
                            csvData.push(csvrow);
                        })
                        .on('end', function () {
                            resolve(csvData)
                        });
                })
            }
        },
        Magazine: {
            type: new GraphQLList(typesMagazines),
            args: {
                isbn: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (isbn) => {
                return new Promise((resolve, reject) => {
                    fs.createReadStream('../data/magazines.csv')
                        .pipe(parse({ delimiter: ';' }))
                        .on('data', function (csvrow) {
                            if (csvrow[1].contains(isbn))
                            resolve(csvrow)
                        })
                        .on('end', function () {
                            reject('magazine not found with isbn: ' + isbn)
                        });
                })
            }
        },
    }
});

module.exports = { queryTypeMagazines, queryTypeBooks, queryTypeAuthors };
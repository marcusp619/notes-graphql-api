'use strict';

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');
const addNote = require('./resolvers/create');
const viewNote = require('./resolvers/view');
const listNotes = require('./resolvers/list');
const removeNote = require('./resolvers/remove');
const filterNotes = require('./resolvers/filter');

const noteType = new GraphQLObjectType({
  name: 'Note',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    tag: { type: new GraphQLNonNull(GraphQLString) },
    noteDescription: { type: new GraphQLNonNull(GraphQLString) },
    addedAt: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      listNotes: {
        type: new GraphQLList(noteType),
        resolve: (parent, args) => listNotes(),
      },
      viewNote: {
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) },
        },
        type: noteType,
        resolve: (parent, args) => viewNote(args.tag),
      },
      filterNotes: {
        args: {
          tag: { type: new GraphQLNonNull(GraphQLString) },
        },
        type: new GraphQLList(noteType),
        resolve: (parent, args) => filterNotes(args.tag),
      },
    },
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createNote: {
        args: {
          title: { type: new GraphQLNonNull(GraphQLString) },
          noteDescription: { type: new GraphQLNonNull(GraphQLString) },
          tag: { type: new GraphQLNonNull(GraphQLString) },
        },
        type: noteType,
        resolve: (parent, args) => addNote(args),
      },
      removeNote: {
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) },
        },
        type: GraphQLBoolean,
        resolve: (parent, args) => removeNote(args.id),
      },
    },
  }),
});

module.exports = schema;

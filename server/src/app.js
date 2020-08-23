import { GraphQLServer } from 'graphql-yoga';
import express from 'express';
import schema from './schema';
import { database } from './core/database';
import middlewares from './middlewares/auth';
import { getUser } from '../src/utils/auth';

/* Connect to mongodb */
database();

const contextSettings = async ({ request, connection }) => {
  const { user } = await getUser(request ? request.headers.authorization : connection.context.headers.authorization);

  return {
    ...request,
    user,
  };
};

const server = new GraphQLServer({
  schema,
  context: contextSettings,
  middlewares,
});

server.express.use('/uploads', express.static('uploads'));

export default server;

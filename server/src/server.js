require('dotenv').config();
import app from './app';

const options = {
  port: process.env.PORT,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: process.env.NODE_ENV === 'production' ? false : '/playground',
  // uploads: {
  //   maxFileSize: 40000,
  // },
};

app.start(options, ({ port }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server is running on http://localhost:${port}`);
});

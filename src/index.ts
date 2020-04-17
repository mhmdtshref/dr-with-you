import dotenvFlow from 'dotenv-flow';
dotenvFlow.config({ path: './environment' });

import app from './app';
import http from 'http';

const httpServer = new http.Server(app);

(async () => {
  try {
    // TODO: Connect to sequelize.
  } catch (error) {
    console.log('Sequelize connection error: ', error.message);
  }

  const port = process.env.PORT;
  httpServer.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
  });
})();

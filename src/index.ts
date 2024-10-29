import 'dotenv/config';
import 'reflect-metadata';

import { createServer, Server as HttpServer } from 'http';
import { Application } from 'express';
import { Server } from './server';
import { AppDataSource } from './data-source';

let retries = 5;
(async () => {
  while (retries) {
    AppDataSource.initialize()
      .then((connect) => {
        if (connect.isInitialized) {
          const app: Application = new Server().app;
          const server: HttpServer = createServer(app);
          console.log('process.env.NODE_ENV', process.env.NODE_ENV);

          // setup express app here
          // ...
          const port = process.env.PORT || 4000;
          // start express server
          server.listen(port);
          console.log(`Express server has started on port ${port}.`);
        }
      })
      .catch(async (err) => {
        console.log(err);
        retries -= 1;
        console.log(`Failed to connect to db. Retries left: ${retries}`);
        await new Promise((res) => setTimeout(res, 5000));
      });
    break;
  }
})();

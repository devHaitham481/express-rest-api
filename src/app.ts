import express from 'express';
import config from 'config';
// import { deserializeUser } from './middleware';

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();

// app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, host, () => {
  console.log(`Server is listening at http://${host}:${port}`);
});

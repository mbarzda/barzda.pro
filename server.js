import express from 'express';

const app = express();

app.use(express.static('./dist')).listen('3000');

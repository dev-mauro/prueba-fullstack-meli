import express from 'express';
import cors from 'cors';

import itemsRouter from './routes/items.router.js';

const app = express();
const PORT = 8080;

app.use( express.urlencoded({extended: true}) );
app.use( express.json() );

// CORS Config
app.use( cors({
  origin: 'http://localhost:5173'
}));

// Routers config
app.use('/api/items', itemsRouter);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
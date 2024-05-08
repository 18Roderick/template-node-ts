import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { csrf } from 'hono/csrf';
import { secureHeaders } from 'hono/secure-headers';

import { env } from './config/env';

const app = new Hono();

app.use(secureHeaders());
app.use(logger());
app.use(csrf());

app.use('/api/*', cors());

app.get('/ping', c => {
  return c.json({ message: 'pong' });
});

serve({
  fetch: app.fetch,
  port: env.PORT,
}).on('listening', () => {
  console.log('server runing');
});

export default {
  port: env.PORT,
  fetch: app.fetch,
};

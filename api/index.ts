import type { IncomingMessage, ServerResponse } from 'http';
import { createApp } from '../src/app.factory';

// Función serverless de Vercel: arranca Nest una vez por instancia y reutiliza Express.
let server: ((req: IncomingMessage, res: ServerResponse) => void) | undefined;

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (!server) {
    const app = await createApp();
    await app.init();
    server = app.getHttpAdapter().getInstance();
  }
  server!(req, res);
}

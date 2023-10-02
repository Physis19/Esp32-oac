import fastify from 'fastify';

const app = fastify();

// Rota GET para testar o servidor
app.get('/', async (request, reply) => {
  return { message: 'Hello, Fastify with TypeScript!' };
});

// Rota POST para enviar uma resposta de teste
app.post('/test', async (request, reply) => {
  return { message: 'This is a test response from the server' };
});

const start = async () => {
  try {
    await app.listen(3000);
    console.log('Server is running on port 3000');
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

start();
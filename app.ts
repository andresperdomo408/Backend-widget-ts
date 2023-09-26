
import {setupSocket} from './src/sockets/socketRoutes'
import { server ,io} from './src/presentation/server';


const PORT = process.env.PORT || 3000;

// Configurar rutas de Socket.io
setupSocket(io);

server.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});

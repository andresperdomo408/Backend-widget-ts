import { Server, Socket } from 'socket.io';

export function setupSocket(io: Server) {
  const connectedClients: { [key: string]: Socket } = {};

  io.on('connection', (socket: Socket) => {
    console.log(`Usuario conectado: ${socket.id}`);

    socket.on('agent-connected', () => {
      console.log('Un agente se está conectando');
      // Emitir un evento para notificar la conexión de un agente
      io.emit('agent-connected', socket.id);
    });

    socket.on('client-connected', () => {
      console.log('Un cliente se está conectando');
      // Emitir un evento para notificar la conexión de un cliente
      io.emit('client-connected', socket.id);
    });

    socket.on('chat-message', (data: { to: string; message: string }) => {
      const { to, message } = data;
      console.log(`Mensaje recibido de ${socket.id} para ${to}: ${message}`); // Agregar un console.log para ver los mensajes

      // Verificar si el destinatario está conectado
      if (to && connectedClients[to] && to !== socket.id) {
        // Enviar el mensaje al destinatario
        console.log(`Enviando mensaje de ${socket.id} a ${to}: ${message}`); // Agregar un console.log para verificar el envío
        connectedClients[to].emit('chat-message-response', {
          from: socket.id,
          message,
        });
      }
    });

    socket.on('image-upload', (data: { to: string; base64Data: string }) => {
      const { to, base64Data } = data;
      console.log(`Imagen recibida de ${socket.id} para ${to}`); // Agregar un console.log para ver el envío de imágenes

      // Verificar si el destinatario está conectado
      if (to && connectedClients[to]) {
        // Enviar la imagen al destinatario
        console.log(`Enviando imagen de ${socket.id} a ${to}`);
        connectedClients[to].emit('image-upload-response', base64Data);
      }
    });

    socket.on('file-upload', (data: { to: string; base64Data: string }) => {
      const { to, base64Data } = data;
      console.log(`Archivo recibido de ${socket.id} para ${to}`); // Agregar un console.log para ver el envío de archivos

      // Verificar si el destinatario está conectado
      if (to && connectedClients[to]) {
        // Enviar el archivo al destinatario
        console.log(`Enviando archivo de ${socket.id} a ${to}`);
        connectedClients[to].emit('file-upload-response', base64Data);
      }
    });

    socket.on('disconnect', () => {
      console.log(`Usuario desconectado: ${socket.id}`);
      // Eliminar al usuario de la lista de usuarios conectados
      delete connectedClients[socket.id];
    });

    // Agregar el usuario a la lista de usuarios conectados
    connectedClients[socket.id] = socket;
  });
}

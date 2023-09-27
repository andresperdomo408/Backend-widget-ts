import fs from 'fs';
import atob from 'atob';

export function processImageUpload(base64Data: string): string {
  try {
    const decodedData = atob(base64Data.split(',')[1]);
    fs.writeFileSync('archivo_recibido.txt', decodedData);
    return 'Imagen cargada exitosamente.';
  } catch (error) {
    console.error('Error al procesar el archivo:', error);
    return 'Error al cargar el archivo.';
  }
}

export function processFileUpload(base64Data: string): string {
  try {
    const decodedData = atob(base64Data.split(',')[1]);
    fs.writeFileSync('archivo_recibido.txt', decodedData);
    return 'Archivo cargado exitosamente.';
  } catch (error) {
    console.error('Error al procesar el archivo:', error);
    return 'Error al cargar el archivo.';
  }
}

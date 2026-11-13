import { createApp } from './main';

const PORT = process.env.PORT || 3000;

const app = createApp();

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    console.log(`Endpoints disponibles:`);
    console.log(`  GET  http://localhost:${PORT}/products`);
    console.log(`  POST http://localhost:${PORT}/products`);
});
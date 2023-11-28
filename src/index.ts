import "reflect-metadata";
import app from './app';
import { AppDataSource } from './db';
import productsRoutes from './routes/products.routes';

app.use('/api', productsRoutes);

async function main() {
    try {
        await AppDataSource.initialize();
        console.log('Database connected')
        app.listen(8080);
        console.log('Server is listening on port', 3000);
    } catch (error) {
        console.error(error);
    }
}

main();

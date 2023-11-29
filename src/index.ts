import "reflect-metadata";
import app from './app';
import { AppDataSource } from './db';
import productsRoutes from './routes/products.routes';
import { Products } from './entities/Products';

app.use('/api', productsRoutes);

async function main() {
    try {
        await AppDataSource.initialize()
        .then(async (connection) => {
            const repoProductos = connection.getRepository(Products);
            const porductosExiste = await repoProductos.find();
            if (porductosExiste.length === 0){
                const producto1 = new Products("24 pallets", 2000, "https://cdn-icons-png.flaticon.com/128/819/819489.png");
                const producto2 = new Products("12 pallets", 1000, "https://cdn-icons-png.flaticon.com/128/776/776588.png");
        
                await repoProductos.save([producto1,producto2])
            }
            console.log('Database connected')
            await connection.close();
        }).catch((error) => {
            console.log("Error al inicializar la base: ", error)
        });
        app.listen(8080);
        console.log('Server is listening on port', 3000);
    } catch (error) {
        console.error(error);
    }
}

main();

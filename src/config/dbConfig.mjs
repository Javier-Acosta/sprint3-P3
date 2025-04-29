import mongoose from 'mongoose'

export async function connectDB() {
    try {

        mongoose.connect('mongodb+srv://root:wm84Gyyg3jQwx4BJ@cluster0.0owpnim.mongodb.net/AppFinal', { serverSelectionTimeoutMS: 5000 })
        console.log('Conexion exitosa a MongoDB');
    } catch (error) {
        console.error('error al conectar a MongoDB', error)
        process.exit(1)
    }
}
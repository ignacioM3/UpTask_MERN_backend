import mongoose from "mongoose";

const conectarDB = async () =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const url = `${connection.connection.host}: ${connection.connection.port}`
        console.log(`MongoDB conectado en: ${url} `)
    } catch (error) {
        console.log(`error: ${error.message}`)
        //fuerza el cierre en caso que no se conecte
        process.exit(1)
    }
}

export default conectarDB;
import mongoose from "mongoose";

async function connectDataBase () {
     await mongoose.connect("mongodb+srv://MiguelGs:Arcanjo123@apinodeteste.qhbn6ne.mongodb.net/?retryWrites=true&w=majority&appName=ApiNodeTeste")
}

export default connectDataBase
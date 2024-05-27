import mongoose, { trusted } from "mongoose";


const userSchema = new mongoose.Schema({
    nome:{
        type: String,
        require : true
    },
    idade: {
        type: Number,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cep:{
        type: String,
        required: true
    },
    celular: {
        type : String
    },
    dataCriacao :{
        type: Date,
        default: Date.now()
    }

})

export default mongoose.model('Users', userSchema)


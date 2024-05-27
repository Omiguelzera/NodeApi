
import Users from "../Models/Users.js";

async function getUsers(request, response){
    const users = await Users.find()

    return response.status(200).json(users)
}

async function createUsers(request, response){
    const user = request.body
    
    const newUser = await Users.create(user)

    return response.status(201).json(newUser)
}

async function deleteUser(request, response){
    const id = request.params.id
    
    await Users.findByIdAndDelete({_id: id})

    return response.status(200).json({ response : "User deletado"})
}

async function findById(request, response){
    const id = request.params.id

    await Users.findById({_id: id})

    return response.status(200).json({ response : `Usuario encontrado!` })
}
    
export {getUsers, createUsers, deleteUser, findById}
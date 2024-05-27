
import Users from "../Models/Users.js";

async function getUsers(request, response){
    const users = await Users.find()

    return response.status(200).json(users)
}

async function createUsers(request, response){
   try {
    
       const { nome } = request.body
    
    if(!nome){

        response.status(422).json({error : 'Nome é obrigatório!'})
        return 
    }
        
            const user = request.body
                    
            const newUser = await Users.create(user)

            return response.status(201).json(newUser)

       
    } catch (error) {
        response.status(400).json({message: error.message})
    }

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
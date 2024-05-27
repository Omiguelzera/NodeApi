
import Users from "../Models/Users.js";

//buscar todos os usuarios
async function getUsers(request, response){
    try {
        
        const users = await Users.find()

        return response.status(200).json(users)
        
    } catch (error) {
        response.status(400).json({message: error.message})
    }
    
   
}

//criar novo usuario
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

//deletat usuario
async function deleteUser(request, response){
    const id = request.params.id
    
    await Users.findByIdAndDelete({_id: id})

    return response.status(200).json({ response : "User deletado"})
}


//procurar por id
async function findById(request, response){
    const id = request.params.id
    
    try {
           const user = await Users.findById({_id: id})

         if(!user){
              response.status(422).json({error : 'Usario não encontrado'})
              return 
          }
    

          return response.status(200).json(user)
        
        } catch (error) {
            response.status(400).json({message: error.message})
        }


   
}


//alterar usuario, puxando os dados por id
async function alterarUser(request, response){
    const id = request.params.id

    const {nome, idade, endereco, cep, celular } = request.body

    const user = {
        nome, 
        idade, 
        endereco, 
        cep, 
        celular
    }

    try {
        const uptadeUser = await Users.updateOne({_id: id}, user)

        if(uptadeUser.matchedCount === 0){
            response.status(422).json({message : 'Usario não encontrado'})
            return
        }

        response.status(200).json(user)

    } catch (error) {
        response.status(500).json({message: error.message})
    }
}
    
export {getUsers, createUsers, deleteUser, findById, alterarUser}
import express, { Router } from "express"
import connectDataBase from "./Connection/Dbconnection.js";
import routes from "./Routes/User-Route.js";


const app = express();

app.use(express.json())

app.use(routes)

connectDataBase()
.then( () => {
    app.listen(3001, () => console.log("Banco de dados conectado"))
} )
.catch( (error) => console.log(error) ) 


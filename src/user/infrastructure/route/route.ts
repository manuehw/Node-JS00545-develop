import {Router} from 'express'
import { JSONRepository } from '../repository/JSONRepository'
import { UserCase } from '../../application/userCase'
import { UserController } from '../controller/user.controller'
import { HttpResponse } from '../http/httpResponse'

const route = Router()
const repository = new JSONRepository()

const userCase = new UserCase(repository)
const httpResponse = new HttpResponse()
const userController = new UserController(userCase, httpResponse)

route.get('/getusers', userController.getusers)
route.post('/createUsers', userController.save)
route.get('/getusersById/:userId', userController.getUserById)
route.put('/updateUsersById/:userId', userController.updateUsersById)
route.delete('/deleteUsersById/:userId', userController.deleteUsersById)

export default route;
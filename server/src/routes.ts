import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()
const classControllers = new ClassesController()
const connectionControllers = new ConnectionsController()

routes.post('/classes', classControllers.create)
routes.get('/classes', classControllers.index)

routes.post('/connections', connectionControllers.create)
routes.get('/connections', connectionControllers.index)

export default routes
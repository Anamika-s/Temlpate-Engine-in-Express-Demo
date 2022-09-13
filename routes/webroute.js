import express from "express"
import { contactusController } from "../controllers/contactusController.js";
import { homeController } from "../controllers/homeController.js";
import { registrationController, handleForm } from "../controllers/registrationController.js";

const routes = express.Router();

routes.get("/", homeController)
routes.get("/contactus", contactusController)
routes.get("/register" , registrationController)
routes.post("/handleForm", handleForm)
export {routes}

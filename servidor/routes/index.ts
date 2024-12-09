import { Router } from "express";

// Importar todas las rutas
import loginRouters from "./login";

const router = Router();

router.use("/login", loginRouters);

export default router;

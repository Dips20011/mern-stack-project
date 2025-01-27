import express from "express";
import { contactus } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/contactus", contactus);


export default router;
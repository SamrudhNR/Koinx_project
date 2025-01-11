import express from "express";
import {getCryptoStats} from "../controller/statsController.js";

const router= express.Router()

router.get('/stats',getCryptoStats)

export default router;
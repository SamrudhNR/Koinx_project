import express from "express";
import {getCryptoStats} from "../controller/statsController.js";
import { getDeviationPrice} from "../controller/deviationController.js"

const router= express.Router()

router.get('/stats',getCryptoStats)
router.get('/deviation',  getDeviationPrice);

export default router;
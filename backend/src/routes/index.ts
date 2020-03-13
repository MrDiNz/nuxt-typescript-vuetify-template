import { Router } from "express";

import getNews from "../controller/getNews";


const router: Router = Router();

router.post("/getnews", getNews.getNewsNow);

export default router;

import express from "express";

export default class getNews {
  public static getNewsNow(req: express.Request, res: express.Response) {

    res.send({a:"a", b: 'b'})

  }
}

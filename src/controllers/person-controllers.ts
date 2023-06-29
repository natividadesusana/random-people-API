import { Request, Response } from "express";
import personService from "@/services/person-service";
import httpStatus from "http-status";

async function getPerson(req: Request, res: Response) {
  const person = await personService.getPerson();
  if (person) {
    res.status(httpStatus.OK).send(person)
  } else {
    res.status(httpStatus.NOT_FOUND).send("No person found!");
  }
}

const personController = {
  getPerson,
};

export default personController;

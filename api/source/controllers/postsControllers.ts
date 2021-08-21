import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Events {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

interface Parteners {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

const getEvents = async (req: Request, res: Response, next: NextFunction) => {
    let data = require('./bdd.json')
    return res.status(200).json(data.events);
};

const getParteners = async (req: Request, res: Response, next: NextFunction) => {
    let data = require('./bdd.json')
    return res.status(200).json(data.parteners);
};

export default { getEvents , getParteners };
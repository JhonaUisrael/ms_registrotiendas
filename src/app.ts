import { Server} from './server/server';
import express from 'express';
import dotenv from "dotenv";

dotenv.config();
const server= new Server(express(),process.env.PORT );

server.listen();
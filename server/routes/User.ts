import { Router } from 'express';
import { Register } from '../controllers/User';

const _ = Router();

_.post('/', Register);

export default _;

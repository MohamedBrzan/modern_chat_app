import { Router } from 'express';
import { SendMessage } from '../controllers/Message';

const _ = Router();

_.post('/', SendMessage);

export default _;

import { Router } from 'express';
import SendMessage from '../controllers/Message/SendMessage';
import isAuthorized from '../middleware/isAuthorized';
import LastMessage from '../controllers/Message/LastMessage';
import DeleteMessage from '../controllers/Message/DeleteMessage';
import UpdateMessage from '../controllers/Message/UpdateMessage';
import getMessages from '../controllers/Message/GetMessages';

const _ = Router();
_.get('/:receiverId', isAuthorized, getMessages);
_.post('/send', isAuthorized, SendMessage);
_.get('/last', isAuthorized, LastMessage);
_.patch('/update', isAuthorized, UpdateMessage);
_.patch('/del', isAuthorized, DeleteMessage);

export default _;

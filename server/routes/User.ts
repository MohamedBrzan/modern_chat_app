import { Router } from 'express';
import isAuthorized from '../middleware/isAuthorized';
import Register from '../controllers/User/Register';
import Login from '../controllers/User/Login';
import Users from '../controllers/User/Users';
import Logout from '../controllers/User/Logout';

const _ = Router();

_.post('/register', Register);
_.post('/login', Login);
_.post('/logout', Logout);

_.get('/users', isAuthorized, Users);

export default _;

var express = require('express');
var router = express.Router();
const userModel = require('../models/userModel.js');
const chatModel = require('../models/chatModel.js');
const upload = require('../models/multer.js');
const userController = require('../controllers/userController.js')


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/register',userController.registerLoad);
router.post('/register',upload.single('image'),userController.register);

module.exports = router;

const express = require('express');
const PostController = require('../controllers/PostController');
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/authMiddleware');
const GetController = require ('../controllers/GetController')
const router = express.Router();


// Public routes
router.post('/login', PostController.loginUser);

router.post('/addWeaver', PostController.addWeaver);

router.get('/getWeaverData', GetController.getWeaverData);

router.post('/addWeaverDesign', PostController.addWeaverDesign);

router.get('/getWeaverDesign', GetController.getWeaverDesignData);

// Protected routes
router.use(authMiddleware);

// router.get('/protected', (req, res) => {
//   res.json({ message: 'This is a protected route', userId: req.userId });
// });






module.exports = router;

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

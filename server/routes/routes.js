var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
  res.render('index')
});
router.get('/data', function(req, res){
  res.json({ invoice: 'SO3834754', revision: '33-0092kk00', date: '7/31/18', dueDate: '7/31/18', terms: 'NET 0', balance: 452.45, billTo: null, status: 'active', method: 'Multimodal', capacity: 'LCL', drayage: 'Pickup, Delivery', services: 'Clearance' });
});
module.exports = router;
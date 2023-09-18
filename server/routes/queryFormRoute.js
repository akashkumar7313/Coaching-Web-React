const express = require("express")


const router = express.Router();


const {createQueryForm, getQueryForm, updateQueryFormById, deleteQueryForm } = require ('../controllers/queryFormControllers');



// create query form
router.post('/create/new/QueryForm', createQueryForm);

// Read query form
router.get('/get/all/query', getQueryForm);

// update query form
router.put('/update/query/from/:id', updateQueryFormById);

// delete query form
router.delete('/delete/query/from/:id', deleteQueryForm);




module.exports = router
import express from 'express';
import { createMedicine,ifValidationTrue,getAllData, updateByAdmin1,updateByAdmin2,updateByAdmin3,updateByAdmin4,updateByAdmin5,} from '../controller/medicineFunctions.js';

const router = express.Router();

router.post('/create', createMedicine);

router.get('/', getAllData);


router.put('/admin1/:id', updateByAdmin1);
router.put('/admin2/:id', updateByAdmin2);
router.put('/admin3/:id', updateByAdmin3);
router.put('/admin4/:id', updateByAdmin4);
router.put('/admin5/:id', updateByAdmin5);

router.post('/admin/postData/:id', ifValidationTrue);




export default router;

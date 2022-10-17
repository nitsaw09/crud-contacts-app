const express = require('express');
const router = express.Router();
const contactsValidator = require('../validator/contacts.validator');
const contactsController = require('../controllers/contacts.controller')

router.get('/', contactsController.getContacts);
router.get('/:id', contactsController.getContact);
router.post('/', contactsValidator.createContact, contactsController.createContact);
router.put('/:id', contactsValidator.updateContact, contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);

module.exports = router;

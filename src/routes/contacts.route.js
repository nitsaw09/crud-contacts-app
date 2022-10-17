const express = require('express');
const router = express.Router();
const contactsValidator = require('../validator/contacts.validator');
const contactsController = require('../controllers/contacts.controller')

router.get('/', contactsController.getContacts);
router.get('/:cid', contactsController.getContact);
router.post('/', contactsValidator.contacts, contactsController.createContact);
router.put('/:cid', contactsValidator.contacts, contactsController.updateContact);
router.delete('/:cid', contactsController.deleteContact);

module.exports = router;

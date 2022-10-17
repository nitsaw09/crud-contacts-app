const ContactsService = require('../services/contacts.service');
const successMsg = require('../utils/success.messages');
const { downloadResource } = require('../utils/json2csv');

const contactService = new ContactsService();

exports.getContacts = async (req, res) => {
    const contacts = await contactService.getContacts();
    const fileName = `contacts.csv`;
    const fields = [
        {
          label: 'id',
          value: '_id'     
        },
        {
          label: 'First Name',
          value: 'firstName'
        },
        {
          label: 'Last Name',
          value: 'lastName'
        },
        {
         label: 'Email Address',
          value: 'email'
        },
        {
          label: 'Notes',
          value: 'notes'
        },
        {
          label: 'Created Date',
          value: 'createdAt'
        }
    ];
    return downloadResource(res, fileName, fields, contacts);
};

exports.getContact = async (req, res) => {
    try {
        const { cid } = req.params;
        const contact = await contactService.getContact(cid);
        res.status(200).json({ success: true, data: contact });
    } catch (err) {
        res.status(500).json({ error: true, message: err.message });
    };
};

exports.createContact = async (req, res) => {
    try {
        const newContact = await contactService.createContact(req.body);
        res.status(201).json({ 
            success: true, 
            data: newContact, 
            message: successMsg.CREATE_CONTACT 
        });
    } catch (err) {
        res.status(500).json({ error: true, message: err.message });
    };
};

exports.updateContact = async (req, res) => {
    try {
        const { cid } = req.params;
        await contactService.updateContact(cid, req.body);
        res.status(200).json({ 
            success: true,
            message: successMsg.UPDATED_CONTACT  
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: err.message });
    };
};

exports.deleteContact = async (req, res) => {
    try {
        const { cid } = req.params;
        await contactService.deleteContact(cid);
        res.status(200).json({ success: true, message: successMsg.DELETED_CONTACT  });
    } catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
};
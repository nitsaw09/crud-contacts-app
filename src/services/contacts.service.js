const ContactsModel = require('../models/contacts.model');
const errorMsg = require('../utils/error.messages');
const mongoose = require('mongoose');

class ContactsService {
    constructor() {}

    async createContact(data) {
        try {
            const newContact = new ContactsModel({
                _id: new mongoose.Types.ObjectId(),
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                notes: data.notes,
            });
            await newContact.save(); 
            return newContact;
        } catch (err) {
            throw new Error(errorMsg.SOMETHING_WENT_WRONG);
        }
    }
    
    async getContacts() {
        const contacts = await ContactsModel
            .find({ deletedAt: null })
            .select('_id firstName lastName email notes createdAt')
            .exec();
        return contacts;
    }

    async getContact(_id) {
        const contact = await ContactsModel.findOne({ _id });
        if (!contact || contact.deleteAt) {
            throw new Error(errorMsg.CONTACT_DATA_NOT_FOUND);
        }
        return contact;
    }

    async updateContact(_id, data) {
        const contract = await this.getContact(_id);
        if (contract) {
            const updateContact = await ContactsModel.updateOne({ _id }, { 
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                notes: data.notes,
             });
            return updateContact;
        }
    }

    async deleteContact(_id) {
        const contract = await this.getContact(_id);
        if (contract) {
            await ContactsModel.updateOne({ _id }, {
                deleteAt: new Date() 
            });
            return true;
        }
    }
}

module.exports = ContactsService;
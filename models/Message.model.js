const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const messageSchema = new Schema({
    aText: String,
    userSend: { type: Schema.Types.ObjectId, ref: 'User' },
    userRecieve: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Message = model('Message', messageSchema);

module.exports = Message;

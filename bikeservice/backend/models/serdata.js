const mongoose = require('mongoose');
const SerdataSchema = new mongoose.Schema({
    
    fullname:String,
    emailid:String,
    model:String,
    service:String,
}
)
const SerdataModel = mongoose.model('log_ser_form', SerdataSchema);
module.exports = SerdataModel;
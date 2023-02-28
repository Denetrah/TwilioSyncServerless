// exports.handler = function(context, event, callback) {
//     const client = context.getTwilioClient();
//     client.sync
//      .services(context.SYNC_SERVICE_SID)
//      .documents("hours")
//      .fetch()
//      .then(document => {
//       const newData = {
//        ...document.data,
//        "Mon-Fri": "10:00-18:00"
//       };
//       return document.update({ data: newData });
//      })
//      .then(document => {
//       callback(null, { success: true });
//      })
//      .catch(error => {
//       callback(error);
//      });
//    };
// New 2/8 will update the key but needs the complete json to do it 
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
exports.handler = function(context, event, callback) {
    client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
    .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
    .syncMapItems(event.key)
    .update({
    data: {
    queueGroupName: event.queueGroupName,
    standardHours: event.standardHours,
    exceptionHours: event.exceptionHours
    }
    })
    .then(syncMapItem => {
    console.log(syncMapItem.key);
    callback(null, syncMapItem);
    })
    .catch(error => {
    callback(error);
    });
    };
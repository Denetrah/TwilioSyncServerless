// exports.handler = function(context, event, callback) {
//     const client = context.getTwilioClient();
//     client.sync
//      .services(context.SYNC_SERVICE_SID)
//      .documents("hours")
//      .fetch()
//      .then(document => {
//       const data = document.data;
//       delete data["Wedsnessday"];
//       return document.update({ data });
//      })
//      .then(document => {
//       callback(null, { success: true });
//      })
//      .catch(error => {
//       callback(error);
//      });
//    };
// // deletes the entire Item key Will try to add the ability to delete only specific parts of the data 
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.handler = function(context, event, callback) {
     client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
 .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
 .syncMapItems(event.standardHours)
 .remove()
 .then(() => {
  console.log(`Successfully deleted Sync Map item with key: ${event.key}`);
  callback(null, { message: `Successfully deleted Sync Map item with key: ${event.key}` });
 })
 .catch(error => {
  callback(error);
 });
};
// NEW 2/8 Add Items create new items w/key in map w postman
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require("twilio")(accountSid, authToken);
// exports.handler = function(context, event, callback) {
//  client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
//   .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
//   .syncMapItems
//   .create({
//    key: event.key,
//    data: {
//     queueGroupName: event.queueGroupName,
//     standardHours: event.standardHours,
//     exceptionHours: event.exceptionHours
//    }
//   })
//   .then(syncMapItem => {
//    console.log(syncMapItem.key);
//    callback(null, syncMapItem);
//   })
//   .catch(error => {
//    callback(error);
//   });
// }; 

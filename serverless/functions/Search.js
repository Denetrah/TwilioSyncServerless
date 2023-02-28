// add the ability to search hours
import {BrixModal} from '@bestbuy/brix-web'

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
exports.handler = function(context, event, callback) {
client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
 .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
 .syncMapItems
 .list({
  limit: 20
 })
 .then(syncMapItems => {
  syncMapItems.forEach(syncMapItem => {
  console.log(syncMapItem.key + ": " + JSON.stringify(syncMapItem.data));
  });
  callback(null, syncMapItems);
 })
 .catch(error => {
  callback(error);
 });}

// client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
//  .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
//  .syncMapItems(event.key)
//  .fetch()
//  .then(syncMapItem => {
//   console.log(syncMapItem.key + ": " + JSON.stringify(syncMapItem.data));
//   callback(null, syncMapItem);
//  })
//  .catch(error => {
//   callback(error);
//  });}

// Get request that will get all data w/ function should be able to search
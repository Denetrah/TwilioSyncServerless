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
exports.handler = async function(context, event, callback) {
  const client = context.getTwilioClient();
  // Extract the values for the item from the event parameter
  const { key, data } = event;
  try {
   // Create a new item in the Sync Map
   const response = await client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
    .syncMaps(context.TWILIO_SYNC_MAPS_SID)
    .syncMapItems(key)
    .update({data : data})
    // .create({
    //  key: key,
    //  data: data,
    // });
   console.log(`Item created with key ${response.key}`);
   callback(null, response);
  } catch (error) {
   console.error(error);
   callback(error);
  }
 };




// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require("twilio")(accountSid, authToken);
// exports.handler = async function(context, event, callback) {
//  const standardHours = event.standardHours;

//  for (const day in standardHours) {
//   const standardHour = standardHours[day];
//   await client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
//    .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
//    .syncMapItems
//    .create({
//     key: `${day}_standard`,
//     data: {
//      queueGroupName: event.queueGroupName,
//      day,
//      type: 'standard',
//      open: standardHour.open,
//      close: standardHour.close
//     }
//     .then(syncMapItem => {
//       console.log(syncMapItem.key);
//       callback(null, syncMapItem);
//      })
//      .catch(error => {
//       callback(error);
//      })


//    });
//  }


// }



// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require("twilio")(accountSid, authToken);
// exports.handler = async function(context, event, callback) {
//  const standardHours = event.standardHours;
//  const exceptionHours = event.exceptionHours;
//  for (const day in standardHours) {
//   const standardHour = standardHours[day];
//   await client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
//    .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
//    .syncMapItems
//    .create({
//     key: `${day}_standard`,
//     data: {
//      queueGroupName: event.queueGroupName,
//      day,
//      type: 'standard',
//      open: standardHour.open,
//      close: standardHour.close
//     }
//    });
//  } for (const exception of Array.isArray(exceptionHours) ? exceptionHours : Object.values(exceptionHours)) {
//      if (!exception || !exception.name || !exception.startDate || !exception.endDate || !exception.open || !exception.close) {
//        continue;
//      }
//   await client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
//    .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
//    .syncMapItems
//    .create({
//     key: `${exception.name}_exception`,
//     data: {
//      queueGroupName: event.queueGroupName,
//      name: exception.name,
//      type: 'exception',
//      startDate: exception.startDate,
//      endDate: exception.endDate,
//      open: exception.open,
//      close: exception.close
//     }   });
//  }
//  callback(null, 'Sync Map Items created successfully!');
// }
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require("twilio")(accountSid, authToken);
// exports.handler = async function(context, event, callback) {
//   const standardHours = event.standardHours;
//   const exceptionHours = event.exceptionHours;
//   // Iterate over standardHours
//   for (const day in standardHours) {
//    const standardHour = standardHours[day];
//    await client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
//     .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
//     .syncMapItems
//     .create({
//      key: `${day}_standard`,
//      data: {
//       queueGroupName: event.queueGroupName,
//       day,
//       type: 'standard',
//       open: standardHour.open,
//       close: standardHour.close
//      }
//     });
//   }
//   // Check if exceptionHours is defined before iterating over it
//   if (exceptionHours) {
//    for (const exception of exceptionHours) {
//     await client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
//      .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
//      .syncMapItems
//      .create({
//       key: `${exception.name}_exception`,
//       data: {
//        queueGroupName: event.queueGroupName,
//        name: exception.name,
//        type: 'exception',
//        startDate: exception.startDate,
//        endDate: exception.endDate,
//        open: exception.open,
//        close: exception.close
//       }     });
//    }
//   }
//   callback(null, 'Sync Map Items created successfully!');
//   await client.sync.v1.services(process.env.TWILIO_SYNC_SERVICE_SID)
//  .syncMaps(process.env.TWILIO_SYNC_MAPS_SID)
//  .syncMapItems
//  .create({
//   key: `final`,
//   data: {
 
//    type: 'final'
//   }
//  });

//  };


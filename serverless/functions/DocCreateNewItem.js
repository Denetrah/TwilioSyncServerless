// exports.handler = function(context, event, callback) {
//     const client = context.getTwilioClient();
//     client.sync
//      .services(context.SYNC_SERVICE_SID)
//      .documents("hours")
//      .fetch()
//      .then(document => {
//       const newData = {
//        ...document.data,
//        "Sat": "Closed"
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
exports.handler = function(context, event, callback) {
    const client = context.getTwilioClient();
    const newDay = event.newDay;
    const openHours = event.openHours;
    const closeHours = event.closeHours;
    const id = event.id
    
    client.sync
     .services(context.SYNC_SERVICE_SID)
     .documents("hours")
     .fetch()
     .then(document => {
        // let currentId = 0;
        // if (document.data.hasOwnProperty(id)){
        //     currentId = document.data[newDay].id;
        // }
    const newData = {
     ...document.data,
       [newDay]: {
        // id: currentId + 1,
        // openHrs: openHours,
        // closedHrs: closeHours
        openHours, closeHours, id
    }
     };
     return document.update({ data: newData });
    })
    .then(document => {
     callback(null, { success: true });
    })
    .catch(error => {
     callback(error);
    });
   };
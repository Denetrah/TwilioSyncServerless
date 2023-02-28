const Twilio = require('twilio');
exports.handler = function(context, event, callback) {
 const client = new Twilio(context.TWILIO_ACCOUNT_SID, context.TWILIO_AUTH_TOKEN);
 const taskQueueSid = context.TWILIO_TASK_QUEUE_SID;
 client.taskrouter.v1
  .workspaces(context.TWILIO_WORKSPACE_SID)
  .taskQueues(taskQueueSid)
  .fetch()
  .then(taskQueue => {
   const waitTime = taskQueue.longestRelativeTaskAgeInQueue;
   callback(null, waitTime);
  })
  .catch(error => {
   callback(error);
  });
};
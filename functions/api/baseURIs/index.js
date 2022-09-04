"use strict";

module.exports.handler = async (event) => {
  try {
      const data = {
          "apiAccessPoint": "https://k35f93nfv7.execute-api.ap-southeast-1.amazonaw.com",
          "webAccessPoint": "https://k35f93nfv7.execute-api.ap-southeast-1.amazonaw.com",
          "inputEvent": event
      }
      const response = formatResponse(serialize(data));

      return response;
  }
  catch (error) {
      return formatError(error)
  }
};


var formatResponse = function(body) {
  var response = {
      "statusCode": 200,
      "headers": {
          "Content-Type": "application/json"
      },
      "body": body
  }
  return response
}

var formatError = function(error) {
  var response = {
      "statusCode": error.statusCode,
      "headers": {
          "Content-Type": "text/plain"
      },
      "body": error.code + ": " + error.message
  }
  return response
}

var serialize = function(object) {
  return JSON.stringify(object, null, 2)
}

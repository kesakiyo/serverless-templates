'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello. I\'m serverless template for aws nodejs. Go Serverless!!',
    }),
  };

  callback(null, response);
};

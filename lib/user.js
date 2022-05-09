"use strict";

// exports.authenticate = (username, password) => {
//     return Promise.resolve({ uid: 1, name: username, admin: false });
// };

exports.authenticate = (username, password) => {  
  return new Promise((resolve, reject) => {
    if ((username === process.env.RESTIFY_APP_USER) && (password === process.env.RESTIFY_APP_PASSWORD)) {
      resolve({uid: 1, name: username, admin: false});
    } else {
      reject();
    }
  });
};

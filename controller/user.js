var models = require("../models");
exports.user_mgr = {
   /* get all users*/
  get_users : function(cb){
    models.User.findAndCountAll({
      where: {
        status: 1
      }
    }).then(function(users) {
      cb(users)
    });
  },

  get_user : function(id,cb){
    models.User.findOne({
      where: {
        status: 1,
        id:id
      }
    }).then(function(user) {
      cb(user);
    });
  },
   /* add new region*/
  add_user : async body =>{
    try {
      return await models.User.create(body);
    } catch (err) {
     return(err);
    }
    
  },
  // update_user: function(body,cb){
  //   user_helpers.updateUser(body,function(result) {
  //     if(result) {
  //       cb('/user?msg=3');
  //     } else {
  //       cb('/user?msg=4');
  //     }
  //   });
  // },
  delete_user: function(id,cb){
    models.User.destroy({
      where: {
        id: id
      }
    }).then(function(result){
      if(result) {
        cb('/user?msg=5');
      } else {
        cb('/user?msg=6');
      }
    });
  },
};



// add_user: function (body, cb) {
//     var salt = easyPbkdf2.generateSalt(), //we generate a new salt for every new user
//         password = body.user_password; //we generate a new password for every new user
//     easyPbkdf2.secureHash( password, salt, function( err, passwordHash, originalSalt ) {
//       var obj={
//             name : body.name,
//             email : body.email,
//             password : passwordHash,
//             phone : body.phone,
//             salt : originalSalt,
//             level:1,
//           }
//       models.User.create(obj).then(function() {
//         cb(true);
//       });
//     });
//   },
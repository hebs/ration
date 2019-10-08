module.exports = {


  friendlyName: 'View friends',


  description: 'Display "Friends" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/friends'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

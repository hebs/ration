module.exports = {


  friendlyName: 'Destroy one thing',


  description: 'Delete the "thing" with the specified id: from the database.',


  inputs: {
    id: {
      description: 'The id of the thing to destroy',
      type: 'number',
      required: true
    },

  },


  exits: {

    notFound: {
      description: 'The thing you are trying to destroy was not found',
      responseType: 'notFound'
    },

    forbidden: {
      description: 'The user making this request doesn\'t have the permissions to delete this thing.',
      responseType: 'forbidden' //res.forbidden();
    },
  },


  fn: async function ({id}) {

    var thingToDestroy = await Thing.findOne({ id });
    //Ensure the thing still exists.
    if(!thingToDestroy){
      throw 'notfound'
    }
    //Verify Permissions
    if (thingToDestroy.owner !== this.req.me.id) {
      throw 'forbidden';
    }

    await Thing.destroy({ id: inputs.id })
    // All done.
    return;

  }


};

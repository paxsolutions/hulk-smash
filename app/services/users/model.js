const { db: Base } = require('../../../app');

class UsersModel extends Base.Model {
  schema() {
    return {
      title: {
        type: String,
        required: true,
      },
    };
  }
}

module.exports = UsersModel;

const { db: Base } = require('../../../app');

class UsersService extends Base.Service {

  map(data) {
    delete data._id
    delete data.createdAt
    delete data.modifiedAt
    return data
  }

}

module.exports = UsersService
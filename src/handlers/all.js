const dynamoose = require('dynamoose');

true && dynamoose.local('http://localhost:4569');

const photoRepository = require('../repositories/photo');

module.exports.handler = async () => {
  const data = await photoRepository.all();

  return {
    statusCode: 200,
    body: {
      links: {
        self: '/photos'
      },
      data,
    }
  };
};

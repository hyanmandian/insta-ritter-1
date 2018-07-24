const dynamoose = require('dynamoose');

true && dynamoose.local('http://localhost:4569');

const photoRepository = require('../repositories/photo');

module.exports.handler = async ({ pathParameters: { id } }) => {
  const data = await photoRepository.findById(id);

  return {
    statusCode: 200,
    body: {
      links: {
        self: `/photos/${id}`
      },
      data,
    }
  };
};

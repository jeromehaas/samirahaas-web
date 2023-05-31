const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::say-hello.say-hello');

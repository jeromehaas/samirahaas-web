const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::say-hello.say-hello');

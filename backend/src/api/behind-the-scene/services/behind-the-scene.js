'use strict';

/**
 * behind-the-scene service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::behind-the-scene.behind-the-scene');

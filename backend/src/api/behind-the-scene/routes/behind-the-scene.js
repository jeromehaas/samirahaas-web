'use strict';

/**
 * behind-the-scene router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::behind-the-scene.behind-the-scene');

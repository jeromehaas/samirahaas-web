'use strict';

/**
 * behind-the-scene controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::behind-the-scene.behind-the-scene');

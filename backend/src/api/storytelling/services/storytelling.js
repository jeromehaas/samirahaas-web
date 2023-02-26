'use strict';

/**
 * storytelling service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::storytelling.storytelling');

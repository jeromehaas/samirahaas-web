'use strict';

/**
 * my-ethic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-ethic.my-ethic');

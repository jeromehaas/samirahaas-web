'use strict';

/**
 * corporate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::corporate.corporate');

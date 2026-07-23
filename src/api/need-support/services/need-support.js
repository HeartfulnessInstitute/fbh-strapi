'use strict';

/**
 * need-support service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::need-support.need-support');

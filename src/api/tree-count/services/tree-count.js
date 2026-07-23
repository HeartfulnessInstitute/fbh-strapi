'use strict';

/**
 * tree-count service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tree-count.tree-count');

 'use strict';
 
 const Service = require('egg').Service;
 
 class newsService extends Service {
   async index() {
     const { ctx } = this;
     ctx.body = 'hi, egg';
   }
 }
  
 module.exports = newsService;
 
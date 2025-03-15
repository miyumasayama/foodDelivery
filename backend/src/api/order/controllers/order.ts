/**
 * order controller
 */

import { factories } from '@strapi/strapi'

const stripe = require('stripe')('sk_test_51R2lI2QQ87M73I9RWMYwriwwsLQD2pRXzui79ixK7Cns5PKNDS2ZxDGAam9dQarBXMn4yAmHwVyhYN1Ev73gaDXT00nZootHlc');

module.exports = factories.createCoreController('api::order.order', ({ strapi }) => ({
  // 注文を作成する
  async create(ctx) {
    try {
      const { address, amount, dishes, token } = JSON.parse(ctx.request.body);

      // Stripeで支払いを作成
      const charge = await stripe.charges.create({
        amount: amount * 100, // Stripeは最小単位 (円ではなく"銭") で処理するので、100倍する
        currency: 'jpy',
        source: token,
        description: `Order ${new Date()} by ${ctx.state.user.id}`,
      });

      // 注文データを保存
      const order = await strapi.entityService.create('api::order.order', {
        data: {
          user: ctx.state.user.id,
          charge_id: charge.id,
          amount,
          address,
          dishes,
        },
      });

      return order;
    } catch (error) {
      ctx.response.status = 500;
      return { error: '注文の作成に失敗しました', details: error.message };
    }
  }
}));
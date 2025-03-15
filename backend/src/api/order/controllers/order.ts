/**
 * order controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::order.order');

const stripe = require('stripe')('sk_test_51R2lI2QQ87M73I9RWMYwriwwsLQD2pRXzui79ixK7Cns5PKNDS2ZxDGAam9dQarBXMn4yAmHwVyhYN1Ev73gaDXT00nZootHlc');

module.exports = {
  // 注文を作成する
  create: async (ctx) => {
    const { address, amount, dishes, token } = JSON.parse(ctx.request.body)
    const charge = await stripe.payouts.create({
      amount: amount,
      currency: 'jpy',
      // source: token,
      description: `Order ${new Date} by ${ctx.state.user._id}`
    });
    const order = await strapi.services.order.create({
      user: ctx.state.user._id,
      charge_id: charge.id,
      amount,
      address,
      dishes
    })
    return order
  }
}
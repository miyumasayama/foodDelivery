export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // settings: {
  //   cors: {
  //     enabled: true,
  //     origin: ['http://localhost:3000'], // フロントエンドを許可
  //   },
  // },
});

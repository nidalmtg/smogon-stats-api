export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    engine: process.env.DATABASE_ENGINE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    uri: 'mongodb://127.0.0.1:27017/stats_smogon',
  },
});

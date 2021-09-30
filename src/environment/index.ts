export const environment = {
  PORT: process.env.PORT,
  database_config: {
    url: process.env.DATABASE_URL,
    synchronize: process.env.production !== 'true',
    logging: true,
  },
};

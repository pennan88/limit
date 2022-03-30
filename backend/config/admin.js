module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '82849f3374c7e816d785f358f454ee0d'),
  },
});

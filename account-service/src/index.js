const env = require('./env');
const http = require('./http');
const logger = require('./logger');
const eurekaRegister = require('./eurekaRegister');

setImmediate(() => {
  http.listen(env.PORT, () => {
    logger.info(__('http.started', env.PORT));

    if (env.NODE_ENV === 'production') {
      eurekaRegister()
        .then(() => {
          logger.info(__('eureka.started'));
        })
        .catch((err) => {
          logger.error(__('eureka.error', err));
        });
    }
  });
});

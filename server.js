require('dotenv').config();

const app = require('./server/index');
const log = require('./log');

app.listen(app.get('port'), () => {
  log.info(`Licences server listening on port ${app.get('port')}`);
});

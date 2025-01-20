const { neon, neonConfig } = require('@neondatabase/serverless');
const secrets = require('../lib/secrets.js')

async function getDbClients() {
  const dbUrl = await secrets.getDatabaseUrl()
  const sql = neon(dbUrl);
  return sql
}

module.exports.getDbClients = getDbClients
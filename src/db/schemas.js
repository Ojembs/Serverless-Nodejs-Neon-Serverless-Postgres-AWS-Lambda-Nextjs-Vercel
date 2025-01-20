const { text, timestamp, pgTable } = require("drizzle-orm/pg-core");
const { serial } = require("drizzle-orm/mysql-core");

const LeadTable = pgTable('lead', {
  id: serial('id').primaryKey().notNull(),
  email: text('email').notNull(),
  numberOfEntries: integer('int1').default(0),
  description: text('description').default('This is my comment'),
  createdAt: timestamp('created_at').defaultNow()
});

module.exports.LeadTable = LeadTable
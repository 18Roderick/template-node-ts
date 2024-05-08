import { boolean, pgTable, serial, text } from 'drizzle-orm/pg-core';

import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const todo = pgTable('todo', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  done: boolean('done').notNull().default(false),
});

export type Todo = typeof todo.$inferSelect;

export const selectTodoValidate = createSelectSchema(todo);

export const insertTodoValidate = createInsertSchema(todo);

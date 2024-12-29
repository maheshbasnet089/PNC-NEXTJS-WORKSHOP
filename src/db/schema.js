import { sql } from "drizzle-orm"
import {pgTable,serial, text, timestamp, varchar} from "drizzle-orm/pg-core"

export const recipes = pgTable("recipes",{
    id : serial("id").primaryKey(), 
    name : varchar("name",{length : 50}).notNull().unique(), 
    description : text("description").notNull(), 
    subname: varchar("subname",{length: 100}),
    createdat : timestamp("created_at").default(sql`CURRENT_TIMESTAMP`), 
    updatedat : timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
})


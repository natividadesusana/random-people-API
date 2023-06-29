import { connection } from "@/database/database";
import { Person, CreatePerson } from "@/protocols/person-protocol";

export async function getPersonDB(): Promise<Person[]> {
  const result = await connection.query<CreatePerson>(`SELECT * FROM people`);
  return result.rows.map(row => ({
    id: row.id,
    firstName: row.firstName,
    lastName: row.lastName,
  }));
}

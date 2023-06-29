import { Person } from "@/protocols/person-protocol";
import { getPersonDB } from "@/repositories/person-repositories";

async function getPerson(): Promise<Person | null> {
  const people = await getPersonDB();
  const count = people.length;
  if (count === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * count);
  return people[randomIndex];
}

const personService = {
  getPerson,
};

export default personService;

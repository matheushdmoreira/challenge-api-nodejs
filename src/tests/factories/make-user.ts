import { randomUUID } from 'node:crypto'

import { faker } from '@faker-js/faker'
import { hash } from 'argon2'

import { db } from '../../db/client.ts'
import { users } from '../../db/schema.ts'

export async function makeUser() {
  const passwordBeforeHash = randomUUID()

  const result = await db
    .insert(users)
    .values({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: await hash(passwordBeforeHash),
    })
    .returning()

  return {
    user: result[0],
    passwordBeforeHash,
  }
}

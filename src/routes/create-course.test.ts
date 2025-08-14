import { faker } from '@faker-js/faker'
import request from 'supertest'
import { expect, test } from 'vitest'

import { server } from '../app'

test('create a course', async () => {
  await server.ready()

  const response = await request(server.server)
    .post('/courses')
    .set('Content-Type', 'application/json')
    .send({ title: faker.lorem.words(4) })

  expect(response.status).toEqual(201)
  expect(response.body).toEqual({
    courseId: expect.any(String),
  })
})

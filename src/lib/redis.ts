import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://usw1-definite-lacewing-33839.upstash.io',
  token: process.env.REDIS_KEY!,
})


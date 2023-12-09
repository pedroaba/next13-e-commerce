import { delay } from '@/utils/delay'
import data from '../data.json'
import { z } from 'zod'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  await delay(2000)

  const { searchParams } = request.nextUrl
  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  )

  return Response.json(products)
}

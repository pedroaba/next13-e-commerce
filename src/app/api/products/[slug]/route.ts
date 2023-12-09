import { delay } from '@/utils/delay'
import data from '../data.json'
import { z } from 'zod'

interface Params {
  params: {
    slug: string
  }
}

export async function GET(_: Request, { params }: Params) {
  await delay(2000)

  const slug = z.string().parse(params.slug)
  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json(
      {
        message: `Product with slug "${slug}" not found`,
      },
      {
        status: 404,
      },
    )
  }

  return Response.json(product)
}

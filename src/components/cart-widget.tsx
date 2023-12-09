'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/cart-context'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-5 h-5" />
      <span className="text-sm"> Cart ({items.length})</span>
    </div>
  )
}

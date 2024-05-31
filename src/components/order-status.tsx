type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

export const OrderStatusMap: Record<OrderStatus, string> = {
  canceled: 'Cancelado',
  pending: 'Pendente',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}

      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      )}

      {['delivering, porcessing'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-400" />
      )}

      <span className="font-medium text-muted-foreground ">
        {OrderStatusMap[status]}
      </span>
    </div>
  )
}

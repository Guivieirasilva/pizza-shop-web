import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDaysOrdersAmount } from '@/api/get-day-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function DayOrdersAmountCard() {
  const { data: daysOrdersAmount } = useQuery({
    queryFn: getDaysOrdersAmount,
    queryKey: ['metrics', 'day-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2 ">
        <CardTitle className="text-base font-semibold ">
          Pedidos (dia)
        </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {daysOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {daysOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-sm text-muted-foreground">
              {daysOrdersAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{daysOrdersAmount.diffFromYesterday}%{' '}
                  </span>
                  em relação a ontem
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {' '}
                    -{daysOrdersAmount.diffFromYesterday}%{' '}
                  </span>
                  em relação a ontem
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}

import { test, expect } from '@playwright/test';

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 590,00')).toBeVisible()
  await expect(page.getByText('--40% em relação ao mês').first()).toBeVisible()
})

test('display month orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('200')).toBeVisible()
  await expect(page.locator('div').filter({ hasText: /^200 --40% em relação ao mês passado$/ }).getByRole('paragraph')).toBeVisible()
})

test('display day orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('20', { exact: true })).toBeVisible()
  await expect(page.getByText('--20% em relação a ontem')).toBeVisible()
})

test('display month cancel orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('59', { exact: true })).toBeVisible()
  await expect(page.getByText('-40% em relação ao mês passado', { exact: true })).toBeVisible()
})



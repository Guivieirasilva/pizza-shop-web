import { test, expect } from '@playwright/test';

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 590,00')).toBeVisible()
  // expect(page.getByText('200')).toBeVisible()
  expect(page.getByText('--40% em relação ao mês').first()).toBeVisible()

  await page.waitForTimeout(1500)

})

test('display month orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200')).toBeVisible()
  expect(page.locator('div').filter({ hasText: /^200 --40% em relação ao mês passado$/ }).getByRole('paragraph')).toBeVisible()

  await page.waitForTimeout(1500)

})

test('display day orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('--20% em relação a ontem')).toBeVisible()

  await page.waitForTimeout(1500)

})

test('display month cancel orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('59', { exact: true })).toBeVisible()
  expect(page.getByText('-40% em relação ao mês passado', { exact: true })).toBeVisible()

  await page.waitForTimeout(1500)

})



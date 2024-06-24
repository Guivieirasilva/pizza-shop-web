import { test, expect } from '@playwright/test';

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza shop' }).click()
  await page.getByText('Perfil da loja').click()

  await page.getByLabel('Nome').fill("Rocket Pizza")
  await page.getByLabel('Descrição').fill("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ipsum dolores totam repellendus aut quae animi quo optio id mollitia? Cupiditate, maiores quidem aliquam veniam saepe adipisci beatae autem voluptas!")

  await page.getByRole('button', { name: 'Salvar' }).click()
  
  await page.waitForLoadState('networkidle')
  
  const toast = page.getByText('Perfil atualizado com sucesso!')
  
  await expect(toast).toBeVisible()
  
  await page.getByRole('button', { name: 'Close' }).click()

  expect(page.getByRole('button', {name: 'Rocket Pizza'})).toBeVisible()

})


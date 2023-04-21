// @ts-check
import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:5173'

test('basic test', async ({ page }) => {
  await page.goto(BASE_URL)

  const heading = await page.getByRole('heading')
  const headingText = await heading.textContent()

  const text = await page.getByRole('paragraph').first()
  const textContent = await text.textContent()

  await expect(headingText).toBe('Star Wars Starships')
  await expect(textContent?.length).toBeGreaterThan(6)
})

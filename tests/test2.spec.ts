import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://automationintesting.online/
  await page.goto('https://automationintesting.online/');
  // Click text=Let me hack!
  await page.locator('text=Let me hack!').click();
  // Go to https://automationintesting.online/#/admin
  await page.goto('https://automationintesting.online/#/admin');
  // Click [data-testid="username"]
  await page.locator('[data-testid="username"]').click();
  // Fill [data-testid="username"]
  await page.locator('[data-testid="username"]').fill('admin');
  // Press Tab
  await page.locator('[data-testid="username"]').press('Tab');
  // Fill [data-testid="password"]
  await page.locator('[data-testid="password"]').fill('password');
  // Click [data-testid="submit"]
  await page.locator('[data-testid="submit"]').click();
  // Click [data-testid="roomName"]
  await page.locator('[data-testid="roomName"]').click();
  // Fill [data-testid="roomName"]
  await page.locator('[data-testid="roomName"]').fill('102');
  // Select Twin
  await page.locator('#type').selectOption('Twin');
  // Select true
  await page.locator('#accessible').selectOption('true');
  // Click #roomPrice
  await page.locator('#roomPrice').click();
  // Fill #roomPrice
  await page.locator('#roomPrice').fill('150');
  // Check #wifiCheckbox
  await page.locator('#wifiCheckbox').check();
  // Check #safeCheckbox
  await page.locator('#safeCheckbox').check();
  // Check #viewsCheckbox
  await page.locator('#viewsCheckbox').check();
  // Click button:has-text("Create")
  await page.locator('button:has-text("Create")').click();
  // Click text=Front Page
  await page.locator('text=Front Page').click();
  await page.goto('https://automationintesting.online/');
  // Click text=TwinPlease enter a description for this roomWiFiSafeViewsBook this room >> button
  await page.locator('text=Book this room').first().click();
  // Click div[role="cell"]:has-text("07")

  const originElement = await page.locator('div:nth-child(3) > .rbc-row-bg > div:nth-child(3)')
  const destinationElement = await page.locator('div:nth-child(3) > .rbc-row-bg > div:nth-child(7)')

  await originElement.hover();
  await page.mouse.down();
  const box = (await destinationElement.boundingBox())!;
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await destinationElement.hover();
  await page.mouse.up();


  // Click [placeholder="Firstname"]
  await page.locator('[placeholder="Firstname"]').click();
  // Fill [placeholder="Firstname"]
  await page.locator('[placeholder="Firstname"]').fill('Sparsh');
  // Click [placeholder="Lastname"]
  await page.locator('[placeholder="Lastname"]').click();
  // Fill [placeholder="Lastname"]
  await page.locator('[placeholder="Lastname"]').fill('Kesari');
  // Click text=CancelBook >> [placeholder="Email"]
  await page.locator('text=CancelBook >> [placeholder="Email"]').click();
  // Fill text=CancelBook >> [placeholder="Email"]
  await page.locator('text=CancelBook >> [placeholder="Email"]').fill('sparshk@lambdatest.com');
  // Press Tab
  await page.locator('text=CancelBook >> [placeholder="Email"]').press('Tab');
  // Fill text=CancelBook >> [placeholder="Phone"]
  await page.locator('text=CancelBook >> [placeholder="Phone"]').fill('123456789012');
 // Click button:has-text("Book")
  await page.locator('button:has-text("Book")').first().click();
  // Click text=Booking Successful!
  await expect(page.locator('text=Booking Successful!')).toHaveText('Booking Successful!');

  await page.locator('text=Close').click();

  await page.goto('https://automationintesting.online/#/admin');
  // Click [data-testid="username"]
  await page.locator('[data-testid="username"]').click();
  // Fill [data-testid="username"]
  await page.locator('[data-testid="username"]').fill('admin');
  // Press Tab
  await page.locator('[data-testid="username"]').press('Tab');
  // Fill [data-testid="password"]
  await page.locator('[data-testid="password"]').fill('password');
  // Click [data-testid="submit"]
  await page.locator('[data-testid="submit"]').click();

});
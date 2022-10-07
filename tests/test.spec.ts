import { test, expect } from '@playwright/test';

const contact = {
  name: 'Sparsh Kesari',
  email: 'sparshk@lambdatest.com',
  phone: '971581112233',
  subject: 'Booking request for Shady Meadows',
  message: 'I want to book room at Shady Meadows\n\nRegards,\nSK',
};

// https://club.ministryoftesting.com/t/take-the-test-bash-2022-ui-challenge-closing-on-the-25th-of-september-2022/61210
test('read the message in the admin dashboard', async ({ page }) => {
  const randomNumber = Math.round(Math.random() * 1000000);

  await page.goto('https://automationintesting.online');

  await page.locator('button:has-text("let me hack")').click();

  await page.locator('[data-testid="ContactName"]').fill(contact.name);

  await page.locator('[data-testid="ContactEmail"]').fill(contact.email);

  await page.locator('[data-testid="ContactPhone"]').fill(contact.phone);

  await page.locator('[data-testid="ContactSubject"]').fill(`${contact.subject} #${randomNumber}`);

  await page.locator('[data-testid="ContactDescription"]').fill(contact.message);

  await page.locator('text=Submit').click();

  await page.goto('https://automationintesting.online/#/admin');

  await page.locator('[data-testid="username"]').fill('admin');
  await page.locator('[data-testid="password"]').fill('password');
  await page.locator('[data-testid="submit"]').click();

  await page.goto('https://automationintesting.online/#/admin/messages');

  await page.locator(`text=${randomNumber}`).click();
  for (const contactValue of Object.values(contact)) {
    await expect(page.locator(`text=${contactValue}`).first()).toBeVisible();
  };
  await page.locator('text=Close').click();

  // Remove the message
  const row = page.locator('.row');
  await row.locator(':scope', { hasText: randomNumber.toString() }).locator('.fa-remove').click();

  // Click text=Logout
  await page.locator('text=Logout').click();
});


test('create a room from admin perspective', async ({ page }) => {
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


  // Click p:has-text("twin")
  await page.locator('p:has-text("twin")').first().click();
  // Click text=Type: single
  await expect(page.locator('text=Type: twin')).toBeVisible();
  await expect(page.locator('text=Room price: 150')).toBeVisible();
  await expect(page.locator('text=Features: WiFi, Safe, Views')).toBeVisible();
});
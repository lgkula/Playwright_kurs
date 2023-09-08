import { test, expect } from '@playwright/test';

test.describe('Logowanie do banku test', () => {
    test('', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await expect(page).toHaveTitle('/Logowanie/')
        await page.getByTestId('login-input').fill('12345678');
        await page.getByTestId('password-input').fill('haslo123')
        await expect(page.getByTestId('login-button')).toBeEnabled;
        page.getByTestId('login-button').click;
        await expect(page).toHaveURL('https://demo-bank.vercel.app/pulpit.html');
        await expect(page).toHaveTitle('Demobank - Bankowość Internetowa - Pulpit')
    })

test('Doładuje telefon o 100zł test', async ({ page }) => {
    await expect(page).toHaveTitle('Demobank - Bankowość Internetowa - Pulpit')
    await page.locator('#widget_1_topup_receiver').selectOption('502 xxx xxx');
    await expect(page.locator('#uniform-widget_1_topup_receiver > span')).toHaveText('502 xxx xxx');
    await page.locator('#widget_1_topup_amount').fill('100');
    await page.locator('#widget_1_topup_agreement').check();
    await page.locator('#execute_phone_btn').click();

})



})

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have Product-List', async () => {
    await expect(element(by.id('Product-List'))).toBeVisible();
  });
  it('should have Product-Card and should be Pressable', async () => {
    await expect(element(by.id('Product-Card')).atIndex(1)).toBeVisible();
    await element(by.id('Product-Card')).atIndex(1).tap();
  });
  it('should have Product-Detail', async () => {
    await expect(element(by.id('Product-Detail'))).toBeVisible();
  });
  it('should have Button-Add-To-Cart and should be Pressable', async () => {
    await expect(element(by.id('Button-Add-To-Cart'))).toBeVisible();
    await element(by.id('Button-Add-To-Cart')).tap();
    await element(by.id('Button-Add-To-Cart')).tap();
  });
  it('should have Cart-Button and should be Pressable', async () => {
    await expect(element(by.id('Cart-Button')).atIndex(0)).toBeVisible();
    await element(by.id('Cart-Button')).atIndex(0).tap();
  });
  it('should have Cart-List', async () => {
    await expect(element(by.id('Cart-List'))).toBeVisible();
  });
  it('should have Card-Item and should be Pressable', async () => {
    await expect(element(by.id('Card-Item')).atIndex(0)).toBeVisible();
  });
  it('Card-Item buttons should be working', async () => {
    await expect(element(by.id('Button-Quantity')).atIndex(0)).toHaveText('2');
    await element(by.id('Button-Decrease-Quantity')).atIndex(0).tap();
    await expect(element(by.id('Button-Quantity')).atIndex(0)).toHaveText('1');
    await element(by.id('Button-Add-To-Cart')).atIndex(0).tap();
    await expect(element(by.id('Button-Quantity')).atIndex(0)).toHaveText('2');
    await element(by.id('Button-Remove-Product')).atIndex(0).tap();
  });
  it('should not have Card-Item now', async () => {
    await expect(element(by.id('Card-Item')).atIndex(0)).toNotExist();
  });
  it('should be able to go back to home', async () => {
    await element(by.id('Back-Button')).atIndex(0).tap();
    await element(by.id('Back-Button')).atIndex(0).tap();

    await expect(element(by.id('Product-List'))).toBeVisible();
  });

  
});

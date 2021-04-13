import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.className('header')).getText();
  }

  async getToDoName(todoId: string): Promise<string> {
    return element(by.id(todoId)).getText();
  }

  async addTodo(todoName: string): Promise<void> {
    await browser.sleep(3000);
    await element(by.id('nameField')).sendKeys(todoName);
    await browser.sleep(3000);
    await element(by.className('todo-submit')).click();
    await browser.sleep(3000);
  }
}

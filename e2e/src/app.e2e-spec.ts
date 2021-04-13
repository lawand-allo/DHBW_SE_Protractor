import {browser, logging} from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  const page: AppPage = new AppPage();

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('ToDo List');
  });

  it('should find first todo', async () => {
    expect(await page.getToDoName('todo0')).toEqual('Einkaufen');
  });
  it('should add a new Todo', async () => {
    await page.addTodo('SE Blog Entry');
    expect(await page.getToDoName('todo2')).toEqual('SE Blog Entry');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

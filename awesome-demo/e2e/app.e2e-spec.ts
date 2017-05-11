import { AwesomeDemoPage } from './app.po';

describe('awesome-demo App', () => {
  let page: AwesomeDemoPage;

  beforeEach(() => {
    page = new AwesomeDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Data2Page } from './app.po';

describe('data2 App', () => {
  let page: Data2Page;

  beforeEach(() => {
    page = new Data2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

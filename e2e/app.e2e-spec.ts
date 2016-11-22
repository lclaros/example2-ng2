import { Example2Ng2Page } from './app.po';

describe('example2-ng2 App', function() {
  let page: Example2Ng2Page;

  beforeEach(() => {
    page = new Example2Ng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

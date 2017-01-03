import { OpalaPage } from './app.po';

describe('opala App', function() {
  let page: OpalaPage;

  beforeEach(() => {
    page = new OpalaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

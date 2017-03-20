import { GTSManagerPage } from './app.po';

describe('gts-manager App', function() {
  let page: GTSManagerPage;

  beforeEach(() => {
    page = new GTSManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

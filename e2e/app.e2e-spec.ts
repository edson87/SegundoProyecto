import { SevicesPage } from './app.po';

describe('sevices App', function() {
  let page: SevicesPage;

  beforeEach(() => {
    page = new SevicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

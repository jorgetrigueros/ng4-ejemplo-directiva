import { Ng4DirectivesPage } from './app.po';

describe('ng4-directives App', () => {
  let page: Ng4DirectivesPage;

  beforeEach(() => {
    page = new Ng4DirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

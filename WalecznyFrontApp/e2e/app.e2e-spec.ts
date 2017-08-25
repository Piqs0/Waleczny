import { WalecznyFrontAppPage } from './app.po';

describe('waleczny-front-app App', () => {
  let page: WalecznyFrontAppPage;

  beforeEach(() => {
    page = new WalecznyFrontAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

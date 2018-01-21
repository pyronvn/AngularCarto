import { HelloWorldWebFePage } from './app.po';

describe('hello-world-web-fe App', function() {
  let page: HelloWorldWebFePage;

  beforeEach(() => {
    page = new HelloWorldWebFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

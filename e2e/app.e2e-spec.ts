import { SurveyPage } from './app.po';

describe('survey App', () => {
  let page: SurveyPage;

  beforeEach(() => {
    page = new SurveyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

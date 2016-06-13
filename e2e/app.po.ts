export class MyDreamAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-dream-app-app h1')).getText();
  }
}

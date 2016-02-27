import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
  selector: 'reddit',
  template: `
  <form class="ul large form segment">
    <h3 class="ui header">Add a Link</h3>
    <div class="field">
      <label for="title">Title:</label>
      <input name="title">
    </div>
    <div class="field">
      <label for="link">Link:</label>
      <input name="link">
    </div>


  <button (click)="addArticle(newTitle, newlink)" class="ui positive right floated button">
    Submit link
  </button>
  </form>
  `
})
class reddit {
  constructor() {
    addArticle(title:string, link:string) {
      console.log(`Adding article title: ${title.value} and link: ${link.value}`)
    }
  }
}

bootstrap(reddit);

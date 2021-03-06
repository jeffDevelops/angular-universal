import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(meta: Meta, title: Title) {
  	meta.addTags([
	  	{name: 'author', content: 'Jeff Reynolds'},
	  	{name: 'keywords', content: 'angular seo, angular 4 universal, etc.'},
	  	{name: 'description', content: 'This is my Angular SEO=based App, enjoy it!'}
  ]);
  }

}

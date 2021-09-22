import { Component } from "@angular/core";


@Component ({
 selector: 'app-article',
 templateUrl: './article.component.html'

})

export class ArticleComponent {
  title: string = 'Zena'
  content: string = 'she is my dog'
  isTechRelated: boolean = true

  colorChoice() {
    return this.isTechRelated ? 'Blue' : "Yellow"

  }

  reverseValue(){
    this.isTechRelated = !this.isTechRelated
  }
}

// condition/property ? 'true' : 'false'

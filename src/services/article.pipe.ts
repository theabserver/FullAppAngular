import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'src/models/article';

@Pipe({
  name: 'articleName'
})
export class ArticlePipe implements PipeTransform {

  transform(article: Article, args?: any): any {
    console.log(article)
    return article;
  }

}

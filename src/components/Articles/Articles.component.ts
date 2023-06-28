import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article';
import { ArticleService } from 'src/services/article.service';
@Component({
  selector: 'app-Articles',
  templateUrl: './Articles.component.html',
  styleUrls: ['./Articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {
  articles:Article[] = [];
  isLoading: boolean = true;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    setTimeout(() => {
      this.articleService.getArticleObs().subscribe((articlesObs) => {
        articlesObs.map((article) => {
          article.title = article.title.toUpperCase();
        })
        this.articles = articlesObs;
        this.isLoading = false;
      });
    }, 1000);
  }
  ngOnDestroy(){

  }
}

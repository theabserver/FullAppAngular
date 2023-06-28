import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import { Article } from 'src/models/article';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesSubject = new BehaviorSubject<Article[]>([])
  getArticleObs():Observable<Article[]>{
    return this.http.get<Article[]>('https://jsonplaceholder.typicode.com/posts');
  }
constructor(private readonly http: HttpClient) { }
  
}

import { NgModule , inject} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/Navbar/Navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from 'src/components/Articles/Articles.component';
import { PostsComponent } from 'src/components/Posts/Posts.component';
import { HomeComponent } from 'src/components/Home/Home.component';
import { CommentsComponent } from 'src/components/Comments/Comments.component';
import { ErrorComponent } from 'src/components/Error/Error.component';
import { HttpClientModule } from "@angular/common/http";
import { ArticlePipe } from 'src/services/article.pipe';
import { LoginComponent } from 'src/components/Login/Login.component';
import { FormsModule } from '@angular/forms' 
import { TokenManager } from './TokenManager';
import { LoginService } from 'src/services/login.service';
import { map } from "rxjs/operators";


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [
      () => inject(LoginService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
    ]},
  {path: 'article', component: ArticlesComponent},
  {path: 'post', component: PostsComponent},
  {path: 'comment', component: CommentsComponent},
  {path: '**', component: ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    PostsComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    ArticlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [TokenManager],
  bootstrap: [AppComponent]
})
export class AppModule { }

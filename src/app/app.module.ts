import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/Navbar/Navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/components/Error/Error.component';
import { HttpClientModule } from "@angular/common/http";
import { ArticlePipe } from 'src/services/article.pipe';
import { LoginComponent } from 'src/components/Login/Login.component';
import { FormsModule } from '@angular/forms'
import { TokenManager } from './TokenManager';
import { authGuard } from 'src/guard/LoginGuard';
import { HomeComponent } from 'src/components/Home/Home.component';
import { ArticlesComponent } from 'src/components/Articles/Articles.component';
import { PostsComponent } from 'src/components/Posts/Posts.component';
import { CommentsComponent } from 'src/components/Comments/Comments.component';
import { LoginService } from 'src/services/login.service';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, canActivate: [authGuard]
  },
  {
    path: 'article', component: ArticlesComponent,
    canActivate: [authGuard]
  },
  {
    path: 'post', component: PostsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'comment', component: CommentsComponent,
    canActivate: [authGuard]
  },
  { path: '**', component: ErrorComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
  providers: [TokenManager, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

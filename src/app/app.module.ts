import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { ArticlesComponent } from './pages/articles/articles/articles.component';
import { DetailsArticleComponent } from './composants/details-article/details-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonsActionComponent } from './composants/bouttons-action/bouttons-action.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    ArticlesComponent,
    DetailsArticleComponent,
    PaginationComponent,
    BouttonsActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

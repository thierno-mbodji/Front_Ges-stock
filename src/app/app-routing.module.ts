import { ArticlesComponent } from './pages/articles/articles/articles.component';
import { PageStatistiquesComponent } from './page-statistiques/page-statistiques.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
   {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
      path: 'statistiques',
      component: PageStatistiquesComponent
    },
    {
      path: 'articles',
      component: ArticlesComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

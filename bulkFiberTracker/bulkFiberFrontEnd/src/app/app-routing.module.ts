import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DasboardComponent } from './BulkDisplay/dasboard/dasboard.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'header', component: HeaderComponent },
  {path: 'BulkDisplay/dasboard', component: DasboardComponent },
  {path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

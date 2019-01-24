import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DetailsComponent } from './components/details/details.component';
import { FavBtnComponent } from './components/fav-btn/fav-btn.component';
import { RateComponent } from './components/rate/rate.component';
import { MainbarComponent } from './components/mainbar/mainbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainbarComponent,
    DetailsComponent,
    FavBtnComponent,
    RateComponent,
    MainbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

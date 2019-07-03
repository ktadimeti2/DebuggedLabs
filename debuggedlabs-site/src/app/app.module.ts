import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './modules/posts-list/posts-list.component';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { PodcastsComponent } from './sections/podcasts/podcasts.component';
import { TechnologyComponent } from './sections/technology/technology.component';
import { FrontpageComponent } from './sections/frontpage/frontpage.component';
import { AboutComponent } from './sections/about/about.component';
import { BannerComponent } from './navigation/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    NavigationBarComponent,
    PodcastsComponent,
    TechnologyComponent,
    FrontpageComponent,
    AboutComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

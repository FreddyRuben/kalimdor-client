import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PlayMovieComponent } from './components/play-movie/play-movie.component';

const routes: Routes = [
  {path: 'movielist', component: MovieListComponent},
  {path: 'movie/:id', component: PlayMovieComponent},
  {path: '', redirectTo: 'movielist', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    MovieListComponent,
    PlayMovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { FrontpageComponent } from '../sections/frontpage/frontpage.component';
import { TechnologyComponent } from '../sections/technology/technology.component';
import { AboutComponent } from '../sections/about/about.component';
import { Routes } from '@angular/router';
import { PodcastsComponent } from '../sections/podcasts/podcasts.component';

export const RouterConfig: Routes = [
    {
        path: '',
        component: FrontpageComponent,
        data: { 
            title: 'Debugged Labs' 
        }
    },
    {
        path: 'podcasts',
        component: PodcastsComponent,
        data: { 
            name: "Podcasts",
            title: 'Podcasts | Debugged Labs',
            iconUrl: 'assets/icons/podcast_icon.png',
            backgroundColor: '#3399ff'
        }
    },
    {
        path: 'technology',
        component: TechnologyComponent,
        data: {
            name: "Technology", 
            title: 'Technology | Debugged Labs',
            iconUrl: 'assets/icons/technology_icon.png',
            backgroundColor: '#ff872e'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            name: "About",
            title: 'About | Debugged Labs',
            iconUrl: 'assets/icons/about_icon.png',
            backgroundColor: '#ff6666'
        }
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

export const MenuConfig: Routes = [
    RouterConfig[1], // Podcasts
    RouterConfig[2], // Technology
    RouterConfig[3] // About
];
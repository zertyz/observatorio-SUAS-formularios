import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// angular-seed-advanced-spikes
import { GvHomeComponent } from './pages/gv-home/gv-home.component';

export const APP_COMPONENTS: any[] = [

  // angular-seed-advanced-spikes
  GvHomeComponent,

  AppComponent,
  AboutComponent,
  HomeComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';

// angular-seed-advanced-spikes
export * from './pages/gv-home/gv-home.component'

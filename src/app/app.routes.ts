import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.components';
import { HeroPageComponent } from './pages/hero/hero.page.component';

export const routes: Routes = [

    //Home path. It will be the default page when we access the app.
    {
        path:'',
        component: CounterPageComponent,
    },

    //Hero path. It will be the page wecan access when we navigate to '/hero'.
    {
        path:'hero',
        component: HeroPageComponent,
    }

];

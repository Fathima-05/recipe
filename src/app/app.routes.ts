import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Menu } from './pages/menu/menu';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Productdetails } from './pages/productdetails/productdetails';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {   
        path: 'about',
        component: About,
    },
    {
        path: 'menu',
        component: Menu,
    },
    {
        path: 'contact',
        component: Contact,
    },
    {
        
        path: 'productdetails/:id',
        component: Productdetails,
        
    }
];

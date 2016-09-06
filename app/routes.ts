import { RouterConfig } from '@angular/router';
import { HomeComponent } from './+home/home.component';
import { nsProvideRouter } from 'nativescript-angular/router';
import { AddRecipeComponent } from './+add-recipe/add-recipe.component';

export const APP_ROUTES = {
    HOME: 'home',
    OVERVIEW: 'overview',
    ADDRECIPE: 'add-recipe'
};

const routes: RouterConfig = [
    {path: '', redirectTo: APP_ROUTES.HOME, terminal: true},
    {path: APP_ROUTES.HOME, component: HomeComponent},
    {path: APP_ROUTES.ADDRECIPE, component: AddRecipeComponent},
    // {path: APP_ROUTES.LOGIN, component: LoginPageComponent},
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, {enableTracing: false})
];

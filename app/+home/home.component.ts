import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { APP_ROUTES } from '../routes';

@Component({
    selector: 'jr-home',
    templateUrl: './+home/home.component.html'
})
export class HomeComponent {
    constructor(private router: RouterExtensions) {}

    public goToAddRecipe(): void {
        this.router.navigate([APP_ROUTES.ADDRECIPE]);
    }
}

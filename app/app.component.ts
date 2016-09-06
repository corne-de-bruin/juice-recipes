import {Component} from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router/ns-router';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [NS_ROUTER_DIRECTIVES]
})
export class AppComponent {
}

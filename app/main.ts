// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { nativeScriptBootstrap } from 'nativescript-angular/application';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './routes';
import { NS_HTTP_PROVIDERS } from 'nativescript-angular/http';

nativeScriptBootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    NS_HTTP_PROVIDERS
]);

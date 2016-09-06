"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require('nativescript-angular/application');
var app_component_1 = require('./app.component');
var routes_1 = require('./routes');
var http_1 = require('nativescript-angular/http');
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [
    routes_1.APP_ROUTER_PROVIDERS,
    http_1.NS_HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map
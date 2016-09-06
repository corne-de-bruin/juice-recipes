"use strict";
var home_component_1 = require('./+home/home.component');
var router_1 = require('nativescript-angular/router');
var add_recipe_component_1 = require('./+add-recipe/add-recipe.component');
exports.APP_ROUTES = {
    HOME: 'home',
    OVERVIEW: 'overview',
    ADDRECIPE: 'add-recipe'
};
var routes = [
    { path: '', redirectTo: exports.APP_ROUTES.HOME, terminal: true },
    { path: exports.APP_ROUTES.HOME, component: home_component_1.HomeComponent },
    { path: exports.APP_ROUTES.ADDRECIPE, component: add_recipe_component_1.AddRecipeComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(routes, { enableTracing: false })
];
//# sourceMappingURL=routes.js.map
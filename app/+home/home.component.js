"use strict";
var core_1 = require('@angular/core');
var router_extensions_1 = require('nativescript-angular/router/router-extensions');
var routes_1 = require('../routes');
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.goToAddRecipe = function () {
        this.router.navigate([routes_1.APP_ROUTES.ADDRECIPE]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'jr-home',
            templateUrl: './+home/home.component.html'
        }), 
        __metadata('design:paramtypes', [router_extensions_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
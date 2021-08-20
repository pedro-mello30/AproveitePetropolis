(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"feed\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"perfil\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");




const routes = [
    {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: '',
                redirectTo: '/tabs/feed',
                pathMatch: 'full'
            },
            {
                path: 'feed',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | feed-feed-module */[__webpack_require__.e("common"), __webpack_require__.e("feed-feed-module")]).then(__webpack_require__.bind(null, /*! ../feed/feed.module */ "xQww")).then(m => m.FeedPageModule)
                    },
                    {
                        path: 'idCategoria',
                        children: [
                            {
                                path: '',
                                loadChildren: () => Promise.all(/*! import() | categoria-categoria-module */[__webpack_require__.e("common"), __webpack_require__.e("categoria-categoria-module")]).then(__webpack_require__.bind(null, /*! ../categoria/categoria.module */ "WVuc")).then(m => m.CategoriaPageModule)
                            },
                            {
                                path: 'idSubcategoria',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => Promise.all(/*! import() | subcategoria-subcategoria-module */[__webpack_require__.e("common"), __webpack_require__.e("subcategoria-subcategoria-module")]).then(__webpack_require__.bind(null, /*! ../subcategoria/subcategoria.module */ "U0Pp")).then(m => m.SubcategoriaPageModule)
                                    },
                                    {
                                        path: 'idEstabelecimento',
                                        loadChildren: () => Promise.all(/*! import() | estabelecimento-estabelecimento-module */[__webpack_require__.e("common"), __webpack_require__.e("estabelecimento-estabelecimento-module")]).then(__webpack_require__.bind(null, /*! ../estabelecimento/estabelecimento.module */ "Xr8j")).then(m => m.EstabelecimentoPageModule)
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        path: 'estabelecimento/:key',
                        loadChildren: () => Promise.all(/*! import() | estabelecimento-estabelecimento-module */[__webpack_require__.e("common"), __webpack_require__.e("estabelecimento-estabelecimento-module")]).then(__webpack_require__.bind(null, /*! ../estabelecimento/estabelecimento.module */ "Xr8j")).then(m => m.EstabelecimentoPageModule)
                    },
                    {
                        path: 'categoria/:key',
                        loadChildren: () => Promise.all(/*! import() | categoria-categoria-module */[__webpack_require__.e("common"), __webpack_require__.e("categoria-categoria-module")]).then(__webpack_require__.bind(null, /*! ../categoria/categoria.module */ "WVuc")).then(m => m.CategoriaPageModule)
                    },
                    {
                        path: 'subcategoria/:key',
                        loadChildren: () => Promise.all(/*! import() | subcategoria-subcategoria-module */[__webpack_require__.e("common"), __webpack_require__.e("subcategoria-subcategoria-module")]).then(__webpack_require__.bind(null, /*! ../subcategoria/subcategoria.module */ "U0Pp")).then(m => m.SubcategoriaPageModule)
                    },
                    {
                        path: 'cupom/:key',
                        loadChildren: () => Promise.all(/*! import() | cupom-cupom-module */[__webpack_require__.e("default~cupom-cupom-module~firebase-auth~login-login-module~perfil-perfil-module"), __webpack_require__.e("default~cupom-cupom-module~login-login-module~perfil-perfil-module"), __webpack_require__.e("common"), __webpack_require__.e("cupom-cupom-module")]).then(__webpack_require__.bind(null, /*! ../cupom/cupom.module */ "Um8L")).then(m => m.CupomPageModule)
                    },
                ]
            },
            // {
            //   path: 'estabelecimento/:key',
            //   loadChildren: () => import('../estabelecimento/estabelecimento.module').then(m => m.EstabelecimentoPageModule)
            // },
            {
                path: 'perfil',
                loadChildren: () => Promise.all(/*! import() | perfil-perfil-module */[__webpack_require__.e("default~cupom-cupom-module~firebase-auth~login-login-module~perfil-perfil-module"), __webpack_require__.e("default~cupom-cupom-module~login-login-module~perfil-perfil-module"), __webpack_require__.e("perfil-perfil-module")]).then(__webpack_require__.bind(null, /*! ../perfil/perfil.module */ "ZEuG")).then(m => m.PerfilPageModule)
            }
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map
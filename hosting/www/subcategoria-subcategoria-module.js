(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subcategoria-subcategoria-module"],{

/***/ "0Nj3":
/*!*****************************************************!*\
  !*** ./src/app/subcategoria/subcategoria.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subcategoriaBox {\n  display: -webkit-inline-box;\n  width: 100%;\n  overflow-x: auto;\n}\n.subcategoriaBox .item {\n  margin-right: 15px;\n  text-align: center;\n}\n.subcategoriaBox .item ion-thumbnail {\n  --border-radius: 5px;\n  width: 70px;\n  height: 70px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n.subcategoriaBox .item p {\n  color: #333333;\n  font-size: 12px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N1YmNhdGVnb3JpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUVOO0FBQUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRU4iLCJmaWxlIjoic3ViY2F0ZWdvcmlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJjYXRlZ29yaWFCb3h7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgLml0ZW17XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24tdGh1bWJuYWlse1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xuICAgIH1cbiAgICBwe1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "FcuI":
/*!*************************************************************!*\
  !*** ./src/app/subcategoria/subcategoria-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SubcategoriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriaPageRoutingModule", function() { return SubcategoriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subcategoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcategoria.page */ "z6BO");




const routes = [
    {
        path: '',
        component: _subcategoria_page__WEBPACK_IMPORTED_MODULE_3__["SubcategoriaPage"]
    }
];
let SubcategoriaPageRoutingModule = class SubcategoriaPageRoutingModule {
};
SubcategoriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubcategoriaPageRoutingModule);



/***/ }),

/***/ "FjnF":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcategoria/subcategoria.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{subcategoria?.nome}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n<!--    <ion-row>-->\n<!--      <ion-col>-->\n<!--       <div class=\"subcategoriaBox\">-->\n<!--          <div class=\"item\" *ngFor=\"let subcategoria of subcategorias\">-->\n<!--            &lt;!&ndash;            <img src=\"assets\">&ndash;&gt;-->\n<!--            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/idCategoria/idSubcategoria']\">-->\n<!--              <img *ngIf=\"subcategoria?.imagem\" src=\"{{subcategoria?.imagem}}\">-->\n<!--              <img *ngIf=\"!subcategoria?.imagem\" src=\"assets/no_image.jpg\">-->\n<!--            </ion-thumbnail>-->\n<!--            <p>{{subcategoria?.nome}}</p>-->\n<!--          </div>-->\n<!--       </div>-->\n<!--      </ion-col>-->\n<!--    </ion-row>-->\n\n\n    <ion-row>\n      <ion-col>\n        <h5 class=\"title ion-margin-bottom\">Estabelecimentos</h5>\n\n        <div class=\"estabelecimento-list\">\n          <div class=\"estabelecimento-item\" *ngFor=\"let estabelecimento of estabelecimentos\" >\n            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/estabelecimento/', estabelecimento.key]\">\n              <img *ngIf=\"estabelecimento.logo\" src=\"{{estabelecimento.logo}}\">\n              <img *ngIf=\"!estabelecimento.logo\" src=\"assets/no_image.jpg\">\n            </ion-thumbnail>\n            <div class=\"content\">\n              <ion-row>\n                <p class=\"title\">{{estabelecimento?.nome}}</p>\n                <a class=\"cupomLink ion-float-right\">Ver Cupons</a>\n              </ion-row>\n              <ion-row>\n                <p class=\"tags\">{{estabelecimento.categoriaNome}}, {{estabelecimento.subcategoriaNome}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"adresss\">{{estabelecimento.enderecos.rua}}</p>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "Fpbh":
/*!**********************************************!*\
  !*** ./src/app/core/shared/firebase-path.ts ***!
  \**********************************************/
/*! exports provided: FirebasePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebasePath", function() { return FirebasePath; });
class FirebasePath {
}
FirebasePath.CATEGORIAS = 'categorias/';
FirebasePath.SUBCATEGORIAS = 'subcategorias/';
FirebasePath.USUARIOS = 'usuarios/';
FirebasePath.ESTABELECIMENTOS = 'estabelecimentos/';
FirebasePath.ESTABELECIMENTOS_IMAGENS = 'estabelecimentos_imagens/';
FirebasePath.ESTABELECIMENTOS_ENDERECOS = 'estabelecimentos_enderecos/';
FirebasePath.ESTABELECIMENTOS_CONTATOS = 'estabelecimentos_contatos/';
FirebasePath.CUPONS = 'cupons/';
FirebasePath.CUPONS_GERADOS = 'cupons_gerados/';


/***/ }),

/***/ "U0Pp":
/*!*****************************************************!*\
  !*** ./src/app/subcategoria/subcategoria.module.ts ***!
  \*****************************************************/
/*! exports provided: SubcategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriaPageModule", function() { return SubcategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subcategoria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategoria-routing.module */ "FcuI");
/* harmony import */ var _subcategoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcategoria.page */ "z6BO");







let SubcategoriaPageModule = class SubcategoriaPageModule {
};
SubcategoriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subcategoria_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubcategoriaPageRoutingModule"]
        ],
        declarations: [_subcategoria_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoriaPage"]]
    })
], SubcategoriaPageModule);



/***/ }),

/***/ "z6BO":
/*!***************************************************!*\
  !*** ./src/app/subcategoria/subcategoria.page.ts ***!
  \***************************************************/
/*! exports provided: SubcategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriaPage", function() { return SubcategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subcategoria_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subcategoria.page.html */ "FjnF");
/* harmony import */ var _subcategoria_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcategoria.page.scss */ "0Nj3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_subcategorias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/subcategorias.service */ "FZqQ");
/* harmony import */ var _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../estabelecimento/shared/estabelecimento.service */ "uNXI");







let SubcategoriaPage = class SubcategoriaPage {
    constructor(route, router, subcategoriaService, estabelecimentoService) {
        this.route = route;
        this.router = router;
        this.subcategoriaService = subcategoriaService;
        this.estabelecimentoService = estabelecimentoService;
    }
    ngOnInit() {
        const key = this.route.snapshot.paramMap.get('key');
        if (key) {
            const subscri = this.subcategoriaService.getByKey(key).subscribe((subcategoria) => {
                subscri.unsubscribe();
                this.subcategoria = subcategoria;
            });
            const sub = this.estabelecimentoService.getByField('subcategoriaKey', key).subscribe((estabelecimentos) => {
                sub.unsubscribe();
                this.estabelecimentos = estabelecimentos;
            });
        }
    }
};
SubcategoriaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_subcategorias_service__WEBPACK_IMPORTED_MODULE_5__["SubcategoriasService"] },
    { type: _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_6__["EstabelecimentoService"] }
];
SubcategoriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subcategoria',
        template: _raw_loader_subcategoria_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subcategoria_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubcategoriaPage);



/***/ })

}]);
//# sourceMappingURL=subcategoria-subcategoria-module.js.map
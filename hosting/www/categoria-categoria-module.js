(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoria-categoria-module"],{

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

/***/ "Okzl":
/*!***********************************************!*\
  !*** ./src/app/categoria/categoria.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subcategoriaBox {\n  display: -webkit-inline-box;\n  width: 100%;\n  overflow-x: auto;\n}\n.subcategoriaBox .item {\n  margin-right: 15px;\n  text-align: center;\n}\n.subcategoriaBox .item ion-thumbnail {\n  --border-radius: 5px;\n  width: 70px;\n  height: 70px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n.subcategoriaBox .item p {\n  color: #333333;\n  font-size: 12px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhdGVnb3JpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7QUF1QkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBckJKO0FBc0JJO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FBcEJOO0FBc0JJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXBCTiIsImZpbGUiOiJjYXRlZ29yaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8uY2F0ZWdvcmlhLWNvbnRlbnRze1xuLy8gIGRpc3BsYXk6IGNvbnRlbnRzO1xuLy8gIHdpZHRoOiAxMDAlO1xuLy8gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuLy8gIG1hcmdpbi1yaWdodDogYXV0bztcbi8vICBtYXJnaW4tdG9wOiAyNXB4O1xuLy99XG4vL1xuLy8uY2F0ZWdvcmlhLWl0ZW17XG4vLyAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gIGZvbnQtc2l6ZTogMTJweDtcbi8vICBjb2xvcjogIzMzMzMzMztcbi8vICBpb24tdGh1bWJuYWlse1xuLy8gICAgd2lkdGg6IDEwMHB4O1xuLy8gICAgaGVpZ2h0OiAxMDBweDtcbi8vICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4vLyAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4vLyAgfVxuLy99XG5cblxuLnN1YmNhdGVnb3JpYUJveHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcblxuICAuaXRlbXtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi10aHVtYm5haWx7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG4gICAgfVxuICAgIHB7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "WVuc":
/*!***********************************************!*\
  !*** ./src/app/categoria/categoria.module.ts ***!
  \***********************************************/
/*! exports provided: CategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPageModule", function() { return CategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoria-routing.module */ "qUje");
/* harmony import */ var _categoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria.page */ "rf8N");







let CategoriaPageModule = class CategoriaPageModule {
};
CategoriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriaPageRoutingModule"]
        ],
        declarations: [_categoria_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaPage"]]
    })
], CategoriaPageModule);



/***/ }),

/***/ "lR2p":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categoria/categoria.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>-->\n<!--  <ion-toolbar>-->\n<!--    <ion-title>categoria</ion-title>-->\n<!--    <ion-buttons slot=\"start\">-->\n<!--      <ion-back-button></ion-back-button>-->\n<!--    </ion-buttons>-->\n<!--  </ion-toolbar>-->\n<!--</ion-header>-->\n\n<!--<ion-content>-->\n<!--  <ion-grid>-->\n<!--    <ion-row>-->\n<!--      <div class=\"categoria-content\">-->\n\n<!--      </div>-->\n<!--      <ion-col size=\"12\" class=\"categoria-contents\">-->\n<!--        <div class=\"categoria-contents\">-->\n<!--          <div class=\"categoria-item\">-->\n<!--            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/idCategoria/idSubcategoria']\">-->\n<!--              <img src=\"assets/Untitled.png\">-->\n<!--            </ion-thumbnail>-->\n<!--            <p>Gastronomia</p>-->\n<!--          </div>-->\n<!--          <div class=\"categoria-item\">-->\n<!--            <ion-thumbnail slot=\"start\" [routerLink]=\"['']\">-->\n<!--              <img src=\"assets/Untitled.png\">-->\n<!--            </ion-thumbnail>-->\n<!--            <p>Gastronomia</p>-->\n<!--          </div>-->\n<!--          <div class=\"categoria-item\">-->\n<!--            <ion-thumbnail slot=\"start\" [routerLink]=\"['']\">-->\n<!--              <img src=\"assets/Untitled.png\">-->\n<!--            </ion-thumbnail>-->\n<!--            <p>Gastronomia</p>-->\n<!--          </div>-->\n<!--          <div class=\"categoria-item\">-->\n<!--            <ion-thumbnail slot=\"start\" [routerLink]=\"['']\">-->\n<!--              <img src=\"assets/Untitled.png\">-->\n<!--            </ion-thumbnail>-->\n<!--            <p>Gastronomia</p>-->\n<!--          </div>-->\n<!--        </div>-->\n<!--      </ion-col>-->\n\n<!--    </ion-row>-->\n<!--  </ion-grid>-->\n<!--</ion-content>-->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{categoria?.nome}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row  *ngIf=\"subcategorias\">\n      <ion-col>\n        <div class=\"subcategoriaBox\">\n          <div class=\"item\" *ngFor=\"let subcategoria of subcategorias\">\n            <!--            <img src=\"assets\">-->\n            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/subcategoria', subcategoria?.key]\">\n              <img *ngIf=\"subcategoria?.imagem\" src=\"{{subcategoria?.imagem}}\">\n              <img *ngIf=\"!subcategoria?.imagem\" src=\"assets/no_image.jpg\">\n            </ion-thumbnail>\n            <p>{{subcategoria?.nome}}</p>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <h5 class=\"title ion-margin-bottom\">Destaques</h5>\n\n        <div class=\"estabelecimento-list\">\n          <div class=\"estabelecimento-item\" *ngFor=\"let estabelecimento of estabelecimentos\" >\n            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/estabelecimento/', estabelecimento.key]\">\n              <img *ngIf=\"estabelecimento.logo\" src=\"{{estabelecimento.logo}}\">\n              <img *ngIf=\"!estabelecimento.logo\" src=\"assets/no_image.jpg\">\n            </ion-thumbnail>\n            <div class=\"content\">\n              <ion-row>\n                <p class=\"title\">{{estabelecimento?.nome}}</p>\n                <a class=\"cupomLink ion-float-right\">Ver Cupons</a>\n              </ion-row>\n              <ion-row>\n                <p class=\"tags\">{{estabelecimento.categoriaNome}}, {{estabelecimento.subcategoriaNome}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"adresss\">{{estabelecimento.enderecos.rua}}</p>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ "qUje":
/*!*******************************************************!*\
  !*** ./src/app/categoria/categoria-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPageRoutingModule", function() { return CategoriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoria.page */ "rf8N");




const routes = [
    {
        path: '',
        component: _categoria_page__WEBPACK_IMPORTED_MODULE_3__["CategoriaPage"]
    }
];
let CategoriaPageRoutingModule = class CategoriaPageRoutingModule {
};
CategoriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriaPageRoutingModule);



/***/ }),

/***/ "rf8N":
/*!*********************************************!*\
  !*** ./src/app/categoria/categoria.page.ts ***!
  \*********************************************/
/*! exports provided: CategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPage", function() { return CategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categoria_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categoria.page.html */ "lR2p");
/* harmony import */ var _categoria_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoria.page.scss */ "Okzl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_categorias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/categorias.service */ "6Dr8");
/* harmony import */ var _subcategoria_shared_subcategorias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subcategoria/shared/subcategorias.service */ "FZqQ");
/* harmony import */ var _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../estabelecimento/shared/estabelecimento.service */ "uNXI");








let CategoriaPage = class CategoriaPage {
    constructor(route, router, categoriaService, subcategoriaService, estabelecimentoService) {
        this.route = route;
        this.router = router;
        this.categoriaService = categoriaService;
        this.subcategoriaService = subcategoriaService;
        this.estabelecimentoService = estabelecimentoService;
    }
    ngOnInit() {
        const key = this.route.snapshot.paramMap.get('key');
        if (key) {
            const subscri = this.categoriaService.getByKey(key).subscribe((categoria) => {
                subscri.unsubscribe();
                this.categoria = categoria;
            });
            const subscribe = this.subcategoriaService.getByCategoriaKey(key).subscribe((subcategorias) => {
                subscribe.unsubscribe();
                this.subcategorias = subcategorias;
                console.log(this.subcategorias);
            });
            const sub = this.estabelecimentoService.getByField('categoriaKey', key).subscribe((estabelecimentos) => {
                sub.unsubscribe();
                this.estabelecimentos = estabelecimentos;
            });
        }
    }
};
CategoriaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_categorias_service__WEBPACK_IMPORTED_MODULE_5__["CategoriasService"] },
    { type: _subcategoria_shared_subcategorias_service__WEBPACK_IMPORTED_MODULE_6__["SubcategoriasService"] },
    { type: _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_7__["EstabelecimentoService"] }
];
CategoriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categoria',
        template: _raw_loader_categoria_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categoria_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriaPage);



/***/ })

}]);
//# sourceMappingURL=categoria-categoria-module.js.map
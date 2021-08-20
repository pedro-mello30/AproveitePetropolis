(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"],{

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

/***/ "WrHT":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>feed</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-searchbar (search)=\"filter($event.target.value)\"></ion-searchbar>\n\n\n\n\n  <ion-grid>\n<!--    <ion-row>-->\n<!--      <ion-col>-->\n<!--        <h5 class=\"title ion-no-margin ion-margin-bottom\">Cupons</h5>-->\n\n<!--        <div class=\"cupomBox\">-->\n\n<!--          <div class=\"item\">-->\n<!--&lt;!&ndash;            <img src=\"assets\">&ndash;&gt;-->\n<!--            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/idCategoria/estabelecimento/idEstabelecimento']\">-->\n<!--              <img src=\"assets/Untitled.png\">-->\n<!--            </ion-thumbnail>-->\n<!--          </div>-->\n\n<!--          <div class=\"item\">-->\n<!--            &lt;!&ndash;            <img src=\"assets\">&ndash;&gt;-->\n<!--            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/idCategoria/estabelecimento/idEstabelecimento']\">-->\n<!--              <img src=\"assets/Untitled.png\">-->\n<!--            </ion-thumbnail>-->\n<!--          </div>-->\n<!--          <div class=\"item\">-->\n<!--            &lt;!&ndash;            <img src=\"assets\">&ndash;&gt;-->\n<!--            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/idCategoria/estabelecimento/idEstabelecimento']\">-->\n<!--              <img src=\"assets/Untitled.png\">-->\n<!--            </ion-thumbnail>-->\n<!--          </div>-->\n\n<!--          <div class=\"item\">-->\n<!--            &lt;!&ndash;            <img src=\"assets\">&ndash;&gt;-->\n<!--            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/idCategoria/estabelecimento/idEstabelecimento']\">-->\n<!--              <img src=\"assets/Untitled.png\">-->\n<!--            </ion-thumbnail>-->\n<!--          </div>-->\n\n<!--          <div class=\"item\">-->\n<!--            &lt;!&ndash;            <img src=\"assets\">&ndash;&gt;-->\n<!--            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/idCategoria/estabelecimento/idEstabelecimento']\">-->\n<!--              <img src=\"assets/Untitled.png\">-->\n<!--            </ion-thumbnail>-->\n<!--          </div>-->\n\n<!--        </div>-->\n<!--      </ion-col>-->\n<!--    </ion-row>-->\n\n    <ion-row>\n      <ion-col>\n        <h5 class=\"title ion-margin-bottom\">Categorias</h5>\n\n        <div class=\"categoriaBox\">\n          <div class=\"item\" *ngFor=\"let categoria of categorias | async\">\n            <!--            <img src=\"assets\">-->\n            <ion-thumbnail slot=\"start\" [routerLink]=\"['categoria', categoria.key]\">\n              <img *ngIf=\"categoria.imagem\" src=\"{{categoria.imagem}}\">\n              <img *ngIf=\"!categoria.imagem\" src=\"assets/no_image.jpg\">\n            </ion-thumbnail>\n            <p>{{categoria.nome}}</p>\n          </div>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <h5 class=\"title ion-margin-bottom\">Destaques</h5>\n\n        <div class=\"estabelecimento-list\">\n          <div class=\"estabelecimento-item\" *ngFor=\"let estabelecimento of estabelecimentos | async\" >\n            <ion-thumbnail slot=\"start\" [routerLink]=\"['/tabs/feed/estabelecimento/', estabelecimento.key]\">\n              <img *ngIf=\"estabelecimento.logo\" src=\"{{estabelecimento.logo}}\">\n              <img *ngIf=\"!estabelecimento.logo\" src=\"assets/no_image.jpg\">\n            </ion-thumbnail>\n            <div class=\"content\">\n              <ion-row>\n                <p class=\"title\" *ngIf=\"estabelecimento\">{{estabelecimento.nome}}</p>\n                <a class=\"cupomLink ion-float-right\">Ver Cupons</a>\n              </ion-row>\n              <ion-row>\n                <p class=\"tags\">{{estabelecimento.categoriaNome}}<span *ngIf=\"estabelecimento.subcategoriaNome\">,</span> {{estabelecimento.subcategoriaNome}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"adresss\">{{estabelecimento.enderecos.rua}}</p>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n\n\n\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "XfKD":
/*!*************************************!*\
  !*** ./src/app/feed/feed.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wide-item {\n  width: 10000px;\n  /*  overflow-x: scroll; /*\n  /*  -webkit-overflow-scrolling: touch;  */\n}\n\n.cupomBox {\n  display: -webkit-inline-box;\n  width: 100%;\n  overflow-x: auto;\n  height: 95px;\n}\n\n.cupomBox .item {\n  margin-right: 15px;\n}\n\n.cupomBox .item ion-thumbnail {\n  --border-radius: 5px;\n  width: 100px;\n  height: 90px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.categoriaBox {\n  display: -webkit-inline-box;\n  width: 100%;\n  height: 100px;\n  overflow-x: auto;\n}\n\n.categoriaBox .item {\n  margin-right: 15px;\n  text-align: center;\n}\n\n.categoriaBox .item ion-thumbnail {\n  --border-radius: 5px;\n  width: 70px;\n  height: 70px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.categoriaBox .item p {\n  color: #333333;\n  font-size: 12px;\n  margin-bottom: 0px;\n}\n\n.title {\n  font-size: 14px;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBOzJDQUFBO0FBRUY7O0FBR0E7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFRTtFQUNFLGtCQUFBO0FBQUo7O0FBQ0k7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUFDTjs7QUFLQTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUdJO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FBRE47O0FBR0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRE47O0FBT0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUpGIiwiZmlsZSI6ImZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGUtaXRlbSB7XG4gIHdpZHRoOiAxMDAwMHB4O1xuICAvKiAgb3ZlcmZsb3cteDogc2Nyb2xsOyAvKlxuICAvKiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyAgKi9cbn1cblxuXG4uY3Vwb21Cb3h7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogOTVweDtcblxuICAuaXRlbXtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgaW9uLXRodW1ibmFpbHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG4gICAgfVxuICB9XG59XG5cblxuLmNhdGVnb3JpYUJveHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcblxuICAuaXRlbXtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi10aHVtYm5haWx7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG4gICAgfVxuICAgIHB7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gIH1cbn1cblxuXG4udGl0bGV7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "jWta":
/*!***********************************!*\
  !*** ./src/app/feed/feed.page.ts ***!
  \***********************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feed.page.html */ "WrHT");
/* harmony import */ var _feed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed.page.scss */ "XfKD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/toast.service */ "Olgc");
/* harmony import */ var _categoria_shared_categorias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../categoria/shared/categorias.service */ "6Dr8");
/* harmony import */ var _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../estabelecimento/shared/estabelecimento.service */ "uNXI");







let FeedPage = class FeedPage {
    constructor(categoriasService, estabelecimentosService, toast) {
        // this.estabelecimentos = Array(5).fill(4);
        this.categoriasService = categoriasService;
        this.estabelecimentosService = estabelecimentosService;
        this.toast = toast;
    }
    ngOnInit() {
        this.categorias = this.categoriasService.getAll();
        this.estabelecimentos = this.estabelecimentosService.getAll();
    }
    filter(searchTerm) {
        console.log(searchTerm);
        this.categorias = this.categoriasService.getByName(searchTerm);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
};
FeedPage.ctorParameters = () => [
    { type: _categoria_shared_categorias_service__WEBPACK_IMPORTED_MODULE_5__["CategoriasService"] },
    { type: _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_6__["EstabelecimentoService"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
FeedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed',
        template: _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedPage);



/***/ }),

/***/ "xQww":
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-routing.module */ "zl0E");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed.page */ "jWta");







let FeedPageModule = class FeedPageModule {
};
FeedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"]
        ],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
    })
], FeedPageModule);



/***/ }),

/***/ "zl0E":
/*!*********************************************!*\
  !*** ./src/app/feed/feed-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FeedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function() { return FeedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed.page */ "jWta");




const routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
    }
];
let FeedPageRoutingModule = class FeedPageRoutingModule {
};
FeedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=feed-feed-module.js.map
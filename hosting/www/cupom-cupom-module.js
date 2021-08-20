(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cupom-cupom-module"],{

/***/ "Ofe6":
/*!***************************************!*\
  !*** ./src/app/cupom/cupom.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cupom-card {\n  width: 100%;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  border-radius: 5px;\n}\n\n.foto-cupom {\n  width: 100%;\n  height: 200px;\n  --border-radius: 5px;\n}\n\n.cupom-content {\n  padding: 0px 15px;\n  padding-bottom: 15px;\n}\n\nion-segment {\n  font-family: \"Ubuntu\", sans-serif;\n}\n\nion-segment ion-segment-button {\n  --color: #7c7b7b;\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\n.token {\n  text-align: center;\n}\n\n.informacoes-content .title {\n  margin-top: 15px;\n  color: #333333;\n}\n\n.informacoes-content .text {\n  color: #b3b3b3;\n  font-size: 14px;\n}\n\n.informacoes-content .text span {\n  color: #7c7b7b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2N1cG9tLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBS0E7RUFDRSxpQ0FBQTtBQUZGOztBQUdFO0VBQ0UsZ0JBQUE7QUFESjs7QUFLQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFKSjs7QUFPRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBTEo7O0FBTUk7RUFDRSxjQUFBO0FBSk4iLCJmaWxlIjoiY3Vwb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY3Vwb20tY2FyZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3RvLWN1cG9te1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuLmN1cG9tLWNvbnRlbnR7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuXG5pb24tc2VnbWVudHtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICBpb24tc2VnbWVudC1idXR0b257XG4gICAgLS1jb2xvcjogIzdjN2I3YjtcbiAgfVxufVxuXG5pb24tYnV0dG9ue1xuICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4udG9rZW57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm9ybWFjb2VzLWNvbnRlbnR7XG5cbiAgLnRpdGxle1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cblxuICAudGV4dHtcbiAgICBjb2xvcjogI2IzYjNiMztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgc3BhbntcbiAgICAgIGNvbG9yOiAjN2M3YjdiO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuXG4iXX0= */");

/***/ }),

/***/ "SzAv":
/*!*************************************!*\
  !*** ./src/app/cupom/cupom.page.ts ***!
  \*************************************/
/*! exports provided: CupomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CupomPage", function() { return CupomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cupom_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cupom.page.html */ "odur");
/* harmony import */ var _cupom_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cupom.page.scss */ "Ofe6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_cupom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/cupom.service */ "AD1b");
/* harmony import */ var _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/shared/usuario-auth.service */ "E+93");







// import { crypto } from 'crypto';
let CupomPage = class CupomPage {
    constructor(route, router, cuponsService, usuarioAuthService) {
        this.route = route;
        this.router = router;
        this.cuponsService = cuponsService;
        this.usuarioAuthService = usuarioAuthService;
    }
    ngOnInit() {
        const key = this.route.snapshot.paramMap.get('key');
        if (key) {
            const subscribe = this.cuponsService.getByKey(key).subscribe((cupom) => {
                subscribe.unsubscribe();
                this.cupom = cupom;
            });
        }
    }
    generateCupom(estabelecimentoKey) {
        const user = this.usuarioAuthService.getUser();
        this.token = this.cuponsService.generateCupom(estabelecimentoKey, user.email);
    }
};
CupomPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_cupom_service__WEBPACK_IMPORTED_MODULE_5__["CupomService"] },
    { type: _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioAuthService"] }
];
CupomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cupom',
        template: _raw_loader_cupom_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cupom_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CupomPage);



/***/ }),

/***/ "Um8L":
/*!***************************************!*\
  !*** ./src/app/cupom/cupom.module.ts ***!
  \***************************************/
/*! exports provided: CupomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CupomPageModule", function() { return CupomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cupom_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cupom-routing.module */ "l29P");
/* harmony import */ var _cupom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cupom.page */ "SzAv");







let CupomPageModule = class CupomPageModule {
};
CupomPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cupom_routing_module__WEBPACK_IMPORTED_MODULE_5__["CupomPageRoutingModule"]
        ],
        declarations: [_cupom_page__WEBPACK_IMPORTED_MODULE_6__["CupomPage"]]
    })
], CupomPageModule);



/***/ }),

/***/ "l29P":
/*!***********************************************!*\
  !*** ./src/app/cupom/cupom-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CupomPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CupomPageRoutingModule", function() { return CupomPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cupom_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cupom.page */ "SzAv");




const routes = [
    {
        path: '',
        component: _cupom_page__WEBPACK_IMPORTED_MODULE_3__["CupomPage"]
    }
];
let CupomPageRoutingModule = class CupomPageRoutingModule {
};
CupomPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CupomPageRoutingModule);



/***/ }),

/***/ "odur":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cupom/cupom.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{cupom?.nome}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"cupom-card\">\n          <ion-thumbnail class=\"foto-cupom\" slot=\"start\">\n            <img *ngIf=\"cupom?.imagem != ''\" src=\"{{cupom?.imagem}}\">\n            <img *ngIf=\"cupom?.imagem == ''\" src=\"assets/Untitled.png\">\n          </ion-thumbnail>\n\n          <div class=\"cupom-content\">\n\n\n\n            <div class=\"informacoes-content\">\n              <h5 class=\"title ion-no-margin ion-margin-bottom\">Sobre</h5>\n              <p class=\"text\">{{cupom?.descricao}}</p>\n\n\n              <ion-row>\n                <ion-col size=\"8\" offset=\"2\">\n                  <ion-button *ngIf=\"!token\" expand=\"block\" (click)=\"generateCupom(cupom?.estabelecimentoKey)\">\n                    Pegar Cupom\n                  </ion-button>\n                  <p class=\"token\" *ngIf=\"token\">{{token}}</p>\n                </ion-col>\n              </ion-row>\n\n            </div>\n          </div>\n\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=cupom-cupom-module.js.map
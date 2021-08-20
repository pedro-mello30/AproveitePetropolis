(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "W8eC":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.page.html */ "uuZe");
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss */ "oKkR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/shared/usuario-auth.service */ "E+93");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let PerfilPage = class PerfilPage {
    constructor(usuarioAuthService, router) {
        this.usuarioAuthService = usuarioAuthService;
        this.router = router;
    }
    ngOnInit() {
        this.usuario = this.usuarioAuthService.getUser();
        console.log(this.usuario);
    }
    uploadImg(event) {
        if (event.target.files.length) {
            this.usuarioAuthService.uploadImg(event.target.files[0]);
            const reader = new FileReader();
            reader.onload = () => {
                this.usuario.photoUrl = reader.result.toString();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    logout() {
        this.usuarioAuthService.logout()
            .then(() => {
            this.router.navigate(['/login']);
        });
    }
    doRefresh(event) {
        this.ngOnInit();
        setTimeout(() => {
            // console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    goToLink(url) {
        window.open(url, "_blank");
    }
};
PerfilPage.ctorParameters = () => [
    { type: _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilPage);



/***/ }),

/***/ "ZEuG":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "bn5b");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "W8eC");







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "bn5b":
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "W8eC");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    },
    {
        path: 'editar',
        loadChildren: () => Promise.all(/*! import() | editar-editar-module */[__webpack_require__.e("common"), __webpack_require__.e("editar-editar-module")]).then(__webpack_require__.bind(null, /*! ./editar/editar.module */ "GLNV")).then(m => m.EditarPageModule)
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "oKkR":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".perfil-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.perfil-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100px;\n}\n\n.perfil-avatar ion-avatar {\n  height: 80px;\n  width: 80px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.perfil-avatar p {\n  text-align: center;\n  font-size: 12px;\n  color: #bea063;\n  margin-top: 15px;\n}\n\n.perfil-list-links {\n  margin-top: 50px;\n}\n\n.perfil-list-links .subtitle {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\n.perfil-list-links ion-button {\n  --background: none;\n  --color: #7c7b7b;\n  --color-activated: #f2f2f2;\n  border-bottom: 1px solid #b3b3b3;\n  --border-radius: 0px;\n}\n\n.perfil-list-links ion-button span {\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  font-size: 14px;\n  text-align: left;\n  width: 100%;\n}\n\n.estabelecimento-list {\n  margin-top: 25px;\n}\n\n.logout-list {\n  margin-top: 100px;\n}\n\ninput[type=file] {\n  display: none;\n}\n\nion-button {\n  --box-shadow: none;\n}\n\n.md ion-button {\n  --background-activated: #d6b46a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtBQUFGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUNJO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDTjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLCtCQUFBO0FBQUYiLCJmaWxlIjoicGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBlcmZpbC1jYXJke1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLDAsMCwwLjI5KTtcbn1cblxuXG4ucGVyZmlsLWF2YXRhcntcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMHB4O1xuICBpb24tYXZhdGFye1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYmVhMDYzO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbn1cblxuLnBlcmZpbC1saXN0LWxpbmtze1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICAuc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG4gICAgY29sb3I6ICM3YzdiN2JcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAtLWNvbG9yOiAjN2M3YjdiO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZjJmMmYyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjNiM2IzO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHNwYW57XG4gICAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICB9XG59XG4uZXN0YWJlbGVjaW1lbnRvLWxpc3R7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ubG9nb3V0LWxpc3R7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5pbnB1dFt0eXBlPWZpbGVde1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tYnV0dG9ue1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tZCBpb24tYnV0dG9ue1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDZiNDZhO1xufVxuIl19 */");

/***/ }),

/***/ "uuZe":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"perfil-card\">\n          <div class=\"perfil-avatar\">\n            <ion-avatar (click)=\"imagemInput.click()\">\n              <img *ngIf=\"usuario.photoUrl\" src=\"{{usuario.photoUrl}}\">\n              <img *ngIf=\"!usuario.photoUrl\" src=\"assets/no_profile.png\">\n            </ion-avatar>\n            <input type=\"file\" #imagemInput (change)=\"uploadImg($event)\">\n            <p class=\"ion-no-margin\">{{usuario.name}}</p>\n          </div>\n\n\n          <div class=\"perfil-list-links\">\n            <h5 class=\"subtitle\">Configurações da conta</h5>\n            <ion-button expand=\"block\" routerLink=\"/tabs/perfil/editar\">\n              <span>\n                Informações Pessoais\n              </span>\n              <ion-icon slot=\"end\"  name=\"person-outline\"></ion-icon>\n            </ion-button>\n<!--            <ion-button expand=\"block\">-->\n<!--              <span>-->\n<!--                Senha-->\n<!--              </span>-->\n<!--              <ion-icon slot=\"end\"  name=\"lock-closed-outline\"></ion-icon>-->\n<!--            </ion-button>-->\n          </div>\n\n          <div class=\"perfil-list-links estabelecimento-list\">\n<!--            <h5 class=\"subtitle\">Estabelecimento</h5>-->\n            <ion-button expand=\"block\" (click)=\"goToLink('https://estabelecimentoapp.aproveitepetropolis.com.br')\">\n              <span>\n                Estabelecimento\n              </span>\n              <ion-icon slot=\"end\"  name=\"storefront-outline\"></ion-icon>\n            </ion-button>\n\n          </div>\n\n          <div class=\"perfil-list-links logout-list\">\n<!--            <h5 class=\"subtitle\">Estabelecimento</h5>-->\n            <ion-button expand=\"block\"  (click)=\"logout()\">\n              <span>\n                Sair\n              </span>\n              <ion-icon slot=\"end\"  name=\"log-out-outline\"></ion-icon>\n            </ion-button>\n\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map
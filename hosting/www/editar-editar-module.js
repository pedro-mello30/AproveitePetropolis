(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editar-editar-module"],{

/***/ "GLNV":
/*!************************************************!*\
  !*** ./src/app/perfil/editar/editar.module.ts ***!
  \************************************************/
/*! exports provided: EditarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPageModule", function() { return EditarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-routing.module */ "IZZC");
/* harmony import */ var _editar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar.page */ "Zo9F");







let EditarPageModule = class EditarPageModule {
};
EditarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editar_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_editar_page__WEBPACK_IMPORTED_MODULE_6__["EditarPage"]]
    })
], EditarPageModule);



/***/ }),

/***/ "IZZC":
/*!********************************************************!*\
  !*** ./src/app/perfil/editar/editar-routing.module.ts ***!
  \********************************************************/
/*! exports provided: EditarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPageRoutingModule", function() { return EditarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar.page */ "Zo9F");




const routes = [
    {
        path: '',
        component: _editar_page__WEBPACK_IMPORTED_MODULE_3__["EditarPage"]
    }
];
let EditarPageRoutingModule = class EditarPageRoutingModule {
};
EditarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarPageRoutingModule);



/***/ }),

/***/ "LkO1":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/editar/editar.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>editar</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"edit-card\">\n          <p>Editar Informações Pessoais</p>\n          <form class=\"form-edit\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <ion-input type=\"nome\" formControlName=\"nome\" placeholder=\"Nome\"></ion-input>\n            <ion-input type=\"text\" formControlName=\"telefone\"  placeholder=\"Telefone\"></ion-input>\n            <ion-col size=\"8\" offset=\"2\">\n              <ion-button expand=\"block\" type=\"submit\">\n                Editar\n              </ion-button>\n            </ion-col>\n          </form>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "Zo9F":
/*!**********************************************!*\
  !*** ./src/app/perfil/editar/editar.page.ts ***!
  \**********************************************/
/*! exports provided: EditarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPage", function() { return EditarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editar.page.html */ "LkO1");
/* harmony import */ var _editar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editar.page.scss */ "dPMZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../login/shared/usuario-auth.service */ "E+93");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let EditarPage = class EditarPage {
    constructor(formBuilder, usuarioService, router, toast) {
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.router = router;
        this.toast = toast;
    }
    ngOnInit() {
        this.usuario = this.usuarioService.getDadosUsuario();
        this.criarFormulario();
        this.carregarDados();
    }
    carregarDados() {
        const userSub = this.usuarioService.getDadosUsuario().subscribe((dadosUser) => {
            userSub.unsubscribe();
            this.form.setValue({
                nome: dadosUser.nome,
                telefone: dadosUser.telefone
            });
        });
    }
    criarFormulario() {
        this.form = this.formBuilder.group({
            nome: [''],
            telefone: [''],
        });
    }
    onSubmit() {
        if (this.form.valid) {
            this.usuarioService.updateProfile(this.form.value);
            this.toast.showSuccess("Perfil atualizado com sucesso.");
            this.router.navigate(['/tabs/perfil']);
        }
    }
};
EditarPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
EditarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editar',
        template: _raw_loader_editar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditarPage);



/***/ }),

/***/ "dPMZ":
/*!************************************************!*\
  !*** ./src/app/perfil/editar/editar.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\np {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\nion-input {\n  border: 1px solid #b3b3b3;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 5px 15px !important;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXRhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBR0YiLCJmaWxlIjoiZWRpdGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWNhcmR7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xufVxuaW9uLWJ1dHRvbntcbiAgLS1ib3JkZXItcmFkaXVzOiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLDAsMCwwLjI5KTtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbnB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbiAgY29sb3I6ICM3YzdiN2I7XG59XG5cbmlvbi1pbnB1dHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYjNiMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTVweCFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=editar-editar-module.js.map
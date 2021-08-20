(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"],{

/***/ "5eIK":
/*!***********************************************************!*\
  !*** ./src/app/login/cadastro/cadastro-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CadastroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageRoutingModule", function() { return CadastroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.page */ "ljXz");




const routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_3__["CadastroPage"]
    }
];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {
};
CadastroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CadastroPageRoutingModule);



/***/ }),

/***/ "C9sC":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/cadastro/cadastro.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" offset=\"3\">\n        <img class=\"logo\" src=\"assets/LogoAproveitePetropolis.PNG\">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <p class=\"title\">Cadastre-se</p>\n        <form class=\"form-login\" [formGroup]=\"formCriarConta\"  (ngSubmit)=\"onSubmit()\">\n          <ion-input type=\"text\" formControlName=\"nome\" placeholder=\"Nome\"></ion-input>\n          <ion-input type=\"email\" formControlName=\"email\" placeholder=\"E-mail\"></ion-input>\n          <ion-input type=\"text\" formControlName=\"telefone\" placeholder=\"Telefone\"></ion-input>\n          <ion-input type=\"password\" formControlName=\"senha\" placeholder=\"Senha\"></ion-input>\n\n          <ion-col size=\"10\" offset=\"1\" class=\"ion-justify-content-center ion-align-items-center ion-align-self-center\">\n            <ion-button expand=\"block\" (click)=\"onSubmit()\">\n              Cadastrar\n            </ion-button>\n            <a class=\"button-cadastro\" routerLink=\"/login\">Login</a>\n          </ion-col>\n        </form>\n      </ion-col>\n\n    </ion-row>\n\n<!--    <ion-row>-->\n<!--      <ion-col>-->\n<!--        <p class=\"title-social\">Cadastre-se com</p>-->\n<!--        <div class=\"icon-box\">-->\n<!--          <img class=\"icon-face\" src=\"assets/icon/facebook.svg\">-->\n<!--          <img class=\"icon-gmail\" src=\"assets/icon/facebook.svg\">-->\n<!--        </div>-->\n<!--      </ion-col>-->\n<!--    </ion-row>-->\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "ljXz":
/*!*************************************************!*\
  !*** ./src/app/login/cadastro/cadastro.page.ts ***!
  \*************************************************/
/*! exports provided: CadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPage", function() { return CadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.page.html */ "C9sC");
/* harmony import */ var _cadastro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.page.scss */ "tTSA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/usuario-auth.service */ "E+93");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let CadastroPage = class CadastroPage {
    constructor(formBuilder, usuarioService, router, toast) {
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.router = router;
        this.toast = toast;
    }
    ngOnInit() {
        this.criarFormulario();
    }
    get nome() { return this.formCriarConta.get('nome'); }
    get email() { return this.formCriarConta.get('email'); }
    get telefone() { return this.formCriarConta.get('telefone'); }
    get senha() { return this.formCriarConta.get('senha'); }
    criarFormulario() {
        this.formCriarConta = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]],
            telefone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    }
    onSubmit() {
        if (this.formCriarConta.valid) {
            this.usuarioService.criarConta(this.formCriarConta.value)
                .then(() => {
                this.toast.showSuccess('Sua conta foi criada com sucesso.');
                this.router.navigate(['/login']);
            })
                .catch((mensagem) => {
                this.toast.showError(mensagem);
            });
        }
    }
};
CadastroPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
CadastroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cadastro',
        template: _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CadastroPage);



/***/ }),

/***/ "tTSA":
/*!***************************************************!*\
  !*** ./src/app/login/cadastro/cadastro.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  margin-top: 50%;\n}\n\nion-input {\n  padding: 10px 20px !important;\n  background-color: #fff;\n  border-radius: 35px;\n  margin-top: 10px;\n  font-size: 12px;\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\n.title {\n  margin-top: 15%;\n  color: #333333;\n}\n\n.form-login {\n  margin-top: 15%;\n}\n\n.button-cadastro {\n  float: left;\n  text-align: center;\n  width: 100%;\n  margin-top: 10px;\n  color: #333333;\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.title-social {\n  color: #b3b3b3;\n  font-size: 14px;\n  text-align: center;\n  margin-top: 5%;\n}\n\n.icon-box {\n  display: flex;\n  width: 105px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.icon-face {\n  background-color: #3a7be0;\n  width: 50px;\n  height: 50px;\n  margin-right: 5px;\n}\n\n.icon-gmail {\n  background-color: #e03a3a;\n  width: 50px;\n  height: 50px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUYiLCJmaWxlIjoiY2FkYXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cblxuaW9uLWlucHV0e1xuICBwYWRkaW5nOiAxMHB4IDIwcHghaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1idXR0b257XG4gIC0tYm9yZGVyLXJhZGl1czogMzVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi50aXRsZXtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmZvcm0tbG9naW57XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cblxuLmJ1dHRvbi1jYWRhc3Ryb3tcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuXG4udGl0bGUtc29jaWFse1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uaWNvbi1ib3h7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcblxufVxuXG4uaWNvbi1mYWNle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E3YmUwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5pY29uLWdtYWlse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTAzYTNhO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcblxufVxuIl19 */");

/***/ }),

/***/ "wQYY":
/*!***************************************************!*\
  !*** ./src/app/login/cadastro/cadastro.module.ts ***!
  \***************************************************/
/*! exports provided: CadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-routing.module */ "5eIK");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "ljXz");







let CadastroPageModule = class CadastroPageModule {
};
CadastroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__["CadastroPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
    })
], CadastroPageModule);



/***/ })

}]);
//# sourceMappingURL=cadastro-cadastro-module.js.map
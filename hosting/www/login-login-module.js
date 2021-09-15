(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/usuario-auth.service */ "E+93");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/toast.service */ "Olgc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let LoginPage = class LoginPage {
    constructor(formBuilder, usuarioService, router, toast) {
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.router = router;
        this.toast = toast;
    }
    ngOnInit() {
        this.criarFormulario();
    }
    get email() { return this.formLogin.get('email'); }
    get senha() { return this.formLogin.get('senha'); }
    criarFormulario() {
        this.formLogin = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
    onSubmit() {
        if (this.formLogin.valid) {
            this.usuarioService.login(this.formLogin.value.email, this.formLogin.value.senha)
                .then(() => {
                this.router.navigate(['/tabs/feed']);
            })
                .catch((mensagem) => {
                this.toast.showError(mensagem);
            });
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>-->\n<!--  <ion-toolbar>-->\n<!--    <ion-title>login</ion-title>-->\n<!--  </ion-toolbar>-->\n<!--</ion-header>-->\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" offset=\"3\">\n        <img class=\"logo\" src=\"assets/LogoAproveitePetropolis.PNG\">\n      </ion-col>\n    </ion-row>\n\n    <form class=\"form-login\" [formGroup]=\"formLogin\" (ngSubmit)=\"onSubmit()\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <p class=\"title\">Login</p>\n            <ion-input type=\"email\" formControlName=\"email\" placeholder=\"E-mail\"></ion-input>\n            <ion-input type=\"password\" formControlName=\"senha\" placeholder=\"Senha\"></ion-input>\n        </ion-col>\n        <ion-col size=\"10\" offset=\"1\" class=\"ion-justify-content-center ion-align-items-center ion-align-self-center\">\n          <ion-button expand=\"block\" type=\"submit\">\n            Entrar\n          </ion-button>\n          <a class=\"button-cadastro\" routerLink=\"/login/cadastro\">Cadastre-se</a>\n        </ion-col>\n      </ion-row>\n    </form>\n\n\n<!--    <ion-row>-->\n<!--      <ion-col class=\"ion-justify-content-center ion-align-items-center ion-align-self-center\">-->\n<!--        <p class=\"title-social\">Entrar com</p>-->\n<!--        <div class=\"icon-box\">-->\n<!--          <img class=\"icon-face\" src=\"assets/icon/facebook.svg\">-->\n<!--          <img class=\"icon-gmail\" src=\"assets/icon/facebook.svg\">-->\n<!--        </div>-->\n<!--      </ion-col>-->\n<!--    </ion-row>-->\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    },
    {
        path: 'cadastro',
        loadChildren: () => __webpack_require__.e(/*! import() | cadastro-cadastro-module */ "cadastro-cadastro-module").then(__webpack_require__.bind(null, /*! ./cadastro/cadastro.module */ "wQYY")).then(m => m.CadastroPageModule)
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  margin-top: 50%;\n}\n\nion-input {\n  padding: 10px 20px !important;\n  background-color: #fff;\n  --background: #fff;\n  --color: #000;\n  border-radius: 35px;\n  margin-top: 10px;\n  font-size: 12px;\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\n.title {\n  margin-top: 15%;\n  color: #333333;\n}\n\n.form-login {\n  margin-top: 15%;\n}\n\n.button-cadastro {\n  float: left;\n  text-align: center;\n  width: 100%;\n  margin-top: 10px;\n  color: #333333;\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.title-social {\n  color: #b3b3b3;\n  font-size: 14px;\n  text-align: center;\n  margin-top: 25%;\n}\n\n.icon-box {\n  display: flex;\n  width: 105px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.icon-face {\n  background-color: #3a7be0;\n  width: 50px;\n  height: 50px;\n  margin-right: 5px;\n}\n\n.icon-gmail {\n  background-color: #e03a3a;\n  width: 50px;\n  height: 50px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cbmlvbi1pbnB1dHtcbiAgcGFkZGluZzogMTBweCAyMHB4IWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cblxuaW9uLWJ1dHRvbntcbiAgLS1ib3JkZXItcmFkaXVzOiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLDAsMCwwLjI5KTtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLnRpdGxle1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uZm9ybS1sb2dpbntcbiAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG4uYnV0dG9uLWNhZGFzdHJve1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGl0bGUtc29jaWFse1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1JTtcbn1cblxuLmljb24tYm94e1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTA1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbn1cblxuLmljb24tZmFjZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhN2JlMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG5cbn1cbi5pY29uLWdtYWlse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTAzYTNhO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcblxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map
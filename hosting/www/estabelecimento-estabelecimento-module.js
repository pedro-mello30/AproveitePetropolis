(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estabelecimento-estabelecimento-module"],{

/***/ "/ZyL":
/*!****************************************************************************************!*\
  !*** ./src/app/estabelecimento/informacoes-contents/informacoes-contents.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InformacoesContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesContentsComponent", function() { return InformacoesContentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_informacoes_contents_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./informacoes-contents.component.html */ "H1sa");
/* harmony import */ var _informacoes_contents_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./informacoes-contents.component.scss */ "XnWT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_estabelecimentos_imagens_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/estabelecimentos-imagens.service */ "5j3W");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let InformacoesContentsComponent = class InformacoesContentsComponent {
    constructor(route, estabelecimentosImagensService, photoViewer) {
        this.route = route;
        this.estabelecimentosImagensService = estabelecimentosImagensService;
        this.photoViewer = photoViewer;
    }
    ngOnInit() {
        const key = this.route.snapshot.paramMap.get('key');
        if (key) {
            const subscribe = this.estabelecimentosImagensService.getByField('estabelecimentoKey', key).subscribe((imagens) => {
                subscribe.unsubscribe();
                this.imagens = imagens;
            });
        }
    }
    openImg(path) {
        this.photoViewer.show(path);
    }
};
InformacoesContentsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _shared_estabelecimentos_imagens_service__WEBPACK_IMPORTED_MODULE_4__["EstabelecimentosImagensService"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["PhotoViewer"] }
];
InformacoesContentsComponent.propDecorators = {
    estabelecimento: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
InformacoesContentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-informacoes-contents',
        template: _raw_loader_informacoes_contents_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_informacoes_contents_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InformacoesContentsComponent);



/***/ }),

/***/ "0gtV":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estabelecimento/estabelecimento.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"estabelecimento\">{{estabelecimento.nome}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"estabelecimento-card\">\n          <ion-thumbnail class=\"foto-estabelecimento\" slot=\"start\">\n            <img *ngIf=\"estabelecimento?.logo\" src=\"{{estabelecimento.logo}}\">\n            <img *ngIf=\"!estabelecimento?.logo\" src=\"assets/no_image.jpg\">\n          </ion-thumbnail>\n\n          <div class=\"estabelecimento-content\">\n            <ion-segment mode=\"md\" (ionChange)=\"segmentChanged($event)\" [value]=\"selectedPage\">\n              <ion-segment-button value=\"informacoes\">\n                <ion-label>Informações</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"cupons\">\n                <ion-label>Cupons</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n\n\n            <app-informacoes-contents [estabelecimento]=\"estabelecimento\" *ngIf=\"selectedPage === 'informacoes'\"></app-informacoes-contents>\n            <app-cupom-contents [estabelecimento]=\"estabelecimento\" *ngIf=\"selectedPage === 'cupons'\"></app-cupom-contents>\n          </div>\n\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "3uIU":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/util.js ***!
  \**************************************************************/
/*! exports provided: get, getPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromise", function() { return getPromise; });
/**
 * @private
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @private
 */
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "5j3W":
/*!****************************************************************************!*\
  !*** ./src/app/estabelecimento/shared/estabelecimentos-imagens.service.ts ***!
  \****************************************************************************/
/*! exports provided: EstabelecimentosImagensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosImagensService", function() { return EstabelecimentosImagensService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/firebase-path */ "Fpbh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");






let EstabelecimentosImagensService = class EstabelecimentosImagensService {
    constructor(
    // keyEstabelecimento: string,
    db, storage) {
        this.db = db;
        this.storage = storage;
        this.path = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_3__["FirebasePath"].ESTABELECIMENTOS_IMAGENS}`;
        // this.setPath(keyEstabelecimento);
        this.imagensRef = this.db.list(this.path);
    }
    insert(imagem) {
        return new Promise(resolve => {
            this.imagensRef.push(imagem)
                .then((result) => resolve(result.key));
        });
    }
    update(imagem) {
    }
    getAll() {
        return this.imagensRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    getByKey(key) {
    }
    remove(key, filePath) {
        const ref = this.storage.ref(filePath);
        ref.delete();
        this.imagensRef.remove(key);
    }
    getByField(field, value) {
        const imagensRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_3__["FirebasePath"].ESTABELECIMENTOS_IMAGENS, query => query
            .orderByChild(field)
            .equalTo(value));
        return imagensRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    uploadImg(keyEstabelecimento, file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const filePath = `${this.path}/${keyEstabelecimento}/${file.name}`;
            const ref = this.storage.ref(filePath);
            const task = ref.put(file);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
                ref.getDownloadURL().subscribe((url => {
                    const img = {
                        estabelecimentoKey: keyEstabelecimento,
                        imagem: url,
                        filePath: filePath
                    };
                    this.insert(img);
                    // return { imagem: url, filePath: filePath };
                }));
            })).subscribe();
        });
    }
};
EstabelecimentosImagensService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }
];
EstabelecimentosImagensService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EstabelecimentosImagensService);



/***/ }),

/***/ "C6fG":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/index.js ***!
  \***************************************************************/
/*! exports provided: IonicNativePlugin, checkAvailability, instanceAvailability, wrap, getPromise, cordova, cordovaFunctionOverride, cordovaInstance, cordovaPropertyGet, cordovaPropertySet, instancePropertyGet, instancePropertySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "OE48");
/* harmony import */ var _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-native-plugin */ "EKAo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicNativePlugin", function() { return _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]; });

/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ "yR3O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAvailability", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceAvailability", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPromise", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["getPromise"]; });

/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ "QMYr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordova", function() { return _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__["cordova"]; });

/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ "aJZl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaFunctionOverride", function() { return _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__["cordovaFunctionOverride"]; });

/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ "gGGD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaInstance", function() { return _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__["cordovaInstance"]; });

/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ "O2kO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertyGet", function() { return _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__["cordovaPropertyGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertySet", function() { return _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__["cordovaPropertySet"]; });

/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ "HD7q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instancePropertyGet", function() { return _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__["instancePropertyGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instancePropertySet", function() { return _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__["instancePropertySet"]; });

/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ "uC2i");
/* empty/unused harmony star reexport */

// Decorators







Object(_bootstrap__WEBPACK_IMPORTED_MODULE_0__["checkReady"])();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "EKAo":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/ionic-native-plugin.js ***!
  \*****************************************************************************/
/*! exports provided: IonicNativePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicNativePlugin", function() { return IonicNativePlugin; });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ "yR3O");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "3uIU");


var IonicNativePlugin = /** @class */ (function () {
    function IonicNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     * @return {boolean}
     */
    IonicNativePlugin.installed = function () {
        var isAvailable = Object(_decorators_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(this.pluginRef) === true;
        return isAvailable;
    };
    /**
     * Returns the original plugin object
     */
    IonicNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return Object(_util__WEBPACK_IMPORTED_MODULE_1__["get"])(window, this.pluginRef);
        }
        return null;
    };
    /**
     * Returns the plugin's name
     */
    IonicNativePlugin.getPluginName = function () {
        var pluginName = this.pluginName;
        return pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    IonicNativePlugin.getPluginRef = function () {
        var pluginRef = this.pluginRef;
        return pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    IonicNativePlugin.getPluginInstallName = function () {
        var plugin = this.plugin;
        return plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    IonicNativePlugin.getSupportedPlatforms = function () {
        var platform = this.platforms;
        return platform;
    };
    IonicNativePlugin.pluginName = '';
    IonicNativePlugin.pluginRef = '';
    IonicNativePlugin.plugin = '';
    IonicNativePlugin.repo = '';
    IonicNativePlugin.platforms = [];
    IonicNativePlugin.install = '';
    return IonicNativePlugin;
}());

//# sourceMappingURL=ionic-native-plugin.js.map

/***/ }),

/***/ "F4oS":
/*!******************************************************************************!*\
  !*** ./src/app/estabelecimento/cupom-contents/cupom-contents.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cupom-content {\n  display: inline-flex;\n}\n\nion-thumbnail {\n  width: 50%;\n  height: 100px;\n  --border-radius: 5px;\n  margin-right: 5px;\n  margin-left: 5px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1cG9tLWNvbnRlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0JBQUE7QUFBRjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERiIsImZpbGUiOiJjdXBvbS1jb250ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmN1cG9tLWNvbnRlbnR7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG59XG5cbmlvbi10aHVtYm5haWx7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */");

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

/***/ "H1sa":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estabelecimento/informacoes-contents/informacoes-contents.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"informacoes-content\">\n\n  <h5 class=\"title ion-no-margin ion-margin-bottom\">Fotos</h5>\n\n  <div class=\"fotos-list\">\n\n    <div class=\"item\" *ngFor=\"let imagem of imagens\">\n      <!--            <img src=\"assets\">-->\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{imagem.imagem}}\" (click)=\"openImg(imagem.imagem)\">\n      </ion-thumbnail>\n    </div>\n\n<!--    <div class=\"item\">-->\n<!--      &lt;!&ndash;            <img src=\"assets\">&ndash;&gt;-->\n<!--      <ion-thumbnail slot=\"start\" [routerLink]=\"['feed/:idCategoria']\">-->\n<!--        <img src=\"assets/Untitled.png\">-->\n<!--      </ion-thumbnail>-->\n<!--    </div>-->\n<!--    <div class=\"item\">-->\n<!--      &lt;!&ndash;            <img src=\"assets\">&ndash;&gt;-->\n<!--      <ion-thumbnail slot=\"start\" [routerLink]=\"['feed/:idCategoria']\">-->\n<!--        <img src=\"assets/Untitled.png\">-->\n<!--      </ion-thumbnail>-->\n<!--    </div>-->\n\n<!--    <div class=\"item\">-->\n<!--      &lt;!&ndash;            <img src=\"assets\">&ndash;&gt;-->\n<!--      <ion-thumbnail slot=\"start\" [routerLink]=\"['feed/:idCategoria']\">-->\n<!--        <img src=\"assets/Untitled.png\">-->\n<!--      </ion-thumbnail>-->\n<!--    </div>-->\n\n<!--    <div class=\"item\">-->\n<!--      &lt;!&ndash;            <img src=\"assets\">&ndash;&gt;-->\n<!--      <ion-thumbnail slot=\"start\" [routerLink]=\"['feed/:idCategoria']\">-->\n<!--        <img src=\"assets/Untitled.png\">-->\n<!--      </ion-thumbnail>-->\n<!--    </div>-->\n  </div>\n\n  <h5 class=\"title ion-no-margin ion-margin-bottom\">Contatos</h5>\n  <p class=\"text\">\n    {{estabelecimento?.contato.telefone}}<br><br>\n    {{estabelecimento?.contato.instagram}}<br>\n    {{estabelecimento?.contato.facebook}}<br>\n    {{estabelecimento?.contato.site}}\n  </p>\n\n  <h5 class=\"title ion-no-margin ion-margin-bottom\">Formas De Pagamento</h5>\n  <p class=\"text\">\n\n\n    Dinheiro<br>\n    Cartão de Débito<br>\n    Cartão de Crédito<br>\n    Ticket\n  </p>\n\n  <h5 class=\"title ion-no-margin ion-margin-bottom\">Horários</h5>\n  <p class=\"text\">\n    <span>Segunda-feira:</span> {{estabelecimento?.horario.segunda.de }} às {{estabelecimento?.horario.segunda.as }} <br>\n    <span>Terça-feira:</span> {{estabelecimento?.horario.terca.de }} às {{estabelecimento?.horario.terca.as }} <br>\n    <span>Quarta-feira:</span> {{estabelecimento?.horario.quarta.de }} às {{estabelecimento?.horario.quarta.as }} <br>\n    <span>Quinta-feira:</span> {{estabelecimento?.horario.quinta.de }} às {{estabelecimento?.horario.quinta.as }} <br>\n    <span>Sexta-feira:</span> {{estabelecimento?.horario.sexta.de }} às {{estabelecimento?.horario.sexta.as }} <br>\n    <span>Sábado:</span> {{estabelecimento?.horario.sabado.de }} às {{estabelecimento?.horario.sabado.as }} <br>\n    <span>Domingo:</span> {{estabelecimento?.horario.domingo.de }} às {{estabelecimento?.horario.domingo.as }} <br>\n  </p>\n\n  <h5 class=\"title ion-no-margin ion-margin-bottom\">Sobre</h5>\n  <p class=\"text\">\n    {{estabelecimento?.categoriaNome}}<span *ngIf=\"estabelecimento?.subcategoriaNome\">,</span> {{estabelecimento?.subcategoriaNome}}<br>\n    Rua do Imperador, 150\n  </p>\n<!--  <p class=\"text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor eu ipsum vel condimentum. Suspendisse faucibus nisl ac ultrices lacinia. Suspendisse sagittis eros eget venenatis congue. Duis in sem diam. Aenean ac dignissim tortor, et cursus massa. Nullam id ultrices nisi. Donec cursus metus non nisl porttitor elementum.</p>-->\n</div>\n");

/***/ }),

/***/ "HD7q":
/*!**************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \**************************************************************************************/
/*! exports provided: instancePropertyGet, instancePropertySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instancePropertyGet", function() { return instancePropertyGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instancePropertySet", function() { return instancePropertySet; });
function instancePropertyGet(pluginObj, key) {
    if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
    }
    return null;
}
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}
//# sourceMappingURL=instance-property.js.map

/***/ }),

/***/ "I3+h":
/*!*********************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimento.page.ts ***!
  \*********************************************************/
/*! exports provided: EstabelecimentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentoPage", function() { return EstabelecimentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estabelecimento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estabelecimento.page.html */ "0gtV");
/* harmony import */ var _estabelecimento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estabelecimento.page.scss */ "QzQY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/estabelecimento.service */ "uNXI");






let EstabelecimentoPage = class EstabelecimentoPage {
    constructor(route, router, estabelecimentoService) {
        this.route = route;
        this.router = router;
        this.estabelecimentoService = estabelecimentoService;
        this.selectedPage = 'informacoes';
    }
    ngOnInit() {
        const key = this.route.snapshot.paramMap.get('key');
        if (key) {
            const subscribe = this.estabelecimentoService.getByKey(key).subscribe((estabelecimento) => {
                subscribe.unsubscribe();
                this.estabelecimento = estabelecimento;
                this.estabelecimentoService.incrementVisit(estabelecimento);
            });
        }
    }
    segmentChanged(event) {
        this.selectedPage = event.target.value;
    }
};
EstabelecimentoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_5__["EstabelecimentoService"] }
];
EstabelecimentoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-estabelecimento',
        template: _raw_loader_estabelecimento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estabelecimento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EstabelecimentoPage);



/***/ }),

/***/ "IPwZ":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estabelecimento/cupom-contents/cupom-contents.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cupom-content\">\n  <ion-thumbnail *ngFor=\"let cupom of cupons\" class=\"cupom\" slot=\"start\" [routerLink]=\"['/tabs/feed/cupom', cupom.key]\">\n    <img *ngIf=\"cupom.imagem !=''\" src=\"{{cupom.imagem}}\">\n    <img *ngIf=\"cupom.imagem ==''\" src=\"assets/no_image.jpg\">\n  </ion-thumbnail>\n</div>\n");

/***/ }),

/***/ "O2kO":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \*************************************************************************************/
/*! exports provided: cordovaPropertyGet, cordovaPropertySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertyGet", function() { return cordovaPropertyGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertySet", function() { return cordovaPropertySet; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "yR3O");

function cordovaPropertyGet(pluginObj, key) {
    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(pluginObj, key) === true) {
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPlugin"])(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
function cordovaPropertySet(pluginObj, key, value) {
    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(pluginObj, key) === true) {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPlugin"])(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map

/***/ }),

/***/ "OE48":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/bootstrap.js ***!
  \*******************************************************************/
/*! exports provided: checkReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkReady", function() { return checkReady; });
function checkReady() {
    if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000;
        // To help developers using cordova, we listen for the device ready event and
        // log an error if it didn't fire in a reasonable amount of time. Generally,
        // when this happens, developers should remove and reinstall plugins, since
        // an inconsistent plugin is often the culprit.
        var before_1 = Date.now();
        var didFireReady_1 = false;
        win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
        });
        setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
                console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
        }, DEVICE_READY_TIMEOUT_1);
    }
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "QMYr":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova.js ***!
  \****************************************************************************/
/*! exports provided: cordova */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordova", function() { return cordova; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "yR3O");

function cordova(pluginObj, methodName, config, args) {
    return Object(_common__WEBPACK_IMPORTED_MODULE_0__["wrap"])(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ "QzQY":
/*!***********************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimento.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".estabelecimento-card {\n  width: 100%;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  border-radius: 5px;\n}\n\n.foto-estabelecimento {\n  width: 100%;\n  height: 200px;\n  --border-radius: 5px;\n}\n\n.estabelecimento-content {\n  padding: 0px 15px;\n  padding-bottom: 15px;\n}\n\nion-segment {\n  font-family: \"Ubuntu\", sans-serif;\n}\n\nion-segment ion-segment-button {\n  --color: #7c7b7b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzdGFiZWxlY2ltZW50by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQURGOztBQUtBO0VBQ0UsaUNBQUE7QUFGRjs7QUFHRTtFQUNFLGdCQUFBO0FBREoiLCJmaWxlIjoiZXN0YWJlbGVjaW1lbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmVzdGFiZWxlY2ltZW50by1jYXJke1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvdG8tZXN0YWJlbGVjaW1lbnRve1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuLmVzdGFiZWxlY2ltZW50by1jb250ZW50e1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cblxuaW9uLXNlZ21lbnR7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIC0tY29sb3I6ICM3YzdiN2I7XG4gIH1cbn1cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "U3FU":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js ***!
  \***************************************************************************/
/*! exports provided: PhotoViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoViewer", function() { return PhotoViewer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var PhotoViewer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PhotoViewer, _super);
    function PhotoViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoViewer.prototype.show = function (url, title, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", { "sync": true }, arguments); };
    PhotoViewer.pluginName = "PhotoViewer";
    PhotoViewer.plugin = "com-sarriaroman-photoviewer";
    PhotoViewer.pluginRef = "PhotoViewer";
    PhotoViewer.repo = "https://github.com/sarriaroman/photoviewer";
    PhotoViewer.platforms = ["Android", "iOS"];
PhotoViewer.ɵfac = function PhotoViewer_Factory(t) { return ɵPhotoViewer_BaseFactory(t || PhotoViewer); };
PhotoViewer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhotoViewer, factory: function (t) { return PhotoViewer.ɵfac(t); } });
var ɵPhotoViewer_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PhotoViewer);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhotoViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return PhotoViewer;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvcGhvdG8tdmlld2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUdRLElBb0R5QiwrQkFBaUI7QUFBQztBQUU5QjtBQUVSO0FBQU0sSUFJakIsMEJBQUksYUFBQyxHQUFXLEVBQUUsS0FBYyxFQUFFLE9BQTRCO0FBRVg7QUFBNEM7QUFBd0Q7QUFBMkM7QUFBcUU7K0NBWHhRLFVBQVU7Ozs7OzBCQUNMO0FBQUMsc0JBekRQO0FBQUUsRUF5RCtCLGlCQUFpQjtBQUNqRCxTQURZLFdBQVc7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBob3RvVmlld2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgc2hhcmUgYnV0dG9uIChBbmRyb2lkIG9ubHkpLiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBzaGFyZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBZGQgSFRUUCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0LiAgVXNlZnVsIGZvciBhdXRoZW50aWNhdGVkIHBhZ2VzLlxuICAgKiBUaGUgdmFsdWUgaXMgYSBzdHJpbmcgaW4gYSBKU09OIGZvcm1hdC4gIERlZmF1bHQ6ICcnXG4gICAqL1xuICBoZWFkZXJzPzogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uIGZvciBjbG9zZSBidXR0b24gdmlzaWJpbGl0eSB3aGVuIHNoYXJlIGZhbHNlIFtPTkxZIEZPUiBpT1NdXG4gICAqL1xuICBjbG9zZUJ1dHRvbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZiB5b3UgbmVlZCB0byBjb3B5IGltYWdlIHRvIHJlZmVyZW5jZSBiZWZvcmUgc2hvdyB0aGVuIHNldCBpdCB0cnVlIFtPTkxZIEZPUiBpT1NdXG4gICAqL1xuICBjb3B5VG9SZWZlcmVuY2U/OiBib29sZWFuO1xuICAvKipcbiAgICogRW5hYmxlIG9yIERpc2FibGUgUGljYXNzbyBPcHRpb25zICggT25seSBBbmRyb2lkICk6IGZpdCwgY2VudGVySW5zaWRlLCBjZW50ZXJDcm9wLlxuICAgKi9cbiAgcGljY2Fzb09wdGlvbnM/OiB7XG4gICAgZml0PzogYm9vbGVhbjtcbiAgICBjZW50ZXJJbnNpZGU/OiBib29sZWFuO1xuICAgIGNlbnRlckNyb3A/OiBib29sZWFuO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIFBob3RvIFZpZXdlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGNhbiBkaXNwbGF5IHlvdXIgaW1hZ2UgaW4gZnVsbCBzY3JlZW4gd2l0aCB0aGUgYWJpbGl0eSB0byBwYW4sIHpvb20sIGFuZCBzaGFyZSB0aGUgaW1hZ2UuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBob3RvVmlld2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9waG90by12aWV3ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBob3RvVmlld2VyOiBQaG90b1ZpZXdlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnKTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2V9KTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzZWN1cmVzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2UsIGhlYWRlcnM6ICd7dXNlcm5hbWU6Zm9vLHBhc3N3b3JkOmJhcn0nfSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQaG90b1ZpZXdlcicsXG4gIHBsdWdpbjogJ2NvbS1zYXJyaWFyb21hbi1waG90b3ZpZXdlcicsXG4gIHBsdWdpblJlZjogJ1Bob3RvVmlld2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXJyaWFyb21hbi9waG90b3ZpZXdlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQaG90b1ZpZXdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIGFuIGltYWdlIGluIGZ1bGwgc2NyZWVuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVVJMIG9yIHBhdGggdG8gaW1hZ2VcbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRpb25zIHtQaG90b1ZpZXdlck9wdGlvbnN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdyh1cmw6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBQaG90b1ZpZXdlck9wdGlvbnMpOiB2b2lkIHt9XG59XG4iXX0=

/***/ }),

/***/ "XnWT":
/*!******************************************************************************************!*\
  !*** ./src/app/estabelecimento/informacoes-contents/informacoes-contents.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".informacoes-content .title {\n  margin-top: 15px;\n  color: #333333;\n}\n.informacoes-content .text {\n  color: #b3b3b3;\n  font-size: 14px;\n}\n.informacoes-content .text span {\n  color: #7c7b7b;\n}\n.informacoes-content .fotos-list {\n  display: -webkit-inline-box;\n  width: 100%;\n  height: 95px;\n  overflow-y: -moz-scrollbars-none;\n  overflow-x: auto;\n}\n.informacoes-content .fotos-list .item {\n  margin-right: 15px;\n  text-align: center;\n}\n.informacoes-content .fotos-list .item ion-thumbnail {\n  --border-radius: 5px;\n  width: 90px;\n  height: 90px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n.informacoes-content .fotos-list .item p, .informacoes-content .fotos-list .item span {\n  color: #333333;\n  font-size: 12px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luZm9ybWFjb2VzLWNvbnRlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRko7QUFHSTtFQUNFLGNBQUE7QUFETjtBQUtFO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUhOO0FBSU07RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUFGUjtBQUlNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZSIiwiZmlsZSI6ImluZm9ybWFjb2VzLWNvbnRlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm9ybWFjb2VzLWNvbnRlbnR7XG5cbiAgLnRpdGxle1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cblxuICAudGV4dHtcbiAgICBjb2xvcjogI2IzYjNiMztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgc3BhbntcbiAgICAgIGNvbG9yOiAjN2M3YjdiO1xuICAgIH1cbiAgfVxuXG4gIC5mb3Rvcy1saXN0e1xuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDk1cHg7XG4gICAgb3ZlcmZsb3cteTogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcblxuICAgIC5pdGVte1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaW9uLXRodW1ibmFpbHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xuICAgICAgfVxuICAgICAgcCwgc3BhbntcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0= */");

/***/ }),

/***/ "Xr8j":
/*!***********************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimento.module.ts ***!
  \***********************************************************/
/*! exports provided: EstabelecimentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentoPageModule", function() { return EstabelecimentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _estabelecimento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estabelecimento-routing.module */ "YxcS");
/* harmony import */ var _estabelecimento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estabelecimento.page */ "I3+h");
/* harmony import */ var _informacoes_contents_informacoes_contents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./informacoes-contents/informacoes-contents.component */ "/ZyL");
/* harmony import */ var _cupom_contents_cupom_contents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cupom-contents/cupom-contents.component */ "dyF6");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");










let EstabelecimentoPageModule = class EstabelecimentoPageModule {
};
EstabelecimentoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _estabelecimento_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstabelecimentoPageRoutingModule"],
        ],
        declarations: [
            _estabelecimento_page__WEBPACK_IMPORTED_MODULE_6__["EstabelecimentoPage"],
            _informacoes_contents_informacoes_contents_component__WEBPACK_IMPORTED_MODULE_7__["InformacoesContentsComponent"],
            _cupom_contents_cupom_contents_component__WEBPACK_IMPORTED_MODULE_8__["CupomContentsComponent"]
        ],
        providers: [
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"]
        ]
    })
], EstabelecimentoPageModule);



/***/ }),

/***/ "YxcS":
/*!*******************************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimento-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EstabelecimentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentoPageRoutingModule", function() { return EstabelecimentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estabelecimento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estabelecimento.page */ "I3+h");




const routes = [
    {
        path: '',
        component: _estabelecimento_page__WEBPACK_IMPORTED_MODULE_3__["EstabelecimentoPage"]
    }
];
let EstabelecimentoPageRoutingModule = class EstabelecimentoPageRoutingModule {
};
EstabelecimentoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstabelecimentoPageRoutingModule);



/***/ }),

/***/ "aJZl":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \**********************************************************************************************/
/*! exports provided: cordovaFunctionOverride */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaFunctionOverride", function() { return cordovaFunctionOverride; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "yR3O");


function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var availabilityCheck = Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getPlugin"])(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
            observer.error(availabilityCheck);
            observer.complete();
        }
    });
}
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}
//# sourceMappingURL=cordova-function-override.js.map

/***/ }),

/***/ "dyF6":
/*!****************************************************************************!*\
  !*** ./src/app/estabelecimento/cupom-contents/cupom-contents.component.ts ***!
  \****************************************************************************/
/*! exports provided: CupomContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CupomContentsComponent", function() { return CupomContentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cupom_contents_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cupom-contents.component.html */ "IPwZ");
/* harmony import */ var _cupom_contents_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cupom-contents.component.scss */ "F4oS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cupom_shared_cupom_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cupom/shared/cupom.service */ "AD1b");





let CupomContentsComponent = class CupomContentsComponent {
    constructor(cuponsService) {
        this.cuponsService = cuponsService;
    }
    ngOnInit() {
        console.log(this.estabelecimento.key);
        const subscribe = this.cuponsService.getByField('estabelecimentoKey', this.estabelecimento.key).subscribe((cupons) => {
            this.cupons = cupons;
        });
        // const subscribe = this.cuponsService.getByEstabelecimento(this.estabelecimento.key, true).subscribe((cupons: any[]) =>{
        //   this.cupons = cupons;
        // })
    }
};
CupomContentsComponent.ctorParameters = () => [
    { type: _cupom_shared_cupom_service__WEBPACK_IMPORTED_MODULE_4__["CupomService"] }
];
CupomContentsComponent.propDecorators = {
    estabelecimento: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CupomContentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cupom-contents',
        template: _raw_loader_cupom_contents_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cupom_contents_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CupomContentsComponent);



/***/ }),

/***/ "gGGD":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \*************************************************************************************/
/*! exports provided: cordovaInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaInstance", function() { return cordovaInstance; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "yR3O");

function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return Object(_common__WEBPACK_IMPORTED_MODULE_0__["wrapInstance"])(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map

/***/ }),

/***/ "uC2i":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "yR3O":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/common.js ***!
  \***************************************************************************/
/*! exports provided: ERR_CORDOVA_NOT_AVAILABLE, ERR_PLUGIN_NOT_INSTALLED, getPromise, wrapPromise, checkAvailability, instanceAvailability, setIndex, callCordovaPlugin, callInstance, getPlugin, get, pluginWarn, cordovaWarn, wrap, wrapInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CORDOVA_NOT_AVAILABLE", function() { return ERR_CORDOVA_NOT_AVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_PLUGIN_NOT_INSTALLED", function() { return ERR_PLUGIN_NOT_INSTALLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromise", function() { return getPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapPromise", function() { return wrapPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAvailability", function() { return checkAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instanceAvailability", function() { return instanceAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIndex", function() { return setIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callCordovaPlugin", function() { return callCordovaPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callInstance", function() { return callInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlugin", function() { return getPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginWarn", function() { return pluginWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaWarn", function() { return cordovaWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapInstance", function() { return wrapInstance; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    if (typeof window !== 'undefined' && window.angular) {
        var doc = window.document;
        var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
    }
    return tryNativePromise();
}
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolve(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return reject(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        typeof rej === 'function' && rej(pluginResult.error);
    }
    return p;
}
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
        }
    });
}
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.next(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.error(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
            }
        };
    });
}
/**
 * Wrap the event with an observable
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
    element =
        typeof window !== 'undefined' && element
            ? get(window, element)
            : element || (typeof window !== 'undefined' ? window : {});
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, event);
}
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginInstance, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
    }
    return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
    return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
        return availabilityCheck;
    }
}
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
function getPlugin(pluginRef) {
    if (typeof window !== 'undefined') {
        return get(window, pluginRef);
    }
    return null;
}
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
    }
    if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
    }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
    if (typeof process === 'undefined') {
        if (method) {
            console.warn('Native: tried calling ' +
                pluginName +
                '.' +
                method +
                ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
        else {
            console.warn('Native: tried accessing the ' +
                pluginName +
                ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    }
}
/**
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}
//# sourceMappingURL=common.js.map

/***/ })

}]);
//# sourceMappingURL=estabelecimento-estabelecimento-module.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_destinos-api_destinos-api_module_ts"],{

/***/ 1103:
/*!*************************************************************!*\
  !*** ./src/app/destinos-api/destinos-api-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinosFirestorePageRoutingModule": () => (/* binding */ DestinosFirestorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _destinos_api_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destinos-api.page */ 5085);




const routes = [
    {
        path: '',
        component: _destinos_api_page__WEBPACK_IMPORTED_MODULE_0__.DestinosFirestorePage
    }
];
let DestinosFirestorePageRoutingModule = class DestinosFirestorePageRoutingModule {
};
DestinosFirestorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DestinosFirestorePageRoutingModule);



/***/ }),

/***/ 6154:
/*!*****************************************************!*\
  !*** ./src/app/destinos-api/destinos-api.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinosFirestorePageModule": () => (/* binding */ DestinosFirestorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _destinos_api_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destinos-api-routing.module */ 1103);
/* harmony import */ var _destinos_api_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destinos-api.page */ 5085);







let DestinosFirestorePageModule = class DestinosFirestorePageModule {
};
DestinosFirestorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _destinos_api_routing_module__WEBPACK_IMPORTED_MODULE_0__.DestinosFirestorePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_destinos_api_page__WEBPACK_IMPORTED_MODULE_1__.DestinosFirestorePage]
    })
], DestinosFirestorePageModule);



/***/ }),

/***/ 5085:
/*!***************************************************!*\
  !*** ./src/app/destinos-api/destinos-api.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinosFirestorePage": () => (/* binding */ DestinosFirestorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _destinos_api_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destinos-api.page.html?ngResource */ 9043);
/* harmony import */ var _destinos_api_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destinos-api.page.scss?ngResource */ 514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _models_lugar_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/lugar.model */ 1006);
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ 4818);







let DestinosFirestorePage = class DestinosFirestorePage {
    constructor(lugarService, formBuilder) {
        this.lugarService = lugarService;
        this.formBuilder = formBuilder;
        this.lugar = new _models_lugar_model__WEBPACK_IMPORTED_MODULE_2__.Lugar();
        this.destinos = [];
        this.estado = "Alta destino";
        this.editando = false;
        this.hasError = (controlName, errorName) => {
            return !this.ionicForm.controls[controlName].valid &&
                this.ionicForm.controls[controlName].hasError(errorName) &&
                this.ionicForm.controls[controlName].touched;
        };
    }
    ngOnInit() {
        this.buildForm();
        this.getPosition();
        //this.getLugares();
    }
    getLugares() {
        this.lugarService.getLugaresApi().subscribe((response) => {
            this.destinos = response;
        }, error => {
            console.error(error);
        });
    }
    submitForm() {
        if (this.ionicForm.valid) {
            this.lugar.nombre = this.ionicForm.get('nombre').value;
            this.lugar.latitud = this.latitud;
            this.lugar.longitud = this.longitud;
            if (!this.editando) {
                this.lugarService.altaLugarApi(this.lugar).subscribe((response) => {
                    if (response) {
                        this.ionicForm.reset();
                        this.getLugares();
                    }
                    else {
                        this.errorProceso();
                    }
                }, error => {
                    console.error(error);
                });
            }
            else {
                this.lugarService.editarLugarApi(this.lugar.id, this.lugar).subscribe((resposne) => {
                    if (resposne) {
                        this.editando = false;
                        this.estado = "Alta destino";
                        this.lugar = new _models_lugar_model__WEBPACK_IMPORTED_MODULE_2__.Lugar();
                        this.ionicForm.reset();
                        this.getLugares();
                    }
                    else {
                        this.errorProceso();
                    }
                }, error => {
                    console.error(error);
                });
            }
        }
    }
    buildForm() {
        this.ionicForm = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required] })
        });
    }
    editarLugar(id, lugar) {
        this.editando = true;
        this.lugar = lugar;
        this.estado = "Editar el lugar";
        this.ionicForm.get('nombre').setValue(lugar.nombre);
    }
    eliminarLugar(id) {
        this.lugarService.borrarLugarApi(id).subscribe((response) => {
            if (response) {
                this.getLugares();
                this.estado = "Alta destino";
                this.editando = false;
                this.ionicForm.reset();
            }
            else {
                this.errorProceso();
            }
        }, error => {
            console.error(error);
        });
    }
    // cada que se vuelve a entrar a la pagina ó componente de pagina
    //https://ionicframework.com/docs/angular/lifecycle
    ionViewWillEnter() {
        this.getLugares();
    }
    cancelarEdicion() {
        this.estado = "Alta destino";
        this.editando = false;
        this.ionicForm.reset();
        this.lugar = new _models_lugar_model__WEBPACK_IMPORTED_MODULE_2__.Lugar();
    }
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((resp) => {
                this.latitud = resp.coords.latitude;
                this.longitud = resp.coords.longitude;
            }, (err) => {
                if (err.code === 1) {
                    alert('Favor de activar la geolocalización en tu navegador y recargar la pantalla.');
                }
                this.latitud = null;
                this.longitud = null;
            }, { timeout: 5000, enableHighAccuracy: true });
        });
    }
    errorProceso() {
        alert("Ocurrio un error en el proceso");
    }
};
DestinosFirestorePage.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
DestinosFirestorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-destinos-api',
        template: _destinos_api_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_destinos_api_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DestinosFirestorePage);



/***/ }),

/***/ 4818:
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.basePath = 'http://localhost:8080/post';
    }
    // metodos de crud api
    getLugaresApi() {
        return this.http.get(`${this.basePath}/list`, {});
    }
    altaLugarApi(lugar) {
        return this.http.post(`${this.basePath}/add`, lugar);
    }
    borrarLugarApi(id) {
        return this.http.delete(`${this.basePath}/${id}/delete`, {});
    }
    editarLugarApi(id, lugar) {
        return this.http.put(`${this.basePath}/${id}/update`, lugar, {});
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 514:
/*!****************************************************************!*\
  !*** ./src/app/destinos-api/destinos-api.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXN0aW5vcy1hcGkucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9043:
/*!****************************************************************!*\
  !*** ./src/app/destinos-api/destinos-api.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Destinos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item>\n            <ion-label>\n                Destino\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"nombre\"></ion-input>\n            <ion-text color=\"danger\" *ngIf=\"hasError('nombre','required')\">\n                <h5>Campo requerido</h5>\n            </ion-text>\n        </ion-item>\n        <ion-item-divider>\n            <ion-button type=\"submit\" type=\"submit\" [disabled]=\"!(ionicForm.valid)\" color=\"primary\" size=\"larger\">{{estado}}</ion-button>\n            <ion-button *ngIf=\"editando\" type=\"button\" color=\"danger\" size=\"larger\" (click)=\"cancelarEdicion()\">Cancelar</ion-button>\n        </ion-item-divider>\n    </form>\n\n    <ion-item-divider></ion-item-divider>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-text>\n                    Destino\n                </ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-text>\n                    Ubicacion\n                </ion-text>\n            </ion-col>\n            <ion-col>\n\n            </ion-col>\n            <ion-col>\n\n            </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let lugar of destinos\">\n            <ion-col>\n                <ion-text>\n                    {{lugar.nombre}}\n                </ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-text *ngIf=\"lugar.latitud\">\n                    latitud: {{lugar.latitud}} ,longitud{{lugar.longitud}}\n                </ion-text>\n                <ion-text *ngIf=\"!lugar.latitud\">\n                </ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-button color=\"primary\" (click)=\"editarLugar(lugar.id, lugar)\">editar</ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button color=\"danger\" (click)=\"eliminarLugar(lugar.id)\">borrar</ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_destinos-api_destinos-api_module_ts.js.map
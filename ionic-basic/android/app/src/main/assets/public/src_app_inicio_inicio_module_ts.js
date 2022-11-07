"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inicio_inicio_module_ts"],{

/***/ 6452:
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 9545);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 193:
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 6452);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 9545);







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 9545:
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page.html?ngResource */ 4588);
/* harmony import */ var _inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss?ngResource */ 1075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_envio_receptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/envio-receptor.service */ 4764);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);






let InicioPage = class InicioPage {
    constructor(router, envioReceptor) {
        this.router = router;
        this.envioReceptor = envioReceptor;
        this.user = { nombre: 'Pedro Perez', uuid: "34523452345234523452345", email: "correo@gmail.com" };
        this.list = [
            { nombre: 'Pedro Perez', uuid: "34523452345234523452345", email: "correo@gmail.com" },
            { nombre: 'Pedro Perez', uuid: "34523452345234523452345", email: "correo@gmail.com" },
            { nombre: 'Pedro Perez', uuid: "34523452345234523452345", email: "correo@gmail.com" }
        ];
    }
    ngOnInit() {
    }
    gotReceiver() {
        this.envioReceptor.sendObjectSource(this.user);
        this.envioReceptor.sendListSource(this.list);
        this.router.navigate(['main/receptor']);
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _service_envio_receptor_service__WEBPACK_IMPORTED_MODULE_2__.EnvioReceptorService }
];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-inicio',
        template: _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioPage);



/***/ }),

/***/ 1075:
/*!****************************************************!*\
  !*** ./src/app/inicio/inicio.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4588:
/*!****************************************************!*\
  !*** ./src/app/inicio/inicio.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title>inicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n          <ion-button (click)=\"gotReceiver()\">\n              ir a reciever\n          </ion-button>\n      </ion-item>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_inicio_inicio_module_ts.js.map
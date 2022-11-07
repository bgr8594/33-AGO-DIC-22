"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_receptor_receptor_module_ts"],{

/***/ 601:
/*!*****************************************************!*\
  !*** ./src/app/receptor/receptor-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptorPageRoutingModule": () => (/* binding */ ReceptorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _receptor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receptor.page */ 1631);




const routes = [
    {
        path: '',
        component: _receptor_page__WEBPACK_IMPORTED_MODULE_0__.ReceptorPage
    }
];
let ReceptorPageRoutingModule = class ReceptorPageRoutingModule {
};
ReceptorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReceptorPageRoutingModule);



/***/ }),

/***/ 7175:
/*!*********************************************!*\
  !*** ./src/app/receptor/receptor.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptorPageModule": () => (/* binding */ ReceptorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _receptor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receptor-routing.module */ 601);
/* harmony import */ var _receptor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receptor.page */ 1631);







let ReceptorPageModule = class ReceptorPageModule {
};
ReceptorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _receptor_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReceptorPageRoutingModule
        ],
        declarations: [_receptor_page__WEBPACK_IMPORTED_MODULE_1__.ReceptorPage]
    })
], ReceptorPageModule);



/***/ }),

/***/ 1631:
/*!*******************************************!*\
  !*** ./src/app/receptor/receptor.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptorPage": () => (/* binding */ ReceptorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _receptor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receptor.page.html?ngResource */ 4084);
/* harmony import */ var _receptor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receptor.page.scss?ngResource */ 545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_envio_receptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/envio-receptor.service */ 4764);





let ReceptorPage = class ReceptorPage {
    constructor(envioReceptorService) {
        this.envioReceptorService = envioReceptorService;
    }
    ngOnInit() {
        this.envioReceptorService.$getObjectSource.subscribe(data => {
            console.log(data);
            this.user = data;
        }).unsubscribe();
        this.envioReceptorService.$getListSource.subscribe(data => {
            console.log(data);
            this.list = data;
        }).unsubscribe();
        this.envioReceptorService.getPersonajes().subscribe((response) => {
            this.personajes = response.results;
        });
    }
};
ReceptorPage.ctorParameters = () => [
    { type: _service_envio_receptor_service__WEBPACK_IMPORTED_MODULE_2__.EnvioReceptorService }
];
ReceptorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-receptor',
        template: _receptor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_receptor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReceptorPage);



/***/ }),

/***/ 545:
/*!********************************************************!*\
  !*** ./src/app/receptor/receptor.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlcHRvci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4084:
/*!********************************************************!*\
  !*** ./src/app/receptor/receptor.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title>reciever</ion-title>\n  </ion-toolbar>\n  <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n</ion-header>\n\n<ion-content>\n  <p>\n      {{user | json}}\n  </p>\n  <p>{{list | json}}</p>\n\n  <p>{{personajes | json}}</p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_receptor_receptor_module_ts.js.map
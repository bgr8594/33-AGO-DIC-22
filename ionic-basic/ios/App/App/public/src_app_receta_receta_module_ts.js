"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_receta_receta_module_ts"],{

/***/ 4214:
/*!*************************************************!*\
  !*** ./src/app/receta/receta-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecetaPageRoutingModule": () => (/* binding */ RecetaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _receta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receta.page */ 9426);




const routes = [
    {
        path: '',
        component: _receta_page__WEBPACK_IMPORTED_MODULE_0__.RecetaPage
    }
];
let RecetaPageRoutingModule = class RecetaPageRoutingModule {
};
RecetaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecetaPageRoutingModule);



/***/ }),

/***/ 1313:
/*!*****************************************!*\
  !*** ./src/app/receta/receta.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecetaPageModule": () => (/* binding */ RecetaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _receta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receta-routing.module */ 4214);
/* harmony import */ var _receta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receta.page */ 9426);







let RecetaPageModule = class RecetaPageModule {
};
RecetaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _receta_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecetaPageRoutingModule
        ],
        declarations: [_receta_page__WEBPACK_IMPORTED_MODULE_1__.RecetaPage]
    })
], RecetaPageModule);



/***/ }),

/***/ 9426:
/*!***************************************!*\
  !*** ./src/app/receta/receta.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecetaPage": () => (/* binding */ RecetaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _receta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receta.page.html?ngResource */ 2310);
/* harmony import */ var _receta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receta.page.scss?ngResource */ 3064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _service_receta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/receta.service */ 5416);






let RecetaPage = class RecetaPage {
    constructor(recetaService, router) {
        this.recetaService = recetaService;
        this.router = router;
    }
    ngOnInit() {
        this.recetas = this.recetaService.getRecetas();
    }
    irDetalleReceta(id) {
        this.router.navigate([`main/detalle-receta/${id}`]);
    }
};
RecetaPage.ctorParameters = () => [
    { type: _service_receta_service__WEBPACK_IMPORTED_MODULE_2__.RecetaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RecetaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-receta',
        template: _receta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_receta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecetaPage);



/***/ }),

/***/ 3064:
/*!****************************************************!*\
  !*** ./src/app/receta/receta.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNldGEucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2310:
/*!****************************************************!*\
  !*** ./src/app/receta/receta.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>receta</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item  *ngFor=\"let receta of recetas\" (click)=\"irDetalleReceta(receta.id)\">\n            {{receta.nombre}}\n        </ion-item>\n    </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_receta_receta_module_ts.js.map
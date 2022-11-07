"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_detalle-receta_detalle-receta_module_ts"],{

/***/ 4529:
/*!*****************************************************************!*\
  !*** ./src/app/detalle-receta/detalle-receta-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleRecetaPageRoutingModule": () => (/* binding */ DetalleRecetaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _detalle_receta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-receta.page */ 4681);




const routes = [
    {
        path: ':idReceta',
        component: _detalle_receta_page__WEBPACK_IMPORTED_MODULE_0__.DetalleRecetaPage
    }
];
let DetalleRecetaPageRoutingModule = class DetalleRecetaPageRoutingModule {
};
DetalleRecetaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetalleRecetaPageRoutingModule);



/***/ }),

/***/ 1879:
/*!*********************************************************!*\
  !*** ./src/app/detalle-receta/detalle-receta.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleRecetaPageModule": () => (/* binding */ DetalleRecetaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _detalle_receta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-receta-routing.module */ 4529);
/* harmony import */ var _detalle_receta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-receta.page */ 4681);







let DetalleRecetaPageModule = class DetalleRecetaPageModule {
};
DetalleRecetaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalle_receta_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetalleRecetaPageRoutingModule
        ],
        declarations: [_detalle_receta_page__WEBPACK_IMPORTED_MODULE_1__.DetalleRecetaPage]
    })
], DetalleRecetaPageModule);



/***/ }),

/***/ 4681:
/*!*******************************************************!*\
  !*** ./src/app/detalle-receta/detalle-receta.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleRecetaPage": () => (/* binding */ DetalleRecetaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detalle_receta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-receta.page.html?ngResource */ 7994);
/* harmony import */ var _detalle_receta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-receta.page.scss?ngResource */ 7821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _service_receta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/receta.service */ 5416);






let DetalleRecetaPage = class DetalleRecetaPage {
    constructor(recetaService, router, activateRouter) {
        this.recetaService = recetaService;
        this.router = router;
        this.activateRouter = activateRouter;
    }
    ngOnInit() {
        this.activateRouter.paramMap.subscribe(paramMap => {
            this.idReceta = Number.parseInt(paramMap.get('idReceta'));
            this.receta = this.recetaService.getReceta(this.idReceta);
        });
    }
};
DetalleRecetaPage.ctorParameters = () => [
    { type: _service_receta_service__WEBPACK_IMPORTED_MODULE_2__.RecetaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
DetalleRecetaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-detalle-receta',
        template: _detalle_receta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detalle_receta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetalleRecetaPage);



/***/ }),

/***/ 7821:
/*!********************************************************************!*\
  !*** ./src/app/detalle-receta/detalle-receta.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlLXJlY2V0YS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7994:
/*!********************************************************************!*\
  !*** ./src/app/detalle-receta/detalle-receta.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar style=\"margin-top: 40px;\">\n        <ion-button slot=\"start\">\n            <ion-back-button defaultHref=\"/receta\" text=\"receta\"></ion-back-button>\n        </ion-button>\n        <ion-title>detalle-receta</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-img [src]=\"receta.image\"></ion-img>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-list>\n                    <ion-item *ngFor=\"let ingrediente of receta.ingredientes\">\n                        {{ingrediente}}\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_detalle-receta_detalle-receta_module_ts.js.map
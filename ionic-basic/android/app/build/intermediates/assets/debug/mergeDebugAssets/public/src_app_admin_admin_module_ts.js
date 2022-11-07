"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 5584:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutingModule": () => (/* binding */ AdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page */ 7714);




const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_0__.AdminPage
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ 1848:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": () => (/* binding */ AdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 5584);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 7714);







let AdminPageModule = class AdminPageModule {
};
AdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPageRoutingModule
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage]
    })
], AdminPageModule);



/***/ }),

/***/ 7714:
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page.html?ngResource */ 376);
/* harmony import */ var _admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss?ngResource */ 1162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_menu_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/menu-service.service */ 7984);





let AdminPage = class AdminPage {
    constructor(menuService) {
        this.menuService = menuService;
    }
    ngOnInit() {
        this.menuService.setTitle("Administracion");
    }
};
AdminPage.ctorParameters = () => [
    { type: src_app_service_menu_service_service__WEBPACK_IMPORTED_MODULE_2__.MenuServiceService }
];
AdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-admin',
        template: _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminPage);



/***/ }),

/***/ 1162:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 376:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>admin</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-text>Pagina de Administracion</ion-text>\n        </ion-item>\n    </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map
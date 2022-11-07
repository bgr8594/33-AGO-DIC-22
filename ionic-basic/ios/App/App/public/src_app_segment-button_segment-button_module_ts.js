"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_segment-button_segment-button_module_ts"],{

/***/ 5645:
/*!*****************************************************************!*\
  !*** ./src/app/segment-button/segment-button-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentButtonPageRoutingModule": () => (/* binding */ SegmentButtonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _segment_button_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment-button.page */ 8691);




const routes = [
    {
        path: '',
        component: _segment_button_page__WEBPACK_IMPORTED_MODULE_0__.SegmentButtonPage
    }
];
let SegmentButtonPageRoutingModule = class SegmentButtonPageRoutingModule {
};
SegmentButtonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SegmentButtonPageRoutingModule);



/***/ }),

/***/ 7236:
/*!*********************************************************!*\
  !*** ./src/app/segment-button/segment-button.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentButtonPageModule": () => (/* binding */ SegmentButtonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _segment_button_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment-button-routing.module */ 5645);
/* harmony import */ var _segment_button_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segment-button.page */ 8691);







let SegmentButtonPageModule = class SegmentButtonPageModule {
};
SegmentButtonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _segment_button_routing_module__WEBPACK_IMPORTED_MODULE_0__.SegmentButtonPageRoutingModule
        ],
        declarations: [_segment_button_page__WEBPACK_IMPORTED_MODULE_1__.SegmentButtonPage]
    })
], SegmentButtonPageModule);



/***/ }),

/***/ 8691:
/*!*******************************************************!*\
  !*** ./src/app/segment-button/segment-button.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentButtonPage": () => (/* binding */ SegmentButtonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _segment_button_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment-button.page.html?ngResource */ 3710);
/* harmony import */ var _segment_button_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segment-button.page.scss?ngResource */ 1712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SegmentButtonPage = class SegmentButtonPage {
    constructor() { }
    ngOnInit() {
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
};
SegmentButtonPage.ctorParameters = () => [];
SegmentButtonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-segment-button',
        template: _segment_button_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_segment_button_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SegmentButtonPage);



/***/ }),

/***/ 1712:
/*!********************************************************************!*\
  !*** ./src/app/segment-button/segment-button.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWdtZW50LWJ1dHRvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3710:
/*!********************************************************************!*\
  !*** ./src/app/segment-button/segment-button.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>segment-button</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- Default Segment -->\n    <ion-segment (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"friends\">\n            <ion-label>Friends</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"enemies\">\n            <ion-label>Enemies</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <!-- Disabled Segment -->\n    <ion-segment (ionChange)=\"segmentChanged($event)\" disabled value=\"sunny\">\n        <ion-segment-button value=\"sunny\">\n            <ion-label>Sunny</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"rainy\">\n            <ion-label>Rainy</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <!-- Segment with anchors -->\n    <ion-segment (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"dogs\">\n            <ion-label>Dogs</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"cats\">\n            <ion-label>Cats</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <!-- Scrollable Segment -->\n    <ion-segment scrollable value=\"heart\">\n        <ion-segment-button value=\"home\">\n            <ion-icon name=\"home\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"heart\">\n            <ion-icon name=\"heart\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"pin\">\n            <ion-icon name=\"pin\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"star\">\n            <ion-icon name=\"star\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"call\">\n            <ion-icon name=\"call\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"globe\">\n            <ion-icon name=\"globe\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"basket\">\n            <ion-icon name=\"basket\"></ion-icon>\n        </ion-segment-button>\n    </ion-segment>\n\n    <!-- Segment with secondary color -->\n    <ion-segment (ionChange)=\"segmentChanged($event)\" color=\"secondary\">\n        <ion-segment-button value=\"standard\">\n            <ion-label>Standard</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"hybrid\">\n            <ion-label>Hybrid</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"sat\">\n            <ion-label>Satellite</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <!-- Segment in a toolbar -->\n    <ion-toolbar>\n        <ion-segment (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button value=\"camera\">\n                <ion-icon name=\"camera\"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value=\"bookmark\">\n                <ion-icon name=\"bookmark\"></ion-icon>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n\n    <!-- Segment with default selection -->\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"javascript\">\n        <ion-segment-button value=\"python\">\n            <ion-label>Python</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"javascript\">\n            <ion-label>Javascript</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_segment-button_segment-button_module_ts.js.map
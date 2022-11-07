"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_presupuesto_presupuesto_module_ts"],{

/***/ 9370:
/*!***********************************************************!*\
  !*** ./src/app/presupuesto/presupuesto-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresupuestoPageRoutingModule": () => (/* binding */ PresupuestoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _presupuesto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presupuesto.page */ 8432);




const routes = [
    {
        path: '',
        component: _presupuesto_page__WEBPACK_IMPORTED_MODULE_0__.PresupuestoPage
    }
];
let PresupuestoPageRoutingModule = class PresupuestoPageRoutingModule {
};
PresupuestoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PresupuestoPageRoutingModule);



/***/ }),

/***/ 4980:
/*!***************************************************!*\
  !*** ./src/app/presupuesto/presupuesto.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresupuestoPageModule": () => (/* binding */ PresupuestoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _presupuesto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presupuesto-routing.module */ 9370);
/* harmony import */ var _presupuesto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presupuesto.page */ 8432);







let PresupuestoPageModule = class PresupuestoPageModule {
};
PresupuestoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _presupuesto_routing_module__WEBPACK_IMPORTED_MODULE_0__.PresupuestoPageRoutingModule
        ],
        declarations: [_presupuesto_page__WEBPACK_IMPORTED_MODULE_1__.PresupuestoPage]
    })
], PresupuestoPageModule);



/***/ }),

/***/ 8432:
/*!*************************************************!*\
  !*** ./src/app/presupuesto/presupuesto.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresupuestoPage": () => (/* binding */ PresupuestoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _presupuesto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presupuesto.page.html?ngResource */ 6583);
/* harmony import */ var _presupuesto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presupuesto.page.scss?ngResource */ 1871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/presupuesto.service */ 9798);





let PresupuestoPage = class PresupuestoPage {
    constructor(presupuestoService) {
        this.presupuestoService = presupuestoService;
        this.gastos = ['Directos', 'Fijos', 'Variables'];
        this.errResultados = 'light';
        this.gastosList = [];
        this.customPopoverOptions = {
            header: 'Seleccion de gastos',
            subHeader: 'Seleccione el tipo de gasto',
            message: 'Solo seleccione un tipo de gasto'
        };
    }
    ngOnInit() {
        this.gastosList = this.presupuestoService.mostrarGastos();
    }
    cambioValor(value) {
        //console.log(value);
    }
    guardar() {
        this.resultados = "";
        if (this.monto != null && this.selectedValue != null) {
            this.errResultados = 'success';
            this.resultados = 'Gasto seleccionado: ' + this.selectedValue + ' \nMonto: ' + this.monto + '\n';
            this.presupuestoService.agregarGasto(this.monto, this.selectedValue);
            this.gastosList = this.presupuestoService.mostrarGastos();
            this.limpiarCampos();
        }
        else {
            this.errResultados = 'danger';
            this.resultados = "No a completado los campos del formulario";
        }
    }
    limpiarCampos() {
        this.monto = null;
        this.selectedValue = null;
    }
};
PresupuestoPage.ctorParameters = () => [
    { type: _service_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__.PresupuestoService }
];
PresupuestoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-presupuesto',
        template: _presupuesto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_presupuesto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PresupuestoPage);



/***/ }),

/***/ 9798:
/*!************************************************!*\
  !*** ./src/app/service/presupuesto.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresupuestoService": () => (/* binding */ PresupuestoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let PresupuestoService = class PresupuestoService {
    constructor() {
        this.gastos = [];
    }
    agregarGasto(monto, gasto) {
        this.gastos.push({ monto, gasto });
    }
    mostrarGastos() {
        return this.gastos;
    }
};
PresupuestoService.ctorParameters = () => [];
PresupuestoService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PresupuestoService);



/***/ }),

/***/ 1871:
/*!**************************************************************!*\
  !*** ./src/app/presupuesto/presupuesto.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzdXB1ZXN0by5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6583:
/*!**************************************************************!*\
  !*** ./src/app/presupuesto/presupuesto.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n      <ion-title>\n          Presupuesto\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n      <ion-toolbar>\n          <ion-title size=\"large\">Presupuesto</ion-title>\n      </ion-toolbar>\n  </ion-header>\n  <ion-list>\n      <ion-list-header>\n          <ion-label>\n              Tipo de astos y monto\n          </ion-label>\n      </ion-list-header>\n      <ion-item>\n          <ion-label>Gastos</ion-label>\n          <ion-select [(ngModel)]=\"selectedValue\" multiple=\"false\" (ionChange)=\"cambioValor(selectedValue)\">\n              <ion-select-option [value]=\"option\" *ngFor=\"let option of  gastos\">{{option}}\n              </ion-select-option>\n          </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-label>\n              Monto:\n          </ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"monto\" placeholder=\"Ingrese el monto\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-button type=\"button\" (click)=\"guardar()\">Guardar</ion-button>\n      </ion-item>\n      <ion-item>\n          <ion-label>Resultados</ion-label>\n          <ion-textarea color=\"{{errResultados}}\" [(ngModel)]=\"resultados\" clearOnEdit=\"true\" readonly=\"true\"></ion-textarea>\n      </ion-item>\n      <ion-header *ngIf=\"gastosList.length>0\">\n          <h1 class=\"title\">Gastos efectuados</h1>\n      </ion-header>\n      <ion-grid *ngIf=\"gastosList.length>0\">\n          <ion-row>\n              <ion-col size=\"4\">Gasto</ion-col>\n              <ion-col size=\"4\">Monto</ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let itemG of gastosList\">\n              <ion-col size=\"4\">{{itemG.gasto}}</ion-col>\n              <ion-col size=\"4\">{{itemG.monto}}</ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_presupuesto_presupuesto_module_ts.js.map
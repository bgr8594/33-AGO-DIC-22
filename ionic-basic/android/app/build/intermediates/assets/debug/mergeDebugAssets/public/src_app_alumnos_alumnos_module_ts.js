"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_alumnos_alumnos_module_ts"],{

/***/ 6565:
/*!***************************************************!*\
  !*** ./src/app/alumnos/alumnos-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumnosPageRoutingModule": () => (/* binding */ AlumnosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _alumnos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alumnos.page */ 8049);




const routes = [
    {
        path: '',
        component: _alumnos_page__WEBPACK_IMPORTED_MODULE_0__.AlumnosPage
    }
];
let AlumnosPageRoutingModule = class AlumnosPageRoutingModule {
};
AlumnosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlumnosPageRoutingModule);



/***/ }),

/***/ 8765:
/*!*******************************************!*\
  !*** ./src/app/alumnos/alumnos.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumnosPageModule": () => (/* binding */ AlumnosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _alumnos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alumnos-routing.module */ 6565);
/* harmony import */ var _alumnos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alumnos.page */ 8049);
/* harmony import */ var _componentes_datos_alumno_datos_alumno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes/datos-alumno/datos-alumno.component */ 4798);








let AlumnosPageModule = class AlumnosPageModule {
};
AlumnosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _alumnos_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlumnosPageRoutingModule
        ],
        declarations: [_alumnos_page__WEBPACK_IMPORTED_MODULE_1__.AlumnosPage, _componentes_datos_alumno_datos_alumno_component__WEBPACK_IMPORTED_MODULE_2__.DatosAlumnoComponent]
    })
], AlumnosPageModule);



/***/ }),

/***/ 8049:
/*!*****************************************!*\
  !*** ./src/app/alumnos/alumnos.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumnosPage": () => (/* binding */ AlumnosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _alumnos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alumnos.page.html?ngResource */ 1982);
/* harmony import */ var _alumnos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alumnos.page.scss?ngResource */ 2196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_alumnos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/alumnos.service */ 9104);





let AlumnosPage = class AlumnosPage {
    constructor(alumnoService) {
        this.alumnoService = alumnoService;
        this.alumnos = [];
        this.error = false;
    }
    ngOnInit() {
        this.alumnoService.setAlumnos([
            { id: 1, nombre: 'Gerardo Martinez',
                matricula: '745589' },
            { id: 2, nombre: 'Isela Rodriguez',
                matricula: '855449' },
            { id: 3, nombre: 'Estenban',
                matricula: '0021554' }
        ]);
        this.alumnos = this.alumnoService.getAlumos();
        this.estado = 'guardar';
    }
    guardar() {
        if ((this.nombre == undefined || this.nombre == '') ||
            (this.matricula == undefined || this.matricula == '')) {
            this.error = true;
            return;
        }
        let alumno = {
            nombre: this.nombre,
            matricula: this.matricula
        };
        if (this.estado === 'actualizar') {
            alumno.id = this.idActualizar;
            this.alumnos = this.alumnoService.actualiza(alumno);
        }
        if (this.estado === 'guardar') {
            this.alumnoService.agregarAlumno(alumno);
            this.alumnos = this.alumnoService.getAlumos();
        }
        this.cancelar();
    }
    cancelar() {
        this.estado = 'guardar';
        this.matricula = '';
        this.nombre = '';
        this.error = false;
    }
    eliminar(id) {
        this.alumnoService.borrarAlumno(id);
        this.alumnos = this.alumnoService.getAlumos();
    }
    editar(alumno) {
        this.estado = 'actualizar';
        this.matricula = alumno.matricula;
        this.nombre = alumno.nombre;
        this.idActualizar = alumno.id;
    }
};
AlumnosPage.ctorParameters = () => [
    { type: _service_alumnos_service__WEBPACK_IMPORTED_MODULE_2__.AlumnosService }
];
AlumnosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-alumnos',
        template: _alumnos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_alumnos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlumnosPage);



/***/ }),

/***/ 4798:
/*!********************************************************************!*\
  !*** ./src/app/componentes/datos-alumno/datos-alumno.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosAlumnoComponent": () => (/* binding */ DatosAlumnoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datos_alumno_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos-alumno.component.html?ngResource */ 6576);
/* harmony import */ var _datos_alumno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos-alumno.component.scss?ngResource */ 1070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let DatosAlumnoComponent = class DatosAlumnoComponent {
    constructor() {
        this.eliminar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.editar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
};
DatosAlumnoComponent.ctorParameters = () => [];
DatosAlumnoComponent.propDecorators = {
    alumnosList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    eliminar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    editar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
DatosAlumnoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-datos-alumno',
        template: _datos_alumno_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_datos_alumno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DatosAlumnoComponent);



/***/ }),

/***/ 9104:
/*!********************************************!*\
  !*** ./src/app/service/alumnos.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumnosService": () => (/* binding */ AlumnosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let AlumnosService = class AlumnosService {
    constructor() {
        this.alumnos = [];
    }
    agregarAlumno(alumno) {
        if (this.alumnos.length > 0) {
            alumno.id = this.alumnos.length + 1;
        }
        else {
            alumno.id = 1;
        }
        this.alumnos.push(alumno);
    }
    borrarAlumno(id) {
        this.alumnos =
            this.alumnos.filter((al => al.id != id));
    }
    getAlumos() {
        return this.alumnos;
    }
    setAlumnos(alumnos) {
        this.alumnos = alumnos;
    }
    actualiza(alumno) {
        this.alumnos.filter((al) => al.id == alumno.id).map(al => {
            al.matricula = alumno.matricula;
            al.nombre = alumno.nombre;
        });
        return this.alumnos;
    }
};
AlumnosService.ctorParameters = () => [];
AlumnosService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AlumnosService);



/***/ }),

/***/ 2196:
/*!******************************************************!*\
  !*** ./src/app/alumnos/alumnos.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbHVtbm9zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1070:
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/datos-alumno/datos-alumno.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRvcy1hbHVtbm8uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1982:
/*!******************************************************!*\
  !*** ./src/app/alumnos/alumnos.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title>alumnos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n          <ion-label>\n              Matricula:\n          </ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"matricula\" placeholder=\"Ingrese la matricula\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>\n              Nombre:\n          </ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"nombre\" placeholder=\"Ingrese nombre del alumno\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-button type=\"button\" (click)=\"guardar()\">{{estado}}</ion-button>\n          <ion-button *ngIf=\"estado==='actualizar'\" type=\"button\" (click)=\"cancelar()\">Cancelar</ion-button>\n          <ion-text *ngIf=\"error\" color=\"danger\">\n              <h6>Debe ingresar nombre y matricula para {{estado}}</h6>\n          </ion-text>\n      </ion-item>\n      <ion-item *ngIf=\"alumnos.length>0\">\n          <app-datos-alumno [alumnosList]=\"alumnos\" (eliminar)=\"eliminar($event)\" (editar)=\"editar($event)\"></app-datos-alumno>\n      </ion-item>\n  </ion-list>\n</ion-content>";

/***/ }),

/***/ 6576:
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/datos-alumno/datos-alumno.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid *ngIf=\"alumnosList.length>0\">\n  <ion-row>\n      <ion-col size=\"4\">Matricula</ion-col>\n      <ion-col size=\"4\">Nombre</ion-col>\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"2\"></ion-col>\n  </ion-row>\n  <ion-row *ngFor=\"let alumno of alumnosList\">\n      <ion-col size=\"4\">\n          {{alumno.matricula}}\n      </ion-col>\n      <ion-col size=\"4\">\n          {{alumno.nombre}}\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"editar.emit(alumno)\"><a>Editar</a></ion-col>\n      <ion-col size=\"1\" (click)=\"eliminar.emit(alumno.id)\"><a>X</a></ion-col>\n  </ion-row>\n</ion-grid>";

/***/ })

}]);
//# sourceMappingURL=src_app_alumnos_alumnos_module_ts.js.map
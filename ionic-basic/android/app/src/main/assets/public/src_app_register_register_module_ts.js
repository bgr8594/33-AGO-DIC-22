"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 1654:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 2133);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 2474:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1654);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 2133);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 2133:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var _home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_autservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/autservice.service */ 622);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ 6363);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _componentes_modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/modal-error/modal-error.component */ 4087);











let RegisterPage = class RegisterPage {
  constructor(autSvc, router, formBuilder, modalCtrl, loadingController) {
    this.autSvc = autSvc;
    this.router = router;
    this.formBuilder = formBuilder;
    this.modalCtrl = modalCtrl;
    this.loadingController = loadingController;
    this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__.User();

    this.hasError = (controlName, errorName) => {
      return !this.formRegister.controls[controlName].valid && this.formRegister.controls[controlName].hasError(errorName) && this.formRegister.controls[controlName].touched;
    };

    this.buildForm();
    this.formRegister.reset();
  }

  ngOnInit() {
    this.formRegister.reset();
  }

  submitForm() {
    if (this.formRegister.valid) {
      this.user.email = this.formRegister.get('email').value;
      this.user.password = this.formRegister.get('password').value;
      this.presentLoadingWithOptions();
      this.onRegister();
    }
  }

  ionViewWillEnter() {
    this.formRegister.reset();
  }

  onRegister() {
    var _this = this;

    return (0,_home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.autSvc.onRegister(_this.user).then(user => {
        if (user) {
          _this.loadingController.dismiss();

          console.log('Successfully created user!');

          _this.router.navigate(['/login']);
        }
      }).catch(error => {
        _this.loadingController.dismiss();

        if (error.code == 'auth/email-already-in-use') {
          _this.openModal(error);
        }

        console.log(error.code);
      });
    })();
  }

  buildForm() {
    this.formRegister = this.formBuilder.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(6)]
      })
    });
  }

  openModal(user) {
    var _this2 = this;

    return (0,_home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _componentes_modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_5__.ModalErrorComponent,
        componentProps: {
          error: 'Error al crear el usuario'
        }
      });
      return yield modal.present();
    })();
  }

  presentLoadingWithOptions() {
    var _this3 = this;

    return (0,_home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingController.create({
        //spinner: null,
        //duration: 5000,
        message: 'Iniciando sesión...',
        translucent: true,
        //cssClass: 'custom-class custom-loading',
        backdropDismiss: true
      });
      yield loading.present();
      const {
        role,
        data
      } = yield loading.onDidDismiss();
      console.log('Loading dismissed with role:', role);
    })();
  }

};

RegisterPage.ctorParameters = () => [{
  type: _service_autservice_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}];

RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-register',
  template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterPage);


/***/ }),

/***/ 6219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>register</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"formRegister\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item>\n            <ion-label>\n                Email\n            </ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n            <ion-text color=\"danger\" *ngIf=\"hasError('email','email')\">\n                <h5>\n                    Debe ser un correo valido\n                </h5>\n            </ion-text>\n            <ion-text color=\"danger\" *ngIf=\"hasError('email','required')\">\n                <h5>Campo requerido</h5>\n            </ion-text>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                Password\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n            <ion-text color=\"danger\" *ngIf=\"!formRegister.valid && formRegister.controls['password'].touched && !hasError('password','required')\">\n                <h5>\n                    Maximo 6 caracteres\n                </h5>\n            </ion-text>\n            <ion-text color=\"danger\" *ngIf=\"hasError('password','required')\">\n                <h5>\n                    Campo requerido\n                </h5>\n            </ion-text>\n        </ion-item>\n        <ion-item-divider>\n            <ion-button size=\"larger\" [disabled]=\"!formRegister.valid\" type=\"submit\">Registrar</ion-button>\n        </ion-item-divider>\n    </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map
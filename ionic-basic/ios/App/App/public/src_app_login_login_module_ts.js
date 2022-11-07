"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 795:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3721);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 7641:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 795);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3721);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3721:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ 6363);
/* harmony import */ var _componentes_modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/modal-error/modal-error.component */ 4087);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _service_autservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/autservice.service */ 622);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);











let LoginPage = class LoginPage {
  constructor(router, modalCtrl, autSvc, formBuilder, loadingController) {
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.autSvc = autSvc;
    this.formBuilder = formBuilder;
    this.loadingController = loadingController;
    this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__.User();

    this.hasError = (controlName, errorName) => {
      return !this.ionicForm.controls[controlName].valid && this.ionicForm.controls[controlName].hasError(errorName) && this.ionicForm.controls[controlName].touched;
    };
  }

  ngOnInit() {
    this.buildForm();
  }

  notZero(control) {
    if (control.value && control.value.monto <= 0) {
      return {
        'notZero': true
      };
    }

    return null;
  }

  onLogin() {
    var _this = this;

    return (0,_home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.autSvc.onLogin(_this.user).then(user => {
        if (user != null && user.code == undefined) {
          console.log('Successfully logged in!');

          _this.loadingController.dismiss();

          _this.router.navigate(['main/presupuesto']);
        } else {
          _this.loadingController.dismiss();

          if (user.code) {
            if (user.code == 'auth/wrong-password' || user.code == 'auth/invalid-email' || user.code == 'auth/argument-error') {
              _this.openModal(user);
            }
          }
        }
      }).catch(error => {
        _this.loadingController.dismiss();

        _this.openModal(error);
      });
    })();
  }

  submitForm() {
    if (this.ionicForm.valid) {
      this.user.email = this.ionicForm.get('email').value;
      this.user.password = this.ionicForm.get('password').value;
      this.presentLoadingWithOptions();
      this.onLogin();
    }
  }

  ionViewWillEnter() {
    this.ionicForm.reset();
  }

  openModal(user) {
    var _this2 = this;

    return (0,_home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _componentes_modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_4__.ModalErrorComponent,
        componentProps: {
          error: 'Ingres password y/o contraseña'
        }
      });
      return yield modal.present();
    })();
  }

  buildForm() {
    this.ionicForm = this.formBuilder.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(6)]
      })
    });
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

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _service_autservice_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Login</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item>\n            <ion-label>\n                Email\n            </ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n            <ion-text color=\"danger\" *ngIf=\"hasError('email','email')\">\n                <h5>\n                    Debe ser un correo valido\n                </h5>\n            </ion-text>\n            <ion-text color=\"danger\" *ngIf=\"hasError('email','required')\">\n                <h5>Campo requerido</h5>\n            </ion-text>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                Password\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n            <ion-text color=\"danger\" *ngIf=\"!ionicForm.valid && ionicForm.controls['password'].touched && !hasError('password','required')\">\n                <h5>\n                    Maximo 6 caracteres\n                </h5>\n            </ion-text>\n            <ion-text color=\"danger\" *ngIf=\"hasError('password','required')\">\n                <h5>\n                    Campo requerido\n                </h5>\n            </ion-text>\n        </ion-item>\n        <ion-item-divider>\n            <ion-button size=\"larger\" [disabled]=\"!ionicForm.valid\" type=\"submit\">Login</ion-button>\n        </ion-item-divider>\n    </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map
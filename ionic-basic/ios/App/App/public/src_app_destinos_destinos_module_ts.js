"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_destinos_destinos_module_ts"],{

/***/ 958:
/*!*****************************************************!*\
  !*** ./src/app/destinos/destinos-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinosPageRoutingModule": () => (/* binding */ DestinosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _destinos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destinos.page */ 5859);




const routes = [
    {
        path: '',
        component: _destinos_page__WEBPACK_IMPORTED_MODULE_0__.DestinosPage
    }
];
let DestinosPageRoutingModule = class DestinosPageRoutingModule {
};
DestinosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DestinosPageRoutingModule);



/***/ }),

/***/ 5606:
/*!*********************************************!*\
  !*** ./src/app/destinos/destinos.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinosPageModule": () => (/* binding */ DestinosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _destinos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destinos-routing.module */ 958);
/* harmony import */ var _destinos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destinos.page */ 5859);







let DestinosPageModule = class DestinosPageModule {
};
DestinosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _destinos_routing_module__WEBPACK_IMPORTED_MODULE_0__.DestinosPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_destinos_page__WEBPACK_IMPORTED_MODULE_1__.DestinosPage]
    })
], DestinosPageModule);



/***/ }),

/***/ 5859:
/*!*******************************************!*\
  !*** ./src/app/destinos/destinos.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinosPage": () => (/* binding */ DestinosPage)
/* harmony export */ });
/* harmony import */ var _home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _destinos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destinos.page.html?ngResource */ 2422);
/* harmony import */ var _destinos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destinos.page.scss?ngResource */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _models_lugar_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/lugar.model */ 1006);
/* harmony import */ var _service_autservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/autservice.service */ 622);
/* harmony import */ var _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../googlemaps/googlemaps.component */ 7658);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);










let DestinosPage = class DestinosPage {
  constructor(authService, formBuilder, modalController) {
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.modalController = modalController;
    this.lugar = new _models_lugar_model__WEBPACK_IMPORTED_MODULE_3__.Lugar();
    this.destinos = [];
    this.estado = "Alta destino";
    this.editando = false;

    this.hasError = (controlName, errorName) => {
      return !this.ionicForm.controls[controlName].valid && this.ionicForm.controls[controlName].hasError(errorName) && this.ionicForm.controls[controlName].touched;
    };
  }

  ngOnInit() {
    this.buildForm();
    this.getPosition(); //this.authService.getLugares(this.destinos);
  } // cada que se vuelve a entrar a la pagina ó componente de pagina
  //https://ionicframework.com/docs/angular/lifecycle


  ionViewWillEnter() {
    this.authService.getLugares(this.destinos);
  }

  altaLugar() {
    this.authService.altaLugar(this.lugar);
    this.authService.getLugares(this.destinos);
    this.ionicForm.reset();
  }

  submitForm() {
    if (this.ionicForm.valid) {
      this.lugar.latitud = this.latitud;
      this.lugar.longitud = this.longitud;

      if (!this.editando) {
        this.lugar.nombre = this.ionicForm.get('nombre').value;
        this.authService.altaLugar(this.lugar).then(e => {
          this.ionicForm.reset();
          this.authService.getLugares(this.destinos);
        }).catch(e => {
          console.error(e);
        });
      } else {
        this.lugar.nombre = this.ionicForm.get('nombre').value;
        this.authService.updateLugares(this.lugar.id, this.lugar).then(e => {
          this.editando = false;
          this.estado = "Alta destino";
          this.lugar = new _models_lugar_model__WEBPACK_IMPORTED_MODULE_3__.Lugar();
          this.ionicForm.reset();
          this.authService.getLugares(this.destinos);
        }).catch(e => {
          console.error(e);
        });
      }
    }
  }

  buildForm() {
    this.ionicForm = this.formBuilder.group({
      nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      })
    });
  }

  editarLugar(id, lugar) {
    this.editando = true;
    this.lugar = lugar;
    this.estado = "Editar el lugar";
    this.ionicForm.get('nombre').setValue(lugar.nombre);
  }

  eliminarLugar(id) {
    this.estado = "Alta destino";
    this.editando = false;
    this.ionicForm.reset();
    this.authService.deleteLugar(id).then(response => {
      this.authService.getLugares(this.destinos);
    }).catch(error => {});
  }

  cancelarEdicion() {
    this.estado = "Alta destino";
    this.editando = false;
    this.ionicForm.reset();
    this.lugar = new _models_lugar_model__WEBPACK_IMPORTED_MODULE_3__.Lugar();
  }

  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        this.latitud = resp.coords.latitude;
        this.longitud = resp.coords.longitude;
      }, err => {
        if (err.code === 1) {
          alert('Favor de activar la geolocalización en tu navegador y recargar la pantalla.');
        }

        this.latitud = null;
        this.longitud = null;
      }, {
        timeout: 5000,
        enableHighAccuracy: true
      });
    });
  }

  addDirection() {
    var _this = this;

    return (0,_home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let positionInput = {
        lat: -2.898116,
        lng: -78.99958149999999
      };

      if (_this.latitud !== null) {
        positionInput.lat = _this.latitud;
        positionInput.lng = _this.longitud;
      }

      const modalAdd = yield _this.modalController.create({
        component: _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_5__.GooglemapsComponent,
        mode: 'ios',
        swipeToClose: true,
        componentProps: {
          position: positionInput
        }
      });
      yield modalAdd.present();
      const {
        data
      } = yield modalAdd.onWillDismiss();

      if (data) {
        console.log('data->', data); //this.cli

        _this.longitud = data.pos.lng;
        _this.latitud = data.pos.lat;
        console.log('datos de ubiciacion actualizados, latitud: ' + _this.latitud + ' \nlongitud:' + _this.longitud);
      }
    })();
  }

};

DestinosPage.ctorParameters = () => [{
  type: _service_autservice_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}];

DestinosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-destinos',
  template: _destinos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_destinos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DestinosPage);


/***/ }),

/***/ 7658:
/*!****************************************************!*\
  !*** ./src/app/googlemaps/googlemaps.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglemapsComponent": () => (/* binding */ GooglemapsComponent)
/* harmony export */ });
/* harmony import */ var _home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _googlemaps_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlemaps.component.html?ngResource */ 6880);
/* harmony import */ var _googlemaps_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./googlemaps.component.scss?ngResource */ 9618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _googlemaps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./googlemaps.service */ 9989);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);









let GooglemapsComponent = class GooglemapsComponent {
  constructor(renderer, document, googleMapsService, modalController) {
    this.renderer = renderer;
    this.document = document;
    this.googleMapsService = googleMapsService;
    this.modalController = modalController;
    this.position = {
      lat: -2.889,
      lng: -78.899
    };
    this.label = {
      titulo: 'Ubicación',
      subtitulo: 'Mi ubicación de envio'
    };
  }

  ngOnInit() {
    this.init();
  }

  init() {
    var _this = this;

    return (0,_home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.googleMapsService.init(_this.renderer, _this.document).then(() => {
        _this.initMap();
      }).catch(error => {
        console.error(error);
      });
    })();
  }

  initMap() {
    const position = this.position;
    let latLng = new google.maps.LatLng(position.lat, position.lng);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      clickableIcons: false
    };
    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: true
    });
    this.clickHandEvent();
    this.infowindow = new google.maps.InfoWindow();
    this.addMarker(position);
    this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);
  }

  clickHandEvent() {
    this.map.addListener('click', event => {
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      this.addMarker(position);
    });
  }

  addMarker(position) {
    let latLng = new google.maps.LatLng(position.lat, position.lng);
    this.marker.setPosition(latLng);
    this.map.panTo(position);
    this.positionSet = position;
  }

  setInfoWindow(marker, titulo, subtitulo) {
    const contentString = '<div id="contentInsideMap">' + '<div>' + '</div>' + '<p style="font-weight: bold; margin-bottom:5px;">' + '<div id="bodyContent">' + '<p class="normal m-0">' + subtitulo + '</p>' + '</div>' + '</div>';
    this.infowindow.setContent(contentString);
    this.infowindow.open(this.map, marker);
  }

  mylocation() {
    var _this2 = this;

    return (0,_home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition().then(res => {
        console.log('mulocation() -> get', res);
        const position = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };

        _this2.addMarker(position);
      });
    })();
  }

  aceptar() {
    console.log('click aceptar ->', this.positionSet);
    this.modalController.dismiss({
      pos: this.positionSet
    });
  }

};

GooglemapsComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
    args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
  }]
}, {
  type: _googlemaps_service__WEBPACK_IMPORTED_MODULE_4__.GooglemapsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}];

GooglemapsComponent.propDecorators = {
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  divMap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['map']
  }]
};
GooglemapsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-googlemaps',
  template: _googlemaps_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_googlemaps_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GooglemapsComponent);


/***/ }),

/***/ 9989:
/*!**************************************************!*\
  !*** ./src/app/googlemaps/googlemaps.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglemapsService": () => (/* binding */ GooglemapsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);



let GooglemapsService = class GooglemapsService {
    constructor() {
        this.apikey = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiKeyMaps;
        this.mapsloaded = false;
    }
    init(renderer, document) {
        return new Promise((resolve, reject) => {
            if (this.mapsloaded) {
                console.log('google is preview loaded');
                resolve(true);
                return;
            }
            const script = renderer.createElement('script');
            script.id = "googleMaps";
            window['mapInit'] = () => {
                this.mapsloaded = true;
                if (google) {
                    console.log('google is loaded');
                }
                else {
                    console.log('google is not defined');
                }
                resolve(true);
                return;
            };
            if (this.apikey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apikey + '&callback=mapInit';
            }
            else {
                script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
            }
            renderer.appendChild(document.body, script);
        });
    }
};
GooglemapsService.ctorParameters = () => [];
GooglemapsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GooglemapsService);



/***/ }),

/***/ 591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8391)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 6293:
/*!********************************************************!*\
  !*** ./src/app/destinos/destinos.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXN0aW5vcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9618:
/*!*****************************************************************!*\
  !*** ./src/app/googlemaps/googlemaps.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".map {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.miubicacion {\n  position: fixed;\n  bottom: 0px;\n  background: #ffd740;\n}\n\n.aceptar {\n  position: fixed;\n  top: 50px;\n  right: 5px;\n  background: #80d894;\n}\n\n.search {\n  position: fixed;\n  top: 45px;\n  left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZW1hcHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9BcGxpY2FjaW9uZXMlMjBtb3ZpbGVzJTIwSU9OSUNTLzMzLUFHTy1ESUMtMjIvaW9uaWMtYmFzaWMvc3JjL2FwcC9nb29nbGVtYXBzL2dvb2dsZW1hcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJnb29nbGVtYXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWl1YmljYWNpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZkNzQwO1xufVxuXG4uYWNlcHRhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTBweDtcbiAgICByaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6ICM4MGQ4OTQ7XG59XG5cbi5zZWFyY2gge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQ1cHg7XG4gICAgbGVmdDogMHB4O1xufSIsIi5tYXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1pdWJpY2FjaW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZDc0MDtcbn1cblxuLmFjZXB0YXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTBweDtcbiAgcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzgwZDg5NDtcbn1cblxuLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0NXB4O1xuICBsZWZ0OiAwcHg7XG59Il19 */";

/***/ }),

/***/ 2422:
/*!********************************************************!*\
  !*** ./src/app/destinos/destinos.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Destinos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item>\n            <ion-label>\n                Destino\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"nombre\"></ion-input>\n            <ion-text color=\"danger\" *ngIf=\"hasError('nombre','required')\">\n                <h5>Campo requerido</h5>\n            </ion-text>\n        </ion-item>\n        <ion-item (click)=\"addDirection()\">\n            <ion-label class=\"normal\">Ubicación</ion-label>\n            <ion-buttons>\n                <ion-button>\n                    <ion-icon slot=\"icon-only\" color=\"danger\" name=\"location\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-item>\n        <ion-item-divider>\n            <ion-button type=\"submit\" type=\"submit\" [disabled]=\"!(ionicForm.valid)\" color=\"primary\" size=\"larger\">{{estado}}</ion-button>\n            <ion-button *ngIf=\"editando\" type=\"button\" color=\"danger\" size=\"larger\" (click)=\"cancelarEdicion()\">Cancelar</ion-button>\n        </ion-item-divider>\n    </form>\n    <ion-item-divider></ion-item-divider>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-text>\n                    Destino\n                </ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-text>\n                    Ubicacion\n                </ion-text>\n            </ion-col>\n            <ion-col>\n\n            </ion-col>\n            <ion-col>\n\n            </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let lugar of destinos\">\n            <ion-col>\n                <ion-text>\n                    {{lugar.nombre}}\n                </ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-text *ngIf=\"lugar.latitud\">\n                    latitud: {{lugar.latitud}} ,longitud{{lugar.longitud}}\n                </ion-text>\n                <ion-text *ngIf=\"!lugar.latitud\">\n                </ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-button color=\"primary\" (click)=\"editarLugar(lugar.id, lugar)\">editar</ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button color=\"danger\" (click)=\"eliminarLugar(lugar.id)\">borrar</ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ }),

/***/ 6880:
/*!*****************************************************************!*\
  !*** ./src/app/googlemaps/googlemaps.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"modalController.dismiss()\">\n                <ion-icon name=\"arrow-back\" color=\"dark\"></ion-icon>\n            </ion-button>\n            <ion-title class=\"normal ion-text-wrap\">\n                Ubica el selector en la ubicación deseada\n            </ion-title>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div #map class=\"map\"></div>\n    <ion-chip class=\"miubicacion\" (click)=\"mylocation()\">\n        <ion-label class=\"normal\">Mi ubicación actual</ion-label>\n        <ion-icon name=\"locate\"></ion-icon>\n    </ion-chip>\n    <ion-chip class=\"aceptar\" (click)=\"aceptar()\">\n        <ion-label class=\"normal\">Aceptar</ion-label>\n        <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-chip>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_destinos_destinos_module_ts.js.map
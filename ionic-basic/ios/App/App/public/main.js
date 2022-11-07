(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _service_aut_guard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/aut-guard.guard */ 3434);




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 2711)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'main',
        children: [
            {
                path: 'presupuesto',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_presupuesto_presupuesto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./presupuesto/presupuesto.module */ 4980)).then(m => m.PresupuestoPageModule)
            },
            {
                path: 'alumnos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_alumnos_alumnos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./alumnos/alumnos.module */ 8765)).then(m => m.AlumnosPageModule)
            },
            {
                path: 'inicio',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_inicio_inicio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inicio/inicio.module */ 193)).then(m => m.InicioPageModule)
            },
            {
                path: 'receptor',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_receptor_receptor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./receptor/receptor.module */ 7175)).then(m => m.ReceptorPageModule)
            },
            {
                path: 'detalle-receta',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_detalle-receta_detalle-receta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./detalle-receta/detalle-receta.module */ 1879)).then(m => m.DetalleRecetaPageModule)
            },
            {
                path: 'receta',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_receta_receta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./receta/receta.module */ 1313)).then(m => m.RecetaPageModule)
            },
            {
                path: 'tabs',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 6432)).then(m => m.TabsPageModule)
            },
            {
                path: 'destinos',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("src_app_destinos_destinos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./destinos/destinos.module */ 5606)).then(m => m.DestinosPageModule)
            },
            {
                path: 'destinos-api',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_destinos-api_destinos-api_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./destinos-api/destinos-api.module */ 6154)).then(m => m.DestinosFirestorePageModule)
            },
            {
                path: 'admin',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 1848)).then(m => m.AdminPageModule)
            },
            {
                path: 'galeria',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./galeria/galeria.module */ 2459)).then(m => m.GaleriaPageModule)
            }
        ],
        canActivate: [_service_aut_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AutGuardGuard]
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 7641)).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 2474)).then(m => m.RegisterPageModule)
    },
    {
        path: 'segment-button',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segment-button_segment-button_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segment-button/segment-button.module */ 7236)).then(m => m.SegmentButtonPageModule)
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _componentes_componentes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/componentes.module */ 3171);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 809);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_0__.ComponentesModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3171:
/*!***************************************************!*\
  !*** ./src/app/componentes/componentes.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentesModule": () => (/* binding */ ComponentesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _float_menu_float_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./float-menu/float-menu.component */ 1156);




let ComponentesModule = class ComponentesModule {
};
ComponentesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_float_menu_float_menu_component__WEBPACK_IMPORTED_MODULE_0__.FloatMenuComponent],
        exports: [_float_menu_float_menu_component__WEBPACK_IMPORTED_MODULE_0__.FloatMenuComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]
    })
], ComponentesModule);



/***/ }),

/***/ 1156:
/*!****************************************************************!*\
  !*** ./src/app/componentes/float-menu/float-menu.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatMenuComponent": () => (/* binding */ FloatMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _float_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./float-menu.component.html?ngResource */ 124);
/* harmony import */ var _float_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./float-menu.component.scss?ngResource */ 6918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var src_app_service_autservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/autservice.service */ 622);
/* harmony import */ var src_app_service_menu_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/menu-service.service */ 7984);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ 3628);








let FloatMenuComponent = class FloatMenuComponent {
    constructor(autService, menuService, router) {
        this.autService = autService;
        this.menuService = menuService;
        this.router = router;
        this.titleMenu = 'home';
        this.isLoged = false;
        this.datosMenu = [
            { nombre: 'segment-button', enlace: '/segment-button', icono: 'code-slash-outline' },
            { nombre: 'agregar usuario', enlace: '/register', icono: 'person-add-outline' },
            { nombre: 'login', enlace: '/login',
                icono: 'log-in-outline' }
        ];
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(this.autService.getStateAuth(), user => {
            if (user != null && user != undefined) {
                this.isLoged = true;
            }
        });
        this.subscription = this.menuService.$getTitleMenu.subscribe(data => {
            console.log(data);
            this.titleMenu = data;
        });
    }
    ngOnDestroy() {
        if (this.subscription != null || this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }
    ngOnInit() { }
    navegar(link, titleMenu) {
        this.titleMenu = titleMenu;
        this.router.navigate([link]);
    }
    onMenuOpen() {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(this.autService.getStateAuth(), user => {
            if (user != null && user != undefined) {
                this.datosMenu = [
                    { nombre: 'Alumnos', enlace: 'main/alumnos', icono: 'school-outline' },
                    { nombre: 'Receteas', enlace: 'main/receta', icono: 'restaurant-outline' },
                    { nombre: 'inicio', enlace: 'main/inicio', icono: 'navigate-outline' },
                    { nombre: 'Turismo-firestore', enlace: 'main/destinos', icono: 'airplane' },
                    { nombre: 'Turismo-api', enlace: 'main/destinos-api', icono: 'airplane' },
                    { nombre: 'Tabs', enlace: 'main/tabs', icono: 'folder-outline' },
                    { nombre: 'segment-button', enlace: '/segment-button', icono: 'code-slash-outline' },
                    { nombre: 'agregar usuario', enlace: '/register', icono: 'person-add-outline' },
                    { nombre: 'logout', enlace: '/home', icono: 'log-out-outline' }
                ];
            }
            else {
                this.datosMenu = [
                    { nombre: 'segment-button', enlace: '/segment-button', icono: 'code-slash-outline' },
                    { nombre: 'agregar usuario', enlace: '/register', icono: 'person-add-outline' },
                    { nombre: 'login', enlace: '/login', icono: 'log-in-outline' }
                ];
            }
        });
    }
};
FloatMenuComponent.ctorParameters = () => [
    { type: src_app_service_autservice_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_service_menu_service_service__WEBPACK_IMPORTED_MODULE_3__.MenuServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
FloatMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-float-menu',
        template: _float_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_float_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FloatMenuComponent);



/***/ }),

/***/ 1006:
/*!***************************************!*\
  !*** ./src/app/models/lugar.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lugar": () => (/* binding */ Lugar)
/* harmony export */ });
class Lugar {
    constructor() {
        this.nombre = '';
    }
    setUbicacion(latitud, Longiutd) {
        this.ubicacion.latitud = latitud;
        this.ubicacion.longitud = Longiutd;
    }
}


/***/ }),

/***/ 3434:
/*!********************************************!*\
  !*** ./src/app/service/aut-guard.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutGuardGuard": () => (/* binding */ AutGuardGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7067);
/* harmony import */ var _autservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autservice.service */ 622);




let AutGuardGuard = class AutGuardGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isLoged) {
            return true;
        }
        else {
            console.log("Acceso denegado!");
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AutGuardGuard.ctorParameters = () => [
    { type: _autservice_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AutGuardGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AutGuardGuard);



/***/ }),

/***/ 622:
/*!***********************************************!*\
  !*** ./src/app/service/autservice.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 6369);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ 3628);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var _models_lugar_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/lugar.model */ 1006);









const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.firebaseConfig);
const dbCloudFirestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(firebaseApp);
let AuthService = class AuthService {
  constructor() {
    this.isLoged = false;
    this.db = dbCloudFirestore;
    this.auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(firebaseApp);
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(this.auth, user => {
      if (user != undefined || user != null) {
        this.isLoged = user;
      }
    });
  }

  tieneSesion() {
    return this.isLoged;
  }

  getStateAuth() {
    return this.auth;
  } //login


  onLogin(user) {
    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(this.auth, user.email, user.password);
  } //register


  onRegister(user) {
    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(this.auth, user.email, user.password);
  }

  altaLugar(lugar) {
    var _this = this;

    return (0,_home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const lugarTemp = {
        nombre: lugar.nombre,
        latitud: lugar.latitud,
        longitud: lugar.longitud
      };
      const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this.db, 'lugar'), lugarTemp);
      console.log("Documento escrito con id: " + docRef.id);
    })();
  }

  getLugares(destinos) {
    var _this2 = this;

    return (0,_home_venom_Documentos_Aplicaciones_moviles_IONICS_33_AGO_DIC_22_ionic_basic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this2.db, 'lugar')).then(querySnapshot => {
        destinos.splice(0, destinos.length);
        querySnapshot.forEach(doc => {
          let data = doc.data();
          let lugar = new _models_lugar_model__WEBPACK_IMPORTED_MODULE_5__.Lugar();
          lugar.nombre = data.nombre;
          lugar.latitud = data.latitud;
          lugar.longitud = data.longitud;
          lugar.id = doc.id;
          console.log(doc.id);
          destinos.push(lugar);
        });
      }).catch(error => {
        console.log('Ocurrio un erro en el guardardo:' + error);
      });
    })();
  }

  updateLugares(id, lugar) {
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.db, 'lugar', id);
    const lugarAux = {
      nombre: lugar.nombre,
      latitud: lugar.latitud,
      longitud: lugar.longitud
    };
    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docRef, lugarAux);
  }

  deleteLugar(id) {
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.db, 'lugar', id);
    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)(docRef);
  }

};

AuthService.ctorParameters = () => [];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 7984:
/*!*************************************************!*\
  !*** ./src/app/service/menu-service.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuServiceService": () => (/* binding */ MenuServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);



let MenuServiceService = class MenuServiceService {
    constructor() {
        this.objectSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
        this.$getTitleMenu = this.objectSource.asObservable();
    }
    setTitle(data) {
        this.objectSource.next(data);
    }
};
MenuServiceService.ctorParameters = () => [];
MenuServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MenuServiceService);



/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDlWCVIkc3lrFnOG777LmZ6AQoMgCb3GGc",
        authDomain: "ionic-lab-33.firebaseapp.com",
        projectId: "ionic-lab-33",
        storageBucket: "ionic-lab-33.appspot.com",
        messagingSenderId: "432080681584",
        appId: "1:432080681584:web:3a61cc5e7c53cdbbadd2b5",
        measurementId: "G-HX55Z8CFFD"
    },
    apiKeyMaps: "AIzaSyCNduScdIFtfovG5JBn1kr_Sz_ID-HJ1jI"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 8763);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 4766);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.log(err));
// Call the element loader after the platform has been bootstrapped
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__.defineCustomElements)(window);


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-64bc531e_js-node_modules_ionic_core_dist_esm_th-f0213e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-64bc531e_js-node_modules_ionic_core_dist_esm_th-f0213e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		8555,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		5464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		8724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		4389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6918:
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/float-menu/float-menu.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbG9hdC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-float-menu></app-float-menu>\n<ion-app>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 124:
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/float-menu/float-menu.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n    <ion-toolbar color=\"secondary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <ion-title>{{titleMenu}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-menu side=\"start\" content-id=\"main\" (ionWillOpen)=\"onMenuOpen()\">\n    <ion-content id=\"menuFloat\">\n        <ion-list>\n            <ion-menu-toggle *ngFor=\"let c of datosMenu\">\n                <ion-item (click)=\"navegar(c.enlace, c.nombre)\">\n                    <ion-icon name='{{c.icono}}'></ion-icon>\n                    <ion-label>{{ c.nombre }}</ion-label>\n                </ion-item>\n            </ion-menu-toggle>\n        </ion-list>\n    </ion-content>\n</ion-menu>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
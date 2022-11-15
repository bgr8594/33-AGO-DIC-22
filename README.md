# 33-AGO-DIC-22
Repositorio para crear sus branch y subir los commit de sus practicas de laboratorio

Despliege de aplicacion en Android
Instalacion de andorid studio y tener SDK, Emulador y version de minimo algun emulador descargado

install capacitor
npm install @capacitor/android
npm install @capacitor/ios
<<si falla>>
npm install @capacitor/android --legacy-peer-deps
npm install @capacitor/ios --legacy-peer-deps
<<si falla>>

desde raiz de aplicacion correr los siguientes comandos de capacitor
npm ru build // genera carpeta www
npx cap init // si falla eliminar archivo capacitor.ts

npx cap add android
agregar en archivo AndroidManifest.xml los siguientes permisos
<!-- Permissions -->
  <!-- Camera, Photos, input file -->
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
  <!-- Network API -->
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
  <!-- Navigator.getUserMedia -->
  <!-- Video -->
  <uses-permission android:name="android.permission.CAMERA" />

  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_GPS" />
  <uses-permission android:name="android.permission.ACCESS_ASSISTED_GPS" />
  <uses-permission android:name="android.permission.ACCESS_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />





npx cap add ios

agregar en archivo info.plist las siguientes propiedades:

    <key>NSAdvertisingAttributionReportEndpoint</key>
    <string>acceso de red</string>
    <key>CFBundleGetInfoString</key>
    <string></string>
    <key>NSHomeKitUsageDescription</key>
    <string>Acceso</string>
    <key>NSAppTransportSecurity</key>
    <dict>
        <key>NSAllowsArbitraryLoads</key>
        <true/>
    </dict>
    <key>NSPhotoLibraryUsageDescription</key>
    <string>Acceso a tu libreria</string>
    <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
    <string>Acceso a ubicacion</string>
    <key>NSLocalNetworkUsageDescription</key>
    <string>Acceso a red local</string>
    <key>NSCameraUsageDescription</key>
    <string>Requiero acceso a la camara</string>
    <key>NSPhotoLibraryAddUsageDescription</key>
    <string>Requiero acceso a tu libreria</string>
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>Acceder a tu ubicacion</string>


Despliege de aplicacion en ios
1.- instalacion de Xcode y tenerlo actualizado
2.- elegir el emulador para iphone, ipad, wacthOs  o en su caso descargar el emulador necesario
correr desde raiz de su aplicacion
3.- npx cap open ios
4.- si elige probar en su dispositivo elegir singin y asociar su cuenta
5.- En el dispositvio seguridad -->administracion de dispositivos marcar como permitida la instalacion del desarrollador desconocido
6.-Correr su aplicacion

Despliege de aplicacion en android
1.-Instalacion de Android Studio con su sdk segun la version de android y sistema operativo al que va dirigida su aplicacion
2.-descargar un emulador o en su defecto usar su dispositivo movil para pruebas y depuracion 
correr desde raiz de su aplicacion
3.-npx cap open android
4.- habilitar modo desarrollador en su android
5.- Habilitar la depuracion por usb
6.-instalar su dispositivo por usb con el android studio en ejecucion
5.- Correr su aplicacion

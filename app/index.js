//Importacion de Angularjs
const angular = require('angular');
const ngRoute = require('angular-route');
const ngDialog = require('ng-dialog');
const ngResource = require('angular-resource');
const ngSanitize = require('angular-sanitize');

//require('librerias/checks.js');

//Declaracion del Modulo Principal
angular.module("myApp", ['ngRoute','ngDialog','ngSanitize','ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/home.html',
            })
            .when('/equipos/:tipo?/:filtro?/:descripcion?', {
                templateUrl: 'view/equipos.html',
                controller: 'ctrlEquipos'
            })
            .when('/refacciones', {
                templateUrl: 'view/refacciones.html',
                controller: 'ctrlRefacciones'
            })
            .when('/contacto/:asunto?/:name?/:marca?/:modelo?', {
                templateUrl: 'view/contacto.html',
                controller: 'ctrlContactanos'
            })
            .when('/proyectos', {
                templateUrl: 'view/proyectos.html',
                controller: 'ctrlProyectosSediap'
            })

            .when('/proyectos/detalle-proyecto/:index?', {
                templateUrl: 'view/proyectos-generico.html',
                controller: 'ctrlDetalleProyecto'
            })
            .otherwise({
                redirectTo: '/'
            });
    })


    .controller('ctrlMenu', ['$scope', function ($scope) {
        $scope.objMenu = {
            menuSeleccionado: 'home',
            classfooter: 'normal-footer',
            ItemSeleccionado: function (idMenu) {
                console.log(idMenu);
                if (idMenu == 'home') {
                    $scope.objMenu.menuSeleccionado = 'home';
                    this.CambiarFooter('normal-footer');
                }
                if (idMenu == 'equipos') {
                    $scope.objMenu.menuSeleccionado = 'equipos';
                }
                if (idMenu == 'proyectos') {
                    $scope.objMenu.menuSeleccionado = 'proyectos';
                }
                if (idMenu == 'refacciones') {
                    $scope.objMenu.menuSeleccionado = 'refacciones';
                }
                if (idMenu == 'quienes&somos') {
                    $scope.objMenu.menuSeleccionado = 'quienes&somos';
                }
                if (idMenu == 'contacto') {
                    $scope.objMenu.menuSeleccionado = 'contacto';
                }
            },
            CambiarFooter: function (tipo) {
                $scope.objMenu.classfooter = tipo;
            }
        };
    }])


//'checklist-model', 'ngService','ngSanitize', 'cCatalogos', 'filtros', 'directivas', 'ngResource','modProyectos' ,'mContactanos'
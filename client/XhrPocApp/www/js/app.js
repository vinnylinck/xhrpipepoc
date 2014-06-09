var app = angular.module('XhrApp', []);

app.controller('xhrController', ['$http', '$scope', function ($http, $scope) {
    'use strict';

    var numReq = 30,
        uri = 'http://localhost:4567/';


    $scope.xhrNoDelay = function () {

        for (var i=0; i<numReq; i++) {
            
            var ref = i + '_' +Date.now();
            console.log('[XHR - NO DELAY]:: REQUEST #', ref);

            
            $http.get(uri + '?stamp=' + ref.toString()).success(function (result) {
                console.log('[XHR - NO DELAY]:: DONE #', result.reference);
            }).error(function () {
                console.log('[XHR - NO DELAY]:: FAILED #', arguments);
            });
        }

    };

    $scope.xhrWithDelay = function () {

        for (var i=0; i<numReq; i++) {
            
            var ref = i + '_' +Date.now();
            console.log('[XHR - WH DELAY]:: REQUEST #', ref);

            
            $http.get(uri + 'delay/?stamp=' + ref.toString()).success(function (result) {
                console.log('[XHR - WH DELAY]:: DONE #', result.reference);
            }).error(function () {
                console.log('[XHR - WH DELAY]:: FAILED #', arguments);
            });
        }
    };

}]);
var app = angular.module('XhrApp', []);

app.controller('xhrController', ['$http', '$scope', function ($http, $scope) {
    'use strict';

    var numReq = 100,
        uri = 'http://localhost:4567/',
        tot;


    $scope.xhrNoDelay = function () {
        tot = numReq;
        console.log('COMECOU: ', Date.now());

        for (var i=0; i<numReq; i++) {
            
            var ref = i + '_' +Date.now();
            console.log('[XHR - NO DELAY]:: REQUEST #', ref);

            
            $http.get(uri + '?stamp=' + ref.toString()).success(function (result) {
                console.log('[XHR - NO DELAY]:: DONE #', result.reference);

                tot--;

                if (tot === 0) {
                    console.log('TERMINOU: ', Date.now());
                }

            }).error(function () {
                console.log('[XHR - NO DELAY]:: FAILED #', arguments);
            });
        }

    };

    $scope.xhrWithDelay = function () {
        tot = numReq;
        console.log('COMECOU: ', Date.now());

        for (var i=0; i<numReq; i++) {
            
            var ref = i + '_' +Date.now();
            console.log('[XHR - WH DELAY]:: REQUEST #', ref);

            
            $http.get(uri + 'delay/?stamp=' + ref.toString()).success(function (result) {
                console.log('[XHR - WH DELAY]:: DONE #', result.reference);

                tot--;

                if (tot === 0) {
                    console.log('TERMINOU: ', Date.now());
                }
            }).error(function () {
                console.log('[XHR - WH DELAY]:: FAILED #', arguments);
            });
        }
    };

    $scope.nativeNoDelay = function () {
        tot = numReq;
        console.log('COMECOU: ', Date.now());

        for (var i = 0; i < numReq; i++) {

            var ref = i + '_' + Date.now(),
                opt = {
                    type: "GET",
                    url: uri + '?stamp=' + ref.toString()
                };

            console.log('[NTV - NO DELAY]:: REQUEST #', ref);


            WinJS.xhr(opt).done(function (chunk) {
                var result = JSON.parse(chunk.response);
                console.log('[NTV - NO DELAY]:: DONE #', result.reference);

                tot--;

                if (tot === 0) {
                    console.log('TERMINOU: ', Date.now());
                }
            });
        }
    };

    $scope.nativeWithDelay = function () {
        tot = numReq;
        console.log('COMECOU: ', Date.now());

        for (var i = 0; i < numReq; i++) {

            var ref = i + '_' + Date.now(),
                opt = {
                    type: "GET",
                    url: uri + 'delay/?stamp=' + ref.toString()
                };

            console.log('[NTV - WH DELAY]:: REQUEST #', ref);


            WinJS.xhr(opt).done(function (chunk) {
                var result = JSON.parse(chunk.response);
                console.log('[NTV - WH DELAY]:: DONE #', result.reference);

                tot--;

                if (tot === 0) {
                    console.log('TERMINOU: ', Date.now());
                }
            });
        }
    };

}]);
'use strict';

angular.module('sleepyti.meApp')
    .controller('MainCtrl', function($scope) {
        $scope.hours = _.range(1, 13);
        $scope.minutes = _.range(1, 61);
        $scope.amPm = ['AM', 'PM'];

        $scope.wakeup = {
            hour: 1,
            minute: 1,
            am: 'AM'
        };
    });

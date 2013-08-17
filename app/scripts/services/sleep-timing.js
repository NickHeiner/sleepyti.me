angular.module('sleepyti.meApp')
    .constant('DEFAULT_SLEEP_TIME_MINS', 14)
    .constant('SLEEP_CYCLE_LENGTH', 90)
    .constant('TIMES_COUNT', 6)
    .factory('offsetFromWakeup', function() {
        return function(wakeupTime) {

        }
    })
    .factory('offsetFromSleep', function() {
        return function(sleepTime) {

        }
    });
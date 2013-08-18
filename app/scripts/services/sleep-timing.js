'use strict';

angular.module('sleepyti.meApp')
    .constant('DEFAULT_SLEEP_TIME_MINS', 14)
    .constant('SLEEP_CYCLE_LENGTH', 90)
    .constant('TIMES_COUNT', 4)
    .constant('SLEEP_OFFSET_COEFFICIENTS', [1, 4, 5, 6])
    .constant('WAKE_OFFSET_COEFFICIENTS', [6, 5, 4, 3])
    .factory('offset', function(DEFAULT_SLEEP_TIME_MINS, TIMES_COUNT, SLEEP_CYCLE_LENGTH) {
        return function(origTime, isAdd, coefficients) {

            var momentFn = isAdd ? 'add' : 'subtract',
                withFallAsleepOffset = moment(origTime)[momentFn]('minutes', DEFAULT_SLEEP_TIME_MINS);

            return _.range(TIMES_COUNT).map(function(index) {
                return moment(withFallAsleepOffset)[momentFn]('minutes', coefficients[index] * SLEEP_CYCLE_LENGTH);
            });

        };
    })
    .factory('offsetFromWakeup', function(offset, WAKE_OFFSET_COEFFICIENTS) {
        return function(wakeupTime) {
            return offset(wakeupTime, false, WAKE_OFFSET_COEFFICIENTS);
        };
    })
    .factory('offsetFromSleep', function(offset, SLEEP_OFFSET_COEFFICIENTS) {
        return function(sleepTime) {
            return offset(sleepTime, false, SLEEP_OFFSET_COEFFICIENTS);
        };
    });
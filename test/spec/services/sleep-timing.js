'use strict';

var expect = chai.expect;

describe('sleep-timing', function () {

    // load the controller's module
    beforeEach(module('sleepyti.meApp'));

    var offsetFromWakeup,
        offsetFromSleep,
        SLEEP_CYCLE_LENGTH,
        DEFAULT_SLEEP_TIME_MINS;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (
        _offsetFromWakeup_,
        _offsetFromSleep_,
        _DEFAULT_SLEEP_TIME_MINS_,
        _SLEEP_CYCLE_LENGTH_) {

            offsetFromWakeup = _offsetFromWakeup_;
            offsetFromSleep = _offsetFromSleep_;
            DEFAULT_SLEEP_TIME_MINS = _DEFAULT_SLEEP_TIME_MINS_;
            SLEEP_CYCLE_LENGTH = _SLEEP_CYCLE_LENGTH_;
    }));

    function createMoment(hour, minute) {
        return moment([2012, 1, 1, hour, minute]);
    }

    it('should generate times to wake up given a time to sleep', function () {
        expect(offsetFromSleep(createMoment(0, 30))).to.eql([
            createMoment(23, 17),
            createMoment(0, 47),
            createMoment(2, 17),
            createMoment(3, 47),
            createMoment(5, 17),
            createMoment(6, 47),
        ])
    });

    it('should generate times to sleep given a time to wake up', function () {
        expect(offsetFromSleep(createMoment(10, 0))).to.eql([
            createMoment(1, 0),
            createMoment(2, 30),
            createMoment(4, 17),
            createMoment(5, 30),
        ])
    });
});

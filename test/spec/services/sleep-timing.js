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

        var actual = offsetFromSleep(createMoment(0, 30));
        var expected = [
            createMoment(2, 14),
            createMoment(6, 44),
            createMoment(8, 14),
            createMoment(9, 44),
        ];

        expect(actual).to.have.length(expected.length);

        _.forEach(expected, function(expectedTime, index) {
           expect(expectedTime.hour()).to.equal(actual[index].hour());
           expect(expectedTime.minute()).to.equal(actual[index].minute());
        });
    });

    it('should generate times to sleep given a time to wake up', function () {
        var actual = offsetFromWakeup(createMoment(9, 15));
        var expected = [
            createMoment(0, 1),
            createMoment(1, 31),
            createMoment(3, 1),
            createMoment(4, 31)
        ];

        expect(actual).to.have.length(expected.length);

        _.forEach(expected, function(expectedTime, index) {
            expect(expectedTime.hour()).to.equal(actual[index].hour());
            expect(expectedTime.minute()).to.equal(actual[index].minute());
        });
    });
});

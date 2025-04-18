const fs = require('fs');
const path = require('path');


var data = [{
    "date": new Date("2021-03-16T12:00:00.000Z"),
    "firstDoseNumber": 1707798,
    "fullDoseNumber": 1048574,
    "fullDosePercentage": 9.9,
    "firstDosePercentage": 16.1,
    "boosterNumber": undefined,
    "boosterPercentage": null
    }, {
    "date": new Date("2021-03-17T12:00:00.000Z"),
        "firstDoseNumber": 1710417,
        "fullDoseNumber": 1050574,
        "fullDosePercentage": 9.9,
        "firstDosePercentage": 16.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-18T12:00:00.000Z"),
        "firstDoseNumber": 1774120,
        "fullDoseNumber": 1082385,
        "fullDosePercentage": 10.2,
        "firstDosePercentage": 16.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-19T12:00:00.000Z"),
        "firstDoseNumber": 1777288,
        "fullDoseNumber": 1084493,
        "fullDosePercentage": 10.2,
        "firstDosePercentage": 16.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-20T12:00:00.000Z"),
        "firstDoseNumber": 1920080,
        "fullDoseNumber": 1138530,
        "fullDosePercentage": 10.7,
        "firstDosePercentage": 18.099999999999998,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-21T12:00:00.000Z"),
        "firstDoseNumber": 1999241,
        "fullDoseNumber": 1155439,
        "fullDosePercentage": 10.9,
        "firstDosePercentage": 18.8,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-22T12:00:00.000Z"),
        "firstDoseNumber": 2058969,
        "fullDoseNumber": 1171886,
        "fullDosePercentage": 11,
        "firstDosePercentage": 19.400000000000002,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-23T12:00:00.000Z"),
        "firstDoseNumber": 2059451,
        "fullDoseNumber": 1172125,
        "fullDosePercentage": 11,
        "firstDosePercentage": 19.400000000000002,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-24T12:00:00.000Z"),
        "firstDoseNumber": 2121979,
        "fullDoseNumber": 1191691,
        "fullDosePercentage": 11.200000000000001,
        "firstDosePercentage": 20,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-25T12:00:00.000Z"),
        "firstDoseNumber": 2179249,
        "fullDoseNumber": 1208667,
        "fullDosePercentage": 11.4,
        "firstDosePercentage": 20.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-26T12:00:00.000Z"),
        "firstDoseNumber": 2256114,
        "fullDoseNumber": 1229095,
        "fullDosePercentage": 11.600000000000001,
        "firstDosePercentage": 21.2,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-27T12:00:00.000Z"),
        "firstDoseNumber": 2326415,
        "fullDoseNumber": 1250189,
        "fullDosePercentage": 11.799999999999999,
        "firstDosePercentage": 21.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-28T12:00:00.000Z"),
        "firstDoseNumber": 2401381,
        "fullDoseNumber": 1267677,
        "fullDosePercentage": 11.899999999999999,
        "firstDosePercentage": 22.6,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-29T12:00:00.000Z"),
        "firstDoseNumber": 2447419,
        "fullDoseNumber": 1275068,
        "fullDosePercentage": 12,
        "firstDosePercentage": 23.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-30T12:00:00.000Z"),
        "firstDoseNumber": 2465539,
        "fullDoseNumber": 1280161,
        "fullDosePercentage": 12.1,
        "firstDosePercentage": 23.200000000000003,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-03-31T12:00:00.000Z"),
        "firstDoseNumber": 2515040,
        "fullDoseNumber": 1301323,
        "fullDosePercentage": 12.3,
        "firstDosePercentage": 23.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-01T12:00:00.000Z"),
        "firstDoseNumber": 2584711,
        "fullDoseNumber": 1327557,
        "fullDosePercentage": 12.5,
        "firstDosePercentage": 24.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-02T12:00:00.000Z"),
        "firstDoseNumber": 2659950,
        "fullDoseNumber": 1359623,
        "fullDosePercentage": 12.8,
        "firstDosePercentage": 25.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-03T12:00:00.000Z"),
        "firstDoseNumber": 2726041,
        "fullDoseNumber": 1392057,
        "fullDosePercentage": 13.100000000000001,
        "firstDosePercentage": 25.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-04T12:00:00.000Z"),
        "firstDoseNumber": 2728898,
        "fullDoseNumber": 1393877,
        "fullDosePercentage": 13.100000000000001,
        "firstDosePercentage": 25.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-05T12:00:00.000Z"),
        "firstDoseNumber": 2791236,
        "fullDoseNumber": 1415768,
        "fullDosePercentage": 13.3,
        "firstDosePercentage": 26.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-06T12:00:00.000Z"),
        "firstDoseNumber": 2812750,
        "fullDoseNumber": 1421747,
        "fullDosePercentage": 13.4,
        "firstDosePercentage": 26.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-07T12:00:00.000Z"),
        "firstDoseNumber": 2925480,
        "fullDoseNumber": 1494480,
        "fullDosePercentage": 14.099999999999998,
        "firstDosePercentage": 27.6,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-08T12:00:00.000Z"),
        "firstDoseNumber": 2983960,
        "fullDoseNumber": 1536865,
        "fullDosePercentage": 14.499999999999998,
        "firstDosePercentage": 28.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-09T12:00:00.000Z"),
        "firstDoseNumber": 3055334,
        "fullDoseNumber": 1587661,
        "fullDosePercentage": 15,
        "firstDosePercentage": 28.799999999999997,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-10T12:00:00.000Z"),
        "firstDoseNumber": 3058311,
        "fullDoseNumber": 1591591,
        "fullDosePercentage": 15,
        "firstDosePercentage": 28.799999999999997,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-11T12:00:00.000Z"),
        "firstDoseNumber": 3060628,
        "fullDoseNumber": 1594354,
        "fullDosePercentage": 15,
        "firstDosePercentage": 28.799999999999997,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-12T12:00:00.000Z"),
        "firstDoseNumber": 3062204,
        "fullDoseNumber": 1595403,
        "fullDosePercentage": 15,
        "firstDosePercentage": 28.799999999999997,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-13T12:00:00.000Z"),
        "firstDoseNumber": 3250068,
        "fullDoseNumber": 1737965,
        "fullDosePercentage": 16.400000000000002,
        "firstDosePercentage": 30.599999999999998,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-14T12:00:00.000Z"),
        "firstDoseNumber": 3290515,
        "fullDoseNumber": 1782385,
        "fullDosePercentage": 16.8,
        "firstDosePercentage": 31,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-15T12:00:00.000Z"),
        "firstDoseNumber": 3333309,
        "fullDoseNumber": 1835536,
        "fullDosePercentage": 17.299999999999997,
        "firstDosePercentage": 31.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-16T12:00:00.000Z"),
        "firstDoseNumber": 3372331,
        "fullDoseNumber": 1899992,
        "fullDosePercentage": 17.9,
        "firstDosePercentage": 31.8,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-17T12:00:00.000Z"),
        "firstDoseNumber": 3411530,
        "fullDoseNumber": 1964775,
        "fullDosePercentage": 18.5,
        "firstDosePercentage": 32.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-18T12:00:00.000Z"),
        "firstDoseNumber": 3443914,
        "fullDoseNumber": 2025794,
        "fullDosePercentage": 19.1,
        "firstDosePercentage": 32.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-19T12:00:00.000Z"),
        "firstDoseNumber": 3471588,
        "fullDoseNumber": 2074187,
        "fullDosePercentage": 19.5,
        "firstDosePercentage": 32.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-20T12:00:00.000Z"),
        "firstDoseNumber": 3485265,
        "fullDoseNumber": 2101212,
        "fullDosePercentage": 19.8,
        "firstDosePercentage": 32.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-21T12:00:00.000Z"),
        "firstDoseNumber": 3511811,
        "fullDoseNumber": 2146103,
        "fullDosePercentage": 20.200000000000003,
        "firstDosePercentage": 33.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-22T12:00:00.000Z"),
        "firstDoseNumber": 3538315,
        "fullDoseNumber": 2202939,
        "fullDosePercentage": 20.7,
        "firstDosePercentage": 33.300000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-23T12:00:00.000Z"),
        "firstDoseNumber": 3565858,
        "fullDoseNumber": 2263940,
        "fullDosePercentage": 21.3,
        "firstDosePercentage": 33.6,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-24T12:00:00.000Z"),
        "firstDoseNumber": 3592667,
        "fullDoseNumber": 2328997,
        "fullDosePercentage": 21.9,
        "firstDosePercentage": 33.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-25T12:00:00.000Z"),
        "firstDoseNumber": 3594066,
        "fullDoseNumber": 2331518,
        "fullDosePercentage": 22,
        "firstDosePercentage": 33.900000000000006,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-26T12:00:00.000Z"),
        "firstDoseNumber": 3623541,
        "fullDoseNumber": 2388290,
        "fullDosePercentage": 22.5,
        "firstDosePercentage": 34.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-27T12:00:00.000Z"),
        "firstDoseNumber": 3639372,
        "fullDoseNumber": 2421923,
        "fullDosePercentage": 22.8,
        "firstDosePercentage": 34.300000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-28T12:00:00.000Z"),
        "firstDoseNumber": 3661495,
        "fullDoseNumber": 2470926,
        "fullDosePercentage": 23.3,
        "firstDosePercentage": 34.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-29T12:00:00.000Z"),
        "firstDoseNumber": 3684661,
        "fullDoseNumber": 2527545,
        "fullDosePercentage": 23.799999999999997,
        "firstDosePercentage": 34.699999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-04-30T12:00:00.000Z"),
        "firstDoseNumber": 3709017,
        "fullDoseNumber": 2591190,
        "fullDosePercentage": 24.4,
        "firstDosePercentage": 34.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-01T12:00:00.000Z"),
        "firstDoseNumber": 3732623,
        "fullDoseNumber": 2649030,
        "fullDosePercentage": 24.9,
        "firstDosePercentage": 35.199999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-02T12:00:00.000Z"),
        "firstDoseNumber": 3755111,
        "fullDoseNumber": 2699753,
        "fullDosePercentage": 25.4,
        "firstDosePercentage": 35.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-03T12:00:00.000Z"),
        "firstDoseNumber": 3755963,
        "fullDoseNumber": 2700803,
        "fullDosePercentage": 25.4,
        "firstDosePercentage": 35.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-04T12:00:00.000Z"),
        "firstDoseNumber": 3769478,
        "fullDoseNumber": 2730134,
        "fullDosePercentage": 25.7,
        "firstDosePercentage": 35.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-05T12:00:00.000Z"),
        "firstDoseNumber": 3785099,
        "fullDoseNumber": 2761702,
        "fullDosePercentage": 26,
        "firstDosePercentage": 35.6,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-06T12:00:00.000Z"),
        "firstDoseNumber": 3786912,
        "fullDoseNumber": 2763645,
        "fullDosePercentage": 26,
        "firstDosePercentage": 35.699999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-07T12:00:00.000Z"),
        "firstDoseNumber": 3830155,
        "fullDoseNumber": 2850374,
        "fullDosePercentage": 26.8,
        "firstDosePercentage": 36.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-08T12:00:00.000Z"),
        "firstDoseNumber": 3849874,
        "fullDoseNumber": 2890358,
        "fullDosePercentage": 27.200000000000003,
        "firstDosePercentage": 36.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-09T12:00:00.000Z"),
        "firstDoseNumber": 3869064,
        "fullDoseNumber": 2929987,
        "fullDosePercentage": 27.6,
        "firstDosePercentage": 36.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-10T12:00:00.000Z"),
        "firstDoseNumber": 3883754,
        "fullDoseNumber": 2956409,
        "fullDosePercentage": 27.800000000000004,
        "firstDosePercentage": 36.6,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-11T12:00:00.000Z"),
        "firstDoseNumber": 3900185,
        "fullDoseNumber": 2977408,
        "fullDosePercentage": 28.000000000000004,
        "firstDosePercentage": 36.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-12T12:00:00.000Z"),
        "firstDoseNumber": 3917176,
        "fullDoseNumber": 3003804,
        "fullDosePercentage": 28.299999999999997,
        "firstDosePercentage": 36.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-13T12:00:00.000Z"),
        "firstDoseNumber": 3935412,
        "fullDoseNumber": 3037554,
        "fullDosePercentage": 28.599999999999998,
        "firstDosePercentage": 37.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-14T12:00:00.000Z"),
        "firstDoseNumber": 3952119,
        "fullDoseNumber": 3064613,
        "fullDosePercentage": 28.9,
        "firstDosePercentage": 37.2,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-15T12:00:00.000Z"),
        "firstDoseNumber": 3971980,
        "fullDoseNumber": 3095445,
        "fullDosePercentage": 29.2,
        "firstDosePercentage": 37.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-16T12:00:00.000Z"),
        "firstDoseNumber": 3973172,
        "fullDoseNumber": 3096482,
        "fullDosePercentage": 29.2,
        "firstDosePercentage": 37.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-17T12:00:00.000Z"),
        "firstDoseNumber": 4001973,
        "fullDoseNumber": 3133196,
        "fullDosePercentage": 29.5,
        "firstDosePercentage": 37.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-18T12:00:00.000Z"),
        "firstDoseNumber": 4002403,
        "fullDoseNumber": 3133560,
        "fullDosePercentage": 29.5,
        "firstDosePercentage": 37.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-19T12:00:00.000Z"),
        "firstDoseNumber": 4004000,
        "fullDoseNumber": 3134850,
        "fullDosePercentage": 29.5,
        "firstDosePercentage": 37.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-20T12:00:00.000Z"),
        "firstDoseNumber": 4048946,
        "fullDoseNumber": 3183565,
        "fullDosePercentage": 30,
        "firstDosePercentage": 38.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-21T12:00:00.000Z"),
        "firstDoseNumber": 4068991,
        "fullDoseNumber": 3208104,
        "fullDosePercentage": 30.2,
        "firstDosePercentage": 38.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-22T12:00:00.000Z"),
        "firstDoseNumber": 4093508,
        "fullDoseNumber": 3236398,
        "fullDosePercentage": 30.5,
        "firstDosePercentage": 38.6,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-23T12:00:00.000Z"),
        "firstDoseNumber": 4107587,
        "fullDoseNumber": 3257623,
        "fullDosePercentage": 30.7,
        "firstDosePercentage": 38.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-24T12:00:00.000Z"),
        "firstDoseNumber": 4107924,
        "fullDoseNumber": 3257973,
        "fullDosePercentage": 30.7,
        "firstDosePercentage": 38.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-25T12:00:00.000Z"),
        "firstDoseNumber": 4108169,
        "fullDoseNumber": 3258138,
        "fullDosePercentage": 30.7,
        "firstDosePercentage": 38.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-26T12:00:00.000Z"),
        "firstDoseNumber": 4125559,
        "fullDoseNumber": 3277423,
        "fullDosePercentage": 30.9,
        "firstDosePercentage": 38.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-27T12:00:00.000Z"),
        "firstDoseNumber": 4142634,
        "fullDoseNumber": 3295633,
        "fullDosePercentage": 31,
        "firstDosePercentage": 39,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-28T12:00:00.000Z"),
        "firstDoseNumber": 4144065,
        "fullDoseNumber": 3296656,
        "fullDosePercentage": 31,
        "firstDosePercentage": 39,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-29T12:00:00.000Z"),
        "firstDoseNumber": 4145136,
        "fullDoseNumber": 3298581,
        "fullDosePercentage": 31.1,
        "firstDosePercentage": 39,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-05-30T12:00:00.000Z"),
        "firstDoseNumber": 4145899,
        "fullDoseNumber": 3299623,
        "fullDosePercentage": 31.1,
        "firstDosePercentage": 39,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-01T12:00:00.000Z"),
        "firstDoseNumber": 4236245,
        "fullDoseNumber": 3407704,
        "fullDosePercentage": 32.1,
        "firstDosePercentage": 39.900000000000006,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-02T12:00:00.000Z"),
        "firstDoseNumber": 4236513,
        "fullDoseNumber": 3407890,
        "fullDosePercentage": 32.1,
        "firstDosePercentage": 39.900000000000006,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-03T12:00:00.000Z"),
        "firstDoseNumber": 4237594,
        "fullDoseNumber": 3409346,
        "fullDosePercentage": 32.1,
        "firstDosePercentage": 39.900000000000006,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-04T12:00:00.000Z"),
        "firstDoseNumber": 4304247,
        "fullDoseNumber": 3512913,
        "fullDosePercentage": 33.1,
        "firstDosePercentage": 40.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-05T12:00:00.000Z"),
        "firstDoseNumber": 4305258,
        "fullDoseNumber": 3514143,
        "fullDosePercentage": 33.1,
        "firstDosePercentage": 40.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-06T12:00:00.000Z"),
        "firstDoseNumber": 4347833,
        "fullDoseNumber": 3546734,
        "fullDosePercentage": 33.4,
        "firstDosePercentage": 40.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-07T12:00:00.000Z"),
        "firstDoseNumber": 4348580,
        "fullDoseNumber": 3547535,
        "fullDosePercentage": 33.4,
        "firstDosePercentage": 41,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-08T12:00:00.000Z"),
        "firstDoseNumber": 4381496,
        "fullDoseNumber": 3587882,
        "fullDosePercentage": 33.800000000000004,
        "firstDosePercentage": 41.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-09T12:00:00.000Z"),
        "firstDoseNumber": 4382437,
        "fullDoseNumber": 3589555,
        "fullDosePercentage": 33.800000000000004,
        "firstDosePercentage": 41.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-10T12:00:00.000Z"),
        "firstDoseNumber": 4383278,
        "fullDoseNumber": 3590749,
        "fullDosePercentage": 33.800000000000004,
        "firstDosePercentage": 41.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-11T12:00:00.000Z"),
        "firstDoseNumber": 4383505,
        "fullDoseNumber": 3590930,
        "fullDosePercentage": 33.800000000000004,
        "firstDosePercentage": 41.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-12T12:00:00.000Z"),
        "firstDoseNumber": 4384788,
        "fullDoseNumber": 3592184,
        "fullDosePercentage": 33.800000000000004,
        "firstDosePercentage": 41.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-13T12:00:00.000Z"),
        "firstDoseNumber": 4385719,
        "fullDoseNumber": 3593625,
        "fullDosePercentage": 33.800000000000004,
        "firstDosePercentage": 41.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-14T12:00:00.000Z"),
        "firstDoseNumber": 4386793,
        "fullDoseNumber": 3595582,
        "fullDosePercentage": 33.900000000000006,
        "firstDosePercentage": 41.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-15T12:00:00.000Z"),
        "firstDoseNumber": 4387213,
        "fullDoseNumber": 3596274,
        "fullDosePercentage": 33.900000000000006,
        "firstDosePercentage": 41.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-16T12:00:00.000Z"),
        "firstDoseNumber": 4387716,
        "fullDoseNumber": 3596897,
        "fullDosePercentage": 33.900000000000006,
        "firstDosePercentage": 41.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-17T12:00:00.000Z"),
        "firstDoseNumber": 4453331,
        "fullDoseNumber": 3692677,
        "fullDosePercentage": 34.8,
        "firstDosePercentage": 41.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-18T12:00:00.000Z"),
        "firstDoseNumber": 4454138,
        "fullDoseNumber": 3693780,
        "fullDosePercentage": 34.8,
        "firstDosePercentage": 42,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-19T12:00:00.000Z"),
        "firstDoseNumber": 4455094,
        "fullDoseNumber": 3694880,
        "fullDosePercentage": 34.8,
        "firstDosePercentage": 42,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-20T12:00:00.000Z"),
        "firstDoseNumber": 4455785,
        "fullDoseNumber": 3696165,
        "fullDosePercentage": 34.8,
        "firstDosePercentage": 42,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-21T12:00:00.000Z"),
        "firstDoseNumber": 4456062,
        "fullDoseNumber": 3696341,
        "fullDosePercentage": 34.8,
        "firstDosePercentage": 42,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-22T12:00:00.000Z"),
        "firstDoseNumber": 4511414,
        "fullDoseNumber": 3760962,
        "fullDosePercentage": 35.4,
        "firstDosePercentage": 42.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-23T12:00:00.000Z"),
        "firstDoseNumber": 4512103,
        "fullDoseNumber": 3761490,
        "fullDosePercentage": 35.4,
        "firstDosePercentage": 42.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-24T12:00:00.000Z"),
        "firstDoseNumber": 4513062,
        "fullDoseNumber": 3762566,
        "fullDosePercentage": 35.4,
        "firstDosePercentage": 42.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-25T12:00:00.000Z"),
        "firstDoseNumber": 4513660,
        "fullDoseNumber": 3763180,
        "fullDosePercentage": 35.4,
        "firstDosePercentage": 42.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-26T12:00:00.000Z"),
        "firstDoseNumber": 4514292,
        "fullDoseNumber": 3763848,
        "fullDosePercentage": 35.4,
        "firstDosePercentage": 42.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-27T12:00:00.000Z"),
        "firstDoseNumber": 4514776,
        "fullDoseNumber": 3764366,
        "fullDosePercentage": 35.5,
        "firstDosePercentage": 42.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-28T12:00:00.000Z"),
        "firstDoseNumber": 4515551,
        "fullDoseNumber": 3765250,
        "fullDosePercentage": 35.5,
        "firstDosePercentage": 42.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-29T12:00:00.000Z"),
        "firstDoseNumber": 4585953,
        "fullDoseNumber": 3877365,
        "fullDosePercentage": 36.5,
        "firstDosePercentage": 43.2,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-06-30T12:00:00.000Z"),
        "firstDoseNumber": 4598121,
        "fullDoseNumber": 3884556,
        "fullDosePercentage": 36.6,
        "firstDosePercentage": 43.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-01T12:00:00.000Z"),
        "firstDoseNumber": 4613167,
        "fullDoseNumber": 3893218,
        "fullDosePercentage": 36.7,
        "firstDosePercentage": 43.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-02T12:00:00.000Z"),
        "firstDoseNumber": 4613813,
        "fullDoseNumber": 3894171,
        "fullDosePercentage": 36.7,
        "firstDosePercentage": 43.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-03T12:00:00.000Z"),
        "firstDoseNumber": 4637004,
        "fullDoseNumber": 3910314,
        "fullDosePercentage": 36.8,
        "firstDosePercentage": 43.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-04T12:00:00.000Z"),
        "firstDoseNumber": 4637498,
        "fullDoseNumber": 3910698,
        "fullDosePercentage": 36.8,
        "firstDosePercentage": 43.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-06T12:00:00.000Z"),
        "firstDoseNumber": 4655198,
        "fullDoseNumber": 3926832,
        "fullDosePercentage": 37,
        "firstDosePercentage": 43.8,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-07T12:00:00.000Z"),
        "firstDoseNumber": 4662662,
        "fullDoseNumber": 3932968,
        "fullDosePercentage": 37,
        "firstDosePercentage": 43.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-08T12:00:00.000Z"),
        "firstDoseNumber": 4673614,
        "fullDoseNumber": 3941470,
        "fullDosePercentage": 37.1,
        "firstDosePercentage": 44,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-09T12:00:00.000Z"),
        "firstDoseNumber": 4674137,
        "fullDoseNumber": 3942002,
        "fullDosePercentage": 37.1,
        "firstDosePercentage": 44,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-10T12:00:00.000Z"),
        "firstDoseNumber": 4674935,
        "fullDoseNumber": 3942675,
        "fullDosePercentage": 37.1,
        "firstDosePercentage": 44,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-11T12:00:00.000Z"),
        "firstDoseNumber": 4675777,
        "fullDoseNumber": 3943546,
        "fullDosePercentage": 37.1,
        "firstDosePercentage": 44,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-12T12:00:00.000Z"),
        "firstDoseNumber": 4704960,
        "fullDoseNumber": 3969801,
        "fullDosePercentage": 37.4,
        "firstDosePercentage": 44.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-13T12:00:00.000Z"),
        "firstDoseNumber": 4705181,
        "fullDoseNumber": 3969934,
        "fullDosePercentage": 37.4,
        "firstDosePercentage": 44.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-14T12:00:00.000Z"),
        "firstDoseNumber": 4716692,
        "fullDoseNumber": 3979871,
        "fullDosePercentage": 37.5,
        "firstDosePercentage": 44.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-15T12:00:00.000Z"),
        "firstDoseNumber": 4717320,
        "fullDoseNumber": 3980303,
        "fullDosePercentage": 37.5,
        "firstDosePercentage": 44.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-16T12:00:00.000Z"),
        "firstDoseNumber": 4717933,
        "fullDoseNumber": 3980991,
        "fullDosePercentage": 37.5,
        "firstDosePercentage": 44.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-17T12:00:00.000Z"),
        "firstDoseNumber": 4718613,
        "fullDoseNumber": 3981538,
        "fullDosePercentage": 37.5,
        "firstDosePercentage": 44.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-18T12:00:00.000Z"),
        "firstDoseNumber": 4719334,
        "fullDoseNumber": 3982004,
        "fullDosePercentage": 37.5,
        "firstDosePercentage": 44.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-19T12:00:00.000Z"),
        "firstDoseNumber": 4769036,
        "fullDoseNumber": 4027078,
        "fullDosePercentage": 37.9,
        "firstDosePercentage": 44.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-20T12:00:00.000Z"),
        "firstDoseNumber": 4767583,
        "fullDoseNumber": 4025666,
        "fullDosePercentage": 37.9,
        "firstDosePercentage": 44.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-21T12:00:00.000Z"),
        "firstDoseNumber": 4783420,
        "fullDoseNumber": 4037136,
        "fullDosePercentage": 38,
        "firstDosePercentage": 45.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-22T12:00:00.000Z"),
        "firstDoseNumber": 4784315,
        "fullDoseNumber": 4037519,
        "fullDosePercentage": 38,
        "firstDosePercentage": 45.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-23T12:00:00.000Z"),
        "firstDoseNumber": 4785044,
        "fullDoseNumber": 4037959,
        "fullDosePercentage": 38,
        "firstDosePercentage": 45.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-24T12:00:00.000Z"),
        "firstDoseNumber": 4785767,
        "fullDoseNumber": 4038452,
        "fullDosePercentage": 38,
        "firstDosePercentage": 45.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-25T12:00:00.000Z"),
        "firstDoseNumber": 4786820,
        "fullDoseNumber": 4038918,
        "fullDosePercentage": 38,
        "firstDosePercentage": 45.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-26T12:00:00.000Z"),
        "firstDoseNumber": 4787149,
        "fullDoseNumber": 4039038,
        "fullDosePercentage": 38,
        "firstDosePercentage": 45.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-27T12:00:00.000Z"),
        "firstDoseNumber": 4787474,
        "fullDoseNumber": 4039150,
        "fullDosePercentage": 38,
        "firstDosePercentage": 45.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-28T12:00:00.000Z"),
        "firstDoseNumber": 4868672,
        "fullDoseNumber": 4084995,
        "fullDosePercentage": 38.5,
        "firstDosePercentage": 45.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-29T12:00:00.000Z"),
        "firstDoseNumber": 4886737,
        "fullDoseNumber": 4093544,
        "fullDosePercentage": 38.6,
        "firstDosePercentage": 46,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-30T12:00:00.000Z"),
        "firstDoseNumber": 4910269,
        "fullDoseNumber": 4103919,
        "fullDosePercentage": 38.7,
        "firstDosePercentage": 46.2,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-07-31T12:00:00.000Z"),
        "firstDoseNumber": 4911568,
        "fullDoseNumber": 4104779,
        "fullDosePercentage": 38.7,
        "firstDosePercentage": 46.300000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-01T12:00:00.000Z"),
        "firstDoseNumber": 4913017,
        "fullDoseNumber": 4105276,
        "fullDosePercentage": 38.7,
        "firstDosePercentage": 46.300000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-02T12:00:00.000Z"),
        "firstDoseNumber": 4913604,
        "fullDoseNumber": 4105466,
        "fullDosePercentage": 38.7,
        "firstDosePercentage": 46.300000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-03T12:00:00.000Z"),
        "firstDoseNumber": 4914177,
        "fullDoseNumber": 4105643,
        "fullDosePercentage": 38.7,
        "firstDosePercentage": 46.300000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-04T12:00:00.000Z"),
        "firstDoseNumber": 4915301,
        "fullDoseNumber": 4106222,
        "fullDosePercentage": 38.7,
        "firstDosePercentage": 46.300000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-05T12:00:00.000Z"),
        "firstDoseNumber": 5010039,
        "fullDoseNumber": 4145869,
        "fullDosePercentage": 39,
        "firstDosePercentage": 47.199999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-06T12:00:00.000Z"),
        "firstDoseNumber": 5011141,
        "fullDoseNumber": 4146314,
        "fullDosePercentage": 39.1,
        "firstDosePercentage": 47.199999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-07T12:00:00.000Z"),
        "firstDoseNumber": 5012293,
        "fullDoseNumber": 4146938,
        "fullDosePercentage": 39.1,
        "firstDosePercentage": 47.199999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-08T12:00:00.000Z"),
        "firstDoseNumber": 5013198,
        "fullDoseNumber": 4147336,
        "fullDosePercentage": 39.1,
        "firstDosePercentage": 47.199999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-09T12:00:00.000Z"),
        "firstDoseNumber": 5013900,
        "fullDoseNumber": 4147538,
        "fullDosePercentage": 39.1,
        "firstDosePercentage": 47.199999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-10T12:00:00.000Z"),
        "firstDoseNumber": 5085962,
        "fullDoseNumber": 4175678,
        "fullDosePercentage": 39.300000000000004,
        "firstDosePercentage": 47.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-11T12:00:00.000Z"),
        "firstDoseNumber": 5102394,
        "fullDoseNumber": 4182784,
        "fullDosePercentage": 39.4,
        "firstDosePercentage": 48.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-12T12:00:00.000Z"),
        "firstDoseNumber": 5103376,
        "fullDoseNumber": 4183379,
        "fullDosePercentage": 39.4,
        "firstDosePercentage": 48.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-13T12:00:00.000Z"),
        "firstDoseNumber": 5104563,
        "fullDoseNumber": 4184099,
        "fullDosePercentage": 39.4,
        "firstDosePercentage": 48.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-14T12:00:00.000Z"),
        "firstDoseNumber": 5105798,
        "fullDoseNumber": 4184634,
        "fullDosePercentage": 39.4,
        "firstDosePercentage": 48.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-15T12:00:00.000Z"),
        "firstDoseNumber": 5106743,
        "fullDoseNumber": 4185186,
        "fullDosePercentage": 39.4,
        "firstDosePercentage": 48.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-16T12:00:00.000Z"),
        "firstDoseNumber": 5176969,
        "fullDoseNumber": 4219348,
        "fullDosePercentage": 39.7,
        "firstDosePercentage": 48.8,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-17T12:00:00.000Z"),
        "firstDoseNumber": 5177490,
        "fullDoseNumber": 4218980,
        "fullDosePercentage": 39.7,
        "firstDosePercentage": 48.8,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-18T12:00:00.000Z"),
        "firstDoseNumber": 5178477,
        "fullDoseNumber": 4219519,
        "fullDosePercentage": 39.7,
        "firstDosePercentage": 48.8,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-19T12:00:00.000Z"),
        "firstDoseNumber": 5250013,
        "fullDoseNumber": 4262186,
        "fullDosePercentage": 40.1,
        "firstDosePercentage": 49.4,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-20T12:00:00.000Z"),
        "firstDoseNumber": 5251501,
        "fullDoseNumber": 4263108,
        "fullDosePercentage": 40.2,
        "firstDosePercentage": 49.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-21T12:00:00.000Z"),
        "firstDoseNumber": 5295593,
        "fullDoseNumber": 4291731,
        "fullDosePercentage": 40.400000000000006,
        "firstDosePercentage": 49.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-22T12:00:00.000Z"),
        "firstDoseNumber": 5296896,
        "fullDoseNumber": 4292670,
        "fullDosePercentage": 40.400000000000006,
        "firstDosePercentage": 49.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-23T12:00:00.000Z"),
        "firstDoseNumber": 5297535,
        "fullDoseNumber": 4293117,
        "fullDosePercentage": 40.400000000000006,
        "firstDosePercentage": 49.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-24T12:00:00.000Z"),
        "firstDoseNumber": 5298249,
        "fullDoseNumber": 4293478,
        "fullDosePercentage": 40.400000000000006,
        "firstDosePercentage": 49.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-25T12:00:00.000Z"),
        "firstDoseNumber": 5357205,
        "fullDoseNumber": 4342054,
        "fullDosePercentage": 40.9,
        "firstDosePercentage": 50.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-26T12:00:00.000Z"),
        "firstDoseNumber": 5358167,
        "fullDoseNumber": 4342677,
        "fullDosePercentage": 40.9,
        "firstDosePercentage": 50.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-27T12:00:00.000Z"),
        "firstDoseNumber": 5359671,
        "fullDoseNumber": 4343902,
        "fullDosePercentage": 40.9,
        "firstDosePercentage": 50.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-28T12:00:00.000Z"),
        "firstDoseNumber": 5397628,
        "fullDoseNumber": 4375024,
        "fullDosePercentage": 41.199999999999996,
        "firstDosePercentage": 50.8,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-29T12:00:00.000Z"),
        "firstDoseNumber": 5398840,
        "fullDoseNumber": 4375765,
        "fullDosePercentage": 41.199999999999996,
        "firstDosePercentage": 50.8,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-30T12:00:00.000Z"),
        "firstDoseNumber": 5399366,
        "fullDoseNumber": 4376166,
        "fullDosePercentage": 41.199999999999996,
        "firstDosePercentage": 50.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-08-31T12:00:00.000Z"),
        "firstDoseNumber": 5400175,
        "fullDoseNumber": 4376696,
        "fullDosePercentage": 41.199999999999996,
        "firstDosePercentage": 50.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-01T12:00:00.000Z"),
        "firstDoseNumber": 5480606,
        "fullDoseNumber": 4444517,
        "fullDosePercentage": 41.9,
        "firstDosePercentage": 51.6,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-02T12:00:00.000Z"),
        "firstDoseNumber": 5482095,
        "fullDoseNumber": 4445340,
        "fullDosePercentage": 41.9,
        "firstDosePercentage": 51.6,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-03T12:00:00.000Z"),
        "firstDoseNumber": 5515631,
        "fullDoseNumber": 4467825,
        "fullDosePercentage": 42.1,
        "firstDosePercentage": 51.9,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-04T12:00:00.000Z"),
        "firstDoseNumber": 5516935,
        "fullDoseNumber": 4468684,
        "fullDosePercentage": 42.1,
        "firstDosePercentage": 52,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-07T12:00:00.000Z"),
        "firstDoseNumber": 5518435,
        "fullDoseNumber": 4469605,
        "fullDosePercentage": 42.1,
        "firstDosePercentage": 52,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-08T12:00:00.000Z"),
        "firstDoseNumber": 5598938,
        "fullDoseNumber": 4539735,
        "fullDosePercentage": 42.8,
        "firstDosePercentage": 52.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-09T12:00:00.000Z"),
        "firstDoseNumber": 5599998,
        "fullDoseNumber": 4540409,
        "fullDosePercentage": 42.8,
        "firstDosePercentage": 52.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-10T12:00:00.000Z"),
        "firstDoseNumber": 5601650,
        "fullDoseNumber": 4541542,
        "fullDosePercentage": 42.8,
        "firstDosePercentage": 52.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-11T12:00:00.000Z"),
        "firstDoseNumber": 5603440,
        "fullDoseNumber": 4542440,
        "fullDosePercentage": 42.8,
        "firstDosePercentage": 52.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-12T12:00:00.000Z"),
        "firstDoseNumber": 5605337,
        "fullDoseNumber": 4543373,
        "fullDosePercentage": 42.8,
        "firstDosePercentage": 52.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-13T12:00:00.000Z"),
        "firstDoseNumber": 5606349,
        "fullDoseNumber": 4543909,
        "fullDosePercentage": 42.8,
        "firstDosePercentage": 52.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-14T12:00:00.000Z"),
        "firstDoseNumber": 5608670,
        "fullDoseNumber": 4544963,
        "fullDosePercentage": 42.8,
        "firstDosePercentage": 52.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-15T12:00:00.000Z"),
        "firstDoseNumber": 5681047,
        "fullDoseNumber": 4622000,
        "fullDosePercentage": 43.5,
        "firstDosePercentage": 53.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-16T12:00:00.000Z"),
        "firstDoseNumber": 5682508,
        "fullDoseNumber": 4622898,
        "fullDosePercentage": 43.5,
        "firstDosePercentage": 53.5,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-17T12:00:00.000Z"),
        "firstDoseNumber": 5709654,
        "fullDoseNumber": 4657281,
        "fullDosePercentage": 43.9,
        "firstDosePercentage": 53.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-18T12:00:00.000Z"),
        "firstDoseNumber": 5728948,
        "fullDoseNumber": 4677961,
        "fullDosePercentage": 44.1,
        "firstDosePercentage": 54,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-19T12:00:00.000Z"),
        "firstDoseNumber": 5730070,
        "fullDoseNumber": 4678648,
        "fullDosePercentage": 44.1,
        "firstDosePercentage": 54,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-20T12:00:00.000Z"),
        "firstDoseNumber": 5730596,
        "fullDoseNumber": 4679131,
        "fullDosePercentage": 44.1,
        "firstDosePercentage": 54,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-21T12:00:00.000Z"),
        "firstDoseNumber": 5731236,
        "fullDoseNumber": 4679672,
        "fullDosePercentage": 44.1,
        "firstDosePercentage": 54,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-22T12:00:00.000Z"),
        "firstDoseNumber": 5757805,
        "fullDoseNumber": 4718249,
        "fullDosePercentage": 44.4,
        "firstDosePercentage": 54.2,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-23T12:00:00.000Z"),
        "firstDoseNumber": 5770336,
        "fullDoseNumber": 4737079,
        "fullDosePercentage": 44.6,
        "firstDosePercentage": 54.300000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-24T12:00:00.000Z"),
        "firstDoseNumber": 5789931,
        "fullDoseNumber": 4765575,
        "fullDosePercentage": 44.9,
        "firstDosePercentage": 54.50000000000001,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-25T12:00:00.000Z"),
        "firstDoseNumber": 5801213,
        "fullDoseNumber": 4784239,
        "fullDosePercentage": 45.1,
        "firstDosePercentage": 54.6,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-26T12:00:00.000Z"),
        "firstDoseNumber": 5802240,
        "fullDoseNumber": 4785389,
        "fullDosePercentage": 45.1,
        "firstDosePercentage": 54.6,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-27T12:00:00.000Z"),
        "firstDoseNumber": 5802722,
        "fullDoseNumber": 4785671,
        "fullDosePercentage": 45.1,
        "firstDosePercentage": 54.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-28T12:00:00.000Z"),
        "firstDoseNumber": 5803322,
        "fullDoseNumber": 4785984,
        "fullDosePercentage": 45.1,
        "firstDosePercentage": 54.7,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-29T12:00:00.000Z"),
        "firstDoseNumber": 5820906,
        "fullDoseNumber": 4813611,
        "fullDosePercentage": 45.300000000000004,
        "firstDosePercentage": 54.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-09-30T12:00:00.000Z"),
        "firstDoseNumber": 5828605,
        "fullDoseNumber": 4823331,
        "fullDosePercentage": 45.4,
        "firstDosePercentage": 54.900000000000006,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-01T12:00:00.000Z"),
        "firstDoseNumber": 5829363,
        "fullDoseNumber": 4824114,
        "fullDosePercentage": 45.4,
        "firstDosePercentage": 54.900000000000006,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-02T12:00:00.000Z"),
        "firstDoseNumber": 5848234,
        "fullDoseNumber": 4853758,
        "fullDosePercentage": 45.7,
        "firstDosePercentage": 55.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-03T12:00:00.000Z"),
        "firstDoseNumber": 5848983,
        "fullDoseNumber": 4854200,
        "fullDosePercentage": 45.7,
        "firstDosePercentage": 55.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-04T12:00:00.000Z"),
        "firstDoseNumber": 5849867,
        "fullDoseNumber": 4854729,
        "fullDosePercentage": 45.7,
        "firstDosePercentage": 55.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-05T12:00:00.000Z"),
        "firstDoseNumber": 5850414,
        "fullDoseNumber": 4855141,
        "fullDosePercentage": 45.7,
        "firstDosePercentage": 55.1,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-06T12:00:00.000Z"),
        "firstDoseNumber": 5877848,
        "fullDoseNumber": 4901224,
        "fullDosePercentage": 46.2,
        "firstDosePercentage": 55.400000000000006,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-07T12:00:00.000Z"),
        "firstDoseNumber": 5878334,
        "fullDoseNumber": 4901526,
        "fullDosePercentage": 46.2,
        "firstDosePercentage": 55.400000000000006,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-08T12:00:00.000Z"),
        "firstDoseNumber": 5880188,
        "fullDoseNumber": 4902669,
        "fullDosePercentage": 46.2,
        "firstDosePercentage": 55.400000000000006,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-09T12:00:00.000Z"),
        "firstDoseNumber": 5900661,
        "fullDoseNumber": 4932664,
        "fullDosePercentage": 46.5,
        "firstDosePercentage": 55.60000000000001,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-12T12:00:00.000Z"),
        "firstDoseNumber": 5901817,
        "fullDoseNumber": 4933324,
        "fullDosePercentage": 46.5,
        "firstDosePercentage": 55.60000000000001,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-13T12:00:00.000Z"),
        "firstDoseNumber": 5920236,
        "fullDoseNumber": 4958654,
        "fullDosePercentage": 46.7,
        "firstDosePercentage": 55.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-14T12:00:00.000Z"),
        "firstDoseNumber": 5928121,
        "fullDoseNumber": 4973251,
        "fullDosePercentage": 46.800000000000004,
        "firstDosePercentage": 55.800000000000004,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-15T12:00:00.000Z"),
        "firstDoseNumber": 5939989,
        "fullDoseNumber": 4990632,
        "fullDosePercentage": 47,
        "firstDosePercentage": 55.900000000000006,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-16T12:00:00.000Z"),
        "firstDoseNumber": 5948357,
        "fullDoseNumber": 5002976,
        "fullDosePercentage": 47.099999999999994,
        "firstDosePercentage": 56.00000000000001,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-17T12:00:00.000Z"),
        "firstDoseNumber": 5949257,
        "fullDoseNumber": 5003830,
        "fullDosePercentage": 47.099999999999994,
        "firstDosePercentage": 56.00000000000001,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-18T12:00:00.000Z"),
        "firstDoseNumber": 5949745,
        "fullDoseNumber": 5004179,
        "fullDosePercentage": 47.099999999999994,
        "firstDosePercentage": 56.00000000000001,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-19T12:00:00.000Z"),
        "firstDoseNumber": 5951111,
        "fullDoseNumber": 5005519,
        "fullDosePercentage": 47.099999999999994,
        "firstDosePercentage": 56.10000000000001,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-20T12:00:00.000Z"),
        "firstDoseNumber": 5952004,
        "fullDoseNumber": 5006139,
        "fullDosePercentage": 47.199999999999996,
        "firstDosePercentage": 56.10000000000001,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-21T12:00:00.000Z"),
        "firstDoseNumber": 5952604,
        "fullDoseNumber": 5006654,
        "fullDosePercentage": 47.199999999999996,
        "firstDosePercentage": 56.10000000000001,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-22T12:00:00.000Z"),
        "firstDoseNumber": 5987762,
        "fullDoseNumber": 5050565,
        "fullDosePercentage": 47.599999999999994,
        "firstDosePercentage": 56.39999999999999,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-23T12:00:00.000Z"),
        "firstDoseNumber": 5988571,
        "fullDoseNumber": 5051114,
        "fullDosePercentage": 47.599999999999994,
        "firstDosePercentage": 56.39999999999999,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-24T12:00:00.000Z"),
        "firstDoseNumber": 5989233,
        "fullDoseNumber": 5051673,
        "fullDosePercentage": 47.599999999999994,
        "firstDosePercentage": 56.39999999999999,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-25T12:00:00.000Z"),
        "firstDoseNumber": 5989569,
        "fullDoseNumber": 5051789,
        "fullDosePercentage": 47.599999999999994,
        "firstDosePercentage": 56.39999999999999,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-26T12:00:00.000Z"),
        "firstDoseNumber": 6011648,
        "fullDoseNumber": 5082925,
        "fullDosePercentage": 47.9,
        "firstDosePercentage": 56.599999999999994,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-27T12:00:00.000Z"),
        "firstDoseNumber": 6018838,
        "fullDoseNumber": 5091396,
        "fullDosePercentage": 48,
        "firstDosePercentage": 56.699999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-28T12:00:00.000Z"),
        "firstDoseNumber": 6020210,
        "fullDoseNumber": 5091916,
        "fullDosePercentage": 48,
        "firstDosePercentage": 56.699999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-29T12:00:00.000Z"),
        "firstDoseNumber": 6020924,
        "fullDoseNumber": 5092396,
        "fullDosePercentage": 48,
        "firstDosePercentage": 56.699999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-30T12:00:00.000Z"),
        "firstDoseNumber": 6040512,
        "fullDoseNumber": 5115884,
        "fullDosePercentage": 48.199999999999996,
        "firstDosePercentage": 56.89999999999999,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-10-31T12:00:00.000Z"),
        "firstDoseNumber": 6041368,
        "fullDoseNumber": 5116398,
        "fullDosePercentage": 48.199999999999996,
        "firstDosePercentage": 56.89999999999999,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-11-01T12:00:00.000Z"),
        "firstDoseNumber": 6042135,
        "fullDoseNumber": 5116762,
        "fullDosePercentage": 48.199999999999996,
        "firstDosePercentage": 56.89999999999999,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-11-02T12:00:00.000Z"),
        "firstDoseNumber": 6042774,
        "fullDoseNumber": 5117009,
        "fullDosePercentage": 48.199999999999996,
        "firstDosePercentage": 56.89999999999999,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-11-03T12:00:00.000Z"),
        "firstDoseNumber": 6062599,
        "fullDoseNumber": 5141539,
        "fullDosePercentage": 48.4,
        "firstDosePercentage": 57.099999999999994,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-11-04T12:00:00.000Z"),
        "firstDoseNumber": 6069316,
        "fullDoseNumber": 5148931,
        "fullDosePercentage": 48.5,
        "firstDosePercentage": 57.199999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-11-05T12:00:00.000Z"),
        "firstDoseNumber": 6070072,
        "fullDoseNumber": 5149397,
        "fullDosePercentage": 48.5,
        "firstDosePercentage": 57.199999999999996,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-11-06T12:00:00.000Z"),
        "firstDoseNumber": 6082355,
        "fullDoseNumber": 5160906,
        "fullDosePercentage": 48.6,
        "firstDosePercentage": 57.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-11-07T12:00:00.000Z"),
        "firstDoseNumber": 6083219,
        "fullDoseNumber": 5161287,
        "fullDosePercentage": 48.6,
        "firstDosePercentage": 57.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-11-08T12:00:00.000Z"),
        "firstDoseNumber": 6085263,
        "fullDoseNumber": 5162771,
        "fullDosePercentage": 48.6,
        "firstDosePercentage": 57.3,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-11-09T12:00:00.000Z"),
        "firstDoseNumber": 6107299,
        "fullDoseNumber": 5178787,
        "fullDosePercentage": 48.8,
        "firstDosePercentage": 57.49999999999999,
        "boosterNumber": undefined,
        "boosterPercentage": null
    }, {
        "date": new Date("2021-11-10T12:00:00.000Z"),
        "firstDoseNumber": 6108153,
        "fullDoseNumber": 5179488,
        "fullDosePercentage": 48.8,
        "firstDosePercentage": 57.49999999999999,
        "boosterNumber": 615616,
        "boosterPercentage": 5.7982
    }, {
        "date": new Date("2021-12-03T12:00:00.000Z"),
        "firstDoseNumber": 6298447,
        "fullDoseNumber": 5289598,
        "fullDosePercentage": 49.8,
        "firstDosePercentage": 59.3,
        "boosterNumber": 999582,
        "boosterPercentage": 9.4145
    }, {
        "date": new Date("2021-12-04T12:00:00.000Z"),
        "firstDoseNumber": 6304653,
        "fullDoseNumber": 5241103,
        "fullDosePercentage": 49.4,
        "firstDosePercentage": 59.4,
        "boosterNumber": 976552,
        "boosterPercentage": 9.1976
    }, {
        "date": new Date("2021-12-05T12:00:00.000Z"),
        "firstDoseNumber": 6305789,
        "fullDoseNumber": 5241622,
        "fullDosePercentage": 49.4,
        "firstDosePercentage": 59.4,
        "boosterNumber": 977343,
        "boosterPercentage": 9.2051
    }, {
        "date": new Date("2021-12-06T12:00:00.000Z"),
        "firstDoseNumber": 6306488,
        "fullDoseNumber": 5241795,
        "fullDosePercentage": 49.4,
        "firstDosePercentage": 59.4,
        "boosterNumber": 977691,
        "boosterPercentage": 9.2084
    }, {
        "date": new Date("2021-12-07T12:00:00.000Z"),
        "firstDoseNumber": 6326495,
        "fullDoseNumber": 5266415,
        "fullDosePercentage": 49.6,
        "firstDosePercentage": 59.599999999999994,
        "boosterNumber": 1038700,
        "boosterPercentage": 9.783
    }, {
        "date": new Date("2021-12-08T12:00:00.000Z"),
        "firstDoseNumber": 6336308,
        "fullDoseNumber": 5275127,
        "fullDosePercentage": 49.7,
        "firstDosePercentage": 59.699999999999996,
        "boosterNumber": 1067151,
        "boosterPercentage": 10.0509
    }, {
        "date": new Date("2021-12-09T12:00:00.000Z"),
        "firstDoseNumber": 6345700,
        "fullDoseNumber": 5284283,
        "fullDosePercentage": 49.8,
        "firstDosePercentage": 59.8,
        "boosterNumber": 1093630,
        "boosterPercentage": 10.3003
    }, {
        "date": new Date("2021-12-10T12:00:00.000Z"),
        "firstDoseNumber": 6354746,
        "fullDoseNumber": 5293008,
        "fullDosePercentage": 49.9,
        "firstDosePercentage": 59.9,
        "boosterNumber": 1118497,
        "boosterPercentage": 10.5345
    }, {
        "date": new Date("2021-12-11T12:00:00.000Z"),
        "firstDoseNumber": 6364869,
        "fullDoseNumber": 5302666,
        "fullDosePercentage": 49.9,
        "firstDosePercentage": 59.9,
        "boosterNumber": 1148303,
        "boosterPercentage": 10.8153
    }, {
        "date": new Date("2021-12-12T12:00:00.000Z"),
        "firstDoseNumber": 6365632,
        "fullDoseNumber": 5302875,
        "fullDosePercentage": 49.9,
        "firstDosePercentage": 60,
        "boosterNumber": 1148980,
        "boosterPercentage": 10.8216
    }, {
        "date": new Date("2021-12-13T12:00:00.000Z"),
        "firstDoseNumber": 6366162,
        "fullDoseNumber": 5303027,
        "fullDosePercentage": 49.9,
        "firstDosePercentage": 60,
        "boosterNumber": 1149284,
        "boosterPercentage": 10.824499999999999
    }, {
        "date": new Date("2021-12-14T12:00:00.000Z"),
        "firstDoseNumber": 6379923,
        "fullDoseNumber": 5319077,
        "fullDosePercentage": 50.1,
        "firstDosePercentage": 60.099999999999994,
        "boosterNumber": 1191487,
        "boosterPercentage": 11.222
    }, {
        "date": new Date("2021-12-15T12:00:00.000Z"),
        "firstDoseNumber": 6389285,
        "fullDoseNumber": 5329048,
        "fullDosePercentage": 50.2,
        "firstDosePercentage": 60.199999999999996,
        "boosterNumber": 1219008,
        "boosterPercentage": 11.4812
    }, {
        "date": new Date("2021-12-16T12:00:00.000Z"),
        "firstDoseNumber": 6396985,
        "fullDoseNumber": 5337707,
        "fullDosePercentage": 50.3,
        "firstDosePercentage": 60.199999999999996,
        "boosterNumber": 1241560,
        "boosterPercentage": 11.6936
    }, {
        "date": new Date("2021-12-17T12:00:00.000Z"),
        "firstDoseNumber": 6404497,
        "fullDoseNumber": 5346143,
        "fullDosePercentage": 50.4,
        "firstDosePercentage": 60.3,
        "boosterNumber": 1264753,
        "boosterPercentage": 11.9121
    }, {
        "date": new Date("2021-12-18T12:00:00.000Z"),
        "firstDoseNumber": 6411938,
        "fullDoseNumber": 5353525,
        "fullDosePercentage": 50.4,
        "firstDosePercentage": 60.4,
        "boosterNumber": 1290192,
        "boosterPercentage": 12.1516
    }, {
        "date": new Date("2021-12-19T12:00:00.000Z"),
        "firstDoseNumber": 6412743,
        "fullDoseNumber": 5353688,
        "fullDosePercentage": 50.4,
        "firstDosePercentage": 60.4,
        "boosterNumber": 1290863,
        "boosterPercentage": 12.158
    }, {
        "date": new Date("2021-12-20T12:00:00.000Z"),
        "firstDoseNumber": 6413390,
        "fullDoseNumber": 5353843,
        "fullDosePercentage": 50.4,
        "firstDosePercentage": 60.4,
        "boosterNumber": 1291132,
        "boosterPercentage": 12.1605
    }, {
        "date": new Date("2021-12-21T12:00:00.000Z"),
        "firstDoseNumber": 6427992,
        "fullDoseNumber": 5367638,
        "fullDosePercentage": 50.6,
        "firstDosePercentage": 60.5,
        "boosterNumber": 1339236,
        "boosterPercentage": 12.6136
    }, {
        "date": new Date("2021-12-22T12:00:00.000Z"),
        "firstDoseNumber": 6438467,
        "fullDoseNumber": 5376936,
        "fullDosePercentage": 50.6,
        "firstDosePercentage": 60.6,
        "boosterNumber": 1368552,
        "boosterPercentage": 12.889700000000001
    }, {
        "date": new Date("2021-12-23T12:00:00.000Z"),
        "firstDoseNumber": 6439993,
        "fullDoseNumber": 5377295,
        "fullDosePercentage": 50.6,
        "firstDosePercentage": 60.699999999999996,
        "boosterNumber": 1369374,
        "boosterPercentage": 12.897400000000001
    }, {
        "date": new Date("2021-12-27T12:00:00.000Z"),
        "firstDoseNumber": 6442925,
        "fullDoseNumber": 5377928,
        "fullDosePercentage": 50.7,
        "firstDosePercentage": 60.699999999999996,
        "boosterNumber": 1370926,
        "boosterPercentage": 12.912
    }, {
        "date": new Date("2021-12-28T12:00:00.000Z"),
        "firstDoseNumber": 6474122,
        "fullDoseNumber": 5402633,
        "fullDosePercentage": 50.9,
        "firstDosePercentage": 61,
        "boosterNumber": 1461581,
        "boosterPercentage": 13.7659
    }, {
        "date": new Date("2021-12-29T12:00:00.000Z"),
        "firstDoseNumber": 6495858,
        "fullDoseNumber": 5416054,
        "fullDosePercentage": 51,
        "firstDosePercentage": 61.199999999999996,
        "boosterNumber": 1485824,
        "boosterPercentage": 13.994200000000001
    }, {
        "date": new Date("2021-12-30T12:00:00.000Z"),
        "firstDoseNumber": 6505193,
        "fullDoseNumber": 5423280,
        "fullDosePercentage": 51.1,
        "firstDosePercentage": 61.3,
        "boosterNumber": 1507455,
        "boosterPercentage": 14.197899999999999
    }
];

const outputPath = path.join(__dirname, 'vaccination.csv');

// build CSV lines
const lines = [];
// header
lines.push('date,doses');

for (const entry of data) {
  // ensure we have a Date object
  const d = entry.date instanceof Date
    ? entry.date
    : new Date(entry.date);

  // format YYYY-MM-DD
  const yyyy = d.getUTCFullYear();
  const mm   = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd   = String(d.getUTCDate()).padStart(2, '0');
  const dateString = `${yyyy}-${mm}-${dd}`;

  lines.push(`${dateString},${entry.fullDoseNumber}`);
}

// write out the file
fs.writeFileSync(outputPath, lines.join('\n'), 'utf8');
console.log(`✓ vaccination.csv written to ${outputPath}`);

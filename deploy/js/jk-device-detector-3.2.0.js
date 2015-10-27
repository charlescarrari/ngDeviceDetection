// http://stackoverflow.com/a/14968873
angular.module('underscore', []).factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
});

 /*
 The MIT License (MIT)

 Copyright (c) 2015 Jos Koomen

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
var detector = angular.module('jkDeviceDetector', ['underscore']);
detector.constant('jkIPhoneDiagonals', {
    'IPHONE_4'      : 576,
    'IPHONE_5'      : 651,
    'IPHONE_6'      : 765,
    'IPHONE_6_PLUS' : 844
});

detector.factory('jkDetectionClassesService', ['jkDetectionService', '_',
    function(detectionService, _) {

        var _devices = [
            {classes : 'iphone,iphone3g', check : detectionService.iphone3g},
            {classes : 'iphone,iphone4', check : detectionService.iphone4},
            {classes : 'iphone,iphone5', check : detectionService.iphone5},
            {classes : 'iphone,iphone6', check : detectionService.iphone6},
            {classes : 'iphone,iphone6plus', check : detectionService.iphone6plus},
            {classes : 'iphone', check : detectionService.iphone},
            {classes : 'ipod', check : detectionService.ipod},
            {classes : 'ipad', check : detectionService.ipad},
            {classes : 'nexus', check : detectionService.nexus},
            {classes : 'htc', check : detectionService.htc},
            {classes : 'sony', check : detectionService.sony},
            {classes : 'acer', check : detectionService.acer},
            {classes : 'lg', check : detectionService.lg},
            {classes : 'samsung', check : detectionService.samsung},
            {classes : 'nokia', check : detectionService.nokia},
            {classes : 'lenovo', check : detectionService.lenovo},
            {classes : 'huawei', check : detectionService.huawei}
        ];

        var _browsers = [
            {classes : 'webkit,chrome', check : detectionService.chrome},
            {classes : 'webkit,safari', check : detectionService.safari},
            {classes : 'mozilla,ff', check : detectionService.firefox},
            {classes : 'iemobile,iemobile9', check : detectionService.iemobile9},
            {classes : 'iemobile,iemobile10', check : detectionService.iemobile10},
            {classes : 'iemobile,iemobile11', check : detectionService.iemobile11},
            {classes : 'ie,ie8', check : detectionService.ie8},
            {classes : 'ie,ie9', check : detectionService.ie9},
            {classes : 'ie,ie10', check : detectionService.ie10},
            {classes : 'ie,ie11', check : detectionService.ie11},
            {classes : 'msedge', check : detectionService.edge},
            {classes : 'operamini', check : detectionService.operamini},
            {classes : 'opera', check : detectionService.opera}
        ];

        var _operatingSystems = [
            {classes : 'windows', check : detectionService.windows},
            {classes : 'windows,windowsphone,windowsphone7', check : detectionService.windowsphone7},
            {classes : 'windows,windowsphone,windowsphone8', check : detectionService.windowsphone8},
            {classes : 'windows,windowsphone,windowsphone10', check : detectionService.windowsphone10},
            {classes : 'ios,ios5', check : detectionService.ios5},
            {classes : 'ios,ios6', check : detectionService.ios6},
            {classes : 'ios,ios7', check : detectionService.ios7},
            {classes : 'ios,ios8', check : detectionService.ios8},
            {classes : 'ios,ios9', check : detectionService.ios9},
            {classes : 'ios', check : detectionService.ios},
            {classes : 'android,android2', check : detectionService.android2},
            {classes : 'android,android3', check : detectionService.android3},
            {classes : 'android,android4', check : detectionService.android4},
            {classes : 'android,android5', check : detectionService.android5},
            {classes : 'blackberry,playbook', check : detectionService.playbook},
            {classes : 'blackberry', check : detectionService.blackberry},
            {classes : 'macosx', check : detectionService.macosx}

        ];

        var _screenDensities = [
            {classes : 'low-density', check : detectionService.lowdensity},
            {classes : 'medium-density,half-retina', check : detectionService.halfretina},
            {classes : 'large-density,retina', check : detectionService.retina},
            {classes : 'xlarge-density,retina-hd', check : detectionService.retinahd},
            {classes : 'xxlarge-density,super-hd', check : detectionService.superhd}
        ];

        var _deviceFunctionals = [
            {classes : 'standalone', check : detectionService.standalone},
            {classes : 'touch', check : detectionService.touch},
            {classes : 'mobile', check : detectionService.mobile},
            {classes : 'desktop', check : detectionService.desktop}
        ];

        var _getClasses = function(array) {
            var find = _.find(array, function(record) {
                return record.check === true;
            });
            return find === undefined ? "" : find.classes;
        };

        return {

            getDeviceClass : function() {
                return _getClasses(_devices);
            },

            getBrowserClass : function() {
                return _getClasses(_browsers);
            },

            getOSClass : function() {
                return _getClasses(_operatingSystems);
            },

            getDensityClass : function() {
                return _getClasses(_screenDensities);
            },

            getFunctionalClasses : function() {
                var classes = [];
                _.each(_deviceFunctionals, function(functional) {
                    if(functional.check === true) {
                        classes.push(functional.classes);
                    }
                });
                return classes;
            },

            toString : function() {
                return 'jkDetectionClassesService';
            }

        };

    }]);

detector.factory('jkDetectionService', ['jkIPhoneDiagonals',
    function(iPhoneDiagonals) {

        var ua = navigator.userAgent.toLowerCase();

        var isiPhone = ua.indexOf('iphone') !== -1;
        var isiPad = ua.indexOf('ipad') !== -1;
        var isiPod = ua.indexOf('ipod') !== -1;
        var isiOS = isiPhone || isiPad || isiPod;

        var size = Math.floor(Math.sqrt(screen.width * screen.width + screen.height * screen.height));

        return {
            iphone         : isiPhone,
            iphone3g       : isiPhone && (window.devicePixelRatio === 1) && (size === iPhoneDiagonals.IPHONE_4 ),
            iphone4        : isiPhone && (window.devicePixelRatio === 2) && (size === iPhoneDiagonals.IPHONE_4 ),
            iphone5        : isiPhone && (size === iPhoneDiagonals.IPHONE_5 ),
            iphone6        : isiPhone && (size === iPhoneDiagonals.IPHONE_6 ),
            iphone6plus    : isiPhone && (size === iPhoneDiagonals.IPHONE_6_PLUS),
            ipod           : isiPod,
            ipad           : isiPad,

            nexus          : ua.indexOf('nexus') !== -1,
            htc            : ua.indexOf('htc') !== -1,
            sony           : ua.indexOf('sony') !== -1,
            acer           : ua.indexOf('acer') !== -1,
            lg             : ua.indexOf('lg') !== -1,
            nokia          : ua.indexOf('nokia') !== -1,
            lenovo         : ua.indexOf('lenovo') !== -1,
            samsung        : (ua.indexOf('gt-') !== -1) || (ua.indexOf('galaxy') !== -1) || (ua.indexOf('samsung') !== -1) || (ua.indexOf('sm-') !== -1) || (ua.indexOf('sch-') !== -1),
            huawei         : (ua.indexOf('huawei') !== -1) || (ua.indexOf('ascend') !== -1),

            ie             : ua.indexOf('msie') !== -1,
            ie8            : ua.indexOf('msie 8') !== -1,
            ie9            : ua.indexOf('msie 9') !== -1,
            ie10           : ua.indexOf('msie 10') !== -1,
            ie11           : ua.indexOf('rv:11') !== -1,
            edge           : ua.indexOf('edge/12') !== -1,
            iemobile       : ua.indexOf('iemobile') !== -1,
            iemobile9      : ua.indexOf('iemobile/9') !== -1,
            iemobile10     : ua.indexOf('iemobile/10') !== -1,
            iemobile11     : ua.indexOf('iemobile/11') !== -1,

            chrome         : (ua.indexOf('chrome') !== -1) || (ua.indexOf('crios') !== -1),
            firefox        : ua.indexOf('firefox') !== -1,
            safari         : ua.indexOf('safari') !== -1,
            opera          : ua.indexOf('opera') !== -1,
            operamini      : ua.indexOf('opera mini') !== -1,
            webkit         : ua.indexOf('webkit') !== -1,

            ios            : isiOS,
            ios5           : isiOS && (ua.indexOf('os 5') !== -1),
            ios6           : isiOS && (ua.indexOf('os 6') !== -1),
            ios7           : isiOS && (ua.indexOf('os 7') !== -1),
            ios8           : isiOS && (ua.indexOf('os 8') !== -1),
            ios9           : isiOS && (ua.indexOf('os 9') !== -1),

            android        : ua.indexOf('android') !== -1,
            android2       : ua.indexOf('android 2') !== -1,
            android3       : ua.indexOf('android 3') !== -1,
            android4       : ua.indexOf('android 4') !== -1,
            android5       : ua.indexOf('android 5') !== -1,

            windowsphone   : ua.indexOf('windows phone') !== -1,
            windowsphone7  : ua.indexOf('windows phone os 7') !== -1,
            windowsphone8  : ua.indexOf('windows phone 8') !== -1,
            windowsphone10 : ua.indexOf('windows phone 10') !== -1,

            blackberry     : ua.indexOf('bb10') !== -1,
            playbook       : ua.indexOf('playbook') !== -1,

            macosx         : ua.indexOf('mac os x') !== -1,
            windows        : ua.indexOf('windows nt') !== -1,

            lowdensity     : window.devicePixelRatio < 1,
            halfretina     : (window.devicePixelRatio > 1) && (window.devicePixelRatio < 2),
            retina         : window.devicePixelRatio === 2,
            retinahd       : window.devicePixelRatio === 3,
            superhd        : window.devicePixelRatio > 3,

            standalone     : ("standalone" in window.navigator) && (window.navigator.standalone === true),
            touch          : !!('ontouchstart' in window),

            portrait       : (window.orientation === -90) || (window.orientation === 90),
            landscape      : (window.orientation === 0) || (window.orientation === 180),

            mobile         : (typeof window.orientation !== 'undefined'),
            desktop        : (typeof window.orientation === 'undefined'),

            toString       : function() {
                return 'jkDetectionService';
            }
        };

    }]);

detector.directive('detectionClasses', ['jkDetectionClassesService', '_',
    function(service, _) {
        return {
            restrict : 'AC',
            link     : function(scope, element) {
                var classes = service.getFunctionalClasses();
                classes.push(service.getDeviceClass());
                classes.push(service.getDensityClass());
                classes.push(service.getBrowserClass());
                classes.push(service.getOSClass());

                _.each(classes, function(arr) {
                    _.each(arr.split(','), function(c) {
                        element.addClass(c);

                    });
                });
            }
        };
    }]);
detector.directive('browserClass', ['jkDetectionClassesService', '_',
    function(service, _) {
        return {
            restrict : 'AC',
            link     : function(scope, element) {
                var browserClasses = service.getBrowserClass().split(',');
                _.each(browserClasses, function(c) {
                    element.addClass(c);
                });

            }
        };
    }]);
detector.directive('densityClass', ['jkDetectionClassesService', '_',
    function(service, _) {
        return {
            restrict : 'AC',
            link     : function(scope, element) {
                var densityClasses = service.getDensityClass().split(',');
                _.each(densityClasses, function(c) {
                    element.addClass(c);
                });

            }
        };
    }]);
detector.directive('deviceClass', ['jkDetectionClassesService', '_',
    function(service, _) {
        return {
            restrict : 'AC',
            link     : function(scope, element) {
                var deviceClasses = service.getDeviceClass().split(',');
                _.each(deviceClasses, function(c) {
                    element.addClass(c);
                });

            }
        };
    }]);
detector.directive('functionalClasses', ['jkDetectionClassesService', '_',
    function(service, _) {
        return {
            restrict : 'AC',
            link     : function(scope, element) {
                var fClasses = service.getFunctionalClasses();
                _.each(fClasses, function(f) {
                    _.each(f.split(','), function(c) {
                        element.addClass(c);
                    });
                });
            }
        };
    }]);
detector.directive('osClass', ['jkDetectionClassesService', '_',
    function(service, _) {
        return {
            restrict : 'AC',
            link     : function(scope, element) {
                var osClasses = service.getOSClass().split(',');
                _.each(osClasses, function(c) {
                    element.addClass(c);
                });
            }
        };
    }]);
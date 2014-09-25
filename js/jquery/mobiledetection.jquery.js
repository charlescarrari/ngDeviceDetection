/*
 * Detect mobile browsers and devices
 *
 * Version 2.3
 *
 * Author: Jos Koomen
 * Twitter : @joskoomen
 * E-mail : ik@joskoomen.nl
 * Further changes, questions, comments: @joskoomen
 */

/*
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 2 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program; if not, write to the
 *   Free Software Foundation, Inc.,
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
jQuery.extend( {
    mob : {
    	userAgent : navigator.userAgent.toLowerCase(),
		iphone : function() {
			return jQuery.mob.userAgent.indexOf('iphone') !== -1;
		},
		ipod : function() {
			return jQuery.mob.userAgent.indexOf('ipod') !== -1;
		},
		ipad : function() {
			return jQuery.mob.userAgent.indexOf('ipad') !== -1;
		},
		htc : function() {
			return jQuery.mob.userAgent.indexOf('htc') !== -1;
		},
		sonyericsson : function() {
			return jQuery.mob.userAgent.indexOf('sonyericsson') !== -1;
		},
		acer : function() {
			return jQuery.mob.userAgent.indexOf('acer') !== -1;
		},
		LG : function() {
			return jQuery.mob.userAgent.indexOf('lg-') !== -1;
		},
		motorola : function() {
			return jQuery.mob.userAgent.indexOf('motorola') !== -1;
		},
		nokia : function() {
			return jQuery.mob.userAgent.indexOf('nokia') !== -1;
		},
		samsung : function() {
			return jQuery.mob.userAgent.indexOf('gt-') !== -1 || jQuery.mob.userAgent.indexOf('galaxy') !== -1;
		},
		iemobile9 : function() {
			return jQuery.mob.userAgent.indexOf('iemobile/9') !== -1;
		},
		iemobile10 : function() {
			return jQuery.mob.userAgent.indexOf('iemobile/10') !== -1;
		},
		iemobile : function() {
			return jQuery.mob.userAgent.indexOf('iemobile') !== -1;
		},
		operamini : function() {
			return jQuery.mob.userAgent.indexOf('opera mini') !== -1;
		},
		firefox : function() {
			return jQuery.mob.userAgent.indexOf('firefox') !== -1;
		},
		webkit : function() {
			return jQuery.mob.userAgent.indexOf('webkit') !== -1;
		},
		ios : function(version) {
			var a = (jQuery.mob.iphone() || jQuery.mob.ipad() || jQuery.mob.ipod());
			if(version !== undefined && a) {
				switch(version) {
					case '5':
						return (jQuery.mob.userAgent.indexOf('os 5') !== -1);
					case '6':
						return (jQuery.mob.userAgent.indexOf('os 6') !== -1);
					case '7':
						return (jQuery.mob.userAgent.indexOf('os 7') !== -1);
					case '7':
						return (jQuery.mob.userAgent.indexOf('os 8') !== -1);
					default:
						return false;
				}
			}
			return a;
		},
		windowsphone7 : function() {
			return jQuery.mob.userAgent.indexOf('windows phone os 7') !== -1;
		},
		windowsphone8 : function() {
			return jQuery.mob.userAgent.indexOf('windows phone 8') !== -1;
		},
		android : function (version) {
			var a = jQuery.mob.userAgent.indexOf('android') !== -1;
			if(version !== undefined && a) {
				switch(version) {
					case '2':
						return jQuery.mob.userAgent.indexOf('android 2') !== -1;
					case '3':
						return jQuery.mob.userAgent.indexOf('android 3') !== -1;
					case '4':
						return jQuery.mob.userAgent.indexOf('android 4') !== -1;
					default:
						return false;
				}
			}
			return a;
		},
		blackberry : function() {
			return jQuery.mob.userAgent.indexOf('blackberry') !== -1;
		},
		anysmartphone : function() {
		 	return /android|webos|iphone|blackberry/i.test(jQuery.mob.userAgent);
		},
		touchdevice : function() {
    		return !!('ontouchstart' in window);
 		},
		halfretina : function() {
			return window.devicePixelRatio > 1 && window.devicePixelRatio < 2;
		},
		retina : function() {
			return window.devicePixelRatio === 2;
		},
		standalone : function() {
			return ("standalone" in window.navigator) && (window.navigator.standalone === true);
		},
		orientation : function() {
			return jQuery.mob.portrait() ? 'portrait' : 'landscape';
		},
		landscape : function() {
			return (window.orientation===-90)||(window.orientation===90);
		},
		portrait : function() {
			return (window.orientation===0)||(window.orientation===180);
		},
    	addDeviceClass : function() {
			var html = jQuery('html');
			if(jQuery.mob.ipad()) {
				html.addClass('ipad');
			}
			else if(jQuery.mob.iphone()) {
				html.addClass('iphone');
			}
			else if(jQuery.mob.ipod()) {
				html.addClass('ipod');
			}
			else if(jQuery.mob.blackberry()) {
				html.addClass('blackberry');
			}
			else if(jQuery.mob.htc()) {
				html.addClass('htc');
			}
			else if(jQuery.mob.nokia()) {
				html.addClass('nokia');
			}
			else if(jQuery.mob.samsung()) {
				html.addClass('samsung');
			}
			else if(jQuery.mob.sonyericsson()) {
				html.addClass('sonyericsson');
			}
			else if(jQuery.mob.acer()) {
				html.addClass('acer');
			}
			else if(jQuery.mob.LG()) {
				html.addClass('LG');
			}
			else if(jQuery.mob.motorola()) {
				html.addClass('motorola');
			}
		},
		addBrowserClass : function() {
			var html = jQuery('html');
			if(jQuery.mob.iemobile9()) {
				html.addClass('iemobile');
				html.addClass('iemobile9');
			}
			if(jQuery.mob.iemobile10()) {
				html.addClass('iemobile');
				html.addClass('iemobile10');
			}
			else if(jQuery.mob.operamini()) {
				html.addClass('operamini');
			}
			else if(jQuery.mob.firefox()) {
				html.addClass('firefox');
			}
			else if(jQuery.mob.webkit()) {
				html.addClass('webkit');
			}
		},
		addOSClass : function() {
			var html = jQuery('html');
			if(jQuery.mob.ios()) {
				html.addClass('ios');
				if(jQuery.mob.ios('5')) {
					html.addClass('ios5');
				}
				else if(jQuery.mob.ios('6')) {
					html.addClass('ios6');
				}
				else if(jQuery.mob.ios('7')) {
					html.addClass('ios7');
				}
				else if(jQuery.mob.ios('8')) {
					html.addClass('ios8');
				}
			}
			else if(jQuery.mob.windowsphone7()) {
				html.addClass('windowsphone');
				html.addClass('windowsphone7');
			}
			else if(jQuery.mob.windowsphone8()) {
				html.addClass('windowsphone');
				html.addClass('windowsphone8');
			}
			else if(jQuery.mob.android()) {
				html.addClass('android');
				if(jQuery.mob.android('2')) {
					html.addClass('android2');
				}
				else if(jQuery.mob.android('3')) {
					html.addClass('android3');
				}
				else if(jQuery.mob.android('4')) {
					html.addClass('android4');
				}
			}
			else if(jQuery.mob.blackberry()) {
				html.addClass('blackberry');
			}
		},
		addClasses : function() {
			var html = jQuery('html');
			
			jQuery.mob.addDeviceClass();
			jQuery.mob.addBrowserClass();
			jQuery.mob.addOSClass();
			if(jQuery.mob.retina()) {
				html.addClass('retina');
			}
			if(jQuery.mob.standalone()) {
				html.addClass('standalone');
			}
			if(jQuery.mob.retina()) {
				html.addClass('retina');
			}
			if(jQuery.mob.halfretina()) {
				html.addClass('halfretina');
			}
			if(jQuery.mob.anysmartphone()) {
				html.addClass('smartphone');
			}
			if(jQuery.mob.touchdevice()) {
				html.addClass('touch');
			}
		}
    }			
});
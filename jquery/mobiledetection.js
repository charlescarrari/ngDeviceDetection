/*
 * Detect mobile browsers and devices
 *
 * Version 2.0
 *
 * Author: Jos Koomen - RocketPower
 * Twitter : @_RocketPower
 * E-mail : Jos@RocketPower.nu 
 * Further changes, comments: @_RocketPower
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
			return $.mob.userAgent.indexOf('iphone') != -1;
		},
		ipod : function() {
			return $.mob.userAgent.indexOf('ipod') != -1;
		},
		ipad : function() {
			return $.mob.userAgent.indexOf('ipad') != -1;
		},
		htc : function() {
			return $.mob.userAgent.indexOf('htc') != -1;
		},
		sonyericsson : function() {
			return $.mob.userAgent.indexOf('sonyericsson') != -1;
		},
		acer : function() {
			return $.mob.userAgent.indexOf('acer') != -1;
		},
		LG : function() {
			return $.mob.userAgent.indexOf('lg-') != -1;
		},
		motorola : function() {
			return $.mob.userAgent.indexOf('motorola') != -1;
		},
		nokia : function() {
			return $.mob.userAgent.indexOf('nokia') != -1;
		},
		samsung : function() {
			return $.mob.userAgent.indexOf('gt-') != -1 || $.mob.userAgent.indexOf('galaxy') != -1;
		},
		iemobile9 : function() {
			return $.mob.userAgent.indexOf('iemobile/9') != -1;
		},
		operamini : function() {
			return $.mob.userAgent.indexOf('opera mini') != -1;
		},
		firefox : function() {
			return $.mob.userAgent.indexOf('firefox') != -1;
		},
		webkit : function() {
			return $.mob.userAgent.indexOf('webkit') != -1;
		},
		ios : function(version) {
			var a = ($.mob.iphone() || $.mob.ipad() || $.mob.ipod());
			if(!a) return false;
			if(version != undefined) {
				switch(version) {
					case '3':
						return ($.mob.userAgent.indexOf('os 3') != -1) && $.mob.ios();
					case '4':
						return ($.mob.userAgent.indexOf('os 4') != -1) && $.mob.ios();
					case '5':
						return ($.mob.userAgent.indexOf('os 5') != -1) && $.mob.ios();
					default:
						return a;
				}
			}
			return a;
		},
		windowsphone7 : function() {
			return $.mob.userAgent.indexOf('windows phone os 7') != -1;
		},
		android : function (version) {
			var a = $.mob.userAgent.indexOf('android') != -1;
			if(!a) return false;
			if(version != undefined) {
				switch(version) {
					case '2.1':
						return $.mob.userAgent.indexOf('android 2.1') != -1;
					case '2.2':
						return $.mob.userAgent.indexOf('android 2.2') != -1;
					case '2.3':
						return $.mob.userAgent.indexOf('android 2.3') != -1;
					case '3':
						return $.mob.userAgent.indexOf('android 3') != -1;
					case '4':
						return $.mob.userAgent.indexOf('android 4') != -1;
					default:
						return a;
				}
			}
			return a;
		},
		blackberry : function() {
			return $.mob.userAgent.indexOf('blackberry') != -1;
		},
		retina : function() {
			return window.devicePixelRatio > 1;
		},
		standalone : function() {
			return ("standalone" in window.navigator) && (window.navigator.standalone == true);
		},
		orientation : function() {
			return $.mob.portrait() ? 'portrait' : 'landscape';
		},
		landscape : function() {
			return (window.orientation===-90)||(window.orientation===90);
		},
		portrait : function() {
			return (window.orientation===0)||(window.orientation===180);
		},
    	addDeviceClass : function() {
			var html = $('html');
			if($.mob.ipad()) {
				html.addClass('ipad');
			}
			if($.mob.iphone()) {
				html.addClass('iphone');
			}
			if($.mob.ipod()) {
				html.addClass('ipod');
			}
			if($.mob.blackberry()) {
				html.addClass('blackberry');
			}
			if($.mob.htc()) {
				html.addClass('htc');
			}
			if($.mob.nokia()) {
				html.addClass('nokia');
			}
			if($.mob.samsung()) {
				html.addClass('samsung');
			}
			if($.mob.sonyericsson()) {
				html.addClass('sonyericsson');
			}
			if($.mob.acer()) {
				html.addClass('acer');
			}
			if($.mob.LG()) {
				html.addClass('LG');
			}
			if($.mob.motorola()) {
				html.addClass('motorola');
			}
		},
		addBrowserClass : function() {
			var html = $('html');
			if($.mob.iemobile9()) {
				html.addClass('iemobile9');
			}
			else if($.mob.operamini()) {
				html.addClass('operamini');
			}
			else if($.mob.firefox()) {
				html.addClass('firefox');
			}
			else if($.mob.webkit()) {
				html.addClass('webkit');
			}
		},
		addOSClass : function() {
			var html = $('html');
			if($.mob.ios()) {
				html.addClass('ios');
				if($.mob.ios('3')) {
					html.addClass('ios3');
				}
				else if($.mob.ios('4')) {
					html.addClass('ios4');
				}
				else if($.mob.ios('5')) {
					html.addClass('ios5');
				}
			}
			if($.mob.windowsphone7()) {
				html.addClass('windowsphone');
			}
			if($.mob.android()) {
				html.addClass('android');
				if($.mob.android('2.1')) {
					html.addClass('android2-1');
				}
				else if($.mob.android('2.2')) {
					html.addClass('android2-2');
				}
				else if($.mob.android('2.3')) {
					html.addClass('android2-3');
				}
				else if($.mob.android('3')) {
					html.addClass('android3');
				}
				else if($.mob.android('4')) {
					html.addClass('android4');
				}
			}
			if($.mob.blackberry()) {
				html.addClass('blackberry');
			}
		},
		addClasses : function() {
			$.mob.addDeviceClass();
			$.mob.addBrowserClass();
			$.mob.addOSClass();
			if($.mob.retina()) {
				html.addClass('retina');
			}
			if($.mob.standalone()) {
				html.addClass('standalone');
			}
		}
    }			
});
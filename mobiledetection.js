/*!
 * Detect mobile browsers and devices
 *
 * Version 1.0
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
    mobiledevice : {
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
			return $.mob.userAgent.indexOf('samsung') != -1;
		}
    },
    mobilebrowser : {
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
		}
    },
    mobileOS : {
		ios : function() {
			return ($.mobiledevice.iphone() || $.mobiledevice.ipad() || $.mobiledevice.ipod());
		},
		ios3 : function() {
			return ($.mob.userAgent.indexOf('os 3') != -1) && ($.mobileOS.ios());
		},
		ios4 : function() {
			return ($.mob.userAgent.indexOf('os 4') != -1) && ($.mobileOS.ios());
		},
		ios5 : function() {
			return ($.mob.userAgent.indexOf('os 5') != -1) && ($.mobileOS.ios());
		},
		windowsPhone7 : function() {
			return $.mob.userAgent.indexOf('windows phone os 7') != -1;
		},
		android : function () {
			return $.mob.userAgent.indexOf('android') != -1;
		},
		blackberry : function() {
			return $.mob.userAgent.indexOf('blackberry') != -1;
		}
    },
    mob : {
    	userAgent : navigator.userAgent.toLowerCase(),
    	addDeviceClass : function() {
			var html = $('html');
			if($.mobiledevice.ipad()) {
				html.addClass('ipad');
			}
			if($.mobiledevice.iphone()) {
				html.addClass('iphone');
			}
			if($.mobiledevice.ipod()) {
				html.addClass('ipod');
			}
			if($.mobileOS.blackberry()) {
				html.addClass('blackberry');
			}
			if($.mobiledevice.htc()) {
				html.addClass('htc');
			}
			if($.mobiledevice.nokia()) {
				html.addClass('nokia');
			}
			if($.mobiledevice.samsung()) {
				html.addClass('samsung');
			}
			if($.mobiledevice.sonyericsson()) {
				html.addClass('sonyericsson');
			}
			if($.mobiledevice.acer()) {
				html.addClass('acer');
			}
			if($.mobiledevice.LG()) {
				html.addClass('LG');
			}
			if($.mobiledevice.motorola()) {
				html.addClass('motorola');
			}
		},
		addBrowserClass : function() {
			var html = $('html');
			if($.mobilebrowser.iemobile9()) {
				html.addClass('iemobile9');
			}
			if($.mobilebrowser.operamini()) {
				html.addClass('operamini');
			}
			if($.mobilebrowser.firefox()) {
				html.addClass('firefox');
			}
			if($.mobilebrowser.webkit()) {
				html.addClass('webkit');
			}
		},
		addOSClass : function() {
			var html = $('html');
			if($.mobileOS.ios()) {
				html.addClass('ios');
			}
			if($.mobileOS.ios3()) {
				html.addClass('ios3');
			}
			if($.mobileOS.ios4()) {
				html.addClass('ios4');
			}
			if($.mobileOS.ios5()) {
				html.addClass('ios5');
			}
			if($.mobileOS.windowsPhone7()) {
				html.addClass('windowsphone');
			}
			if($.mobileOS.android()) {
				html.addClass('android');
			}
			if($.mobileOS.blackberry()) {
				html.addClass('blackberry');
			}
		},
		addClasses : function() {
			$.mob.addDeviceClass();
			$.mob.addBrowserClass();
			$.mob.addOSClass();
		}
    }			
});
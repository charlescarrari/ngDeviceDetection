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
	    mob : {
			userAgent : navigator.userAgent.toLowerCase(),
			apple : function() {
				return $.mob.userAgent.indexOf('apple') != -1;
			},
			ios3 : function() {
				return $.mob.userAgent.indexOf('iphone os 3') != -1;
			},
			ios4 : function() {
				return $.mob.userAgent.indexOf('iphone os 4') != -1;
			},
			ios5 : function() {
				return $.mob.userAgent.indexOf('iphone os 5') != -1;
			},
			iphone : function() {
				return $.mob.userAgent.indexOf('iphone') != -1;
			},
			ipod : function() {
				return $.mob.userAgent.indexOf('ipod') != -1;
			},
			ipad : function() {
				return $.mob.userAgent.indexOf('ipad') != -1;
			},
			windowsPhone7 : function() {
				return $.mob.userAgent.indexOf('windows phone os 7') != -1;
			},
			iemobile9 : function() {
				return $.mob.userAgent.indexOf('iemobile/9') != -1;
			},
			android : function () {
				return $.mob.userAgent.indexOf('android') != -1;
			},
			blackberry : function() {
				return $.mob.userAgent.indexOf('blackberry') != -1;
			},
			htc : function() {
				return $.mob.userAgent.indexOf('htc') != -1;
			},
			nokia : function() {
				return $.mob.userAgent.indexOf('nokia') != -1;
			},
			samsung : function() {
				return $.mob.userAgent.indexOf('samsung') != -1;
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
			},
			addOSClass : function() {
				var html = $('html');
				if($.mob.ios3()) {
					html.addClass('ios');
					html.addClass('ios3');
				}
				if($.mob.ios4()) {
					html.addClass('ios');
					html.addClass('ios4');
				}
				if($.mob.ios5()) {
					html.addClass('ios');
					html.addClass('ios5');
				}
				if($.mob.windowsPhone7()) {
					html.addClass('windowsphone');
				}
				if($.mob.iemobile9()) {
					html.addClass('iemobile9');
				}
				if($.mob.android()) {
					html.addClass('android');
				}
			},
			addClasses : function() {
				$.mob.addDeviceClasses();
				$.mob.addOSClass();
			}
		}
	});
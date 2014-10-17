/*
 * Detect mobile browsers and devices
 *
 * Version 2.5
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
var MobileDetection = function() {

	this.iphone = function() {
		return userAgent.indexOf('iphone') !== -1;
	};
	
	this.ipod = function() {
		return userAgent.indexOf('ipod') !== -1;
	};
	
	this.ipad = function() {
		return userAgent.indexOf('ipad') !== -1;
	};
	
	
	this.htc = function() {
		return userAgent.indexOf('htc') !== -1;
	};
	
	this.sonyericsson = function() {
		return userAgent.indexOf('sonyericsson') !== -1;
	};
	
	this.acer = function() {
		return userAgent.indexOf('acer') !== -1;
	};
		
	this.LG = function() {
		return userAgent.indexOf('lg-') !== -1;
	};
		
	this.motorola = function() {
		return userAgent.indexOf('motorola') !== -1;
	};
		
	this.nokia = function() {
		return userAgent.indexOf('nokia') !== -1;
	};
		
	this.samsung = function() {
		return userAgent.indexOf('gt-') !== -1 || userAgent.indexOf('galaxy') !== -1;
	};
		
	this.iemobile9 = function() {
		return userAgent.indexOf('iemobile/9') !== -1;
	};
	
	this.iemobile10 = function() {
		return userAgent.indexOf('iemobile/10') !== -1;
	};
		
	this.operamini = function() {
		return userAgent.indexOf('opera mini') !== -1;
	};
		
	this.firefox = function() {
		return userAgent.indexOf('firefox') !== -1;
	};
		
	this.webkit = function() {
		return userAgent.indexOf('webkit') !== -1;
	};
		
	this.windowsphone7 = function() {
		return userAgent.indexOf('windows phone os 7') !== -1;
	};
	
	this.windowsphone8 = function() {
		return userAgent.indexOf('windows phone 8') !== -1;
	};
	
	this.ios = function(version) {
		var a = (this.iphone() || this.ipad() || this.ipod());
		
		if(version !== undefined && a) {
			switch(version) {
				case '5':
					return (userAgent.indexOf('os 5') !== -1);
				case '6':
					return (userAgent.indexOf('os 6') !== -1);
				case '7':
					return (userAgent.indexOf('os 7') !== -1);
				case '8':
					return (userAgent.indexOf('os 8') !== -1);
				default:
					return false;
			}
		}
		return a;
	};

	this.android = function (version) {
		var a = userAgent.indexOf('android') !== -1;
		
		if(version !== undefined && a) {
			switch(version) {
				case '2':
				return userAgent.indexOf('android 2') !== -1;
				case '3':
				return userAgent.indexOf('android 3') !== -1;
				case '4':
				return userAgent.indexOf('android 4') !== -1;
				default:
					return false;
			}
		}
		return a;
	};
			
	this.blackberry = function() {
		return userAgent.indexOf('blackberry') !== -1;
	};
		
	this.halfretina = function() {
		return window.devicePixelRatio > 1 && window.devicePixelRatio < 2;
	};
	
	this.retina = function() {
		return window.devicePixelRatio === 2;
	};
		
	this.standalone = function() {
		return ("standalone" in window.navigator) && (window.navigator.standalone === true);
	};
		
	this.orientation = function() {
		return this.portrait() ? 'portrait' : 'landscape';
	};
		
	this.landscape = function() {
		return (window.orientation===-90)||(window.orientation===90);
	};
		
	this.portrait = function() {
		return (window.orientation===0)||(window.orientation===180);
	};
	
	this.touchdevice = function() {
    	return !!('ontouchstart' in window);
 	};
 	
 	this.anysmartphone = function() {
	 	return /android|webos|iphone|blackberry/i.test(userAgent);
	};
	
    this.addDeviceClass = function() {		
		if(this.ipad()) {
			addClassToHTMLTag('ipad');
		}
		else if(this.iphone()) {
			addClassToHTMLTag('iphone');
		}
		else if(this.ipod()) {
			addClassToHTMLTag('ipod');
		}
		else if(this.blackberry()) {
			addClassToHTMLTag('blackberry');
		}
		else if(this.htc()) {
			addClassToHTMLTag('htc');
		}
		else if(this.nokia()) {
			addClassToHTMLTag('nokia');
		}
		else if(this.samsung()) {
			addClassToHTMLTag('samsung');
		}
		else if(this.sonyericsson()) {
			addClassToHTMLTag('sonyericsson');
		}
		else if(this.acer()) {
			addClassToHTMLTag('acer');
		}
		else if(this.LG()) {
			addClassToHTMLTag('LG');
		}
		else if(this.motorola()) {
			addClassToHTMLTag('motorola');
		}
	};
	
	this.addBrowserClass = function() {
		if(this.iemobile9()) {
			addClassToHTMLTag('iemobile9');
		}
		if(this.iemobile10()) {
			addClassToHTMLTag('iemobile10');
		}
		else if(this.operamini()) {
			addClassToHTMLTag('operamini');
		}
		else if(this.firefox()) {
			addClassToHTMLTag('firefox');
		}
		else if(this.webkit()) {
			addClassToHTMLTag('webkit');
		}
	};
		
	this.addOSClass = function() {
		if(this.ios()) {
			addClassToHTMLTag('ios');
			if(this.ios('5')) {
				addClassToHTMLTag('ios5');
			}
			else if(this.ios('6')) {
				addClassToHTMLTag('ios6');
			}
			else if(this.ios('7')) {
				addClassToHTMLTag('ios7');
			}
			else if(this.ios('8')) {
				addClassToHTMLTag('ios8');
			}
		}
		else if(this.windowsphone7()) {
			addClassToHTMLTag('windowsphone');
			addClassToHTMLTag('windowsphone7');
		}
		else if(this.windowsphone8()) {
			addClassToHTMLTag('windowsphone');
			addClassToHTMLTag('windowsphone8');
		}
		else if(this.android()) {
			addClassToHTMLTag('android');
			if(this.android('2')) {
				addClassToHTMLTag('android2');
			}
			else if(this.android('3')) {
				addClassToHTMLTag('android3');
			}
			else if(this.android('4')) {
				addClassToHTMLTag('android4');
			}
		}
		else if(this.blackberry()) {
			addClassToHTMLTag('blackberry');
		}
	};
		
	this.addClasses = function() {
		this.addDeviceClass();
		this.addBrowserClass();
		this.addOSClass();
		if(this.halfretina()) {
			addClassToHTMLTag('halfretina');
		}
		if(this.retina()) {
			addClassToHTMLTag('retina');
		}
		if(this.touchdevice()()) {
			addClassToHTMLTag('touch');
		}
		if(this.anysmartphone()()) {
			addClassToHTMLTag('smartphone');
		}
		if(this.standalone()) {
			addClassToHTMLTag('standalone');
		}
	};
	
	var userAgent = navigator.userAgent.toLowerCase();
	
	var addClassToHTMLTag = function(cName) {
		var html = document.getElementsByTagName('html')[0];
		html.className = html.className + ' ' + cName;
	};
};
<?php

	/*
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
	
	class MobileDetection {
		
		private $_userAgent = null;
		
		function __construct() {
			$this->_userAgent = strtolower($_SERVER['HTTP_USER_AGENT']);
		}
		
		public function iPad() {
			return (bool) strpos($this -> _userAgent,'ipad');
		}
		
		public function iPhone() {
			return (bool) strpos($this -> _userAgent,'iphone');
		}
		
		public function iPod() {
			return (bool) strpos($this -> _userAgent,'ipod');
		}
		
		public function iOS($version = 0) {
			$is_iOS = $this -> iPhone() || $this -> iPad() || $this -> iPod();
			if(!$is_iOS) return false;
					
			switch($version) {
				case 3:
					return (bool) strpos($this -> _userAgent,'os 3');
					break;
				case 4:
					return (bool) strpos($this -> _userAgent,'os 4');				
					break;
				case 5:
					return (bool) strpos($this -> _userAgent,'os 5');
					break;
			}
			
			return false;
		}
		
		
		public function android($version = 0) {
			$isAndroid = (bool) strpos($this -> _userAgent,'android');
			if(!$isAndroid) return false;

			switch($version) {
				case 2.1:
					return (bool) strpos($this -> _userAgent,'android 2.1');
					break;
				case 2.2:
					return (bool) strpos($this -> _userAgent,'android 2.2');				
					break;
				case 2.3:
					return (bool) strpos($this -> _userAgent,'android 2.3');
					break;
				case 3:
					return (bool) strpos($this -> _userAgent,'android 3');
					break;
				case 4:
					return (bool) strpos($this -> _userAgent,'android 4');
					break;
				case 0;
				default:
					return true;
					break;
			}

			return false;
			
		}
		
		public function blackberry() {
			return (bool) strpos($this -> _userAgent,'blackberry');
		}
		
		public function windowsPhone7() {
			return (bool) strpos($this -> _userAgent,'windows phone os 7');
		}
		
		public function ieMobile9() {
			return (bool) strpos($this -> _userAgent,'iemobile/9');
		}
		
		public function operamini() {
			return (bool) strpos($this -> _userAgent,'opera mini');
		}
		
		public function firefox() {
			return (bool) strpos($this -> _userAgent,'firefox');
		}
		
		public function webkit() {
			return (bool) strpos($this -> _userAgent,'webkit');
		}
		
		public function retina() {
			
			if(isset($_COOKIE["devicePixelRatio"])) :
	        	$devicePixelRatio = $_COOKIE["devicePixelRatio"];
		        return ($devicePixelRatio >= 2);
			else :
		    	echo '<script>';
		        echo 'var the_cookie = "devicePixelRatio="+window.devicePixelRatio+";"+the_cookie;';
		        echo 'document.cookie = the_cookie;';
		        echo 'location = "'. $_SERVER['PHP_SELF'] . '";';
		    	echo '</script>';
				
		    endif;
		}
	}
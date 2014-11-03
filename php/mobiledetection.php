<?php

	/*
	 * Detect mobile browsers and devices
	 *
	 * Version 2.5.1
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
	
	class MobileDetection {
		
		private $_userAgent = null;
		private $_simulateRetina = false;
		
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
				case 5:
					return (bool) strpos($this -> _userAgent,'os 5');
				case 6:
					return (bool) strpos($this -> _userAgent,'os 6');
				case 7:
					return (bool) strpos($this -> _userAgent,'os 7');
				case 8:
					return (bool) strpos($this -> _userAgent,'os 8');
				case 0:
				default:
					return true;
			}
			
			return true;
		}
		
		
		public function android($version = 0) {
			$isAndroid = (bool) strpos($this -> _userAgent,'android');
			if(!$isAndroid) return false;

			switch($version) {
				case 2:
					return (bool) strpos($this -> _userAgent,'android 2');
				case 3:
					return (bool) strpos($this -> _userAgent,'android 3');
				case 4:
					return (bool) strpos($this -> _userAgent,'android 4');
				case 5:
					return (bool) strpos($this -> _userAgent,'android 5');
				case 0;
				default:
					return true;
			}

			return true;
			
		}
		
		public function blackberry() {
			return (bool) strpos($this -> _userAgent,'blackberry');
		}
		
		public function windowsPhone7() {
			return (bool) strpos($this -> _userAgent,'windows phone os 7');
		}
		
		public function windowsPhone8() {
			return (bool) strpos($this -> _userAgent,'windows phone 8');
		}
		
		public function ieMobile9() {
			return (bool) strpos($this -> _userAgent,'iemobile/9');
		}
		
		public function ieMobile10() {
			return (bool) strpos($this -> _userAgent,'iemobile/10');
		}
		
		public function operaMini() {
			return (bool) strpos($this -> _userAgent,'opera mini');
		}
		
		public function firefox() {
			return (bool) strpos($this -> _userAgent,'firefox');
		}
		
		public function webkit() {
			return (bool) strpos($this -> _userAgent,'webkit');
		}
		
		public function retina() {
			if($this->_simulateRetina) return true;
			
			if(isset($_COOKIE["devicePixelRatio"])) :
	        	$devicePixelRatio = $_COOKIE["devicePixelRatio"];
		        return ($devicePixelRatio == 2);
			else :
		    	echo '<script>';
		        echo 'var dpr_cookie = "devicePixelRatio="+window.devicePixelRatio+";"+dpr_cookie;';
		        echo 'document.cookie = dpr_cookie;';
		        echo 'location = "'. $_SERVER['PHP_SELF'] . '";';
		    	echo '</script>';
				
		    endif;
		}
		
		public function halfretina() {
			if($this->_simulateRetina) return false;
			
			if(isset($_COOKIE["devicePixelRatio"])) :
	        	$devicePixelRatio = $_COOKIE["devicePixelRatio"];
		        return ($devicePixelRatio > 1 && $devicePixelRatio < 2);
			else :
		    	echo '<script>';
		        echo 'var dpr_cookie = "devicePixelRatio="+window.devicePixelRatio+";"+dpr_cookie;';
		        echo 'document.cookie = dpr_cookie;';
		        echo 'location = "'. $_SERVER['PHP_SELF'] . '";';
		    	echo '</script>';
				
		    endif;
		}
		
		public function simulateRetina($simulate = true) {
			$this->_simulateRetina = $simulate;
		}
		
	}
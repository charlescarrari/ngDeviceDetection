This plugin comes with the most common devices and os systems for modern mobile web developers. It's inspired by html5boilerplate and jquery's  $.browser extension.

## NEW!! Detect retina displays
You can now detect if your device has a display with a double pixel ratio (Like Apple's retina).

+ $.mob.retina();


### Detect your device
You can detect several devices. All detections returns a boolean, You can detect for the following devices:

+ iPhone 		: $.mobiledevice.iphone();
+ iPad  		: $.mobiledevice.ipad();
+ iPod 			: $.mobiledevice.ipod();
+ Nokia			: $.mobiledevice.nokia();
+ HTC 			: $.mobiledevice.htc();
+ Samsung		: $.mobiledevice.samsung();
+ Blackberry	: $.mobiledevice.blackberry();
+ HTC			: $.mobiledevice.htc();
+ Acer			: $.mobiledevice.acer();
+ SonyEricsson	: $.mobiledevice.sonyericsson();
+ Motorola		: $.mobiledevice.motorola();
+ LG			: $.mobiledevice.LG();


### Detect your OS
You can detect several Operating systems. All detections returns a boolean, You can detect for the following Operating systems:

+ iOs (all)			: $.mobileOS.ios();
+ iOs 3				: $.mobileOS.ios3();
+ iOs 4				: $.mobileOS.ios4();
+ iOs 5				: $.mobileOS.ios5();
+ Android (all)		: $.mobileOS.android();
+ Android 2.1		: $.mobileOS.android2_1();
+ Android 2.2		: $.mobileOS.android2_2();
+ Android 2.3		: $.mobileOS.android2_3();
+ Android 3			: $.mobileOS.android3();
+ Android 4			: $.mobileOS.android4();
+ Windows Phone 7	: $.mobileOS.windowsPhone7();


### Detect your mobile browser
You can detect several Mobile browsers. All detections returns a boolean, You can detect for the following Browsers:

+ Opera Mini		: $.mobilebrowser.operamini();
+ Webkit			: $.mobilebrowser.webkit();
+ Firefox			: $.mobilebrowser.firefox();
+ IE Mobile			: $.mobilebrowser.iemobile();


### Add your device, browser and os classes
Like in html5boilerplate where you get extra classes for the classic IE browsers you can add classes for mobile devices and operating systems into your html tag
It's done with just one extra line of code.


### add browser, OS & Device classes but also a class called "retina" (when you have a retina display) to your html tag.
$.mob.addClasses(); 

### add OS class(es)
$.mob.addOSClass();

### add Device class(es)
$.mob.addDeviceClass();

### add Browser class(es)
$.mob.addBrowserClass();

### There is also a php class with the major checks
<?php 

	$mobile_detection = new MobileDetection();
	if($mobile_detection -> ios(5)) :
		// do iOS 5 stuff
	else :
		// do other stuff;
	endif;
	
?>

## The new Wordpress plugin
<?php 
	
	// in your theme use:
	global $mobile_detection;
	
	if($mobile_detection -> ios(5)) :
		// do iOS 5 stuff
	else :
		// do other stuff;
	endif;
	
?>

The wordpress plugin automatic instantiates the class.

### php methods
$mobile_detection -> iPad(); // returns boolean
$mobile_detection -> iPhone(); // returns boolean
$mobile_detection -> iPod(); // returns boolean
$mobile_detection -> iOS($version); // param $version = 3,4 or 5 - returns boolean 
$mobile_detection -> android($version); // param $version = 2.1, 2.2, 2.3, 3 or 4 - returns boolean
$mobile_detection -> blackberry(); // returns boolean
$mobile_detection -> windowsPhone7(); // returns boolean
$mobile_detection -> ieMobile9(); // returns boolean
$mobile_detection -> operamini(); // returns boolean
$mobile_detection -> firefox(); // returns boolean
$mobile_detection -> webkit(); // returns boolean
$mobile_detection -> retina(); // returns boolean if devicePixelRation >=2


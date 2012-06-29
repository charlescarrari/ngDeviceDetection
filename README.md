This plugin comes with the most common devices and os systems for modern mobile web developers. It's inspired by html5boilerplate (it's using ie classes for the html tag) and jquery's  $.browser extension.

### Detect retina displays
You can detect if your device has a display with a double pixel ratio (Like Apple's retina).

+ $.mob.retina(); // returns boolean


### Detect standalone web applications
Detect if your web application is running in standalone mode or in safari

+ $.mob.standalone();  // returns boolean


### Detect orientation
You can detect the orientation of your device.

+ $.mob.orientation(); // returns 'portrait' or 'landscape' as string
+ $.mob.portrait(); // returns boolean
+ $.mob.landscape(); // returns boolean


### Detect your device
You can detect several devices. All detections returns a boolean. All functions are added to the 'mob' object.
You can detect the following devices:

+ iPhone 		: $.mob.iphone();
+ iPad  		: $.mob.ipad();
+ iPod 			: $.mob.ipod();
+ Nokia			: $.mob.nokia();
+ HTC 			: $.mob.htc();
+ Samsung		: $.mob.samsung();
+ Blackberry	: $.mob.blackberry();
+ HTC			: $.mob.htc();
+ Acer			: $.mob.acer();
+ SonyEricsson	: $.mob.sonyericsson();
+ Motorola		: $.mob.motorola();
+ LG			: $.mob.LG();


### Detect your OS
You can detect several Operating systems. All detections returns a boolean. All functions are added to the 'mob' object. Android and iOS subversions are no longer seperate functions.
You can detect the following Operating systems:

+ iOs (all)			: $.mob.ios();
+ iOs 3				: $.mob.ios('3');
+ iOs 4				: $.mob.ios('4');
+ iOs 5				: $.mob.ios('5');
+ iOs 6				: $.mob.ios('6');
+ Android (all)		: $.mob.android();
+ Android 2.1		: $.mob.android('2.1');
+ Android 2.2		: $.mob.android('2.2');
+ Android 2.3		: $.mob.android('2.3');
+ Android 3			: $.mob.android('3');
+ Android 4			: $.mob.android('4');
+ Windows Phone 7	: $.mob.windowsphone7();


### Detect your mobile browser
You can detect several Mobile browsers. All detections returns a boolean. All functions are added to the 'mob' object.
You can detect the following Browsers:

+ Opera Mini		: $.mob.operamini();
+ Webkit			: $.mob.webkit();
+ Firefox			: $.mob.firefox();
+ IE Mobile			: $.mob.iemobile();


### Add your device, browser and os classes
Like in html5boilerplate where you get extra classes for the classic IE browsers you can add classes for mobile devices and operating systems into your html tag
It's done with just one extra line of code.

+ $.mob.addClasses(); 


### add browser, OS & Device classes but also a class called "retina" (when you have a retina display) to your html tag and a class standalone (when in fullscreen mode on ios).
$.mob.addClasses(); 

### add OS class(es)
$.mob.addOSClass();

### add Device class(es)
$.mob.addDeviceClass();

### add Browser class(es)
$.mob.addBrowserClass();

### There is also a php class with the major checks

<pre class="php">
	
	// phpcode

	$mobile = new MobileDetection();
	if($mobile -> ios(5)) :
		// do iOS 5 stuff
	else :
		// do other stuff;
	endif;
	
</pre>

### The Wordpress plugin

The Wordpress plugin automatic instantiates the class.

<pre class="php">
	
	// phpcode
	
	// in your theme use:
	global $mobile;
	
	if($mobile -> ios(5)) :
		// do iOS 5 stuff
	else :
		// do other stuff;
	endif;
	
</pre>

### php methods
+ $mobile -> iPad(); // returns boolean
+ $mobile -> iPhone(); // returns boolean
+ $mobile -> iPod(); // returns boolean
+ $mobile -> iOS($version); // param $version = 3,4,5 or 6 (not mandatory) - returns boolean 
+ $mobile -> android($version); // param $version = 2.1, 2.2, 2.3, 3 or 4 (not mandatory) - returns boolean
+ $mobile -> blackberry(); // returns boolean
+ $mobile -> windowsPhone7(); // returns boolean
+ $mobile -> ieMobile9(); // returns boolean
+ $mobile -> operaMini(); // returns boolean
+ $mobile -> firefox(); // returns boolean
+ $mobile -> webkit(); // returns boolean
+ $mobile -> retina(); // returns boolean  | true when devicePixelRation > 1

### NEW Native javascript version

<pre type="js">
	
	// js script
	
	var mobile = new MobileDetection();
	if(mobile.ios('5')) {
		// do iOS 5 stuff	
	} else {
		// do other stuff;	
	}
	
</pre>

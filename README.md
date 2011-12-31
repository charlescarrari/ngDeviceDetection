This plugin comes with the most common devices and os systems for modern mobile web developers. It's inspired by html5boilerplate and jquery's  $.browser extension.

### Detect your device
You can detect several devices. All detections returns a boolean, You can detect for the following devices:

+ Apple Device 	: $.mob.apple();
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


### Detect your OS and browser
You can detect several devices. All detections returns a boolean, You can detect for the following devices:

+ iOs (all)			: $.mob.ios();
+ iOs 3				: $.mob.ios3();
+ iOs 4				: $.mob.ios4();
+ iOs 5				: $.mob.ios5();
+ Android			: $.mob.android();
+ Windows Phone 7	: $.mob.windowsPhone7();
+ IE Mobile 9		: $.mob.iemobile9();


### Add your device and os classes
Like in html5boilerplate where you get extra classes for the classic IE browsers you can add classes for mobile devices and operating systems into your html tag
It's done with just 1 extra line of code.

# add both OS and Device classes
$.mob.addClasses(); 

# add both OS class(es)
$.mob.addOSClass();

# add Device class(es)
$.mob.addDeviceClass();
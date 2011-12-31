This plugin comes with the most common devices and os systems for modern mobile web developers. It's inspired by html5boilerplate and jquery's  $.browser extension.

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
+ Android			: $.mobileOS.android();
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


# add both OS and Device classes
$.mob.addClasses(); 

# add OS class(es)
$.mob.addOSClass();

# add Device class(es)
$.mob.addDeviceClass();

# add Browser class(es)
$.mob.addBrowserClass();
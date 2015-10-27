#Device Detector Module for Angular

The Device Detector Module = previously known as Mobile Detection plugin. 

The jQuery plugin and PHP class + wordpress plugin are still available in a separated branch called **"v2-mobile-detection"**. With this version 3.0 the module is future proof! 2.* is not prioritized with updates.

Read more about v2.* in the [Wiki](https://github.com/joskoomen/Mobile-Detection/wiki/2.*)

###NEW!! Classes
Inspired by Foundation i've added some classes to show, hide, and set visibility for most of the directive classes. Show certain divs for iOS only and hide them for Android
This is added since 3.2.0 and not really used in production projects this far.

###3.+
3.+ is an Angular Module only

###Services
+ `jkDetectionService`        : This is the Core Service that handles the checks.
+ `jkDetectionClassesService` : A separated service to use with the directives.

###Directives
In Device Detector 3.0 we have directives to add classes. Best practice is to add the  directive in the html tag.
With the classes it's easy to create style separations for your device, browser, screen density or operating system.
To see what classes are added for each device check the jkDetectionClassesService inside `DetectionClassesService.js`

+ `detection-classes`	: Add all classes for the seperated directives described below.
+ `browser-class`		: Add classes the users browser to the element.
+ `density-class`		: Add classes the users device screendensity to the element.
+ `device-class`		: Add classes the users device to the element.
+ `os-class`			: Add classes the users operating system to the element.
+ `functional-classes`	: Add some functional classes for the users device like `touch`, `mobile` etc.

###Underscore
The Device Detector uses [underscore.js](http://www.underscorejs.org). The module expects you've already have this available on creation.

###More info?
Check the wiki for [more info](https://github.com/joskoomen/Mobile-Detection/wiki/3.*)

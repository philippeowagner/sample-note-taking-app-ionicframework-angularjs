## Sample note taking app ionic & angularjs

This is a sample note taking app based on ionic framework just for demonstrating purposes.

![image](/screenshots/IMG_1514.png?raw=true =120x)
![image](/screenshots/IMG_1515.png?raw=true =120x)
![image](/screenshots/IMG_1516.png?raw=true =120x)
![image](/screenshots/IMG_1517.png?raw=true =120x)

### Install Ionic

	$ npm install -g cordova ionic
		
### View in Browser

	$ cd sample-note-taking-app-ionicframework-angularjs
	$ bower install
	$ ionic serve

### View in iOS Emulator (on Mac)

	$ cd sample-note-taking-app-ionicframework-angularjs
	$ cordova platform add ios
	$ ionic build ios
	$ ionic emulate ios

### View in Android Emulator

	$ cd sample-note-taking-app-ionicframework-angularjs
	$ cordova platform add android
	$ ionic build android
	$ ionic emulate android

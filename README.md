## Sample note taking app ionic & angularjs

This is a sample note taking app based on ionic framework just for demonstrating purposes.

![image](http://www.vinhhungle.com/wp-content/uploads/2015/06/IMG_1514.png =120x)
![image](http://www.vinhhungle.com/wp-content/uploads/2015/06/IMG_1515.png =120x)
![image](http://www.vinhhungle.com/wp-content/uploads/2015/06/IMG_1516.png =120x)
![image](http://www.vinhhungle.com/wp-content/uploads/2015/06/IMG_1517.png =120x)

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

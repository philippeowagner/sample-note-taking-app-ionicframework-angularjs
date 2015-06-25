## Sample note taking app ionic & angularjs

This is a sample note taking app based on ionic framework just for demonstrating purposes.

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

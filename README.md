# angular-utf8-base64

AngularJS service for UTF-8 and Base64 Javascript Encoding

There is another AngularJS service for Base64 encoding there:
https://github.com/ninjatronic/angular-base64
But it doesn't support

## Installation

### Bower

```
bower install angular-utf8-base64
```

```html
<script src="bower_components/angular-utf8-base64/angular-utf8-base64.js"></script>
```

## Usage

```javascript
angular
    .module('myApp', ['ab-base64'])
    .controller('myController', [

        '$scope','base64',
        function($scope,base64) {

            $scope.encoded = base64.encode('a string');
            $scope.decoded = base64.decode('YSBzdHJpbmc=');
    }]);
```

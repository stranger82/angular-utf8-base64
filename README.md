# angular-utf8-base64

AngularJS service for UTF-8 and Base64 Javascript Encoding

There is another AngularJS service for Base64 encoding [available](https://github.com/ninjatronic/angular-base64).
But it doesn't support UTF-8.

## Installation

### Bower

```
bower install angular-utf8-base64
```

```html
<script src="bower_components/angular-utf8-base64/angular-utf8-base64.min.js"></script>
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

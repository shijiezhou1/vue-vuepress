```
var target = "https://www.google.com";
var key    = "5c32c72da32d9cefe75fadf1111936278f588ade3617c"; //KEY CAN BE ANY THING

$.ajax({
    url: "https://api.linkpreview.net",
    dataType: "jsonp",
    data: {q: target, key: key},
    success: function (response) {
        console.log(response);
    }
});
```
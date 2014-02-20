//modified from http://diveintohtml5.info/geolocation.html
(function() {
    var noGeolocation = function() {
        alert("Could not find you");
    };

    if (!navigator.geolocation || !document.querySelector) {
        noGeolocation();
    }
    else {
        navigator.geolocation.getCurrentPosition(
            function(p) {
                console.log(p);
                document.querySelector("[name='latitude']").value = p.coords.latitude;
                document.querySelector("[name='longitude']").value = p.coords.longitude;
                document.querySelector("[type='submit']").removeAttribute("disabled");
            },
            function(err) {
                noGeolocation();
            }
        );
    }
})();

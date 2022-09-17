var scripts = document.getElementsByTagName('script');
var myScript = scripts[scripts.length - 1];

var queryString = myScript.src.replace(/^[^\?]+\??/, '');

var params = parseQuery(queryString);

var pub_html = null;

function parseQuery(query) {
    var Params = {};
    if (!query) return Params; // return empty object
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) continue;
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

function showPubs(class_name) {
    if (pub_html == null) {
        pub_html = document.getElementById('pubs').innerHTML;
    }
    document.getElementById('pubs').innerHTML = pub_html;
    elements = document.getElementsByClassName(class_name);
    arr = Array.from(elements);
    var html="";
    for (i = 0; i < arr.length ; i++){
        html += arr[i].outerHTML;
    }
    document.getElementById('pubs').innerHTML = html;
}

var gA = 0, gBackend = String.fromCharCode(109, 110, 117, 117, 46, 110, 117), gDownload = !1, gFormat = "mp3", gProgress = ["extracting video information", "loading video", "converting video"], gVideo = !1, parameter;
function create(e) {
    return window.document.createElement(e)
}
function id(e) {
    return window.document.getElementById(e)
}
function select(e) {
    return window.document.querySelectorAll(e)
}
function application() {
    var e = !1;
    try {
        /android|ipad|iphone|mobile/.test(navigator.userAgent.toLowerCase()) || ((e = create("button")).innerText = "Get ByClickDownloader",
        e.onclick = function() {
            window.open(atob("aHR0cHM6Ly9tbnV1Lm51L2QxLw=="))
        }
        ,
        e.type = "button")
    } catch (e) {}
    return e
}
function authorization() {
    if (eval(atob(gC.t[0])) != gC.t[1])
        return !1;
    for (var key = gC.f[6].split("").reverse().join("") + gC.f[7], c = 0; c < atob(gC[0]).split(gC.f[5]).length; c++)
        key += (0 < gC.f[4] ? gC[1].split("").reverse().join("") : gC[1])[atob(gC[0]).split(gC.f[5])[c] - gC.f[3]];
    return 1 == gC.f[1] ? key = key.substring(0, gC.f[6].length + gC.f[7].length) + key.substring(gC.f[6].length + gC.f[7].length).toLowerCase() : 2 == gC.f[1] && (key = key.substring(0, gC.f[6].length + gC.f[7].length) + key.substring(gC.f[6].length + gC.f[7].length).toUpperCase()),
    0 < gC.f[0].length ? btoa(atob(gC.f[0]) + "_" + gC[2]) : 0 < gC.f[2] ? btoa(key.substring(0, gC.f[2] + (gC.f[6].length + gC.f[7].length)) + "_" + gC[2]) : btoa(key + "_" + gC[2])
}
function api(t, r, n, o) {
    gA = 1,
    n || (n = !0,
    select("form span")[0].innerHTML = "restarting conversion");
    var e = new XMLHttpRequest;
    e.onreadystatechange = function() {
        if (4 == this.readyState && 200 == this.status) {
            var e = JSON.parse(this.responseText);
            switch (e.status) {
            case "fail":
                error(3, t, !0);
                break;
            case "ok":
                r || (r = !0,
                select("form div:first-of-type")[0].innerHTML = e.title),
                download(e.link);
                break;
            case "processing":
                0 < e.title.length && !r && (r = !0,
                select("form div:first-of-type")[0].innerHTML = e.title),
                0 == o && (o++,
                select("form span")[0].innerHTML = "converting video"),
                window.setTimeout(function() {
                    api(t, r, n, o)
                }, 9e3)
            }
        }
    }
    ,
    e.open("GET", "https://" + gBackend + "/r/" + gVideo + "/?_=" + Math.random(), !0),
    e.send()
}
function error(e, t, r) {
    if (3 == e && !r)
        return api(t, !1, !1, 0),
        !1;
    r = create("button");
    return r.innerText = "Back",
    r.onclick = function() {
        window.location.href = "/"
    }
    ,
    r.type = "button",
    select("form div:first-of-type")[0].style.textAlign = "center",
    select("form div:first-of-type")[0].innerHTML = "An error occurred (f:" + e + "/e:" + t + ").",
    select("form div:last-of-type")[0].style.justifyContent = "center",
    select("form div:last-of-type")[0].id = "",
    select("form div:last-of-type")[0].innerHTML = "",
    select("form div:last-of-type")[0].append(r),
    12 != t && (r = application()) && select("form div:last-of-type")[0].append(r),
    !1
}
function download(e, t) {
    t && (select("form div:first-of-type")[0].innerHTML = t);
    t = [];
    t[0] = create("button"),
    t[0].innerText = "Download",
    t[0].onclick = function() {
        gDownload || (gDownload = !0,
        window.open("https://" + gBackend + "/" + gA + "/")),
        window.location.href = e + "&s=3&v=" + gVideo + "&f=" + gFormat + "&_=" + Math.random()
    }
    ,
    t[0].type = "button",
    t[1] = create("button"),
    t[1].innerText = "Next",
    t[1].onclick = function() {
        0 == gC.f[0] ? window.location.href = "/" : window.location.href = document.URL
    }
    ,
    t[1].type = "button",
    select("form div:last-of-type")[0].style.justifyContent = "center",
    select("form div:last-of-type")[0].id = "",
    select("form div:last-of-type")[0].innerHTML = "",
    select("form div:last-of-type")[0].append(t[0], t[1]),
    t[2] = application(),
    t[2] && select("form div:last-of-type")[0].append(t[2])
}
function cProgress(e, t, r, n) {
    switch (n) {
    case 0:
        select("form span")[0].innerHTML = gProgress[0];
        break;
    case +gC.c[3]:
        select("form div:first-of-type")[0].innerHTML = r,
        select("form span")[0].innerHTML = gProgress[1];
        break;
    case 2 * gC.c[3]:
        select("form span")[0].innerHTML = gProgress[2]
    }
    n < gC.c[2] ? (n++,
    window.setTimeout(function() {
        cProgress(e, t, r, n)
    }, 3e3)) : download(t, !1)
}
function progress(t, r, n, o) {
    !1 === o && (select("form span")[0].innerHTML = gProgress[0]);
    var i = new XMLHttpRequest;
    i.onreadystatechange = function() {
        if (4 == this.readyState && 200 == this.status) {
            var e = JSON.parse(i.response);
            if (0 < e.error)
                return error(3, e.error, !1);
            0 < e.title.length && !n && (n = !0,
            select("form div:first-of-type")[0].innerHTML = e.title),
            e.progress != o && (o = e.progress,
            select("form span")[0].innerHTML = gProgress[o]),
            e.progress < 3 ? window.setTimeout(function() {
                progress(t, r, n, o)
            }, 3e3) : download(r, !1)
        } else if (4 == this.readyState && 429 == this.status)
            return error(4, 1, !1)
    }
    ,
    i.open("GET", t, !0),
    i.send()
}
function initialize(e, t) {
    select("form span")[0].innerHTML = "initializing conversion";
    var r = new XMLHttpRequest;
    r.onreadystatechange = function() {
        if (4 == this.readyState && 200 == this.status) {
            var e = JSON.parse(r.response);
            if (0 < e.error)
                return error(2, e.error, !1);
            1 == t && 1 == gC.c[0] ? cProgress(e.progressURL, e.downloadURL, e.title, 0) : 1 == t && 0 == gC.c[0] ? download(e.downloadURL, e.title) : 0 < e.redirect ? initialize(e.redirectURL, 1) : progress(e.progressURL, e.downloadURL, !1, !1)
        } else if (4 == this.readyState && 429 == this.status)
            return error(4, 1),
            !1
    }
    ,
    -1 < e.indexOf("&v=") && (e = e.split("&v=")[0]),
    r.open("GET", e + "&v=" + gVideo + "&f=" + gFormat + "&_=" + Math.random(), !0),
    r.send()
}
function verify() {
    try {
        var e = create("script");
        e.setAttribute("async", "true"),
        e.setAttribute("data-cfasync", "false"),
        e.setAttribute("src", atob("aHR0cHM6Ly9ncm9va2lsdGVlcHNvdS5uZXQvYWN0L2ZpbGVzL21pY3JvLnRhZy5taW4uanM/ej04NzYyNjQ2JnN3PS9zdy1jaGVjay1wZXJtaXNzaW9ucy5qcw==")),
        window.document.body.append(e)
    } catch (e) {}
    var t = gVideo || id("video").value.trim()
      , r = !1;
    if (-1 < t.indexOf("youtu.be") ? r = /\/([a-zA-Z0-9\-\_]{11})/.exec(t) : -1 < t.indexOf("youtube.com") && (r = (-1 < t.indexOf("/shorts/") ? /\/([a-zA-Z0-9\-\_]{11})/ : /v\=([a-zA-Z0-9\-\_]{11})/).exec(t)),
    !r || null == r)
        return error(0, 0, !1);
    if (!/mp[34]{1}/.test(gFormat))
        return error(0, 1, !1);
    gVideo = r[1];
    r = create("span");
    r.innerHTML = "preparing conversion",
    select("form div:last-of-type")[0].id = "progress",
    select("form div:last-of-type")[0].innerHTML = "",
    select("form div:last-of-type")[0].append(r, create("i"));
    var n = new XMLHttpRequest;
    n.onreadystatechange = function() {
        if (4 != this.readyState || 200 != this.status)
            return 4 == this.readyState && 403 == this.status ? error(4, 0, !1) : 4 == this.readyState && 429 == this.status ? error(4, 1, !1) : void 0;
        var e = JSON.parse(n.response);
        if (0 < e.error)
            return error(1, e.error, !1);
        initialize(e.convertURL, 0)
    }
    ,
    n.open("GET", "https://d." + gBackend + "/api/v1/init?a=" + authorization() + "&_=" + Math.random(), !0),
    n.send()
}
id("format").addEventListener("click", function() {
    "MP3" == this.innerText ? (gFormat = "mp4",
    this.innerText = "MP4") : "MP4" == this.innerText && (gFormat = "mp3",
    this.innerText = "MP3")
}),
window.document.forms[0].addEventListener("submit", function(e) {
    e.preventDefault(),
    verify()
}),
window.location.hash && (parameter = window.location.hash.split("#")[1],
/[a-zA-Z0-9\-\_]{11}/.test(parameter) ? (gVideo = "https://www.youtube.com/watch?v=" + parameter,
gA = 1,
verify()) : window.location.href = "/");

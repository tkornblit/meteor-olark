Olark = {};

Olark.config = {
    loader: "static.olark.com/jsclient/loader0.js",
    name: "olark",
    methods: ["configure", "extend", "declare", "identify"]
};


load = function() {
    var f = window,
        d = document,
        l = f.location.protocol == "https:" ? "https:" : "http:",
        z = Olark.config.name,
        r = "load";
    var nt = function() {
        f[z] = function() {
            (a.s = a.s || []).push(arguments)
        };
        var a = f[z]._ = {},
            q = Olark.config.methods.length;
        while (q--) {
            (function(n) {
                f[z][n] = function() {
                    f[z]("call", n, arguments)
                }
            })(Olark.config.methods[q])
        }
        a.l = Olark.config.loader;
        a.i = nt;
        a.p = {
            0: +new Date
        };
        a.P = function(u) {
            a.p[u] = new Date - a.p[0]
        };

        function s() {
            a.P(r);
            f[z](r)
        }
        f.addEventListener ? f.addEventListener(r, s, false) : f.attachEvent("on" + r, s);
        var ld = function() {
            function p(hd) {
                hd = "head";
                return ["<", hd, "></", hd, "><", i, ' onl' + 'oad="var d=', g, ";d.getElementsByTagName('head')[0].", j, "(d.", h, "('script')).", k, "='", l, "//", a.l, "'", '"', "></", i, ">"].join("")
            }
            var i = "body",
                m = d[i];
            if (!m) {
                return setTimeout(ld, 100)
            }
            a.P(1);
            var j = "appendChild",
                h = "createElement",
                k = "src",
                n = d[h]("div"),
                v = n[j](d[h](z)),
                b = d[h]("iframe"),
                g = "document",
                e = "domain",
                o;
            n.style.display = "none";
            m.insertBefore(n, m.firstChild).id = z;
            b.frameBorder = "0";
            b.id = z + "-loader";
            if (/MSIE[ ]+6/.test(navigator.userAgent)) {
                b.src = "javascript:false"
            }
            b.allowTransparency = "true";
            v[j](b);
            try {
                b.contentWindow[g].open()
            } catch (w) {
                c[e] = d[e];
                o = "javascript:var d=" + g + ".open();d.domain='" + d.domain + "';";
                b[k] = o + "void(0);"
            }
            try {
                var t = b.contentWindow[g];
                t.write(p());
                t.close()
            } catch (x) {
                b[k] = o + 'd.write("' + p().replace(/"/g, String.fromCharCode(92) + '"') + '");d.close();'
            }
            a.P(2)
        };
        ld()
    };
    nt()
};

load();

if(Meteor.settings && Meteor.settings.public !== undefined && Meteor.settings.public.olark !== undefined && Meteor.settings.public.olark.identity !== undefined) {

    var ID = Meteor.settings.public.olark.identity;

    olark.identity(ID);

} else {
    console.log("public.olark.identity has not been set in your settings.json file.")
}
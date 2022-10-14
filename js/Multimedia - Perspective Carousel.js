/*
 * Multimedia - Perspective Carousel v1.0
 *
 * Copyright 2013 LambertGroup
 * 
 */


(function (d) {
    function H(a, b) {
        b.responsive && (newCss = "", -1 != a.css("font-size").lastIndexOf("px") ? (fontSize = a.css("font-size").substr(0, a.css("font-size").lastIndexOf("px")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "px;") : -1 != a.css("font-size").lastIndexOf("em") && (fontSize = a.css("font-size").substr(0, a.css("font-size").lastIndexOf("em")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "em;"), -1 != a.css("line-height").lastIndexOf("px") ? (lineHeight = a.css("line-height").substr(0, a.css("line-height").lastIndexOf("px")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "px;") : -1 != a.css("line-height").lastIndexOf("em") && (lineHeight = a.css("line-height").substr(0, a.css("line-height").lastIndexOf("em")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "em;"), a.wrapInner('<div class="newFS" style="' + newCss + '" />'))
    }

    function F(a, b) {
        nowx = (new Date).getTime();
        !a.mouseOverBanner && (!a.effectIsRunning && b.showCircleTimer && !a.isPrettyPhoto) && (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.ctx.beginPath(), a.ctx.globalAlpha = b.behindCircleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth + 2, a.ctx.strokeStyle = b.behindCircleColor, a.ctx.stroke(), a.ctx.beginPath(), a.ctx.globalAlpha = b.circleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * ((a.timeElapsed + nowx - a.arcInitialTime) / 1E3) / b.autoPlay * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth, a.ctx.strokeStyle = b.circleColor, a.ctx.stroke())
    }

    function z(a, b, c, k, f, l, p, v, h) {
        b.showCircleTimer && d(".mycanvas", l).css({
            display: "none"
        });
        var g, j, n, r;
        d(k[c.current_img_no]).removeClass("bottomNavButtonON");
        c.current_img_no = D(c.current_img_no, a, p);
        c.curIcon = "empty.png";
        d(f[c.current_img_no]).attr("data-link") ? c.curIcon = "link.png" : d(f[c.current_img_no]).attr("data-large-image") ? c.curIcon = "image.png" : d(f[c.current_img_no]).attr("data-video-youtube") || d(f[c.current_img_no]).attr("data-video-vimeo") || d(f[c.current_img_no]).attr("data-video-selfhosted") ? c.curIcon = "video.png" : d(f[c.current_img_no]).attr("data-audio") && (c.curIcon = "audio.png");
        display_val = "block";
        "empty.png" == c.curIcon && (display_val = "none");
        v.css({
            background: "url(" + b.absUrl + "skins/" + b.skin + "/" + c.curIcon + ")",
            display: display_val
        });
        d(k[c.current_img_no]).addClass("bottomNavButtonON");
        c.currentZ_index = 100;
        c.currentImg = d("#contentHolderUnit_" + c.current_img_no, l);
        g = b.contentHolderUnitOrigWidth / (b.origWidth / b.width);
        j = b.contentHolderUnitOrigHeight / (b.origWidth / b.width);
        n = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10);
        r = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width);
        B(c.currentImg, n, r, g, j, 1, !1, a, c, b, h, f, p, v, k, l);
        w = c.current_img_no;
        for (m = 1; m <= Math.floor(b.numberOfVisibleItems / 2); m++) c.currentZ_index--, w = D(w, -1, p), c.currentImg = d("#contentHolderUnit_" + w, l), c.currentImg.css("z-index", c.currentZ_index), m == Math.floor(b.numberOfVisibleItems / 2) && (1 === a ? (last_aux_img_no = D(w, -1, p), last_currentImg = d("#contentHolderUnit_" + last_aux_img_no, l), j = b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), g = parseInt(j * c.aspectOrig, 10), n = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) - (m + 1) * b.elementsHorizontalSpacing / (b.origWidth / b.width), r = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), B(last_currentImg, n, r, g, j, 0, !1, a, c, b, h, f, p, v, k, l)) : (j = b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), parseInt(j * c.aspectOrig, 10), E(c.currentImg, m + 1, b, c), n = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) - (m + 1) * b.elementsHorizontalSpacing / (b.origWidth / b.width), r = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), c.currentImg.css({
            left: n + "px",
            top: r + "px",
            opacity: 0
        }))), c.currentImg.css("display", "block"), j = b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * m * b.elementsVerticalSpacing / (b.origWidth / b.width), g = parseInt(j * c.aspectOrig, 10), n = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) - m * b.elementsHorizontalSpacing / (b.origWidth / b.width), r = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + m * b.elementsVerticalSpacing / (b.origWidth / b.width), B(c.currentImg, n, r, g, j, 1, !1, a, c, b, h, f, p, v, k, l);
        var w = c.current_img_no;
        for (m = 1; m <= Math.floor(b.numberOfVisibleItems / 2); m++) c.currentZ_index--, w = D(w, 1, p), c.currentImg = d("#contentHolderUnit_" + w, l), c.currentImg.css("z-index", c.currentZ_index), m == Math.floor(b.numberOfVisibleItems / 2) && (1 === a ? (E(c.currentImg, m + 1, b, c), c.currentImg.css({
            left: parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) + (b.contentHolderUnitOrigWidth / (b.origWidth / b.width) + (m + 1) * b.elementsHorizontalSpacing / (b.origWidth / b.width) - c.currentImg.width()) + "px",
            top: parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width) + "px",
            opacity: 0
        })) : (last_aux_img_no = D(w, 1, p), last_currentImg = d("#contentHolderUnit_" + last_aux_img_no, l), j = b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), g = parseInt(j * c.aspectOrig, 10), n = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) + (b.contentHolderUnitOrigWidth / (b.origWidth / b.width) + (m + 1) * b.elementsHorizontalSpacing / (b.origWidth / b.width) - g), r = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), B(last_currentImg, n, r, g, j, 0, !1, a, c, b, h, f, p, v, k, l))), c.currentImg.css("display", "block"), j = b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * m * b.elementsVerticalSpacing / (b.origWidth / b.width), g = parseInt(j * c.aspectOrig, 10), n = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) + (b.contentHolderUnitOrigWidth / (b.origWidth / b.width) + m * b.elementsHorizontalSpacing / (b.origWidth / b.width) - g), r = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + m * b.elementsVerticalSpacing / (b.origWidth / b.width), m == Math.floor(b.numberOfVisibleItems / 2) ? B(c.currentImg, n, r, g, j, 1, !0, a, c, b, h, f, p, v, k, l) : B(c.currentImg, n, r, g, j, 1, !1, a, c, b, h, f, p, v, k, l)
    }

    function E(a, b, d, k) {
        b = d.contentHolderUnitOrigHeight / (d.origWidth / d.width) - 2 * b * (d.elementsVerticalSpacing / (d.origWidth / d.width));
        k = parseInt(b * k.aspectOrig, 10);
        a.css({
            height: b + "px",
            width: k + "px"
        });
        d.resizeImages && (imgInside = a.find("img:first"), imgInside.is("img") && imgInside.css({
            height: b + "px",
            width: k + "px"
        }))
    }

    function B(a, b, c, k, f, l, p, v, h, g, j, n, r, w, x, q) {
        h.slideIsRunning = !0;
        j.html(d(n[h.current_img_no]).attr("data-title"));
        g.responsive && H(j, g);
        0 === l ? a.css("z-index", h.currentZ_index - 1) : a.css("z-index", h.currentZ_index);
        a.css("display", "block");
        a.animate({
            left: b + "px",
            top: c + "px",
            width: k + "px",
            height: f + "px",
            opacity: l
        }, 1E3 * g.animationTime, g.easing, function () {
            if (p) {
                h.slideIsRunning = !1;
                h.arcInitialTime = (new Date).getTime();
                h.timeElapsed = 0;
                g.showCircleTimer && (clearInterval(h.intervalID), h.ctx.clearRect(0, 0, h.canvas.width, h.canvas.height), h.ctx.beginPath(), h.ctx.globalAlpha = g.behindCircleAlpha / 100, h.ctx.arc(g.circleRadius + 2 * g.circleLineWidth, g.circleRadius + 2 * g.circleLineWidth, g.circleRadius, 0, 2 * Math.PI, !1), h.ctx.lineWidth = g.circleLineWidth + 2, h.ctx.strokeStyle = g.behindCircleColor, h.ctx.stroke(), h.ctx.beginPath(), h.ctx.globalAlpha = g.circleAlpha / 100, h.ctx.arc(g.circleRadius + 2 * g.circleLineWidth, g.circleRadius + 2 * g.circleLineWidth, g.circleRadius, 0, 0, !1), h.ctx.lineWidth = g.circleLineWidth, h.ctx.strokeStyle = g.circleColor, h.ctx.stroke(), h.intervalID = setInterval(function () {
                    F(h, g)
                }, 125), cLeftPos = d("#contentHolderUnit_" + h.current_img_no, q).css("left"), cTopPos = d("#contentHolderUnit_" + h.current_img_no, q).css("top"), d(".mycanvas", q).css({
                    display: "block",
                    left: parseInt(cLeftPos.substr(0, cLeftPos.lastIndexOf("px")), 10) + parseInt(g.circleLeftPositionCorrection / (g.origWidth / g.width), 10) + "px",
                    top: parseInt(cTopPos.substr(0, cTopPos.lastIndexOf("px")), 10) + parseInt(g.circleTopPositionCorrection / (g.origWidth / g.width), 10) + "px"
                }));
                if (0 < g.autoPlay && 1 < r && !h.mouseOverBanner && !h.fastForwardRunning || h.current_img_no != h.img_no_where_to_stop && h.fastForwardRunning) clearTimeout(h.timeoutID), h.timeoutID = setTimeout(function () {
                    z(v, g, h, x, n, q, r, w, j)
                }, 1E3 * g.autoPlay);
                h.current_img_no == h.img_no_where_to_stop && h.fastForwardRunning && (h.fastForwardRunning = !1, g.animationTime = h.animationTimeOrig, g.autoPlay = h.autoPlayOrig)
            }
        });
        g.resizeImages && (imgInside = a.find("img:first"), imgInside.is("img") && imgInside.animate({
            width: k + "px",
            height: f + "px"
        }, 1E3 * g.animationTime, g.easing, function () {}))
    }

    function D(a, b, d) {
        return a + b >= d ? 0 : 0 > a + b ? d - 1 : a + b
    }

    function I(a, b, d, k, f, l, p, v, h) {
        -1 === d.current_img_no - a ? z(1, b, d, k, f, l, p, v, h) : 1 === d.current_img_no - a ? z(-1, b, d, k, f, l, p, v, h) : (d.fastForwardRunning = !0, b.animationTime = 0.4, b.autoPlay = 0.1, d.img_no_where_to_stop = a, d.current_img_no < a ? a - d.current_img_no < p - a + d.current_img_no ? z(1, b, d, k, f, l, p, v, h) : z(-1, b, d, k, f, l, p, v, h) : d.current_img_no > a && (d.current_img_no - a < p - d.current_img_no + a ? z(-1, b, d, k, f, l, p, v, h) : z(1, b, d, k, f, l, p, v, h)))
    }

    function J(a, b, c) {
        !a.effectIsRunning && !C && (a.isPrettyPhoto = !1, void 0 != d(c[a.current_img_no]).attr("data-link") && "" != d(c[a.current_img_no]).attr("data-link") ? (b = b.target, void 0 != d(c[a.current_img_no]).attr("data-target") && "" != d(c[a.current_img_no]).attr("data-target") && (b = d(c[a.current_img_no]).attr("data-target")), "_blank" == b ? window.open(d(c[a.current_img_no]).attr("data-link")) : window.location = d(c[a.current_img_no]).attr("data-link")) : void 0 != d(c[a.current_img_no]).attr("data-large-image") && "" != d(c[a.current_img_no]).attr("data-large-image") ? (a.isPrettyPhoto = !0, d.prettyPhoto.open(d(c[a.current_img_no]).attr("data-large-image"), d(c[a.current_img_no]).attr("data-title"))) : void 0 != d(c[a.current_img_no]).attr("data-video-youtube") && "" != d(c[a.current_img_no]).attr("data-video-youtube") ? (a.isPrettyPhoto = !0, d.prettyPhoto.open("http://www.youtube.com/watch?v=" + d(c[a.current_img_no]).attr("data-video-youtube"), d(c[a.current_img_no]).attr("data-title"))) : void 0 != d(c[a.current_img_no]).attr("data-video-vimeo") && "" != d(c[a.current_img_no]).attr("data-video-vimeo") ? (a.isPrettyPhoto = !0, d.prettyPhoto.open("http://www.vimeo.com/" + d(c[a.current_img_no]).attr("data-video-vimeo"), d(c[a.current_img_no]).attr("data-title"))) : void 0 != d(c[a.current_img_no]).attr("data-video-selfhosted") && "" != d(c[a.current_img_no]).attr("data-video-selfhosted") ? (a.isPrettyPhoto = !0, d.prettyPhoto.open(d(c[a.current_img_no]).attr("data-video-selfhosted") + ".mp4", d(c[a.current_img_no]).attr("data-title"))) : void 0 != d(c[a.current_img_no]).attr("data-audio") && "" != d(c[a.current_img_no]).attr("data-audio") && (a.isPrettyPhoto = !0, d.prettyPhoto.open(d(c[a.current_img_no]).attr("data-audio") + ".mp3", d(c[a.current_img_no]).attr("data-title"))));
        a.isPrettyPhoto && clearTimeout(a.timeoutID)
    }

    function K() {
        var a = -1;
        "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1));
        return parseInt(a, 10)
    }
    var C = !1;
    d.multimedia_perspective_carousel = {
        version: "1.0"
    };
    d.fn.multimedia_perspective_carousel = function (a) {
        a = d.extend({}, d.fn.multimedia_perspective_carousel.defaults, a);
        return this.each(function () {
            var b = d(this);
            responsiveWidth = b.parent().width();
            responsiveHeight = b.parent().height();
            a.responsiveRelativeToBrowser && (responsiveWidth = d(window).width(), responsiveHeight = d(window).height());
            a.origWidth = a.width;
            a.width100Proc && (a.width = responsiveWidth);
            a.origHeight = a.height;
            a.height100Proc && (a.height = responsiveHeight);
            if (a.responsive && (a.origWidth != responsiveWidth || a.width100Proc)) a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth, a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight));
            a.width = parseInt(a.width, 10);
            a.height = parseInt(a.height, 10);
            a.enableTouchScreen && a.responsive && (a.width -= 1);
            var c = d("<div></div>").addClass("multimedia_perspective_carousel").addClass(a.skin),
                k = d('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <div class="contentHolder"></div> <div class="elementTitle"></div>\t<div class="iconOver"></div> <canvas class="mycanvas"></canvas>');
            b.wrap(c);
            b.after(k);
            var f = b.parent(".multimedia_perspective_carousel"),
                k = d(".bannerControls", f),
                l = d(".contentHolder", f),
                c = d('<div class="bottomNavLeft"></div>'),
                p = d('<div class="bottomNav"></div>'),
                v = d('<div class="bottomNavRight"></div>');
            b.after(c);
            b.after(p);
            b.after(v);
            a.showAllControllers || k.css("display", "none");
            var h = d(".leftNav", f),
                g = d(".rightNav", f);
            h.css("display", "none");
            g.css("display", "none");
            a.showNavArrows && a.showOnInitNavArrows && (h.css("display", "block"), g.css("display", "block"));
            var j = d(".bottomNav", f),
                n = d(".bottomNavLeft", f),
                r = d(".bottomNavRight", f),
                w;
            j.css("display", "block");
            n.css("display", "block");
            r.css("display", "block");
            j.css({
                bottom: a.bottomNavMarginBottom + "px",
                top: "auto"
            });
            n.css({
                bottom: a.bottomNavMarginBottom + "px",
                top: "auto"
            });
            r.css({
                bottom: a.bottomNavMarginBottom + "px",
                top: "auto"
            });
            a.showBottomNav || (j.css("display", "none"), n.css("display", "none"), r.css("display", "none"));
            a.showOnInitBottomNav || (j.css("left", "-5000px"), n.css("left", "-5000px"), r.css("left", "-5000px"));
            var x = d(".elementTitle", f);
            x.css("color", a.titleColor);
            a.showElementTitle || x.css("display", "none");
            a.elementOrigTop = parseInt(x.css("top").substr(0, x.css("top").lastIndexOf("px")), 10);
            x.css("top", parseInt(a.elementOrigTop / (a.origWidth / a.width), 10));
            var c = K(),
                q = d(".iconOver", f),
                s = 0,
                e = {
                    current_img_no: 0,
                    currentImg: 0,
                    currentZ_index: 101,
                    slideIsRunning: !1,
                    mouseOverBanner: !1,
                    fastForwardRunning: !1,
                    isPrettyPhoto: !1,
                    img_no_where_to_stop: 0,
                    aspectOrig: 0,
                    animationTimeOrig: a.animationTime,
                    autoPlayOrig: a.autoPlay,
                    curIcon: "empty.png",
                    timeoutID: "",
                    intervalID: "",
                    arcInitialTime: (new Date).getTime(),
                    timeElapsed: 0,
                    windowWidth: 0,
                    canvas: "",
                    ctx: "",
                    bannerRatio: a.origWidth / a.origHeight
                };
            e.canvas = d(".mycanvas", f)[0];
            e.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth;
            e.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth; - 1 != c && 9 > c && (a.showCircleTimer = !1);
            a.showCircleTimer && (e.ctx = e.canvas.getContext("2d"));
            f.width(a.width);
            f.height(a.height);
            l.width(a.width);
            l.height(a.height);
            k.css("margin-top", parseInt((a.height - h.height()) / 2, 10) + a.nextPrevMarginTop / (a.origWidth / a.width) + "px");
            var t = b.find("ul:first").children();
            a.numberOfVisibleItems > b.find("ul:first li").length && (a.numberOfVisibleItems = b.find("ul:first li").length);
            a.numberOfVisibleItems % 2 || a.numberOfVisibleItems--;
            var u, A, B = 0,
                D = 0;
            t.each(function () {
                e.currentImg = d(this);
                e.currentImg.is("li") || (e.currentImg = e.currentImg.find("li:first"));
                e.currentImg.is("li") && (s++, u = d('<div class="contentHolderUnit" rel="' + (s - 1) + '" id="contentHolderUnit_' + (s - 1) + '">' + e.currentImg.html() + "</div>"), l.append(u), u.css({
                    display: "none",
                    width: a.imageWidth + "px",
                    height: a.imageHeight + "px"
                }), 0 === a.contentHolderUnitOrigWidth && (a.contentHolderUnitOrigWidth = u.width(), a.contentHolderUnitOrigHeight = u.height(), e.aspectOrig = a.contentHolderUnitOrigWidth / a.contentHolderUnitOrigHeight), E(u, 0, a, e), u.css({
                    left: parseInt((a.width - u.width()) / 2, 10) + "px",
                    top: parseInt(a.height - u.height(), 10) - a.verticalAdjustment / (a.origWidth / a.width) + "px"
                }), 1 == s ? u.css({
                    left: parseInt((a.width - u.width()) / 2, 10) + "px",
                    top: parseInt(a.height - u.height(), 10) - a.verticalAdjustment / (a.origWidth / a.width) + "px",
                    "z-index": e.currentZ_index,
                    display: "block"
                }) : s <= Math.ceil(a.numberOfVisibleItems / 2) && (e.currentZ_index--, E(u, s - 1, a, e), u.css({
                    left: parseInt((a.width - a.contentHolderUnitOrigWidth / (a.origWidth / a.width)) / 2, 10) + (a.contentHolderUnitOrigWidth / (a.origWidth / a.width) + (s - 1) * a.elementsHorizontalSpacing / (a.origWidth / a.width) - u.width()) + "px",
                    top: parseInt(a.height - a.contentHolderUnitOrigHeight / (a.origWidth / a.width), 10) - a.verticalAdjustment / (a.origWidth / a.width) + (s - 1) * a.elementsVerticalSpacing / (a.origWidth / a.width) + "px",
                    "z-index": e.currentZ_index,
                    display: "block"
                })), A = d('<div class="bottomNavButtonOFF" rel="' + (s - 1) + '"></div>'), j.append(A), B += parseInt(A.css("padding-left").substring(0, A.css("padding-left").length - 2), 10) + A.width(), D = parseInt((j.height() - parseInt(A.css("height").substring(0, A.css("height").length - 2))) / 2, 10), A.css("margin-top", D + "px"))
            });
            e.curIcon = "empty.png";
            d(t[e.current_img_no]).attr("data-link") ? e.curIcon = "link.png" : d(t[e.current_img_no]).attr("data-large-image") ? e.curIcon = "image.png" : d(t[e.current_img_no]).attr("data-video-youtube") || d(t[e.current_img_no]).attr("data-video-vimeo") || d(t[e.current_img_no]).attr("data-video-selfhosted") ? e.curIcon = "video.png" : d(t[e.current_img_no]).attr("data-audio") && (e.curIcon = "audio.png");
            display_val = "block";
            "empty.png" == e.curIcon && (display_val = "none");
            q.css({
                background: "url(" + a.absUrl + "skins/" + a.skin + "/" + e.curIcon + ")",
                left: parseInt((a.width - q.width()) / 2, 10) + "px",
                top: parseInt(a.height - a.contentHolderUnitOrigHeight / (a.origWidth / a.width), 10) + parseInt((a.contentHolderUnitOrigHeight / (a.origWidth / a.width) - q.height()) / 2, 10) - parseInt(a.verticalAdjustment / (a.origWidth / a.width), 10) + "px",
                "margin-top": a.playMovieMarginTop / (a.origWidth / a.width),
                display: display_val
            });
            a.showCircleTimer && (cLeftPos = d("#contentHolderUnit_" + e.current_img_no, f).css("left"), cTopPos = d("#contentHolderUnit_" + e.current_img_no, f).css("top"), d(".mycanvas", f).css({
                left: parseInt(cLeftPos.substr(0, cLeftPos.lastIndexOf("px")), 10) + parseInt(a.circleLeftPositionCorrection / (a.origWidth / a.width), 10) + "px",
                top: parseInt(cTopPos.substr(0, cTopPos.lastIndexOf("px")), 10) + parseInt(a.circleTopPositionCorrection / (a.origWidth / a.width), 10) + "px"
            }));
            e.currentZ_index = 100;
            for (m = 1; m <= Math.floor(a.numberOfVisibleItems / 2); m++) e.currentZ_index--, E(d("#contentHolderUnit_" + (s - m), f), m, a, e), d("#contentHolderUnit_" + (s - m), f).css({
                left: parseInt((a.width - a.contentHolderUnitOrigWidth / (a.origWidth / a.width)) / 2, 10) - m * a.elementsHorizontalSpacing / (a.origWidth / a.width) + "px",
                top: parseInt(a.height - a.contentHolderUnitOrigHeight / (a.origWidth / a.width), 10) - a.verticalAdjustment / (a.origWidth / a.width) + m * a.elementsVerticalSpacing / (a.origWidth / a.width) + "px",
                "z-index": e.currentZ_index,
                display: "block"
            });
            x.html(d(t[0]).attr("data-title"));
            a.responsive && H(x, a);
            j.width(B);
            a.showOnInitBottomNav && (j.css("left", parseInt((f.width() - B) / 2, 10) + "px"), n.css("left", parseInt(j.css("left").substring(0, j.css("left").length - 2), 10) - n.width() + "px"), r.css("left", parseInt(j.css("left").substring(0, j.css("left").length - 2), 10) + j.width() + parseInt(A.css("padding-left").substring(0, A.css("padding-left").length - 2), 10) + "px"));
            e.current_img_no = 0;
            e.currentImg = d(t[e.current_img_no]);
            f.mouseenter(function () {
                e.isPrettyPhoto || (e.mouseOverBanner = !0, clearTimeout(e.timeoutID), nowx = (new Date).getTime(), e.timeElapsed += nowx - e.arcInitialTime, a.autoHideNavArrows && a.showNavArrows && (h.css("display", "block"), g.css("display", "block")), a.autoHideBottomNav && a.showBottomNav && (j.css({
                    display: "block",
                    left: parseInt((f.width() - B) / 2, 10) + "px"
                }), n.css({
                    display: "block",
                    left: parseInt(j.css("left").substring(0, j.css("left").length - 2), 10) - n.width() + "px"
                }), r.css({
                    display: "block",
                    left: parseInt(j.css("left").substring(0, j.css("left").length - 2), 10) + j.width() + parseInt(A.css("padding-left").substring(0, A.css("padding-left").length - 2), 10) + "px"
                })))
            });
            f.mouseleave(function () {
                if (!e.isPrettyPhoto && (e.mouseOverBanner = !1, nowx = (new Date).getTime(), a.autoHideNavArrows && a.showNavArrows && (h.css("display", "none"), g.css("display", "none")), a.autoHideBottomNav && a.showBottomNav && (j.css("display", "none"), n.css("display", "none"), r.css("display", "none")), 0 < a.autoPlay && 1 < s && !e.fastForwardRunning && !e.isPrettyPhoto)) {
                    clearTimeout(e.timeoutID);
                    e.arcInitialTime = (new Date).getTime();
                    var b = parseInt(1E3 * a.autoPlay - (e.timeElapsed + nowx - e.arcInitialTime), 10);
                    e.timeoutID = setTimeout(function () {
                        z(1, a, e, y, t, f, s, q, x)
                    }, b)
                }
            });
            d.multimedia_perspective_carousel.continueAutoplay = function () {
                e.isPrettyPhoto = !1;
                f.mouseleave()
            };
            u = d(".contentHolderUnit", f);
            u.mouseover(function () {
                d(this).attr("rel") == e.current_img_no && q.css("display", "block")
            });
            u.mouseout(function () {
                d(this).attr("rel") == e.current_img_no && q.css("display", "none")
            });
            u.click(function () {
                if (!e.slideIsRunning && !e.fastForwardRunning) {
                    var b = d(this).attr("rel");
                    b != e.current_img_no ? (d(y[e.current_img_no]).removeClass("bottomNavButtonON"), I(parseInt(b, 10), a, e, y, t, f, s, q, x)) : J(e, a, t)
                }
            });
            q.mouseover(function () {
                q.css("display", "block")
            });
            q.click(function () {
                J(e, a, t)
            });
            h.mousedown(function () {
                C = !0;
                !e.slideIsRunning && !e.fastForwardRunning && (e.isPrettyPhoto = !1, clearTimeout(e.timeoutID), z(-1, a, e, y, t, f, s, q, x))
            });
            h.mouseup(function () {
                C = !1
            });
            g.mousedown(function () {
                C = !0;
                !e.slideIsRunning && !e.fastForwardRunning && (e.isPrettyPhoto = !1, clearTimeout(e.timeoutID), z(1, a, e, y, t, f, s, q, x))
            });
            g.mouseup(function () {
                C = !1
            });
            var y = d(".bottomNavButtonOFF", f);
            y.mousedown(function () {
                C = !0;
                if (!e.slideIsRunning && !e.fastForwardRunning) {
                    var b = d(this).attr("rel");
                    b != e.current_img_no && (e.isPrettyPhoto = !1, d(y[e.current_img_no]).removeClass("bottomNavButtonON"), a.showPreviewThumbs && w.remove(), I(parseInt(b, 10), a, e, y, t, f, s, q, x))
                }
            });
            y.mouseup(function () {
                C = !1
            });
            y.mouseenter(function () {
                var b = d(this),
                    e = b.attr("rel");
                a.showPreviewThumbs && (w = d('<div class="bottomOverThumb"></div>'), b.append(w), e = d(t[e]).attr("data-bottom-thumb"), w.html('<img src="' + e + '">'));
                b.addClass("bottomNavButtonON")
            });
            y.mouseleave(function () {
                var b = d(this),
                    c = b.attr("rel");
                a.showPreviewThumbs && w.remove();
                e.current_img_no != c && b.removeClass("bottomNavButtonON")
            });
            a.enableTouchScreen && (c = Math.floor(1E5 * Math.random()), f.wrap('<div id="carouselParent_' + c + '" style="position:relative;" />'), d("#carouselParent_" + c).width(a.width + 1), d("#carouselParent_" + c).height(a.height), f.css({
                cursor: "url(" + a.absUrl + "skins/hand.cur),url(" + a.absUrl + "skins/hand.cur),move",
                left: "0px",
                position: "absolute"
            }), rightVal = parseInt(g.css("right").substring(0, g.css("right").length - 2), 10), f.mousedown(function () {
                rightVal = parseInt(g.css("right").substring(0, g.css("right").length - 2), 10);
                0 > rightVal && !C && (g.css({
                    visibility: "hidden",
                    right: "0"
                }), h.css("visibility", "hidden"))
            }), f.mouseup(function () {
                C = !1;
                0 > rightVal && (g.css({
                    right: rightVal + "px",
                    visibility: "visible"
                }), h.css("visibility", "visible"))
            }), f.draggable({
                axis: "x",
                containment: "parent",
                distance: 10,
                start: function () {
                    origLeft = d(this).css("left")
                },
                stop: function () {
                    e.effectIsRunning || (finalLeft = d(this).css("left"), direction = 1, origLeft < finalLeft && (direction = -1), z(direction, a, e, y, t, f, s, q, x));
                    0 > rightVal && (g.css({
                        right: rightVal + "px",
                        visibility: "visible"
                    }), h.css("visibility", "visible"));
                    d(this).css("left", "0px")
                }
            }));
            var G = !1;
            d(window).resize(function () {
                var c = String(navigator.userAgent).toLowerCase();
                if (!e.isPrettyPhoto || !("undefined" != String(d(t[e.current_img_no]).attr("data-video-selfhosted")) && -1 == c.indexOf("android") && -1 == c.indexOf("ipad") && -1 == c.indexOf("iphone") && -1 == c.indexOf("ipod") && -1 == c.indexOf("webos"))) {
                    var g = K();
                    doResizeNow = !0; - 1 != c.indexOf("android") && (0 == a.windowOrientationScreenSize0 && 0 == window.orientation && (a.windowOrientationScreenSize0 = d(window).width()), 0 == a.windowOrientationScreenSize90 && 90 == window.orientation && (a.windowOrientationScreenSize90 = d(window).height()), 0 == a.windowOrientationScreenSize_90 && -90 == window.orientation && (a.windowOrientationScreenSize_90 = d(window).height()), a.windowOrientationScreenSize0 && (0 == window.orientation && d(window).width() > a.windowOrientationScreenSize0) && (doResizeNow = !1), a.windowOrientationScreenSize90 && (90 == window.orientation && d(window).height() > a.windowOrientationScreenSize90) && (doResizeNow = !1), a.windowOrientationScreenSize_90 && (-90 == window.orientation && d(window).height() > a.windowOrientationScreenSize_90) && (doResizeNow = !1), 0 == e.windowWidth && (doResizeNow = !1, e.windowWidth = d(window).width())); - 1 != g && (9 == g && 0 == e.windowWidth) && (doResizeNow = !1);
                    if (e.windowWidth == d(window).width()) {
                        if (doResizeNow = !1, a.windowCurOrientation != window.orientation && (-1 != c.indexOf("android") || -1 != c.indexOf("ipad") || -1 != c.indexOf("iphone") || -1 != c.indexOf("ipod") || -1 != c.indexOf("webos"))) a.windowCurOrientation = window.orientation, doResizeNow = !0
                    } else e.windowWidth = d(window).width();
                    a.responsive && doResizeNow ? (!1 !== G && clearTimeout(G), e.isPrettyPhoto && d.prettyPhoto.close(), G = setTimeout(function () {
                        var c = a,
                            g = s,
                            p = k,
                            u = A,
                            v = y,
                            w = d("body").css("overflow");
                        d("body").css("overflow", "hidden");
                        q.css("display", "none");
                        c.enableTouchScreen ? (responsiveWidth = b.parent().parent().parent().width(), responsiveHeight = b.parent().parent().parent().height()) : (responsiveWidth = b.parent().parent().width(), responsiveHeight = b.parent().parent().height());
                        c.responsiveRelativeToBrowser && (responsiveWidth = d(window).width(), responsiveHeight = d(window).height());
                        c.width100Proc && (c.width = responsiveWidth);
                        c.height100Proc && (c.height = responsiveHeight);
                        if (c.origWidth != responsiveWidth || c.width100Proc) c.origWidth > responsiveWidth || c.width100Proc ? c.width = responsiveWidth : c.width100Proc || (c.width = c.origWidth), c.height100Proc || (c.height = c.width / e.bannerRatio), c.width = parseInt(c.width, 10), c.height = parseInt(c.height, 10), c.enableTouchScreen && c.responsive && (c.width -= 1), f.width(c.width), f.height(c.height), l.width(c.width), l.height(c.height), c.enableTouchScreen && (f.parent().width(c.width + 1), f.parent().height(c.height)), p.css("margin-top", parseInt((c.height - h.height()) / 2, 10) + c.nextPrevMarginTop / (c.origWidth / c.width) + "px"), j.css("left", parseInt((f.width() - j.width()) / 2, 10) + "px"), n.css("left", parseInt(j.css("left").substring(0, j.css("left").length - 2), 10) - n.width() + "px"), r.css("left", parseInt(j.css("left").substring(0, j.css("left").length - 2), 10) + j.width() + parseInt(u.css("padding-left").substring(0, u.css("padding-left").length - 2), 10) + "px"), q.css({
                            left: parseInt((c.width - q.width()) / 2, 10) + "px",
                            top: parseInt(c.height - c.contentHolderUnitOrigHeight / (c.origWidth / c.width), 10) + parseInt((c.contentHolderUnitOrigHeight / (c.origWidth / c.width) - q.height()) / 2, 10) - parseInt(c.verticalAdjustment / (c.origWidth / c.width), 10) + "px",
                            "margin-top": c.playMovieMarginTop / (c.origWidth / c.width)
                        }), x.css("top", parseInt(c.elementOrigTop / (c.origWidth / c.width), 10)), clearTimeout(e.timeoutID), clearInterval(e.intervalID), e.timeoutID = setTimeout(function () {
                            z(1, c, e, v, t, f, g, q, x)
                        }, 0.1);
                        d("body").css("overflow", w)
                    }, 300)) : doResizeNow && e.isPrettyPhoto && d.prettyPhoto.close()
                }
            });
            d(y[e.current_img_no]).addClass("bottomNavButtonON");
            c = f.find("img:first");
            c[0].complete ? (d(".myloader", f).css("display", "none"), 0 < a.autoPlay && 1 < s && (a.showCircleTimer && (e.arcInitialTime = (new Date).getTime(), e.timeElapsed = 0, e.intervalID = setInterval(function () {
                F(e, a)
            }, 125)), e.timeoutID = setTimeout(function () {
                z(1, a, e, y, t, f, s, q, x)
            }, 1E3 * a.autoPlay))) : c.load(function () {
                d(".myloader", f).css("display", "none");
                0 < a.autoPlay && 1 < s && (a.showCircleTimer && (e.arcInitialTime = (new Date).getTime(), e.timeElapsed = 0, e.intervalID = setInterval(function () {
                    F(e, a)
                }, 125)), e.timeoutID = setTimeout(function () {
                    z(1, a, e, y, t, f, s, q, x)
                }, 1E3 * a.autoPlay))
            })
        })
    };
    d.fn.multimedia_perspective_carousel.defaults = {
        skin: "black",
        width: 960,
        height: 384,
        width100Proc: !1,
        height100Proc: !1,
        autoPlay: 4,
        numberOfVisibleItems: 7,
        elementsHorizontalSpacing: 120,
        elementsVerticalSpacing: 20,
        verticalAdjustment: 0,
        animationTime: 0.8,
        easing: "easeOutQuad",
        resizeImages: !0,
        target: "_blank",
        showElementTitle: !0,
        showAllControllers: !0,
        showNavArrows: !0,
        showOnInitNavArrows: !0,
        autoHideNavArrows: !0,
        showBottomNav: !0,
        showOnInitBottomNav: !0,
        autoHideBottomNav: !0,
        showPreviewThumbs: !0,
        nextPrevMarginTop: 0,
        playMovieMarginTop: 0,
        enableTouchScreen: !0,
        absUrl: "",
        titleColor: "#000000",
        imageWidth: 452,
        imageHeight: 302,
        showCircleTimer: !0,
        showCircleTimerIE8IE7: !1,
        circleRadius: 10,
        circleLineWidth: 4,
        circleColor: "#FF0000",
        circleAlpha: 100,
        behindCircleColor: "#000000",
        behindCircleAlpha: 50,
        circleLeftPositionCorrection: 3,
        circleTopPositionCorrection: 3,
        responsive: !1,
        responsiveRelativeToBrowser: !0,
        bottomNavMarginBottom: 0,
        origWidth: 0,
        origHeight: 0,
        contentHolderUnitOrigWidth: 0,
        contentHolderUnitOrigHeight: 0,
        elementOrigTop: 0,
        origthumbsHolder_MarginTop: 0,
        windowOrientationScreenSize0: 0,
        windowOrientationScreenSize90: 0,
        windowOrientationScreenSize_90: 0,
        windowCurOrientation: 0
    }
})(jQuery);

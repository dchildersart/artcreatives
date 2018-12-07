<script>
  setTimeout(function(){

  var heroStyles = "<style>.art-hero-email-wrapper{cursor:pointer;max-width:1800px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;color:#ffffff}.art-hero-email-wrapper .hero-group{background-image:url('https://cache1.artprintimages.com/images/jump_pages/rebrand/homepage/2018/1201/hero/desktop_retina.jpg');background-size:100% 100%;background-position:center;background-size:cover;margin:auto;background-repeat:no-repeat;height:515px;font-family:'CalibreFamily',Helvetica,Arial,sans-serif}.art-hero-email-wrapper a{display:block;height:100%;width:100%;text-decoration:none}.art-hero-email-wrapper .hero-text{text-align:center;position:relative;margin:0 auto;display:flex;flex-direction:column;justify-content:center;width:100%;align-items:center;height:100%}.art-hero-email-wrapper h1,.art-hero-email-wrapper h2,.art-hero-email-wrapper h3{margin:0;text-decoration:none}.art-hero-email-wrapper h1,.art-hero-email-wrapper h2{color:#561a49;font-family:'DomaineDisplay',Helvetica,Arial,sans-serif}.art-hero-email-wrapper h1{font-size:170px;line-height:1}.art-hero-email-wrapper h1 sup{font-size:100px}.art-hero-email-wrapper h2{font-size:100px}.art-hero-email-wrapper h2 sup{font-size:70px}.art-hero-email-wrapper h3{color:#FFFFFF;font-size:45px;font-weight:400;letter-spacing:10px}.art-hero-email-wrapper .hero-cta{color:#ffffff;font-size:20px;padding:16px 70px;line-height:normal;font-size:17px;background:#561a49;font-weight:700;letter-spacing:0.3vw}@media (min-width: 668px) and (max-width: 1600px){.art-hero-email-wrapper h1{font-size:11vw}.art-hero-email-wrapper h1 sup{font-size:7vw}.art-hero-email-wrapper h2{font-size:6vw}.art-hero-email-wrapper h2 sup{font-size:4vw}.art-hero-email-wrapper h3{font-size:2.7vw}}@media screen and (width: 667px){.art-hero-email-wrapper .hero-group{height:100vw;background-image:url('https://cache1.artprintimages.com/images/jump_pages/rebrand/homepage/2018/1201/hero/email-mobile.jpg')}.art-hero-email-wrapper h1{margin:50px 0 10px;font-size:160px}.art-hero-email-wrapper h2{margin-bottom:50px;font-size:50px}.art-hero-email-wrapper h2 sup{font-size:30px}.art-hero-email-wrapper h3{font-size:40px}.art-hero-email-wrapper .hero-cta{font-size:21px;padding:22px 100px;letter-spacing:0.6vw}}@media screen and (max-width: 666px){.art-hero-email-wrapper .hero-group{height:100vw;background-image:url('https://cache1.artprintimages.com/images/jump_pages/rebrand/homepage/2018/1201/hero/email-mobile.jpg')}.art-hero-email-wrapper h1{margin:6vw 0 1vw;font-size:24vw}.art-hero-email-wrapper h1 sup{font-size:14vw}.art-hero-email-wrapper h2{margin-bottom:4vw;font-size:8vw}.art-hero-email-wrapper h2 sup{font-size:6vw}.art-hero-email-wrapper h3{font-size:6vw}}</style>";

  var heroHTML = "<div class=\"art-hero-email-wrapper art-hero\"> <div class=\"hero-group track-group\" id=\"hph-75off150-flash\"> <a href=\"/gallery/id--b100/subjects-posters.htm\"> <div class=\"hero-text\"> <h3>ENDS AT NOON</h3> <h1><sup>$</sup>75 OFF</h1> <h2>ORDERS OVER <sup>$</sup>150!</h2> <div class=\"hero-cta\">SHOP NOW</div> </div> </a> </div></div>"

function semHPH () {
    jQuery(".art-hero").remove();
    jQuery(".promo-banner-wrapper").remove();
	jQuery(".art-subhero").before(heroStyles);
	jQuery(".art-subhero").before(heroHTML);
}
semHPH();

function doTracking($obj, event) {
  if (
    jQuery(event.target).parents("a").length <= 0 &&
    "pointer" != jQuery(event.target).css("cursor") &&
    "pointer" !=
      jQuery(event.target)
        .parents()
        .css("cursor")
  ) {
    trace("No need to fire!");
  } else {
    var dynEvent = "",
      i = 0,
      key = "ga",
      wtkeyValPair = "",
      gakeyValPair = "",
      gaGroup = "";
    for (i = 1; i <= 6; i++) {
      if (
        ((dynEvent = ""),
        (theEvent = ""),
        (key = "ga" + i),
        null != $obj.data(key) &&
          ((theCategory = $obj.data(key).category),
          null != $obj.data(key).event &&
            ((theEvent = $obj.data(key).event),
            "" != gakeyValPair && (gakeyValPair += ","),
            (gakeyValPair += "'" + theEvent + "'")),
          null != $obj.data(key).dynamicEvent))
      )
        try {
          if ("WT.z_tgturl" == theCategory) {
            if (
              ((dynEvent = unescape(
                jQuery(event.target)
                  .parents("a")
                  .attr("href")
              )),
              null == dynEvent || "" == dynEvent || "undefined" == dynEvent)
            ) {
              var $target = jQuery(event.target);
              $target.is("A") && (dynEvent = $target.attr("href"));
            }
            if (null == dynEvent || "" == dynEvent || "undefined" == dynEvent) {
              var str = $target.attr("onclick");
              dynEvent = str.substring(
                1 + str.indexOf("'"),
                str.lastIndexOf("'")
              );
            }
          }
          (null != dynEvent && "" != dynEvent && "undefined" != dynEvent) ||
            (dynEvent = eval($obj.data(key).dynamicEvent)),
            null == dynEvent && (dynEvent = ""),
            "WT.cg_n" == theCategory
              ? (gaGroup = dynEvent)
              : ("" != gakeyValPair && (gakeyValPair += ","),
                (gakeyValPair += "'" + dynEvent + "'"));
        } catch (t) {
          dynEvent = "";
        }
      if (
        ((key = "wt" + i),
        (dynEvent = ""),
        (theEvent = ""),
        null != $obj.data(key) &&
          ((theCategory = $obj.data(key).category),
          null != $obj.data(key).event &&
            ((theEvent = $obj.data(key).event),
            "" != wtkeyValPair && (wtkeyValPair += ","),
            (wtkeyValPair += "'" + theCategory + "','" + theEvent + "'")),
          null != $obj.data(key).dynamicEvent))
      )
        try {
          if (
            "WT.z_tgturl" == theCategory &&
            ((dynEvent = unescape(
              jQuery(event.target)
                .parents("a")
                .attr("href")
            )),
            null == dynEvent || "" == dynEvent || "undefined" == dynEvent)
          ) {
            var $target = jQuery(event.target);
            if (
              ($target.is("A") && (dynEvent = $target.attr("href")),
              null == dynEvent || "" == dynEvent || "undefined" == dynEvent)
            ) {
              var str = $target.attr("onclick");
              dynEvent = str.substring(
                1 + str.indexOf("'"),
                str.lastIndexOf("'")
              );
            }
          }
          (null != dynEvent && "" != dynEvent) ||
            (dynEvent = eval($obj.data(key).dynamicEvent)),
            null == dynEvent && (dynEvent = ""),
            "" != wtkeyValPair && (wtkeyValPair += ","),
            (wtkeyValPair += "'" + theCategory + "','" + dynEvent + "'");
        } catch (t) {
          dynEvent = "";
        }
    }
    if (
      (trace("webtrendsparams: " + wtkeyValPair),
      trace("gaparams: " + gakeyValPair),
      "" != gakeyValPair)
    ) {
      if (
        "undefined" == typeof $serverSideConfig ||
        "true" != $serverSideConfig.isDataLayerV2Enabled ||
        (0 != gakeyValPair.indexOf("'home-decor-gp'") &&
          0 != gakeyValPair.indexOf("'b2b-leftnav-gp'"))
      ) {
        var ga = new com.art.core.tracking.GoogleAnalytics(gaGroup);
        void 0 !== ga &&
          eval("ga.trackEventWithCategory(" + gakeyValPair + ")");
      } else {
      }
    }
  }
}
  jQuery(".art-hero .track-group, .promo-banner-wrapper .track-group").data("wt1", {
    category: "WT.cg_n",
    dynamicEvent: 'jQuery("meta[name=\'WT.cg_n\']").attr("content")'
  });
  jQuery(".art-hero .track-group, .promo-banner-wrapper .track-group").data("wt2", {
    category: "WT.dl",
    event: "50"
  });
  jQuery(".art-hero .track-group, .promo-banner-wrapper .track-group").data("wt3", {
    category: "WT.z_cur",
    dynamicEvent: 'jQuery("meta[name=\'WT.z_cur\']").attr("content")'
  });
  jQuery(".art-hero .track-group, .promo-banner-wrapper .track-group").data("wt4", {
    category: "WT.z_mod",
    dynamicEvent: '$obj.attr("id")'
  });
  jQuery(".art-hero .track-group, .promo-banner-wrapper .track-group").data("wt5", {
    category: "WT.z_tgturl",
    dynamicEvent: "event.target.id"
  });
  jQuery(".art-hero .track-group, .promo-banner-wrapper .track-group").data("wt6", {
    category: "WT.dcsvid",
    dynamicEvent: 'WebtrendsAsync.prototype.dcsGetCookie("PID")'
  });
  jQuery(".art-hero.track-group, .promo-banner-wrapper .track-group").data("ga3", {
    category: "WT.cg_n",
    dynamicEvent: 'jQuery("meta[name=\'WT.cg_n\']").attr("content")'
  });
  jQuery(".art-hero .track-group, .promo-banner-wrapper .track-group").data("ga1", {
    category: "WT.z_mod",
    dynamicEvent: '$obj.attr("id")'
  });
  jQuery(".art-hero .track-group, .promo-banner-wrapper .track-group").data("ga2", {
    category: "WT.z_tgturl",
    dynamicEvent: "event.target.id"
  });
  jQuery(".art-hero .track-group, .promo-banner-wrapper .track-group").bind("click", function(t) {
    doTracking(jQuery(this), t);
  });
}, 500);



  </script>

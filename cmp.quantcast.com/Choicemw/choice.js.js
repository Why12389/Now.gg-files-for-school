'use strict';
(function() {
    var cmpFile = 'noModule'in HTMLScriptElement.prototype ? 'cmp2.js' : 'cmp2-polyfilled.js';
    (function() {
        var cmpScriptElement = document.createElement('script');
        var firstScript = document.getElementsByTagName('script')[0];
        cmpScriptElement.async = true;
        cmpScriptElement.type = 'text/javascript';
        var cmpVersion;
        var tagUrl = document.currentScript.src;
        if (tagUrl.includes("tag_version")) {
            cmpVersion = 'https://cmp.quantcast.com/tcfv2/CMP_FILE?referer=now.gg'.replace('CMP_FILE', cmpFile);
        } else {
            cmpVersion = 'https://quantcast.mgr.consensu.org/tcfv2/CMP_FILE?referer=now.gg'.replace('CMP_FILE', cmpFile);
        }
        cmpScriptElement.src = cmpVersion;
        window._qevents = window._qevents || [];
        (function() {
            var elem = document.createElement('script');
            elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
            elem.async = true;
            elem.type = "text/javascript";
            var scpt = document.getElementsByTagName('script')[0];
            scpt.parentNode.insertBefore(elem, scpt);
        }
        )();
        var qcaccount = 'p-' + 'mw9xJtqPQGFbC';
        window._qevents.push({
            qacct: qcaccount,
            source: "choice"
        });
        firstScript.parentNode.insertBefore(cmpScriptElement, firstScript);
    }
    )();
    (function() {
        var css = "" + " .qc-cmp-button { " + "   background-color: #ff42a5 !important; " + "   border-color: #ff42a5 !important; " + " } " + " .qc-cmp-button:hover { " + "   border-color: #ff42a5 !important; " + " } " + " .qc-cmp-alt-action, " + " .qc-cmp-link { " + "   color: #ff42a5 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   background-color: #ff42a5 !important; " + "   border-color: #ff42a5 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   color: #ffffff !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   color: #ff42a5 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   background-color: #eee !important; " + "   border-color: transparent !important; " + " } " + "" + "";
        var stylesElement = document.createElement('style');
        var re = new RegExp('&quote;','g');
        css = css.replace(re, '"');
        stylesElement.type = 'text/css';
        if (stylesElement.styleSheet) {
            stylesElement.styleSheet.cssText = css;
        } else {
            stylesElement.appendChild(document.createTextNode(css));
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(stylesElement);
    }
    )();
    var autoDetectedLanguage = 'en';
    function splitLang(lang) {
        return lang.length > 2 ? lang.split('-')[0] : lang;
    }
    ;function isSupported(lang) {
        var langs = ['en', 'fr', 'de', 'it', 'es', 'da', 'nl', 'el', 'hu', 'pt', 'ro', 'fi', 'pl', 'sk', 'sv', 'no', 'ru', 'bg', 'ca', 'cs', 'et', 'hr', 'lt', 'lv', 'mt', 'sl', 'tr', 'zh'];
        return langs.indexOf(lang) === -1 ? false : true;
    }
    ;if (isSupported(splitLang(document.documentElement.lang))) {
        autoDetectedLanguage = splitLang(document.documentElement.lang);
    } else if (isSupported(splitLang(navigator.language))) {
        autoDetectedLanguage = splitLang(navigator.language);
    }
    ;var choiceMilliSeconds = (new Date).getTime();
    window.__tcfapi('init', 2, function() {}, {
        "coreConfig": {
            "uspVersion": 1,
            "uspJurisdiction": ["CA"],
            "uspLspact": "N",
            "suppressCcpaLinks": true,
            "quantcastAccountId": "mw9xJtqPQGFbC",
            "privacyMode": ["GDPR", "USP"],
            "hashCode": "TXsCCpoVpGZKMZ4TEAnOFA",
            "publisherCountryCode": "US",
            "publisherName": "now.gg",
            "vendorPurposeIds": [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
            "vendorFeaturesIds": [1, 3, 2],
            "vendorPurposeLegitimateInterestIds": [3, 5, 7, 8, 9, 2, 4, 10, 6],
            "vendorSpecialFeaturesIds": [1, 2],
            "vendorSpecialPurposesIds": [1, 2],
            "googleEnabled": true,
            "consentScope": "service",
            "thirdPartyStorageType": "iframe",
            "consentOnSafari": false,
            "displayUi": "inEU",
            "defaultToggleValue": "off",
            "initScreenRejectButtonShowing": true,
            "initScreenCloseButtonShowing": true,
            "softOptInEnabled": false,
            "showSummaryView": true,
            "persistentConsentLinkLocation": 3,
            "displayPersistentConsentLink": true,
            "uiLayout": "popup",
            "publisherLogo": "https://cdn.now.gg/apps-content/img/homepage/whiteLogo.svg?qc-size=249,67",
            "vendorListUpdateFreq": 30,
            "publisherPurposeIds": [],
            "initScreenBodyTextOption": 1,
            "publisherConsentRestrictionIds": [],
            "publisherLIRestrictionIds": [],
            "publisherPurposeLegitimateInterestIds": [],
            "publisherSpecialPurposesIds": [],
            "publisherFeaturesIds": [],
            "publisherSpecialFeaturesIds": [],
            "stacks": [1, 42],
            "lang_": autoDetectedLanguage
        },
        "premiumUiLabels": {
            "uspDnsText": [""]
        },
        "premiumProperties": {
            "googleWhitelist": [1]
        },
        "coreUiLabels": {},
        "theme": {
            "uxPrimaryButtonColor": "#ff42a5",
            "uxSecondaryButtonTextColor": "#ff42a5"
        },
        "nonIabVendorsInfo": {}
    });
}
)();
/*
 * JS for scOutsideWaterUse generated by Appery.io
 *
 * Created on: Sunday, April 28, 2013, 10:51:28 AM (PDT)
 */

/* Setting project environment indicator */
Appery.env = "apk";

Appery.getProjectGUID = function() {
    return 'aa4872f6-7ddc-45e8-9cb7-e24d27f00d71';
}

Appery.getTargetPlatform = function() {
    return 'A';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

/*
 * Service settings
 */
var db0_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "517c3680e4b058fd2db9e118"
}

/*
 * Services
 */
var db0_scorecards_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/scorecards/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': db0_settings
});
var db0_scorecards_update_service = new Appery.RestService({
    'url': '{database_url}/collections/scorecards/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': db0_settings
});
var db0_scorecards_read_service = new Appery.RestService({
    'url': '{database_url}/collections/scorecards/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': db0_settings
});
var db0_scorecards_create_service = new Appery.RestService({
    'url': '{database_url}/collections/scorecards',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': db0_settings
});
var db0_scorecards_list_service = new Appery.RestService({
    'url': '{database_url}/collections/scorecards',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': db0_settings
});
var db0_scorecards_query_service = new Appery.RestService({
    'url': '{database_url}/collections/scorecards',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': db0_settings
});

//createSpinner("res/lib/jquerymobile/images/ajax-loader.gif");
Appery.AppPages = [{
    "name": "Floor1_clone_1",
    "location": "Floor1_clone_1.html"
}, {
    "name": "Floor1_clone_2",
    "location": "Floor1_clone_2.html"
}, {
    "name": "scOutsideWaterUse",
    "location": "scOutsideWaterUse.html"
}, {
    "name": "Floor1_clone_3",
    "location": "Floor1_clone_3.html"
}, {
    "name": "scInsideWaterUse",
    "location": "scInsideWaterUse.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "ScoreCard",
    "location": "ScoreCard.html"
}, {
    "name": "Floor1",
    "location": "Floor1.html"
}, {
    "name": "scWaterConsumption",
    "location": "scWaterConsumption.html"
}, {
    "name": "scOtherOpportunities",
    "location": "scOtherOpportunities.html"
}, {
    "name": "Leaderboard",
    "location": "Leaderboard.html"
}, {
    "name": "scBuildingInfo",
    "location": "scBuildingInfo.html"
}, {
    "name": "scCoolingSystem",
    "location": "scCoolingSystem.html"
}, {
    "name": "scWaterAudits",
    "location": "scWaterAudits.html"
}, {
    "name": "scFloors",
    "location": "scFloors.html"
}];

j_78_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_2': 'j_82',
        'mobilegridcell_3': 'j_83',
        'mobilelabel_7': 'j_84',
        'mobilegridcell_4': 'j_85',
        'mobileselectmenu1_8': 'j_86',
        'mobileselectmenuitem_9': 'j_87',
        'mobilebutton_10': 'j_88'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    Appery.CurrentScreen = 'j_78';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */
    j_78_beforeshow = function() {
        Appery.CurrentScreen = 'j_78';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_91A9_onLoad = j_78_onLoad = function() {
        screen_91A9_elementsExtraJS();
        $('div[dsid="mobilecontainer"]').css('background-image', 'url("http://i41.tinypic.com/2e325va.png")');

        j_78_deviceEvents();
        j_78_windowEvents();
        screen_91A9_elementsEvents();
    }

    // screen window events
    screen_91A9_windowEvents = j_78_windowEvents = function() {
        $('#j_78').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    j_78_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_91A9_elementsExtraJS = j_78_elementsExtraJS = function() {
        // screen (screen-91A9) extra code

        /* mobileselectmenu1_8 */

        $("#j_86").parent().find("a.ui-btn").attr("tabindex", "1");

    }

    // screen elements handler
    screen_91A9_elementsEvents = j_78_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#j_81 [name="mobilebutton_10"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('scOtherOpportunities', {
                        reverse: false
                    });

                    scLS = 0.1 * parseFloat(Appery('mobileselectmenu1_8').val()) / 10;

                    localStorage.setItem('scorecardLandscape', scLS);

                    ;

                }
            },
        });

    }

    $("#j_78").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_78_beforeshow();
    });

    if (runBeforeShow) {
        j_78_beforeshow();
    } else {
        j_78_onLoad();
    }

}

$("#j_78").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    j_78_js();
});
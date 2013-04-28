/*
 * JS for ScoreCard generated by Appery.io
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

j_170_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'panel_3': 'j_174',
        'mobilelabel_4': 'j_175'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    Appery.CurrentScreen = 'j_170';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */
    j_170_beforeshow = function() {
        Appery.CurrentScreen = 'j_170';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_A6EB_onLoad = j_170_onLoad = function() {
        screen_A6EB_elementsExtraJS();

        j_170_deviceEvents();
        j_170_windowEvents();
        screen_A6EB_elementsEvents();
    }

    // screen window events
    screen_A6EB_windowEvents = j_170_windowEvents = function() {
        $('#j_170').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
        $('#j_170').bind({
            pageshow: function() {
                //var plot1 = $.jqplot ("chart1", [[3,7,9,1,4,6,8,2,5]]);
                var scWC = localStorage.getItem('scorecardWaterConsumption');
                var scWA = localStorage.getItem('scorecardWaterAudit');
                var scWP = localStorage.getItem('scorecardWaterProjects');
                var scFF = localStorage.getItem('scorecardFaucetFixture');
                var scLS = localStorage.getItem('scorecardLandscape');
                var scG = localStorage.getItem('scorecardGoals');
                var scSC = localStorage.getItem('scorecardSewerCredits');
                var scRU = localStorage.getItem('scorecardReuse');
                var scRB = localStorage.getItem('scorecardRebates');
                var scIN = localStorage.getItem('scorecardInnovation');
                //var scCT = localStorage.getItem('scorecardCoolingTower');
                console.log(scWC);
                console.log(scWA);
                console.log(scWP);
                console.log(scFF);
                console.log(scLS);
                console.log(scG);
                console.log(scSC);
                console.log(scRU);
                console.log(scRB);
                console.log(scIN);
                //console.log(scCT);
                var scoreMean = scWC + scWA + scWP + scFF + scLS + scG + scSC + scRU + scRB + scIN; // + scCT
                scoreMean = scoreMean / 10; // 11
                var scoreStr = "Your Overall Grade : ";

                var scoreGrade = "E";

                if (scoreMean >= 0.9) scoreGrade = "A";
                else if (scoreMean >= 0.8) scoreGrade = "B";
                else if (scoreMean >= 0.7) scoreGrade = "C";
                else if (scoreMean >= 0.6) scoreGrade = "D";

                scoreStr = scoreStr + scoreGrade;

                Appery('mobilelabel_4').text(scoreStr);

                //[scCT ,1], 
                var ticks = ['Water Consumption', 'Water Audit', 'Water Projects', 'Faucet & Fixtures', 'Landscape', 'Goals', 'SewerCredits', 'Reuse', 'Rebates', 'Innovation'];

                var plot1 = $.jqplot('chart1', [
                    [
                        [scIN * 100, 2],
                        [scRB * 100, 3],
                        [scRU * 100, 4],
                        [scSC * 100, 5],
                        [scG * 100, 6],
                        [scLS * 100, 7],
                        [scFF * 100, 8],
                        [scWP * 100, 9],
                        [scWA * 100, 10],
                        [scWC * 100, 11]
                    ]
                ],

                {
                    animate: true,
                    animateReplot: true,
                    seriesDefaults: {
                        renderer: $.jqplot.BarRenderer,
                        pointLabels: {
                            show: true,
                            location: 'e',
                            edgeTolerance: -15
                        },
                        shadowAngle: 135,
                        rendererOptions: {
                            barDirection: 'horizontal',
                            barWidth: 8
                        }
                    },
                    axes: {
                        yaxis: {
                            renderer: $.jqplot.CategoryAxisRenderer,
                            ticks: ticks,
                            tickOptions: {
                                textColor: "#FFFFFF"
                            }
                        },
                        xaxis: {
                            tickOptions: {
                                textColor: "#FFFFFF"
                            },
                            max: 100
                        }

                    }
                });

/*
var milliseconds = 100;
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
  if ((new Date().getTime() - start) > milliseconds){
    break;
  }
}
var plot1 = $.jqplot('chart1', [
        [
         [scIN*100 * Math.random() * 0.25 ,2], 
         [scRB*100 ,3], 
         [scRU*100 ,4],
         [scSC*100 ,5],
         [scG*100  ,6],
         [scLS*100 ,7],
         [scFF*100 ,8],
         [scWP*100 ,9],
         [scWA*100 ,10],
         [scWC*100 ,11]
        ] ],
    
     {
        seriesDefaults: {
            renderer:$.jqplot.BarRenderer,
            pointLabels: { show: true, location: 'e', edgeTolerance: -15 },
            shadowAngle: 135,
            rendererOptions: {
                barDirection: 'horizontal',
              barWidth: 8
            }
        },
        axes: {
          yaxis: {
              renderer: $.jqplot.CategoryAxisRenderer,
              ticks: ticks,
              tickOptions : {
                textColor: "#FFFFFF"
              }
            },
          xaxis: {
            tickOptions: {
              textColor: "#FFFFFF"
            },
            max: 100
          }
          	
        }
    });

var milliseconds = 100;
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
  if ((new Date().getTime() - start) > milliseconds){
    break;
  }
}

var plot1 = $.jqplot('chart1', [
        [
         [scIN*100 ,2], 
         [scRB*100 ,3], 
         [scRU*100 ,4],
         [scSC*100 ,5],
         [scG*100  ,6],
         [scLS*100 ,7],
         [scFF*100 ,8],
         [scWP*100 ,9],
         [scWA*100 ,10],
         [scWC*100 ,11]
        ] ],
    
     {
        seriesDefaults: {
            renderer:$.jqplot.BarRenderer,
            pointLabels: { show: true, location: 'e', edgeTolerance: -15 },
            shadowAngle: 135,
            rendererOptions: {
                barDirection: 'horizontal',
              barWidth: 8
            }
        },
        axes: {
          yaxis: {
              renderer: $.jqplot.CategoryAxisRenderer,
              ticks: ticks,
              tickOptions : {
                textColor: "#FFFFFF"
              }
            },
          xaxis: {
            tickOptions: {
              textColor: "#FFFFFF"
            },
            max: 100
          }
          	
        }
    });
*/
                ;
            },
        });

    }

    // device events
    j_170_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_A6EB_elementsExtraJS = j_170_elementsExtraJS = function() {
        // screen (screen-A6EB) extra code

    }

    // screen elements handler
    screen_A6EB_elementsEvents = j_170_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

    }

    $("#j_170").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_170_beforeshow();
    });

    if (runBeforeShow) {
        j_170_beforeshow();
    } else {
        j_170_onLoad();
    }

}

$("#j_170").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    j_170_js();
});
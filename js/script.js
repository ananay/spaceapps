/**
* @Author: ananayarora
* @Date:   2017-04-29T18:08:23+05:30
* @Last modified by:   ananayarora
* @Last modified time: 2017-04-30T09:37:05+05:30
*/

var viewer;
var pinBuilder;
var rotationInterval;
var textInterval;
var counter = 1;

function speak(text) {
       var msg = new SpeechSynthesisUtterance();
       msg.text = text;
       window.speechSynthesis.speak(msg);
}


$(document).ready(function(){

    var texts = ['New Delhi, India','Kaabul, Afghanistan','Norbotten, Sweden', 'Reykjavik, Iceland', 'Orlando, United States', 'Orlando, United States'];

    function realTimeCards(){
      if(texts[counter] == 'New Delhi, India'){
        $(".delhi-poi").show();
        $(".kabul-poi").hide();
        $(".norrbotten-poi").hide();
        $(".reykjavik-poi").hide();
        $(".orlando-poi").hide();
        $(".delhi-hotel").show();
        $(".kabul-hotel").hide();
        $(".norrbotten-hotel").hide();
        $(".reykjavik-hotel").hide();
        $(".orlando-hotel").hide();
      } else if (texts[counter] == 'Kaabul, Afghanistan') {
        $(".delhi-poi").hide();
        $(".kabul-poi").show();
        $(".norrbotten-poi").hide();
        $(".reykjavik-poi").hide();
        $(".orlando-poi").hide();
        $(".delhi-hotel").hide();
        $(".kabul-hotel").show();
        $(".norrbotten-hotel").hide();
        $(".reykjavik-hotel").hide();
        $(".orlando-hotel").hide();
      } else if (texts[counter] == 'Norbotten, Sweden') {
        $(".delhi-poi").hide();
        $(".kabul-poi").hide();
        $(".norrbotten-poi").show();
        $(".reykjavik-poi").hide();
        $(".orlando-poi").hide();
        $(".delhi-hotel").hide();
        $(".kabul-hotel").hide();
        $(".norrbotten-hotel").show();
        $(".reykjavik-hotel").hide();
        $(".orlando-hotel").hide();
      } else if (texts[counter] == 'Reykjavik, Iceland') {
        $(".delhi-poi").hide();
        $(".kabul-poi").hide();
        $(".norrbotten-poi").hide();
        $(".reykjavik-poi").show();
        $(".orlando-poi").hide();
        $(".delhi-hotel").hide();
        $(".kabul-hotel").hide();
        $(".norrbotten-hotel").hide();
        $(".reykjavik-hotel").show();
        $(".orlando-hotel").hide();
      } else if (texts[counter] == 'Orlando, United States') {
        $(".delhi-poi").hide();
        $(".kabul-poi").hide();
        $(".norrbotten-poi").hide();
        $(".reykjavik-poi").hide();
        $(".orlando-poi").show();
        $(".delhi-hotel").hide();
        $(".kabul-hotel").hide();
        $(".norrbotten-hotel").hide();
        $(".reykjavik-hotel").hide();
        $(".orlando-hotel").show();
      }
    }
    realTimeCards();
    viewer = new Cesium.Viewer('cesiumContainer');
    pinBuilder = new Cesium.PinBuilder();

    function create(name, lon, lat) {
        var bluePin = viewer.entities.add({
            name : name,
            position : Cesium.Cartesian3.fromDegrees(lat,lon),
            billboard : {
                image : pinBuilder.fromColor(Cesium.Color.BLUE, 48).toDataURL(),
                verticalOrigin : Cesium.VerticalOrigin.BOTTOM
            }
        });
        // viewer.flyTo(bluePin).then(function(){
        //     viewer.trackedEntity = bluePin;
        // });
    }

    function rotateGlobe(speed) {
        viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, speed);
    }

    function initRotation() {
        rotationInterval = setInterval(function(){
            rotateGlobe(0.0001);
        }, 1);
    }

    function killRotation() {
        clearInterval(rotationInterval);
    }

    initRotation();

    $(".plane").animate({
        'left':'76%'
    }, 100000);

    textInterval = setInterval(function(){
        $(".current").text("Currently flying over "+texts[counter]);
        realTimeCards();
        counter++;
    }, 20000);

    setTimeout(function(){
        clearInterval(textInterval);
    }, 100000);


    $(document).click(function(){
        killRotation();
    });

    $("#btn-home").click(function(){
        $(".poi").hide();
        $(".hotels").hide();
        $(".home").show();
    });

    $("#btn-poi").click(function(){
        $(".hotels").hide();
        $(".home").hide();
        $(".poi").show();
        var text = "Delhi, the capital of India, has been continuously inhabited for over 2500 years. Through most of its history, Delhi has served as a capital of various kingdoms and empires. It has been captured, ransacked and rebuilt many times over, particularly during the medieval period. Kabul is the capital of Afghanistan and its largest city, a fast-growing and ethnically diverse metropolis.  Since the removal of the Taliban from power in late 2001, the city gradually began rebuilding itself with assistance by the international community.";
        text = text + "Despite the many terrorist attacks by anti-state elements, the city is growing and developing. Norrbotten, known in English as North Bothnia, is a Swedish province (landskap) in northernmost Sweden.  Norrbottens coat of arms symbolizes the four large rivers in Norrbotten that drain into the Gulf of Bothnia: Torne River, Kalix River, Lule River and Pite River. Reykjavik, the capital of Iceland, holds the distinction of being thenorthernmost capital of a sovereign state.  Steam from hot springs in the region is said to have inspired Reykjavík's name, which loosely translates to Smoke Cove (the city is sometimes referred to as Bay of Smoke or Smoky Bay in English language travel guides).  The City of Orlando is nicknamed The City Beautiful,";
        text = text + "and its symbol is the fountain at Lake Eola. Orlando is also known as 'The Theme Park Capital of the World\' and in 2014 its tourist attractions and events drew more than 62 million visitors  Orlando was founded as Fort Gatlin, a series of fortified encampments during the Second Seminole War, and became a popular resort during the years between the Spanish–American War and World War I.";
        speak(text);
    });

    $("#btn-hotel").click(function(){
        $(".home").hide();
        $(".poi").hide();
        $(".hotels").show();
    });

    $("#btn-uber").click(function(){

    });

});

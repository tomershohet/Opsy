// SCRIPTS FOR TO DO LIST APP

$(document).ready(function() {
  // Hide duplicate message
  $(".alert-danger").hide();
  $("#project-rename-button").hide();


  var setCheckOn = function (currButton) {
      var smileAnimation = $("<i>").addClass("fa fa-smile-o").fadeIn(750).delay(250).fadeOut(500);
      var check = $("<i>").addClass("fa fa-check-square-o").hide().delay(1500).fadeIn(1000);
      currButton.replaceWith($("<button>").attr("type", "button").attr("value", currButton[0].value).addClass("btn btn-success btn-width").append(smileAnimation).append(check));
      $(".btn-success").parent().prev().css("text-decoration", "line-through").css("color", "#449D44");
      $(".btn-success").parent().parent().css("success");
  }

  var data = [{
      id: "1", // Unique ID; timestamp is used here
      title: "first", // Title of the task
      date: "5", // Due date
      description: "description" // Description of the task
  },
  {
      id: "2", // Unique ID; timestamp is used here
      title: "sec", // Title of the task
      date: "6", // Due date
      description: "description" // Description of the task
  },
  {
      id: "3", // Unique ID; timestamp is used here
      title: "third", // Title of the task
      date: "3", // Due date
      description: "description" // Description of the task
  }];

  var r = new Array(), j = -1;
  for (var key = 0, size = data.length; key < size; key++) {
      r[++j] = '<tr><td class=\"task word-td\">';
      r[++j] = data[key]['title'];
      r[++j] = '</td><td><button type="button" class="unchecked btn btn-default" value="item_';
      r[++j] = data[key]['id'];
      r[++j] = '"><i class="fa fa-square-o"></i></button></td><td class="vert-align">';
      r[++j] = data[key]['date'];
      r[++j] = '</td></tr>';
  }
  $('#main-table').children('tbody').html(r.join(''));

  var buttons = $('#main-table').children('tbody').find("button");
   // Run on each item and set it o be chekced if need to
  for (var currButtonIndex = 0, size = buttons.length; currButtonIndex < size; currButtonIndex++) {
      if (localStorage.getItem(buttons[currButtonIndex].value) != null)
          setCheckOn($(buttons[currButtonIndex]));
  }

  // TITLE PROJECT NAME
  $("#project-name-button").on("click", function(e) {
    e.preventDefault();
    var projectName = $("#project-name").val();
    var listTitle = $(".list-title");

    listTitle.replaceWith($("<h3>").addClass("list-title panel-title").append(projectName));
    $("#project-name").val("").focus();
    $(".list-title").hide().fadeIn(1500);
    $("#project-name").delay(500).fadeOut(1000);
    $("#project-name-button").delay(500).fadeOut(1000);
    $("#project-rename-button").delay(500).fadeIn(1000);

    // Rename Project
    $("#project-rename-button").on("click", function(e) {
      e.preventDefault();
      $("#project-name").fadeIn(1500).focus();
      $("#project-name-button").fadeIn(1500);
      $("#project-rename-button").delay(1000).fadeOut(500);
    });
  });

  // ADD NEW TASK
  $(".btn-warning").on("click", function(e) {
    e.preventDefault();  
    var newTask = $(".new-task").val().trim();
    var isDuplicate = false;
    // Finds duplicate entries
    $("td.word-td").each(function(){
      if($(this).text().trim().toLowerCase() === newTask.toLowerCase()) {
        isDuplicate = true;
        return;
      };
    });
    // Runs duplicate entry message
    if(isDuplicate){
      $("#duplicate-msg").slideDown(500);
      return;
    };
    // Runs empty message
    if(newTask === ""){
      $("#empty-msg").slideDown(500);
      return;
    };
    // Inserts new row with new task item
    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td vert-align").append(newTask);
    var completedBtn = $("<button>").addClass("unchecked btn btn-default").append('<i class="fa fa-square-o">');
    var completedTd = $("<td>").addClass("vert-align").append(completedBtn);
    var deleteBtn = $("<button>").addClass("btn btn-danger").append('<i class="fa fa-trash-o"></i>');
    var deleteTd = $("<td>").addClass("vert-align").append(deleteBtn);

    newRow.append(wordTd).append(completedTd).append(deleteTd).hide().fadeIn(2000);
    $("#task-list").append(newRow);
    $(".new-task").val("").focus();

    // Fade out duplicate entry message on keydown
    $(".new-task").on("keydown", function() {
      $(".alert-danger").fadeOut(500);
    });

    // Rotating gears icon
    var rotatingGear = $("<i>").attr("id", "gear-icon").addClass("fa fa-cog fa-spin");
    $("#plus-icon").replaceWith($(rotatingGear));
    rotatingGear.hide().fadeIn(500).fadeOut(500, function(){
      var plusSign = $("<i>").attr("id", "plus-icon").addClass("fa fa-plus");
      $("#gear-icon").replaceWith($(plusSign));
      plusSign.hide().fadeIn(500);
    });

  }); // End add new task
  
  // MARK COMPLETE
  $("table").on("click", ".unchecked", function(){
 
      setCheckOn($(this));
      // Save the task status on the local storage
    localStorage.setItem(this.value, JSON.stringify("{checked:true}"));
  });

  // MARK NOT COMPLETE
  $("table").on("click", ".btn-success", function(){
    var meh = $("<i>").addClass("fa fa-meh-o").fadeIn(750).delay(250).fadeOut(500);
    var uncheck = $("<i>").addClass("fa fa-square-o").hide().delay(1500).fadeIn(1000);
    $(this).replaceWith($("<button>").attr("type", "button").attr("value", this.value).addClass("unchecked btn btn-default btn-width").append(meh).append(uncheck));
    $(".unchecked").parent().prev().css("text-decoration", "none").css("color", "#c8c8c8");

    localStorage.removeItem(this.value);

  });

  // REMOVE ROW
  $("table").on("click", ".btn-danger", function() {
    $(this).parent().prev().prev().css("color", "red");
    var fire = $("<span>").addClass("glyphicon glyphicon-fire").attr("aria-hidden", "true");
    $(this).replaceWith($("<button>").attr("type", "button").attr("value", this.value).addClass("btn btn-danger btn-width").append(fire));
    fire.hide().fadeIn(750, function(){
        $(this).closest("tr").fadeOut(500, function(){
        $(this).remove();
      });
    });
  });



});
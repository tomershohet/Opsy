// SCRIPTS FOR TO DO LIST APP

$(document).ready(function() {
  // Hide duplicate message
  $(".alert-danger").hide();
  $("#project-rename-button").hide();
  //$("#datepicker").datepicker($.datepicker.regional["he"]);
  //  // Set the calander to be on hebrew format
  //var setCalander = function () {
  //    $("#datepicker").datepicker($.datepicker.regional["he"]);
      
  //};

    //setCalander();

  $('#datepicker').datepicker({
      format: "dd/mm/yyyy"
  });

  var checklistName = "1";
  var setCheckOn = function (currButton) {
      var smileAnimation = $("<i>").addClass("fa fa-smile-o").fadeIn(750).delay(250).fadeOut(500);
      var check = $("<i>").addClass("fa fa-check-square-o").hide().delay(1500).fadeIn(1000);
      currButton.replaceWith($("<button>").attr("type", "button").attr("value", currButton[0].value).addClass("btn btn-success btn-width").append(smileAnimation).append(check));
      $(".btn-success").parent().prev().css("text-decoration", "line-through").css("color", "#449D44");
      $(".btn-success").parent().parent().css("success");
  }

  var data = [{
      id: "1", // Unique ID; timestamp is used here
      title: "משימה ראשונה", // Title of the task
      date: "5", // Due date
      description: "description", // Description of the task
      level: 1
  },
  {
      id: "2", 
      title: "sec", 
      date: "6", 
      description: "description", 
      level: 0
  },
  {
      id: "3", // Unique ID; timestamp is used here
      title: "third", // Title of the task
      date: "3", // Due date    
      description: "description", // Description of the task
      level: 1
  }];

    //$("#datepicker").datepicker();

    // Get the saved target date if exist
  var targetDateString = localStorage.getItem(checklistName + "_targetDate");

  var targetDate;
  if (targetDateString) {
      targetDate = new Date(parseFloat(targetDateString));
      $("#datepicker").val(targetDate.getMonth() + 1 + "/" + targetDate.getDate() + "/" + targetDate.getFullYear());

      //$("#datepicker").setDate(targetDate);
  }

  var r = new Array(), j = -1;
  for (var key = 0, size = data.length; key < size; key++) {

      if (data[key].level == 0) {
      r[++j] = '<tr><td class=\"task word-td\"><b><u>';
      r[++j] = data[key]['title'];
      r[++j] = '</td></b></u></tr>';
      }
      else
      {
          r[++j] = '<tr><td style="padding-right:5em" class=\"task word-td vert-align\">';
          r[++j] = data[key]['title'];
          r[++j] = '</td><i class="fa fa-square-o"></i></button></td><td class="vert-align days-to-task" data-value="';
          r[++j] = data[key]['date'];
          r[++j] = '">';
          if (targetDateString) {
              var result = new Date();
              result.setDate(targetDate.getDate() - data[key]['date']);
              r[++j] = result.toLocaleDateString();
          }
          else
              r[++j] = data[key]['date'];

          r[++j] = '<td><button type="button" class="unchecked btn btn-default" value="item_';
          r[++j] = data[key]['id'];
          r[++j] = '"><i class="fa fa-square-o">';
          r[++j] = '</td></tr>';
      }
  }

  $('#main-table').children('tbody').html(r.join(''));

  var buttons = $('#main-table').children('tbody').find("button");
   // Run on each item and set it o be chekced if need to
  for (var currButtonIndex = 0, size = buttons.length; currButtonIndex < size; currButtonIndex++) {
      if (localStorage.getItem(checklistName + "_task_" + buttons[currButtonIndex].value) != null)
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

  var isDateValid = function (text) {
      var comp = text.split('/');
      var m = parseInt(comp[0], 10);
      var d = parseInt(comp[1], 10);
      var y = parseInt(comp[2], 10);
      var date = new Date(y, m - 1, d);
      if (!(date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d))
          return false;

      return (date);
  }

  var changeDaysToDates = function (targetDate) {

      // Run on each days cell and change it to date
      var days = $('#main-table').children('tbody').find(".days-to-task");
      for (var i = 0, size = days.length; i < size; i++) {
          var result = new Date();

          result.setDate(targetDate.getDate() - $(days[i]).data("value"));
          days[i].textContent = result.toLocaleDateString();
      }
  }

    // ADD NEW TASK
  $(".btn-set-date").on("click", function (e) {
      e.preventDefault();
      var newDate = $(".new-date").val();
      
      //var isDateValid = false;
      //TODO: Make sure it's a valid date

      // Runs empty message
      var date = isDateValid(newDate);
      if (!date) {
          $("#date-invalid-msg").slideDown(500);
          return;
      };

      localStorage.setItem(checklistName + "_targetDate", date.getTime());

      changeDaysToDates(date)

      // Rotating gears icon
      var rotatingGear = $("<i>").attr("id", "gear-icon").addClass("fa fa-cog fa-spin");
      $("#set-date").replaceWith($(rotatingGear));
      rotatingGear.hide().fadeIn(500).fadeOut(500, function () {
          var plusSign = $("<i>").attr("id", "set-date").addClass("fa fa-check");
          $("#gear-icon").replaceWith($(plusSign));
          plusSign.hide().fadeIn(500);
      });

  }); // End add new task


  // ADD NEW TASK
  $(".btn-add-task").on("click", function (e) {
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
    var wordTd = $("<td>").addClass("word-td vert-align").attr("style", "padding-right:5em").append(newTask);
    var completedBtn = $("<button>").addClass("unchecked btn btn-default").append('<i class="fa fa-square-o">');
    var completedTd = $("<td>").addClass("vert-align").append(completedBtn);
    var deleteTd = $("<td>").addClass("vert-align days-to-task").append("333");

    newRow.append(wordTd).append(deleteTd).append(completedTd).hide().fadeIn(2000);
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
      localStorage.setItem(checklistName + "_task_" + this.value, JSON.stringify("{checked:true}"));
  });

  // MARK NOT COMPLETE
  $("table").on("click", ".btn-success", function(){
    var meh = $("<i>").addClass("fa fa-meh-o").fadeIn(750).delay(250).fadeOut(500);
    var uncheck = $("<i>").addClass("fa fa-square-o").hide().delay(1500).fadeIn(1000);
    $(this).replaceWith($("<button>").attr("type", "button").attr("value", this.value).addClass("unchecked btn btn-default btn-width").append(meh).append(uncheck));
    $(".unchecked").parent().prev().css("text-decoration", "none").css("color", "#c8c8c8");

    localStorage.removeItem(checklistName + "_task_" + this.value);

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
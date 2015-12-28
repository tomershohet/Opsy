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
  var checklistName = "sky";

  var userID = localStorage.getItem("user_id");
  if (!userID) {
      localStorage.setItem("user_id", Math.floor(Math.random() * 1000000) + 1)
      userID = localStorage.getItem("user_id");
  }
  
  mixpanel.identify(userID);

    // MixPanel
  mixpanel.register({
      "checklist_type": checklistName
  });

  mixpanel.track("Checklist opened");
  
  var setCheckOn = function (currButton) {
      var smileAnimation = $("<i>").addClass("fa fa-smile-o").fadeIn(750).delay(250).fadeOut(500);
      var check = $("<i>").addClass("fa fa-check-square-o").hide().delay(1500).fadeIn(1000);
      currButton.replaceWith($("<button>").attr("type", "button").attr("value", currButton[0].value).addClass("btn btn-success btn-width").append(smileAnimation).append(check));
      $(".btn-success").parent().prev().css("text-decoration", "line-through").css("color", "#449D44");
      $(".btn-success").parent().parent().css("success");
  }

  var data = [{ id: '', title: 'הכנה', date: '', level: 0 },
{ id: '1', title: 'לארגן רשימה של חברים', date: '120', level: 1 },
{ id: '2', title: 'החלטה על מועד החופשה', date: '120', level: 1 },
{ id: '', title: 'הזמנה', date: '', level: 0 },
{ id: '4', title: 'טיסות', date: '120', level: 1 },
{ id: '6', title: 'מלון', date: '90', level: 1 },
{ id: '9', title: 'חדשים? תזמינו שיעור פרטי / קורס', date: '90', level: 1 },
{ id: '5', title: 'רכב', date: '75', level: 1 },
{ id: '10', title: 'סקימולטור', date: '45', level: 1 },
{ id: '7', title: 'סקי פס', date: '30', level: 1 },
{ id: '', title: 'להשיג ציוד סקי..', date: '', level: 0 },
{ id: '12', title: 'חליפה - מכנס', date: '28', level: 1 },
{ id: '13', title: 'חליפה - מעיל', date: '28', level: 1 },
{ id: '20', title: 'ציוד גלישה: בורד+נעליים / מגלשי סקי + מקלות', date: '28', level: 1 },
{ id: '14', title: 'כפפות', date: '14', level: 1 },
{ id: '15', title: 'קסדה לסנובורד', date: '14', level: 1 },
{ id: '16', title: 'ביגוד תרמי', date: '14', level: 1 },
{ id: '17', title: 'חם צוואר / צעיף', date: '14', level: 1 },
{ id: '18', title: 'משקף (גוגלס)', date: '14', level: 1 },
{ id: '19', title: 'תיק גב לגלישה - רצוי עם שקית שתיה', date: '14', level: 1 },
{ id: '21', title: 'מיגונים', date: '14', level: 1 },
{ id: '8', title: 'ביטוח', date: '7', level: 1 },
{ id: '', title: 'השלמת קניות', date: '', level: 0 },
{ id: '22', title: 'קרם הגנה!!', date: '7', level: 1 },
{ id: '23', title: 'קניה או השכרה של הציוד שלא השגנו', date: '7', level: 1 },
{ id: '32', title: 'מעיל', date: '5', level: 1 },
{ id: '33', title: 'משקפי שמש', date: '5', level: 1 },
{ id: '34', title: 'חולצת דרייפיט', date: '4', level: 1 },
{ id: '37', title: 'מברג קטן (אם הציוד שלכם)', date: '4', level: 1 },
{ id: '', title: 'אריזת מזוודות', date: '', level: 0 },
{ id: '25', title: 'את כל הציוד סקי שיש לנו', date: '2', level: 1 },
{ id: '26', title: '3 חולצות קצרות', date: '2', level: 1 },
{ id: '27', title: 'בגדים לערב', date: '2', level: 1 },
{ id: '28', title: 'גרביים + גרבי סקי', date: '2', level: 1 },
{ id: '29', title: 'כלי רחצה', date: '2', level: 1 },
{ id: '30', title: 'מגבת (אם אין במלון)', date: '2', level: 1 },
{ id: '31', title: 'נעליים לערב', date: '2', level: 1 },
{ id: '35', title: 'בגד ים', date: '2', level: 1 },
{ id: '36', title: 'אוזניות', date: '2', level: 1 },
{ id: '', title: 'מסמכים', date: '', level: 0 },
{ id: '38', title: 'כרטיסי טיסה', date: '2', level: 1 },
{ id: '39', title: 'פוליסה וביטוח', date: '2', level: 1 },
{ id: '40', title: 'דרכון', date: '2', level: 1 },
{ id: '', title: 'אוכל', date: '', level: 0 },
{ id: '41', title: 'חטיפי אנרגיה, שוקלד', date: '2', level: 1 },
{ id: '', title: 'הזמנת מונית לשדה תעופה', date: '', level: 0 },
{ id: '43', title: 'הזמנת מונית לשדה תעופה', date: '1', level: 1 },
{ id: '24', title: 'אופציה להשכיר באתר', date: '0', level: 1 },
{ id: '42', title: 'אלכוהול - דיוטי פרי', date: '0', level: 1 }, ]

  //var data = [{
  //    id: "1", // Unique ID; timestamp is used here
  //    title: "משימה ראשונה", // Title of the task
  //    date: "5", // Due date
  //    description: "description", // Description of the task
  //    level: 1
  //},
  //{
  //    id: "2", 
  //    title: "sec", 
  //    date: "6", 
  //    description: "description", 
  //    level: 0
  //},
  //{
  //    id: "3", // Unique ID; timestamp is used here
  //    title: "third", // Title of the task
  //    date: "3", // Due date    
  //    description: "description", // Description of the task
  //    level: 1
  //}];

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
          r[++j] = '<tr><td class=\"task word-td\" style="padding-top:1em;padding-bottom:1em"><b><u>';
          r[++j] = data[key]['title'];
          r[++j] = '</td></b></u><td></td><td></td></tr>';
      }
      else
      {
          r[++j] = '<tr><td style="padding-right:2em" class=\"task word-td vert-align\">';
          r[++j] = data[key]['title'];
          r[++j] = '</td><i class="fa fa-square-o"></i></button></td><td class="vert-align days-to-task" data-value="';
          r[++j] = data[key]['date'];
          r[++j] = '">';
          if (targetDateString) {
              var result = new Date(targetDate);
              result.setDate(result.getDate() - data[key]['date']);
              r[++j] = result.getDate() + "/" + result.getMonth() + "/" + result.getFullYear();
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
          var result = new Date(targetDate);



          result.setDate(targetDate.getDate() - $(days[i]).data("value"));
          days[i].textContent = result.getDate() + "/" + result.getMonth() + "/" + result.getFullYear();
      }
  }

    // Set Date
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
      mixpanel.track("Target Date Set", { "date": date.toString() });

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
        mixpanel.track("Add Task Filed - Duplicated", { "title": $(".new-task").val() });
      return;
    };
    // Runs empty message
    if(newTask === ""){
        $("#empty-msg").slideDown(500);
        mixpanel.track("Add Task Filed - Empty");
      return;
    };

    mixpanel.track("Add Task Done", { "title": $(".new-task").val() });

    // Inserts new row with new task item
    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td vert-align").attr("style", "padding-right:2em").append(newTask);
    var completedBtn = $("<button>").addClass("unchecked btn btn-default").append('<i class="fa fa-square-o">');
    var completedTd = $("<td>").addClass("vert-align").append(completedBtn);
    var deleteTd = $("<td>").addClass("vert-align days-to-task");

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
      mixpanel.track("Task Checked", { "item_id": this.value });
      localStorage.setItem(checklistName + "_task_" + this.value, JSON.stringify("{checked:true}"));
  });

  // MARK NOT COMPLETE
  $("table").on("click", ".btn-success", function(){
    var meh = $("<i>").addClass("fa fa-meh-o").fadeIn(750).delay(250).fadeOut(500);
    var uncheck = $("<i>").addClass("fa fa-square-o").hide().delay(1500).fadeIn(1000);
    $(this).replaceWith($("<button>").attr("type", "button").attr("value", this.value).addClass("unchecked btn btn-default btn-width").append(meh).append(uncheck));
    $(".unchecked").parent().prev().css("text-decoration", "none").css("color", "#c8c8c8");

    mixpanel.track("Task Unchecked", { "item_id": this.value });
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
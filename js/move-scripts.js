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

	// Facebook comments
	 // $.ajaxSetup({ cache: true });
	  // $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
		// FB.init({
		  // appId: '158703717489113',
		  // version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
		// });     
		// $('#loginbutton,#feedbutton').removeAttr('disabled');
		// FB.getLoginStatus(updateStatusCallback);
	  // });
	
	
	$(".new-date").datepicker({dateFormat: 'dd/mm/yy'});


  
  var checklistName = "move";

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

  var data = [{id: '1', title: 'חתימה על חוזה', date: '30', level: 1 },
{id: '', title: 'הזמנת הובלה', date: '', level: 0 },
{id: '2', title: 'לבחור מוביל<br>אומן הובלות - 050-5375411, שילו הובלות - 050-8530050, גפן - 050-6944774, <br>רם - בוא הובלות - 054-6111558, הובלות גן עדן , ערן - 050-6322226, הובלות סרגיי - 052-2720941', date: '30', level: 1 },
{id: '3', title: 'קנית קרטונים לאריזה (לאחד עם חומרי ניקוי וחומרי בנין)<br><a href="https://www.iec.co.il/HomeClients/DocLib5/shem_nter_screen.pdf"> - קישור לקרטונים זולים</a>', date: '13', level: 1 },
{id: '4', title: 'תחילת אריזת דירה<br><a href="http://zazznu.co.il/%D7%94%D7%9E%D7%93%D7%A8%D7%99%D7%9A-%D7%9C%D7%90%D7%A8%D7%99%D7%96%D7%94-%D7%9E%D7%95%D7%A9%D7%9C%D7%9E%D7%AA/"> - קישור למדריך</a>', date: '10', level: 1 },
{id: '', title: 'להזמין הדברה', date: '', level: 0 },
{id: '5', title: 'להזמין הדברה<br><a href="http://www.sviva.gov.il/InfoServices/LicencesPerMissions/Pages/Exterminators.aspx"> - קישור לרשימת מדבירים</a>', date: '21', level: 1 },
{id: '', title: 'תיקונים בדירה הישנה', date: '', level: 0 },
{id: '6', title: 'ביצוע רשימת תיקונים שיש לבצע', date: '30', level: 1 },
{id: '7', title: 'ביצוע רשימת חומרים לקניה (צבע, שפכטל..)', date: '13', level: 1 },
{id: '8', title: 'יש צורך בשיפוצניק? רשימה נפרדת :)', date: '', level: 1 },
{id: '9', title: 'קנית חומרים לתיקונים', date: '13', level: 1 },
{id: '10', title: 'ביצוע תיקונים וניקיונות בדירה הישנה', date: '1', level: 1 },
{id: '', title: 'ניקיון דירה חדשה', date: '', level: 0 },
{id: '11', title: 'לקנות חומרי ניקוי (יחד עם קנית חומרי הבנין)', date: '13', level: 1 },
{id: '12', title: 'לקבוע יום ניקיון לדירה החדשה', date: '14', level: 1 },
{id: '13', title: 'יום ניקיון', date: '4', level: 1 },
{id: '14', title: 'ביצוע הדברה', date: '3', level: 1 },
{id: '', title: 'העברת חשבון חשמל', date: '', level: 0 },
{id: '15', title: 'קריאת מונה בארון חשמל דירה ישנה', date: '5', level: 1 },
{id: '16', title: 'קריאת מונה בארון חשמל דירה חדשה', date: '5', level: 1 },
{id: '17', title: 'העברת חשבון חשמל דירה חדשה על שמנו<br><a href="https://www.iec.co.il/HomeClients/DocLib5/shem_nter_screen.pdf"> - קישור למדריך</a>', date: '1', level: 1 },
{id: '18', title: 'העברת חשבון חשמל דירה ישנה לדיירים הנכנסים<br><a href="https://www.iec.co.il/HomeClients/DocLib5/shem_nter_screen.pdf"> - קישור למדריך</a>', date: '1', level: 1 },
{id: '', title: 'העברת חשבון מים', date: '', level: 0 },
{id: '19', title: 'קריאת מונה דירה ישנה<br><a href="http://www.mei-avivim.co.il/?CategoryID=180"> - קישור למי אביבים</a>', date: '13', level: 1 },
{id: '20', title: 'קריאת מונה דירה שניה', date: '13', level: 1 },
{id: '21', title: 'העברת חשבון מים דירה חדשה על שמנו', date: '6', level: 1 },
{id: '22', title: 'העברת חשבון מים דירה ישנה לדיירים הנכנסים', date: '2', level: 1 },
{id: '', title: 'העברת ארנונה', date: '', level: 0 },
{id: '23', title: 'לארגן מסמכים נדרשים<br><a href="http://www.tel-aviv.gov.il/Download/%D7%94%D7%A6%D7%94%D7%A8%D7%94%20%D7%91%D7%93%D7%91%D7%A8%20%D7%A9%D7%99%D7%A0%D7%95%D7%99%20%D7%A9%D7%9D%20%D7%94%D7%9E%D7%97%D7%96%D7%99%D7%A7%20%D7%91%D7%A0%D7%9B%D7%A1.pdf"> - קישור לטופס</a>', date: '13', level: 1 },
{id: '24', title: 'לפנות זמן ביומן לגשת לעירייה', date: '13', level: 1 },
{id: '25', title: 'ביצוע החלפת כתובות בעיריה', date: '6', level: 1 },
{id: '', title: 'גז', date: '', level: 0 },
{id: '26', title: 'ניתוק מחברת גז ישנה<br><a href="http://energy.gov.il/informationforpublic/data/documents/list_of_gas_suppliers.pdf"> - קישור לחברות הגז</a>', date: '5', level: 1 },
{id: '27', title: 'העברת חשבון גז דירה חדשה על שמנה<br><a href="http://energy.gov.il/informationforpublic/data/documents/list_of_gas_suppliers.pdf"> - קישור לחברות הגז</a>', date: '5', level: 1 },
{id: '', title: 'תקשורת', date: '', level: 0 },
{id: '28', title: 'העברת טלפון קוי<br><a href="https://www.bezeq.co.il/serviceandsupport/moving/main/"> - קישור לבזק</a>', date: '6', level: 1 },
{id: '29', title: 'העברת Yes<br><a href="https://www.yes.co.il/customerservices/moving"> - קישור</a>', date: '6', level: 1 },
{id: '30', title: 'העברת Hot<br><a href="http://www.hot.net.il/heb/customerservice/info/movingguide/"> - קישור</a>', date: '6', level: 1 },
{id: '31', title: 'העברת אינטרנט', date: '6', level: 1 },
{id: '', title: 'העברת כתובת במשרד הפנים', date: '', level: 0 },
{id: '32', title: 'באינטרנט או במשרד הפנים', date: '10', level: 1 },
{id: '', title: 'תו חניה', date: '', level: 0 },
{id: '33', title: 'הזמנה / החלפה באינטרנט', date: '6', level: 1 },
{id: '', title: 'עדכון כתובת חדשה', date: '', level: 0 },
{id: '34', title: 'דואר ישראל<br><a href="https://www.israelpost.co.il/mynewaddress.nsf/pages/HowToRegister"> - העברת כתובת</a>', date: '5', level: 1 },
{id: '35', title: 'בנקים', date: '5', level: 1 },
{id: '36', title: 'חברות אשראי', date: '5', level: 1 },
{id: '37', title: 'חברות ביטוח', date: '5', level: 1 },
{id: '38', title: 'עדכון מקום העבודה ועוד....', date: '5', level: 1 },
{id: '', title: 'מפתח לדירה', date: '', level: 0 },
{id: '39', title: 'החלפת צילינדר או שכפול מפתח', date: '2', level: 1 },
{id: '', title: 'לקבוע תאריך לחנוכת בית :)', date: '', level: 0 },
{id: '40', title: 'לקבוע תאריך לחנוכת בית :)', date: '0', level: 1 }, ]

var loadCachedTasks = function () {

      var jsonStr = localStorage.getItem("custom_tasks" + checklistName);
	  var obj = JSON.parse(jsonStr);
	  
	  return obj;
  }
  
  var addToCachedTasks = function (inputTitle) {

      // Get the current tasks
	  var currTasks = loadCachedTasks();
	  
	  if (!currTasks)
		  currTasks = [];
	  // Add the given Tasks
	  var item = {
        "id": 'custom_' + (Math.floor(Math.random() * 1000000) + 1),
		"title": inputTitle,
        "date": '0',
		"level": 1
    };
	  currTasks.push(item);
	  jsonStr = JSON.stringify(currTasks);
	  
	  // Save to local storage
	 localStorage.setItem("custom_tasks" + checklistName, jsonStr);
  }
  

 var savedCustomTasks = loadCachedTasks();
 if (savedCustomTasks) {
	   var data = data.concat(savedCustomTasks);
	   //data = JSON.stringify(finalList);
 }

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
      $("#datepicker").val(targetDate.getDate() + "/" + (targetDate.getMonth() + 1) + "/" + targetDate.getFullYear());

      //$("#datepicker").setDate(targetDate);
  }

  // Load the datafrom cache if any tasks added
  
  
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
      var d = parseInt(comp[0], 10);
      var m = parseInt(comp[1], 10);
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
	addToCachedTasks($(".new-task").val())
	
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
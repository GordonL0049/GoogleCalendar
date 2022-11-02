function doGet(e) {
  var id = e.parameter.calendarId;
  try {
    if (e.parameter.action == "getTimeZone") {
      return ContentService.createTextOutput(CalendarApp.getCalendarById(id).getTimeZone());
    } else if (e.parameter.action == "setTimeZone") {
      CalendarApp.getCalendarById(id).setTimeZone(e.parameter.newTimeZone);
      return ContentService.createTextOutput(e.parameter.newTimeZone);
    } else if (e.parameter.action == "getColor") {
      return ContentService.createTextOutput(CalendarApp.getCalendarById(id).getColor());
    } else if (e.parameter.action == "setColor") {
      CalendarApp.getCalendarById(id).setColor(e.parameter.color);
      return ContentService.createTextOutput(e.parameter.color);
    } else if (e.parameter.action == "createSingleWholeDayEvent") {
      var event = CalendarApp.getCalendarById(id).createAllDayEvent(e.parameter.title, new Date(e.parameter.date));
      var string = e.parameter.title + "%2C" + event.getId();
      return ContentService.createTextOutput(string);
    } else if (e.parameter.action == "getName") {
      return ContentService.createTextOutput(CalendarApp.getCalendarById(id).getName());
    } else if (e.parameter.action == "isHidden") {
      return ContentService.createTextOutput(JSON.stringify(CalendarApp.getCalendarById(id).isHidden()));
    } else if (e.parameter.action == "deleteCalendar") {
      CalendarApp.getCalendarById(id).deleteCalendar();
      return ContentService.createTextOutput(id);
    } else if (e.parameter.action == "createMultipleWholeDaysEvent") {
      var event = CalendarApp.getCalendarById(id).createAllDayEvent(e.parameter.title, new Date(e.parameter.startDate), new Date(e.parameter.endDate));
      var string = e.parameter.title + "%2C" + event.getId();
      return ContentService.createTextOutput(string);
    } else if (e.parameter.action == "getDescription") {
      return ContentService.createTextOutput(CalendarApp.getCalendarById(id).getDescription());
    } else if (e.parameter.action == "setDescription") {
      CalendarApp.getCalendarById(id).setDescription(e.parameter.description);
      return ContentService.createTextOutput(e.parameter.description);
    } else if (e.parameter.action == "getDefaultCalendarId") {
      return ContentService.createTextOutput(CalendarApp.getDefaultCalendar().getId());
    } else if (e.parameter.action == "getAllCalendars") {
      var array = CalendarApp.getAllCalendars();
      var output = [];
      array.forEach(element => output.push(element.getName()));
      return ContentService.createTextOutput(output.join(","));
    } else if (e.parameter.action == "createCustomSingleWholeDayEvent") {
      var invite = false;
      if (e.parameter.sendInvites == "true") {
        invite = true;
      }
      var event = CalendarApp.getCalendarById(id).createAllDayEvent(e.parameter.title, new Date(e.parameter.date), {location: e.parameter.location, description: e.parameter.description, guests: e.parameter.guests, sendInvites: invite});
      var string = e.parameter.title + "%2C" + event.getId();
      return ContentService.createTextOutput(string);
    } else if (e.parameter.action == "getAllOwnedCalendars") {
      var array = CalendarApp.getAllOwnedCalendars();
      var output = [];
      array.forEach(element => output.push(element.getName()));
      return ContentService.createTextOutput(output.join(","));
    } else if (e.parameter.action == "createCustomMultipleWholeDaysEvent") {
      var invite = false;
      if (e.parameter.sendInvites == "true") {
        invite = true;
      }
      var event = CalendarApp.getCalendarById(id).createAllDayEvent(e.parameter.title, new Date(e.parameter.startDate), new Date (e.parameter.endDate), {location: e.parameter.location, description: e.parameter.description, guests: e.parameter.guests, sendInvites: invite});
      var string = e.parameter.title + "%2C" + event.getId();
      return ContentService.createTextOutput(string);
    } else if (e.parameter.action == "setHidden") {
      var hid = false;
      if (e.parameter.hide == "true") {
        hid = true;
      }
      CalendarApp.getCalendarById(id).setHidden(hid);
      return ContentService.createTextOutput(JSON.stringify(CalendarApp.getCalendarById(id).isHidden()));
    } else if (e.parameter.action == "isMyPrimaryCalendar") {
      return ContentService.createTextOutput(JSON.stringify(CalendarApp.getCalendarById(id).isMyPrimaryCalendar()));
    } else if (e.parameter.action == "isOwnedByMe") {
      return ContentService.createTextOutput(JSON.stringify(CalendarApp.getCalendarById(id).isOwnedByMe()));
    } else if (e.parameter.action == "isSelected") {
      return ContentService.createTextOutput(JSON.stringify(CalendarApp.getCalendarById(id).isSelected()));
    } else if (e.parameter.action == "setSelected") {
      var hid = false;
      if (e.parameter.setSelected == "true") {
        hid = true;
      }
      CalendarApp.getCalendarById(id).setSelected(hid);
      return ContentService.createTextOutput(e.parameter.setSelected);
    } else if (e.parameter.action == "addGuest") {
      var event = CalendarApp.getCalendarById(id).getEventById(e.parameter.eventId);
      event.addGuest(e.parameter.email);
    } else if (e.parameter.action == "canAnyoneAddSelf") {
      var event = CalendarApp.getCalendarById(id).getEventById(e.parameter.eventId);
      return ContentService.createTextOutput(JSON.stringify(event.anyoneCanAddSelf()));
    } else if (e.parameter.action == "deleteEvent") {
      CalendarApp.getCalendarById(id).getEventById(e.parameter.eventId).deleteEvent();
      return ContentService.createTextOutput(e.parameter.eventId);
    } else if (e.parameter.action == "getCreators") {
      var array = CalendarApp.getCalendarById(id).getEventById(e.parameter.eventId).getCreators();
      var output = [];
      array.forEach(element => output.push(element));
      return ContentService.createTextOutput(output.join(","));
    } else if (e.parameter.action == "getEventCreationDate") {
      return ContentService.createTextOutput(CalendarApp.getCalendarById(id).getEventById(e.parameter.eventId).getDateCreated());
    } else if (e.parameter.action == "createCalendar"){
      return ContentService.createTextOutput(CalendarApp.createCalendar(e.parameter.name).getId());
    } else if (e.parameter.action == "countEmailReminders") {
      return ContentService.createTextOutput(CalendarApp.getCalendarById(id).getEventById(e.parameter.eventId).getEmailReminders().join(","));
    } else if (e.parameter.action == "addEmailReminder") {
      CalendarApp.getCalendarById(id).getEventById(e.parameter.emailId).addEmailReminder(e.parameter.minutes);
      return ContentService.createTextOutput("Added email reminder");
    } else if (e.parameter.action == "unsubscribe") {
      CalendarApp.getCalendarById(id).unsubscribeFromCalendar();
      return ContentService.createTextOutput("Unsubscribed from calendar.");
    } 
  } catch (err) {
    return ContentService.createTextOutput("%24" + err.message);
  }
}

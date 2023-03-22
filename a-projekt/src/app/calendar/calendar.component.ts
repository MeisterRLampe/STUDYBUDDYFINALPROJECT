import { Component } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  events = [
    {id: '0', title: 'Silvester', date: '2023-12-31'},
  ];

  eventCounter = 1;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],

    events: this.events,

    selectable: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  handleDateSelect(arg: DateSelectArg) {
    const title = prompt('Bitte geben Sie den Titel für das neue Ereignis ein:');
    const id = this.eventCounter.toString();
    if (title) {
      this.events.push({id, title, date: arg.startStr});
      this.calendarOptions.events = this.events.slice();
      this.eventCounter++;
    }
  }
  handleEventClick(arg: EventClickArg) {
    if(confirm('Möchten sie dieses Ereignis löschen?')) {
      this.events = this.events.filter(event => event.id !== arg.event.id);
      this. calendarOptions.events = this.events.slice();
    }
  }
}

import { Component } from '@angular/core';
import { CalendarOptions, DateSelectArg } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  events = [
    {title: 'event1', date: '2023-04-01'},
    {title: 'event2', date: '2023-04-04'}
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],

    events: this.events,

    selectable: true,
    select: this.handleDateSelect.bind(this)
  };

  handleDateSelect(arg: DateSelectArg) {
    const title = prompt('Bitte geben Sie den Titel für das neue Ereignis ein:');
    if (title) {
      this.events.push({title, date: arg.startStr});
      this.calendarOptions.events = this.events.slice();
    }
  }
}

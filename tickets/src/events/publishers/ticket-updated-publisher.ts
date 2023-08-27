import { Publisher, Subjects, TicketUpdatedEvent } from '@codehelp/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

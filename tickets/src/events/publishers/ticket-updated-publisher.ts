import { Publisher, Subjects, TicketUpdatedEvent } from '@codehelp/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

import { Publisher, Subjects, TicketCreatedEvent } from '@codehelp/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

import { Publisher, Subjects, TicketCreatedEvent } from '@codehelp/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

import { Publisher, OrderCreatedEvent, Subjects } from '@codehelp/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

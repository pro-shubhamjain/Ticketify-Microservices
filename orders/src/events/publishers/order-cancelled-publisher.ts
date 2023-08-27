import { Subjects, Publisher, OrderCancelledEvent } from '@codehelp/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

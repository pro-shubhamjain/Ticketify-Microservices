import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@codehelp/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

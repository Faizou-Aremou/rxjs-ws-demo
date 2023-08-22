export interface Message {
  clientId: string;
  message: string;
  sentAt: Date;
}

export type EventType = 'message' | 'connect' | 'disconnect';

export type WsMessageContent = SubscriptionMessage;

export interface SubscriptionMessage {
  eventType: EventType | EventType[];
  isSubscribe: boolean;
}

export interface SubscriptionEvent<TBody = unknown> {
  eventType: EventType;
  body: TBody;
}

export interface WsMessage {
  event: string;
  data: WsMessageContent;
}

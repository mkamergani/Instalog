export type EventSummary = {
  actor: { email: string };
  action: { name: string };
  occurred_at: string;
  id: string;
  expand?: boolean;
};

export type EventRow = {
  key?: number;
  eventRow: EventSummary;
};

export type Event = {
  id: string;
  object?: string;
  group?: string;
  target_id: string;
  target_name: string;
  locations: string;
  occurred_at: string;
  redirect?: string;
  description?: string;
  x_request_id?: string;
  actor_id: string;
  action_id: string;
  actor: {
    name: string;
    email: string;
  };
  action: {
    name: string;
    object: string;
  };
};

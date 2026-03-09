export type ChatRole =
  | "user"
  | "bot";

export interface ChatMessage {

  role: ChatRole;

  content: string;

}
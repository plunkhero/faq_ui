export async function sendMessage(message: string) {

  const res = await fetch("/api/chatbot", {
    method: "POST",
    body: JSON.stringify({ message }),
  });

  return res.json();

}
export async function submitTicket(data: any) {

  const res = await fetch("/api/ticket", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json();

}
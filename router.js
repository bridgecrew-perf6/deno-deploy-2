function handler(_req: Request) {
  const data = {
    destinatation_phone_number: "+18443677787",
    source: "deno-deploy!",
  };
  const body = JSON.stringify(data, null, 2);
  return new Response(body, {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

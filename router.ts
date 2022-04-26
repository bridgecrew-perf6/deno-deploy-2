import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { us_zip_codes } from "./us_zip_codes.ts";

let postal = new us_zip_codes();

function handler(_req: Request) {
  let y = postal.get("93108");
  const data = {
    destination_phone_number: "+18443677787",
    source: "deno-deploy!",
    version: ".001",
    location: JSON.stringify(y),
  };
  const body = JSON.stringify(data, null, 2);
  return new Response(body, {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

console.log("Listening...");

serve(handler);

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { us_zip_codes } from "./us_zip_codes.ts";

let postal = new us_zip_codes();

function handler(req: Request) {
  let inputs = {"postal1":"nada","postal2":"nada"};
  
  if (inputs.method === "POST") {
      inputs = await req.json();
  }
   
  //let miles = postal.get_miles(inputs.postal1,inputs.postal2);
  let miles = 0.0;
  
  //  destination_phone_number: "+18558380022,",
  const data = {   
    source: "deno-deploy!",
    version: ".002",
    location: miles,
    incoming: JSON.stringify(inputs),
  };
  
  const body = JSON.stringify(data, null, 2);
  return new Response(body, {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

console.log("Listening...");

serve(handler);

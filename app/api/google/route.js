import { NextResponse } from "next/server";


export async function POST(request) {

  // const {name} = req;
  console.log("Hi")
  
  const body = await request.json();
  const name = body.name;

  try{
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=site:linkedin.com/in+${name}&key=${process.env.GOOGLE_API_KEY}&cx=${process.env.SEARCH_ENGINE_ID}`)

    console.log(response);
    if (!response.ok) throw new Error("something went wrong in res")

    const data = await response.json();

    console.log(data);
    let hasData = Boolean(data.items)

    console.log(hasData);
    
    if (!hasData) {
      return;
    }

    return NextResponse.json(data, {status: 200});
  }
  catch(err) {
    console.log(err)
  }

}
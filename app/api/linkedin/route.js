
export async function POST(request) {


  const {name} = await request.json();
  console.log(name)

  try {
    console.log("HHHHHHHHHHHHHHHHH")
    
    const url = `https://api.scrapin.io/v1/enrichment/profile?apikey=${process.env.APILINKDIN}`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Methods": "PUT, POST, PATCH, DELETE, GET"
      },
      body: `{"includes":{},"linkedInUrl":"https://www.linkedin.com/in/${name}/"}`
    };

    
    const response = await fetch(url, options);

    const data = await response.json();

    return new Response(JSON.stringify(data))
    
  } catch(err) {
    console.log("ERRRRRRRRRRRRRRRRRRRRR")
    console.log(err);
  }
  
}


// export async function GET(req, res) {

//   console.log("HIIIII")
//   const data = JSON.stringify({
//     input: [{"first_name":"khalid","last_name":"alhadi"}],
//   });

//   const dataFromUrl = await fetch(
//       "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_l1viktl72bvl7bjuj0&notify=false&include_errors=true&type=discover_new&discover_by=name",
//       {
//           method: "POST",
//           headers: {
//         "Authorization": "Bearer 2a70c9bc89fa6e7d85192993b708c3e70cbf686ddde9127b652e23b618a55b53",
//         "Content-Type": "application/json",
//       },
//       body: data,
//       }
//     )
//   const dataJson = await dataFromUrl.json();
//   console.log(dataJson);


// // .then((response) => response.json())
// // .then((data) => console.log(data))
// // .catch((error) => console.error("Error:", error));
  
// }


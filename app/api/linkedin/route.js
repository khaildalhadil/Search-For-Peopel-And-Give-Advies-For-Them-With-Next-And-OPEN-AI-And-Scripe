


export async function GET() {

  // For this example you need the node-fetch npm packages: `npm i node-fetch`

  try {
    const data = await fetch('https://api.scraperapi.com/?api_key=a7b3cf175a04eff2ec7626958821fbf9&url=https%3A%2F%2Fhttpbin.org%2F')
    // const jsData = await data.json();
    
    console.log(data)
  } catch(err) {
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

// export async function GET(req, res) {

//   // const {name} = req;
//   const name = "Amira Al-Mukhaini"
//   console.log("Hi")

//   try{
//     const responseData = await fetch(`https://www.googleapis.com/customsearch/v1?q=site:linkedin.com/in+${name}&key=${process.env.GOOGLE_API_KEY}&cx=${process.env.SEARCH_ENGINE_ID}`)

//     const data = await responseData.json();

//     // console.log(data);
//     let hasData = Boolean(data.items)
//     console.log(hasData);
//     if (!hasData) {
//       return;
//     }

//     console.log(data);

//     console.log(data?.items[0]?.link?.split("/")[4]);
    
//     // res.json({message: "success", data })
//   }
//   catch(err) {
//     console.log(err)
//   }

// }
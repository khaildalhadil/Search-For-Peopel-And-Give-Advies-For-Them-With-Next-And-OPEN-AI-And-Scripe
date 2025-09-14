

export async function GET(req, res) {

  const username = "RussiaArabic0";

  try {
    
    const data = await fetch(`https://api.twitter.com/2/users/by/username/${username}?user.fields=profile_image_url,name,username`, {
      headers: {Authorization: `Bearer ${process.env.TWITTER_BEARER}`}
    })

    const json = await data.json();
    console.log(json);

  } catch(err) {
    console.log(err);
  }
}
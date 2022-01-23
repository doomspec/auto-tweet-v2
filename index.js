const core = require('@actions/core');
const { TwitterApi } = require('twitter-api-v2');

async function run() {
    const client = new TwitterApi({
        appKey: process.env.CONSUMER_API_KEY,
        appSecret: process.env.CONSUMER_API_SECRET_KEY,
        accessToken: process.env.ACCESS_TOKEN,
        accessSecret: process.env.ACCESS_TOKEN_SECRET,
    })
    /*
    let mediaPaths = core.getInput('media_paths').split('\n')
        .filter(x => x !== '')
        .map(mediaPath => path.join(process.cwd(), mediaPath))

    const mediaIds = [await client.v1.uploadMedia("Twitter_Logo_Blue.png")]
    for (let p of mediaPaths) {
        //mediaIds.push(await client.v1.uploadMedia(p))
    }
    */
    const tweetText = core.getInput('text')
    let parameters = { text: tweetText }
    /*
    if (mediaIds.length > 0)
        parameters.media = { media_ids: mediaIds }
    */
    const { data: createdTweet } = await client.v2.tweet(parameters);
    console.log(createdTweet)
}

run()
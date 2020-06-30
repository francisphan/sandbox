import {WebClient} from '@slack/web-api';
import {serialize} from '../lib/utils';

const CHANNEL_ID = process.env.ChannelId;
const TOKEN = process.env.SecretToken;

const web = new WebClient(TOKEN);

const sendMessage = async (message: string) => {
    // See: https://api.slack.com/methods/chat.postMessage
    const res = await web.chat.postMessage({ channel: CHANNEL_ID, text: message });

    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
};

export const handler = async (event, context) => {
    console.log('## ENVIRONMENT VARIABLES: ' + serialize(process.env));
    console.log('## CONTEXT: ' + serialize(context));
    console.log('## EVENT: ' + serialize(event));
    await sendMessage('foobar');
}
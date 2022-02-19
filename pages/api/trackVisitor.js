import axios from 'axios';
import sengridMail from '@sendgrid/mail';
import dotenv from 'dotenv';
sengridMail.setApiKey(process.env.SENDGRID_API_KEY);

dotenv.config();

export default (req, res) => {
  const ip =
    req.headers['cf-connecting-ip'] ||
    req.headers['x-real-ip'] ||
    req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress ||
    req.ip;
  const visitorInfo = { ...req.body, ip };

  (async () => {
    const { data: ipwhois } = await axios.get(`http://ipwhois.app/json/${ip}`);
    visitorInfo.ipwhois = ipwhois;

    await axios.post(process.env.DB_URL + '/visitors.json', visitorInfo);

    const msg = {
      to: 'alexandrotapia.dev@gmail.com',
      from: 'localhostdevec@gmail.com', // Use the email address or domain you verified above
      subject: 'New visitor just landed on your website.',
      text: `We just got a new visitor!.
        
        Full info: ${JSON.stringify(visitorInfo)}`,
    };
    try {
      await sengridMail.send(msg);
    } catch (error) {
      console.error(error);
    }
    return res.send({ status: 'success' });
  })();
};

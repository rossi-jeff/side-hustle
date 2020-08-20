// const sgMail = require('@sendgrid/mail');
import axios from 'axios';
const config = require('../../.env.json');

export default class SendGridMailer {

  constructor(formData) {
    const {
      apiKey,
      endPoint,
      to,
      from
    } = config;
    // sgMail.setApiKey(apiKey);
    this.apiKey = apiKey;
    this.endPoint = endPoint;
    this.to = to;
    this.from = from;
    this.formData = formData;
  }

  headers() {
    return {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };
  }

  body() {
    let HTML = '';
    const { formData } = this;
    for (const section in formData) {
      HTML += `<h2>${section}</h2>\n`;
      for (const key in formData[section]) {
        HTML += `<b>${key}</b>: ${formData[section][key]}\n`
      }
    }
    return HTML;
  }

  data() {
    const { Name } = this.formData.Contact;
    return {
      personalizations: {
        to: [
          {
            email: this.to,
          }
        ],
        subject: `Contact from ${Name}`,
      },
      from: {
        email: this.from,
      },
      content: [
        {
          type: 'text/html',
          value: this.body(),
        },
      ],
    }
  }

  message() {
    const { Name } = this.formData.Contact;
    return {
      to: this.to,
      from: this.from,
      subject: `Contact from ${Name}`,
      html: this.body()
    }
  }

  async send() {
    // via sg client
    /* try {
      await sgMail.send(this.message());
    } catch (error) {
      console.log(error);
      return error;
    } */
    // via axios
    return axios({
      url: this.endPoint,
      method: 'POST',
      headers: this.headers(),
      data: this.data(),
    })
  }
}
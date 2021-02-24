
import emailjs from 'emailjs-com';

//rahmah
export default function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_4rkn7k9', 'template_16cbp5q', e.target, 'user_oelhbulqJ7LQseNipyI1O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

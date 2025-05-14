import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_0d2j8mc';
const TEMPLATE_ID = 'template_3ox9fbd';
const PUBLIC_KEY = 'm8lSrPXiG2UbbQZqX';

export const sendForm = async (formRef) => {
  try {
    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );
    return result;
  } catch (error) {
    throw error;
  }
};

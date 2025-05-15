import { init, send } from '@emailjs/browser';

// EmailJS configuration
const PUBLIC_KEY = 'bKY11Fq3JSw-v3cdC';
const SERVICE_ID = 'service_yc2euvk';
const TEMPLATE_ID = 'template_ytrzrao';

// Initialize EmailJS with your public key
init(PUBLIC_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone: string;
  message: string;
}

export const sendContactForm = async (data: ContactFormData): Promise<void> => {
  try {
    const response = await send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        from_company: data.company || 'Not provided',
        from_phone: data.phone,
        message: data.message,
      },
      PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    return Promise.resolve();
  } catch (error) {
    console.error('Email service error:', error);
    return Promise.reject(error);
  }
}; 
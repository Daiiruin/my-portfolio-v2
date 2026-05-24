import emailjs from '@emailjs/browser'

export type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(data: ContactPayload): Promise<void> {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    { from_name: data.name, from_email: data.email, message: data.message },
    { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
  )
}

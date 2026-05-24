import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { Input } from '../../atoms/Input'
import { Textarea } from '../../atoms/Textarea'
import { Button } from '../../atoms/Button'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { staggerContainer, fadeInUpScroll, reducedStagger, reducedFadeIn } from '../../../lib/motion'
import { sendContactEmail } from '../../../lib/emailjs'
import { Form, FieldGroup, Label, StatusMessage } from './ContactForm.styles'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUpScroll

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContactEmail({ name, email, message })
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Form
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      onSubmit={handleSubmit}
    >
      <motion.div variants={item}>
        <FieldGroup>
          <Label htmlFor="contact-name">{t('contact.name')}</Label>
          <Input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </FieldGroup>
      </motion.div>

      <motion.div variants={item}>
        <FieldGroup>
          <Label htmlFor="contact-email">{t('contact.email')}</Label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            required
          />
        </FieldGroup>
      </motion.div>

      <motion.div variants={item}>
        <FieldGroup>
          <Label htmlFor="contact-message">{t('contact.message')}</Label>
          <Textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="..."
            required
          />
        </FieldGroup>
      </motion.div>

      {status === 'success' && (
        <StatusMessage
          $type="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t('contact.success')}
        </StatusMessage>
      )}

      {status === 'error' && (
        <StatusMessage
          $type="error"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t('contact.error')}
        </StatusMessage>
      )}

      <motion.div variants={item}>
        <Button
          type="submit"
          variant="primary"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? '...' : t('contact.send')}
        </Button>
      </motion.div>
    </Form>
  )
}

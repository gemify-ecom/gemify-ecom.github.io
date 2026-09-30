import { useId, useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { renderTemplate } from '../i18n/rich-text';
import { SUPPORT_EMAIL } from '../site/site-config';
import { SectionHeading } from './section-heading';

/**
 * Contact form on the home and services pages. Submissions go to Web3Forms (the access key is a
 * public, per-form key by design). Every field has a real label, a `name`,
 * and autocomplete hints, so people, password managers, and browser agents
 * can all fill it in; failures are shown inline with a direct email fallback.
 */

const MESSAGE_MAX_LENGTH = 500;

type ContactField = 'name' | 'email' | 'subject' | 'message';

export function ContactSection() {
  const { contact } = useTranslations('home');
  const fieldIdPrefix = useId();
  const [formState, setFormState] = useState<Record<ContactField, string>>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  /** Error text shown inline under the form; null when there is no error. */
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fieldId = (field: ContactField) => `${fieldIdPrefix}-${field}`;
  const updateField = (field: ContactField) => (value: string) =>
    setFormState((state) => ({ ...state, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append('access_key', 'fa917ce1-31bc-4c87-ac0d-bcf16aca9fc3');
      formData.append('subject', 'New Contact Form Submission from Gemify');
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('custom_subject', formState.subject);
      formData.append('message', formState.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message ? `${contact.errorAlert} (${data.message})` : contact.errorAlert);
      }
    } catch {
      setErrorMessage(contact.errorAlert);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common input styles for 44px+ touch targets
  const inputClassName =
    'w-full px-4 py-3 bg-white border border-[#C9D2DF] rounded-xl text-base transition-colors duration-200 focus:outline-none focus:border-signal focus:ring-2 focus:ring-signal/20';

  const requiredMark = (
    <span className="text-[#D72C0D] ml-1" aria-hidden="true">
      *
    </span>
  );
  const labelClassName = 'text-sm font-medium text-fg';

  const textFields: {
    field: Exclude<ContactField, 'message'>;
    type: string;
    label: string;
    placeholder: string;
    autoComplete?: string;
  }[] = [
    { field: 'name', type: 'text', label: contact.nameLabel, placeholder: contact.namePlaceholder, autoComplete: 'name' },
    { field: 'email', type: 'email', label: contact.emailLabel, placeholder: contact.emailPlaceholder, autoComplete: 'email' },
    { field: 'subject', type: 'text', label: contact.subjectLabel, placeholder: contact.subjectPlaceholder },
  ];

  const emailLink = (
    <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-[#D72C0D] underline">
      {SUPPORT_EMAIL}
    </a>
  );

  return (
    <section id="contact" className="py-16 md:py-24 px-6 bg-mist">
      <div className="max-w-[1120px] mx-auto grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading heading={contact.heading} lede={contact.responseTime} />

        <div className="max-w-[600px] w-full">
          {/* Success message - announced to screen readers when it appears */}
          <div role="status">
            {isSuccess && (
              <div className="bg-chip border border-signal-bright/40 rounded-2xl p-6 mb-6">
                <p className="font-heading text-xl text-signal-deep mb-2">{contact.successTitle}</p>
                <p className="text-fg mb-4">
                  {contact.successBody}
                </p>
                {/* Absolute path: the form is also on the services page, which has no #apps */}
                <LocalizedLink
                  to="/#apps"
                  className="inline-flex items-center gap-2 text-signal font-semibold hover:text-signal-deep transition-colors"
                >
                  {contact.successCta}
                </LocalizedLink>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            aria-label={contact.heading}
            className={`flex flex-col gap-4 ${isSuccess ? 'opacity-40 pointer-events-none' : ''}`}
          >
            {textFields.map(({ field, type, label, placeholder, autoComplete }) => (
              <div key={field} className="flex flex-col gap-2">
                <label htmlFor={fieldId(field)} className={labelClassName}>
                  {label}
                  {requiredMark}
                </label>
                <input
                  id={fieldId(field)}
                  name={field}
                  type={type}
                  required
                  autoComplete={autoComplete}
                  placeholder={placeholder}
                  value={formState[field]}
                  onChange={(e) => updateField(field)(e.target.value)}
                  className={inputClassName}
                />
              </div>
            ))}

            {/* Message field with character counter */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label htmlFor={fieldId('message')} className={labelClassName}>
                  {contact.messageLabel}
                  {requiredMark}
                </label>
                <span
                  id={`${fieldId('message')}-count`}
                  className={`font-mono text-xs ${formState.message.length >= MESSAGE_MAX_LENGTH ? 'text-[#D72C0D]' : 'text-muted'}`}
                >
                  {formState.message.length}/{MESSAGE_MAX_LENGTH}
                </span>
              </div>
              <textarea
                id={fieldId('message')}
                name="message"
                required
                placeholder={contact.messagePlaceholder}
                maxLength={MESSAGE_MAX_LENGTH}
                aria-describedby={`${fieldId('message')}-count`}
                value={formState.message}
                onChange={(e) => updateField('message')(e.target.value)}
                className={`${inputClassName} min-h-[120px] resize-y`}
              />
            </div>

            {/* Inline error with a direct email fallback */}
            {errorMessage && (
              <div role="alert" className="flex items-start gap-3 rounded-xl border border-[#D72C0D]/30 bg-[#FFF4F4] p-4 text-sm text-[#8E1F0B]">
                <AlertCircle className="w-5 h-5 shrink-0 text-[#D72C0D]" />
                <div>
                  <p className="font-semibold">{errorMessage}</p>
                  <p className="mt-1">{renderTemplate(contact.errorEmailFallback, { email: emailLink })}</p>
                </div>
              </div>
            )}

            {/* Submit button - larger touch target */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full sm:w-fit bg-signal text-white px-6 py-3 rounded-xl font-semibold cursor-pointer hover:bg-signal-deep transition-colors duration-200 disabled:bg-[#C9CCCF] disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {contact.submitting}
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  {contact.submitted}
                </>
              ) : (
                contact.submit
              )}
            </button>

            <p className="text-sm text-muted">{contact.securityNote}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

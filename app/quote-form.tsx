'use client';

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { ArrowUpRight } from 'lucide-react';

export default function QuoteForm() {
  const [status, setStatus] = useState('');
  function draft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) || '').trim();
    const subject = `Quote request: ${value('project')} in ${value('town')}`;
    const body = `Hi Ethan,\n\nI'd like to discuss a concrete project.\n\nName: ${value('name')}\nEmail: ${value('email')}\nPhone: ${value('phone') || 'Not provided'}\nTown: ${value('town')}\nProject: ${value('project')}\n\nProject details:\n${value('details')}\n\nThanks,\n${value('name')}`;
    window.location.href = `mailto:ethan@ethansconcrete.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app should open with the details filled in. Add any photos, then press Send there. Nothing has been sent from this page. If no app opens, email ethan@ethansconcrete.com directly.');
  }
  return <div className="quote-layout"><div><h3>Request a quote.</h3><p>Tell me about your space, your town, and what you have in mind. Rough measurements are helpful, but not essential.</p><p className="quote-note" id="quote-help">This form opens your email app with a draft to Ethan. You can attach photos and review it before sending.</p></div><form className="quote-form" onSubmit={draft} aria-describedby="quote-help"><div className="quote-fields"><label htmlFor="quote-name">Your name<Input id="quote-name" name="name" autoComplete="name" required maxLength={80}/></label><label htmlFor="quote-email">Email address<Input id="quote-email" name="email" type="email" autoComplete="email" required maxLength={150}/></label><label htmlFor="quote-phone">Phone <span>(optional)</span><Input id="quote-phone" name="phone" type="tel" autoComplete="tel" maxLength={35}/></label><label htmlFor="quote-town">Project town<Input id="quote-town" name="town" autoComplete="address-level2" required maxLength={80}/></label></div><label htmlFor="quote-project">What are you planning?<NativeSelect id="quote-project" name="project" required defaultValue=""><NativeSelectOption value="" disabled>Select a project type</NativeSelectOption>{['Patio','Driveway','Walkway','Small slab','Repair or replacement','Something else'].map(type=><NativeSelectOption key={type} value={type}>{type}</NativeSelectOption>)}</NativeSelect></label><label htmlFor="quote-details">A little about the project<Textarea id="quote-details" name="details" required rows={4} maxLength={1200} placeholder="Approximate size, existing surface, access, and your ideal timing…"/></label><button type="submit" className="quote-submit">Create quote email <ArrowUpRight size={19} aria-hidden="true"/></button><p className="quote-status" role="status">{status}</p><noscript><p>To request a quote, email <a href="mailto:ethan@ethansconcrete.com">ethan@ethansconcrete.com</a> with your name, town, and project details. Enable JavaScript to use this form.</p></noscript></form></div>;
}

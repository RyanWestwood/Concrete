'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const questions = [
  ['What areas do you serve?', 'Arkansas is home. The draft service area includes Little Rock, North Little Rock, Conway, Benton, Bryant, and Maumelle. These towns and travel limits are still to be confirmed—include your town in your quote request so Ethan can confirm availability.'],
  ['Do you take small jobs?', 'Yes—patios, walkways, small slabs, and residential driveway work are the focus. Minimum job size and charges are not finalized yet. Send rough dimensions and a description, even if you are unsure how to measure the space.'],
  ['How do I get a quote?', 'Fill in the form below with your contact details, town, and project description. It opens a draft in your email app; add any photos and press Send there. Ethan can then discuss whether a site visit is needed. Estimate fees and response times are still to be confirmed.'],
  ['What’s included in the quote?', 'The proposed quote format will itemize the scope, including preparation, existing concrete removal, reinforcement, finish, and cleanup where applicable. Drainage, access, and disposal requirements should be discussed before agreeing on the work. Final inclusions and exclusions will be confirmed in writing for your project.'],
  ['How soon can work start?', 'Current lead times are not available yet. Include your preferred timing when you get in touch. A start date will need to account for project scope, availability, site conditions, and weather; submitting a request does not reserve a date.'],
  ['When can I walk or drive on the concrete?', 'There is no confirmed timeline for your project until the concrete mix, weather, and intended use are known. Ask for specific curing and aftercare instructions before work begins, and confirm with Ethan before walking or driving on the new surface.'],
];

export default function FAQ() {
  return <section className="trust-section faq-section" id="faq" aria-labelledby="faq-heading"><div className="section-heading"><div><p className="eyebrow">A FEW THINGS TO KNOW</p><h2 id="faq-heading">Before we<br/>make it solid.</h2></div><p className="sample-note">Draft answers · service areas, fees, scheduling, and terms still need confirmation.</p></div><Accordion className="faq-list">{questions.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent><p>{answer}</p></AccordionContent></AccordionItem>)}</Accordion><noscript><div>{questions.map(([question, answer])=><div key={question}><h3>{question}</h3><p>{answer}</p></div>)}</div></noscript></section>;
}

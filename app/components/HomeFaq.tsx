// Homepage FAQ. The FAQPage schema lives next to the visible answers it
// describes (Google requires marked-up FAQs to be visible on the page), so it
// is emitted here rather than site-wide from the layout.
const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: 'How often should a sofa be professionally cleaned in Dubai?',
    a: "Because of Dubai's dust and humidity, we recommend a professional deep clean every 6 to 12 months. Homes with pets or children do best with a clean every 3 to 6 months to remove allergens, bacteria and embedded desert dust.",
  },
  {
    q: 'Is professional sofa cleaning worth it in Dubai?',
    a: "Yes. Professional cleaning removes the abrasive micro-dust that wears fabric fibres down, so your sofa lasts longer. It also removes allergens, bacteria and odours that a household vacuum or fabric spray cannot reach.",
  },
  {
    q: 'How long does a sofa take to dry after cleaning?',
    a: 'Most fabric sofas are dry and ready to use within 3 to 4 hours thanks to our extraction machines and air movers. Thick or natural-fibre fabrics can take up to 6 to 8 hours depending on airflow and AC in the room. Leather sofas can be used almost immediately.',
  },
  {
    q: 'Can you clean delicate fabrics like velvet or leather?',
    a: 'Yes. We use a low-moisture method for velvet and chenille to protect the pile, and pH-balanced cleaning and conditioning for leather to prevent cracking and dryness. We test on a hidden spot before cleaning any delicate fabric.',
  },
  {
    q: 'How much does sofa cleaning cost in Dubai?',
    a: 'The price depends on the size of the sofa, the fabric and its condition. Send a photo on WhatsApp +971547199189 and we will give you a free quote — at-home service, no hidden fees.',
  },
  {
    q: 'Do you offer same-day sofa cleaning across the UAE?',
    a: 'Yes. Same-day slots are usually available in Dubai, Sharjah, Ajman and Abu Dhabi when you message us in the morning. Our team is based in Al Nahda, Dubai, so Al Nahda, Al Qusais, Muhaisnah and Deira are the quickest areas for us to reach.',
  },
  {
    q: 'What is the difference between sofa shampoo cleaning and steam cleaning?',
    a: 'Shampoo cleaning uses a pH-balanced foam to break down oils, grease and embedded dirt — best for general deep cleaning and stains. Steam cleaning uses high-temperature vapour to sanitise, killing bacteria and dust mites — best for hygiene, babies and pets. We often combine both for the best result.',
  },
  {
    q: 'Are your sofa cleaning products safe for children and pets?',
    a: 'Yes. All our cleaning products are eco-friendly and non-toxic, and they are rinsed out during extraction, so no harsh residue is left behind on the fabric.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function HomeFaq() {
  return (
    <section className="section" id="faq" style={{ borderBottom: '1px solid var(--line)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container-x" style={{ maxWidth: 820 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="section-tag" style={{ margin: '0 auto 16px' }}>FAQs</div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>Sofa Cleaning in Dubai &amp; UAE — Questions</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {HOME_FAQS.map((f) => (
            <div key={f.q} style={{ padding: '20px 24px', background: 'var(--bg-elev)', borderRadius: 14, border: '1px solid var(--line)' }}>
              <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: 'var(--fg)' }}>{f.q}</h3>
              <p style={{ color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

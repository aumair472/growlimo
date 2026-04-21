/**
 * FAQ Schema Generator
 * Generates FAQ JSON-LD schema for city, state, and service pages
 */

export const generateFAQSchema = (faqs) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }
}

// City Page FAQs (Healthcare)
export const cityFAQs = {
    default: [
        {
            question: 'How quickly can I get new patients in this city?',
            answer: 'PPC campaigns typically start generating patient inquiries within 48-72 hours. Local SEO results usually take 3-6 months to mature, but early signals often appear in the first month.',
        },
        {
            question: 'Do you work with other medical practices in my area?',
            answer: 'We may work with non-competing practices. If we have an exclusive agreement with a direct competitor in your specific zip code radius, we will transparently let you know.',
        },
        {
            question: 'How do you target patients specifically in my city?',
            answer: 'We use geo-fencing and location-based keyword targeting (e.g., "cardiologist near [City] center"). We also optimize your Google Business Profile for local map pack dominance.',
        },
    ],
}

// State Page FAQs (Healthcare)
export const stateFAQs = {
    default: [
        {
            question: 'Can you market to patients across the entire state?',
            answer: 'Yes. For specialist providers (like fertility clinics or cosmetic surgeons) who draw patients from a wider area, we run statewide campaigns targeting high-intent users.',
        },
        {
            question: 'Do you understand state-specific medical advertising laws?',
            answer: 'Absolutely. We stay up-to-date with state medical board advertising guidelines to ensure your marketing remains compliant while being effective.',
        },
    ],
}

// Service Page FAQs (Healthcare)
export const serviceFAQs = {
    ppc: [
        {
            question: 'Is your PPC management HIPAA compliant?',
            answer: 'Yes. We strictly adhere to HIPAA guidelines in all our ad tracking and reporting. We do not store PHI (Protected Health Information) in non-compliant marketing dashboards.',
        },
        {
            question: 'How much budget do I need for medical Google Ads?',
            answer: 'We recommend a starting media budget of $2,500-$5,000/month depending on your specialty and market competitiveness. We will provide a custom forecast during your lead mapping session.',
        },
    ],
    seo: [
        {
            question: 'How is medical SEO different from regular SEO?',
            answer: 'Medical SEO requires a higher standard of E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) effectively known as "Your Money Your Life" (YMYL) content. Our content is reviewed by medical professionals.',
        },
        {
            question: 'Will blogging really bring in more patients?',
            answer: 'Yes. Educational content builds trust and captures patients at the "research" phase of their journey. It establishes your providers as thought leaders in their field.',
        },
    ],
    social: [
        {
            question: 'Can doctors advertise on social media?',
            answer: 'Yes, but with restrictions. We can\'t use "before and after" photos in retargeting ads, for example. We know exactly what is allowed on Meta (Facebook/Instagram), TikTok, and LinkedIn.',
        },
    ],
    gbp: [
        {
            question: 'Why is my Google Business Profile suspended?',
            answer: 'Healthcare profiles often get flagged if the primary category is incorrect or if the name includes keywords (keyword stuffing). We can help reinstate suspended profiles and optimize them correctly.',
        },
    ],
}

export default {
    generateFAQSchema,
    cityFAQs,
    stateFAQs,
    serviceFAQs,
}

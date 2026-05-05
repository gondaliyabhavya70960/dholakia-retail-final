// Shared content data for news articles, journal posts, and career roles.

export type NewsArticle = {
  slug: string;
  image: string;
  cat: string;
  date: string;
  title: string;
  excerpt: string;
  author?: string;
  body?: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: 'mayave-private-viewing-salon',
    image: '/images/news-1.jpg',
    cat: 'Newsroom',
    date: 'April 2026',
    title: 'Mayavé opens private viewing salon at Surat Diamond Bourse',
    excerpt:
      'A 1,400-square-foot atelier and viewing space designed in collaboration with Studio Lotus.',
    author: 'Editorial Desk',
    body: [
      'A 1,400-square-foot suite on the seventh floor of the Surat Diamond Bourse — the world’s largest office building — has been opened as Mayavé’s first dedicated private viewing salon. Designed in collaboration with Studio Lotus, the space brings together the brand’s atelier and a discreet client experience under one roof.',
      'The salon is built around three small viewing rooms, each with controlled D65 daylight, an attached strong room, and a single piece of bench furniture in oxidised brass and Indian rosewood. There is no shop window, no display case, no point of sale. The space is, by design, almost entirely empty until a client and a stone arrive in it.',
      'It is a deliberate inversion of how luxury jewellery is normally encountered. Most flagship boutiques sell the room first and the object second. Mayavé’s salon does the reverse: it takes a single piece, places it on a single block of stone, and asks the client and the work to spend an unhurried hour together.',
      'The decision to open the salon at the Diamond Bourse — rather than in Mumbai or Delhi — is intentional. Surat is where 90% of the world’s diamonds are cut and polished. To meet a Mayavé piece in Surat is to meet it three steps from the bench it was made on, and to meet, on the same morning, the cutters and setters whose hands shaped it.',
      'The salon receives clients by appointment only. It opens to its first private viewings in May 2026.'
    ]
  },
  {
    slug: 'scs-007-ethical-lab-grown-standard',
    image: '/images/news-2.jpg',
    cat: 'Sustainability',
    date: 'March 2026',
    title: 'Dholakia Retail joins SCS-007 ethical lab-grown diamond standard',
    excerpt: 'A first-of-its-kind commitment among Indian jewellery parent houses.',
    author: 'Sustainability Office',
    body: [
      'Dholakia Retail Private Limited has formally joined the SCS-007 sustainability-rated diamond standard — becoming, to its knowledge, the first Indian jewellery parent house to commit its full lab-grown supply to third-party certification under the protocol.',
      'SCS-007 is a 2022 standard developed by SCS Global Services that requires diamond growers and traders to demonstrate climate-neutral operations, verified renewable-energy use, transparent labour practices and full chain-of-custody traceability from grower to retailer. It is significantly more demanding than self-attested “lab-grown” claims.',
      'Under the commitment, every Mayavé diamond grown, cut and polished from January 2027 onward will carry an SCS-007-certified file describing its energy mix at growth, its water and CO₂ intensity, its labour-audit status, and the bench-side identity of the artisans who finished it.',
      'The decision follows a two-year audit programme inside the Dholakia Surat CVD facility, during which the company moved its electricity supply for diamond growing onto a long-term solar PPA and replaced its water-cooled growth chambers with a closed-loop system.'
    ]
  },
  {
    slug: 'inside-the-surat-cvd-chamber',
    image: '/images/news-3.jpg',
    cat: 'Innovation',
    date: 'February 2026',
    title: 'Inside the Surat CVD chamber: a new chapter in clean diamond growing',
    excerpt: 'How a microwave plasma in Gujarat is shifting the carbon math of luxury.',
    author: 'Materials & Innovation',
    body: [
      'On any given morning at the Dholakia CVD facility in Surat, twenty-eight microwave plasma chambers are lit. Inside each, a 2.45 GHz field excites a methane-hydrogen mixture into a hot purple ball of plasma, and on a small disc of synthetic diamond seed at the bottom, carbon atoms settle, layer by atomic layer, into a fresh crystal.',
      'It is, in the strictest sense, the same process by which a natural diamond was formed inside the earth — only here, it is taking place above ground, on solar electricity, in the span of a few weeks rather than a few billion years.',
      'The chambers are quiet. There is no smelting, no fire, no overburden of waste rock to remove. The carbon math is the part of the story that interests us most: a CVD diamond grown on the Indian solar grid we now use carries roughly one-fifth the lifecycle CO₂ footprint of the average mined diamond of equivalent size and clarity.',
      'It does not make lab-grown diamonds “better” than mined diamonds — both have rightful, very different places in the future of jewellery. It does, however, give a brand like Mayavé a defensible answer to the question of why, in 2026, an Indian house would build its first collection on this material.'
    ]
  },
  {
    slug: 'notes-from-the-bench',
    image: '/images/news-4.jpg',
    cat: 'Mayavé',
    date: 'February 2026',
    title: 'Notes from the bench: how a stone becomes a piece',
    excerpt: 'Three months at the bench. One stone. Five hands. Zero compromise.',
    author: 'Mayavé Atelier',
    body: [
      'In our atelier in Surat, a Mayavé piece typically passes through five pairs of hands before it leaves the bench. The setter, the polisher, the engraver, the gold-finisher and the quality master each take their turn — and each refuses to release the piece until they personally are satisfied.',
      'It is a slower way of working than the industry standard. A typical bridal piece in our portfolio takes between sixty and ninety bench-hours to complete. There is no production target. There is, instead, a single rule: a piece is finished when the last person to hold it would be content to put their own name on it.',
      'This essay is the first in a series in which we sit with each of those five people, in their own words, and ask: what is it that you look for, when you are the last person to see this stone before it leaves the building?'
    ]
  },
  {
    slug: 'vogue-business-25-to-watch',
    image: '/images/lookbook-2.jpg',
    cat: 'Press',
    date: 'January 2026',
    title: 'Dholakia Retail named to Vogue Business Asia’s “25 to watch” list',
    excerpt: 'Editorial coverage of the parent-house model in Indian luxury.',
    author: 'Press Office',
    body: [
      'In its January 2026 “25 to watch” package, Vogue Business Asia profiled Dholakia Retail Private Limited as the leading example of a new structural pattern in Indian luxury jewellery: the parent house.',
      'The piece, written by senior editor Aastha Mehta, framed Dholakia Retail’s decision to incubate Mayavé as a wholly-owned but independently-creative-led house — rather than as a sub-line of a master brand — as a deliberate departure from the standard Indian model of single-name, founder-led jewellery houses.',
      'We are grateful for the coverage and for the careful reading of the model. The full feature is available on vogue.in.'
    ]
  },
  {
    slug: '2025-sustainability-charter',
    image: '/images/lookbook-5.jpg',
    cat: 'Newsroom',
    date: 'December 2025',
    title: 'Dholakia Retail publishes its 2025 Sustainability Charter',
    excerpt: 'A 28-page founding document covering Scope 1–3, traceability and audit cadence.',
    author: 'Sustainability Office',
    body: [
      'On 20 December 2025, Dholakia Retail Private Limited published its founding Sustainability Charter — a 28-page document that sets out the environmental, social and governance commitments the parent house, and every brand inside it, will be measured against.',
      'The Charter covers Scope 1, Scope 2 and Scope 3 emissions and sets out a path to net-zero Scope 1+2 by 2030. It commits to full chain-of-custody traceability for every gemstone and every gram of metal entering our atelier. It commits to a published audit cadence, with results disclosed annually whether they flatter us or not.',
      'The Charter is available as a PDF in the Press Kit section of this Newsroom, alongside the underlying baseline data.'
    ]
  }
];

export type CareerRole = {
  slug: string;
  fn: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  manager: { name: string; role: string; portrait: string };
};

export const careerRoles: CareerRole[] = [
  {
    slug: 'master-jeweller-bench',
    fn: 'Atelier & bench',
    title: 'Master jeweller — bench',
    location: 'Surat, Gujarat',
    type: 'Full-time',
    summary:
      'Senior bench jeweller for the Mayavé atelier. Setting, finishing and quality-mastering of high-jewellery pieces. Eight to twelve years at the bench, ideally in fine or high jewellery.',
    responsibilities: [
      'Lead bench-side execution on Mayavé high-jewellery pieces from prototype to final QC',
      'Set, polish and finish to a level that is signed off, in person, by the studio director',
      'Mentor two apprentices over a four-year programme and sign off on their bench progression',
      'Hold the final “last pair of hands” role on every piece that leaves the studio'
    ],
    qualifications: [
      '8–12 years of bench experience in fine, bridal or high jewellery',
      'Demonstrated mastery of pavé, micro-pavé and bezel setting on coloured stones and diamonds',
      'A signed portfolio of at least three high-jewellery pieces you personally completed',
      'A teacher’s patience: this role spends 30% of its time training the bench behind it'
    ],
    manager: {
      name: 'Aanya Sharma',
      role: 'Studio Director, Mayavé',
      portrait: '/images/portrait-2.jpg'
    }
  },
  {
    slug: 'creative-director-mayave',
    fn: 'Brand & creative',
    title: 'Creative director — Mayavé',
    location: 'Mumbai or Surat',
    type: 'Full-time',
    summary:
      'Creative leadership of the Mayavé house — collections, brand voice, art direction, casting and editorial. Reports to the Group Creative Council.',
    responsibilities: [
      'Author and direct two collections per year, from concept through campaign delivery',
      'Set and protect the Mayavé voice across all editorial, social, retail and packaging surfaces',
      'Lead casting, photography and film direction for all brand campaigns',
      'Sit on the Group Creative Council with peers from sister houses'
    ],
    qualifications: [
      'Eight or more years of creative leadership inside a luxury house, preferably jewellery, fashion or watches',
      'A built-from-scratch brand somewhere in your back catalogue',
      'A native sense for Indian craft and a refusal to be reductive about it',
      'The taste, and the temperament, to say no'
    ],
    manager: {
      name: 'Rohan Mehta',
      role: 'Chief Brand Officer, Dholakia Retail',
      portrait: '/images/portrait-3.jpg'
    }
  },
  {
    slug: 'gemmologist-traceability',
    fn: 'Materials & innovation',
    title: 'Gemmologist — traceability',
    location: 'Surat, Gujarat',
    type: 'Full-time',
    summary:
      'Gemmology and chain-of-custody specialist. Responsible for traceability files on every stone that enters the atelier — from rough through cut, set and shipped.',
    responsibilities: [
      'Author the chain-of-custody file for every stone above 0.30ct that enters our supply',
      'Operate and maintain the traceability software linking grower, cutter, setter and client',
      'Sit alongside our SCS-007 audit team on annual recertification',
      'Train atelier staff on identification of CVD vs. HPHT vs. natural origin'
    ],
    qualifications: [
      'GIA Graduate Gemologist diploma or equivalent (FGA, DGA)',
      'Five or more years of working gemmology in a production environment',
      'Familiarity with at least one industrial traceability platform',
      'A documented eye for detail under fluorescent light at the end of a long week'
    ],
    manager: {
      name: 'Vikram Patel',
      role: 'Head of Materials & Innovation',
      portrait: '/images/portrait-4.jpg'
    }
  }
];

export type JournalPost = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  dek: string;
  cover: string;
  author: { name: string; role: string; portrait: string };
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: 'why-a-parent-house',
    category: 'Editorial',
    date: 'April 2026',
    readTime: '7 min',
    title: 'Why a parent house, and why now.',
    dek: 'On the structural difference between a brand and a house — and why we built one before we built a single piece.',
    cover: '/images/editorial-1.jpg',
    author: {
      name: 'Rohan Mehta',
      role: 'Chief Brand Officer',
      portrait: '/images/portrait-3.jpg'
    },
    body: [
      'There is a quiet but consequential difference, in our industry, between a brand and a house. A brand is a name that has been attached, with care, to a product. A house is a structure that exists, with conviction, around a way of working. The first can be made in a quarter. The second takes a generation to build, and a generation more to defend.',
      'Dholakia Retail Private Limited was incorporated, in 2024, as a parent house — not as a brand and not as a holding shell with a logo. The decision was deliberate. We knew, before we placed a single piece on a single bench, that what we were building was not one jewellery line. It was the shared atelier, the shared sustainability charter, the shared traceability infrastructure and the shared creative council that would, over the next thirty years, hold a small number of independent-feeling jewellery houses together.',
      'Mayavé is the first of those houses. There will be others. Each will be allowed to have its own voice, its own founder-creative, its own clients and its own opinions about what jewellery is for. What they will share is the back of the house: the bench, the stone, the audit, and the people who care about all three.',
      'It is, structurally, the model of an LVMH or a Richemont. We do not pretend to that scale and we have no intention of moving at it. We do, however, believe that the parent-house structure is what allows a luxury jewellery business to outlive its founders without losing its soul — and that is the only kind of business worth building, in this category, in this country, in this decade.'
    ]
  },
  {
    slug: 'on-the-quiet-of-a-good-room',
    category: 'Atelier',
    date: 'March 2026',
    readTime: '5 min',
    title: 'On the quiet of a good room.',
    dek: 'A note on why we kept the salon almost empty — and what we ask the room to do, instead of asking the objects.',
    cover: '/images/editorial-2.jpg',
    author: {
      name: 'Aanya Sharma',
      role: 'Studio Director, Mayavé',
      portrait: '/images/portrait-2.jpg'
    },
    body: [
      'When we designed the Mayavé private viewing salon at the Surat Diamond Bourse, the first decision we made was to take almost everything out of it. There is no display case. There is no shop window. There is no merchandised wall.',
      'What is left is a single block of unfilled black stone, a single lamp at D65 daylight, a single piece of bench furniture in oxidised brass and Indian rosewood, and the quiet. Especially the quiet.',
      'We have come to believe that the experience of a piece of jewellery — particularly a piece a client may live with for fifty years — is not something that benefits from a room full of competing objects. It benefits from a room that lets the object speak first, and last, and at the volume the object chooses.',
      'It is a small, almost monastic decision. It has, more than any other choice we have made in the last year, changed what our clients tell us when they leave.'
    ]
  },
  {
    slug: 'the-carbon-math-of-a-stone',
    category: 'Materials',
    date: 'February 2026',
    readTime: '8 min',
    title: 'The carbon math of a stone.',
    dek: 'A working note on Scope 1, Scope 2 and Scope 3 — and what each of them really costs the planet, per carat.',
    cover: '/images/editorial-3.jpg',
    author: {
      name: 'Vikram Patel',
      role: 'Head of Materials & Innovation',
      portrait: '/images/portrait-4.jpg'
    },
    body: [
      'It is unhelpful, in 2026, to argue about whether a diamond is good or bad for the planet. The honest answer is that it depends — almost entirely — on how, where and on what energy mix it was produced. Two stones of the same size, the same clarity and the same beauty can carry footprints that differ by an order of magnitude. The question is not “mined or grown.” The question is “on what grid.”',
      'In our own facility in Surat, we have spent the last two years moving the answer to that question, deliberately, in one direction. Our diamond-growing chambers now run on a long-term solar PPA. Our water is recirculated through a closed loop. Our cutting and polishing has been audited under SCS-007. The number we now publish — roughly one-fifth the lifecycle CO₂ of an average mined stone of equivalent specification — is not a marketing number. It is the number we get when we add up our own meters.',
      'We share the working in our annual sustainability report, with the underlying invoices, because we think the only useful number is the one a third party can argue with.'
    ]
  }
];

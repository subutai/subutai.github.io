/* =============================================================================
   career.js — the career journey (THE SINGLE SOURCE OF TRUTH)

   Loaded by BOTH index.html (the "Career journey" list on the homepage) and
   career.html (the full career page, one section per place). Edit HERE — both
   update automatically.

   Each place is one object in the CAREER array:

     {
       "slug":       "numenta",                 // URL id -> career.html#numenta
       "company":    "Numenta",
       "role":       "Chief Scientist",
       "dates":      "2005 – present",
       "url":        "https://numenta.com",      // optional "Visit" link ("" = none)
       "short":      "One/two-line summary shown on the homepage list.",
       "body":       ["Paragraph 1…", "Paragraph 2…"],  // full text on career.html
       "highlights": ["chip one", "chip two"]            // optional little chips
     }

   • The ORDER of the array is the order things appear (newest first here).
   • The homepage links each entry to career.html#<slug>.
   • Each section on career.html shows one image from
     images/career/<slug>.<jpg|png|gif|webp> (optional — a placeholder shows
     until you add it). Add an optional "fig" object to caption it or resize it:
         "fig": { "caption": "Shown under the image.", "scale": 0.6 }
   ============================================================================= */
const CAREER = [
  {
    "slug": "numenta",
    "company": "Numenta",
    "role": "Chief Scientist (previously: VP Engineering, VP R&D, CEO)",
    "dates": "2005 – present",
    "url": "https://numenta.com",
    "short": "Lead research on HTM and neuroscience-inspired AI. Open-sourced the NuPIC platform. Over nearly two decades, built both the science and the engineering culture. Initiated the funding and spinout of the Thousand Brains Project.",
    "body": [
      "I've spent nearly two decades at Numenta, leading research on Hierarchical Temporal Memory (HTM) and neuroscience-inspired AI — and building both the science and the engineering culture along the way. We open-sourced our platform (NuPIC) and published much of the cortical theory work described elsewhere on this site.",
      "Over the years I've worn several hats here — VP Engineering, VP of Research, CEO, and now Chief Scientist. I also initiated the funding and spinout of the Thousand Brains Project. These days my focus is on turning cortical principles into practical, dramatically more efficient AI."
    ],
    "highlights": ["HTM theory", "Open-source NuPIC", "Sparsity for efficient AI", "Thousand Brains spinout"]
  },
  {
    "slug": "yesvideo",
    "company": "YesVideo",
    "role": "Co-Founder & VP Engineering",
    "dates": "1999 – 2005",
    "url": "",
    "short": "Grew the company from 3 people to 100+. Automated digital media authoring; served over a million consumers. Once a Forbes top-100 promising company.",
    "body": [
      "I co-founded YesVideo in 1999 with Sai-Wai Fu and Hon Sit — a three-person team with a simple but powerful idea: make it easy for ordinary people to access and enjoy precious memories trapped on aging analog formats like VHS tapes, film reels, and photographs. In the early 2000s, millions of families had decades of memories on deteriorating media, and converting them was expensive and technically daunting for most consumers.",
      "As VP of Engineering, I led the development of an automated digital-media-authoring platform that could process thousands of hours of video with minimal human intervention — automated scene detection that split footage into meaningful chapters, audio and video quality enhancement, automatic DVD-menu generation, and a scalable batch-processing pipeline with built-in quality control and end-to-end order tracking across international markets.",
      "By the time I left in 2005, YesVideo had grown from three people to over a hundred, with partnerships with Kodak and Fujicolor Services putting our service in more than 30,000 retail locations worldwide. We served over a million consumers, and Forbes named us one of the 100 most promising companies.",
      "The company kept growing after I left and eventually became part of CVS Health's digital services. YesVideo taught me a great deal about scaling technology, building genuinely consumer-friendly products, and the power of partnerships to reach mass markets — lessons that proved invaluable later at Numenta."
    ],
    "highlights": ["Automated DVD authoring", "3 → 100+ people", "1M+ consumers", "30,000+ retail locations", "Forbes Top 100"]
  },
  {
    "slug": "eplanet",
    "company": "ePlanet",
    "role": "Co-Founder",
    "dates": "1997 – 1999",
    "url": "",
    "short": "Built one of the first consumer computer-vision applications — think Kinect, a decade early. An Interval Research spin-off.",
    "body": [
      "I co-founded ePlanet in 1997 with John Levy and Meg Withgott as a spin-off from Interval Research, with the goal of turning computer vision into entertainment products for home consumers. Computer vision — the science of getting computers to see — was an exciting research area, but at the time there were almost no real consumer products built on it.",
      "We developed a series of real-time computer-vision products. Our technology could track a person's body, head, and arms at over 30 frames per second using nothing more than a standard USB webcam and PC, and we built a 'Virtual Blue Screen' that dropped people into virtual scenes in real time. Kids loved it — they love seeing themselves on screen and playing physically.",
      "In August 1999 we shipped the first computer-vision product for home consumers: the IntelPlay Me2Cam, published by Mattel and Intel. It went on to win the Bologna 2000 New Media Prize for the most innovative children's software — as the judges put it, 'one of the few software products out there which get children up off their seats and using their muscles,' which was exactly our goal.",
      "After almost three years, we were forced to close our doors — VC funding was scarce (we weren't an Internet company, and we were early for the market). I'm proud of what we built at ePlanet, and I carried the lessons forward."
    ],
    "highlights": ["IntelPlay Me2Cam (Mattel & Intel)", "Bologna 2000 New Media Prize", "Real-time body tracking", "Interval Research spinoff"]
  },
  {
    "slug": "interval-research",
    "company": "Interval Research",
    "role": "Researcher",
    "dates": "1993 – 1997",
    "url": "https://en.wikipedia.org/wiki/Interval_Research_Corporation",
    "short": "Paul Allen & David Liddle's legendary research lab. Built one of the first DVRs (TV news indexing) and foundational computer-vision technology.",
    "body": [
      "I was a researcher at Interval Research, Paul Allen and David Liddle's visionary lab. I built one of the first working digital video recorders — focused on indexing TV news — and developed foundational computer-vision technology, with several patents along the way.",
      "Interval was a remarkable place to learn how to do ambitious, long-horizon research, and it's where a lot of my later thinking about perception first took root."
    ],
    "highlights": ["First DVR prototype", "TV news indexing", "Key patents"]
  }
];

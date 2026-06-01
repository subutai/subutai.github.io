/* =============================================================================
   themes.js — the research themes (THE SINGLE SOURCE OF TRUTH)

   Loaded by BOTH index.html (the "Research themes" cards) and research-theme.html
   (the per-theme detail pages). Edit your research themes HERE — both pages
   update automatically.

   Each theme is one object in the THEMES array:

     {
       "slug":     "sparsity",                  // URL id -> research-theme.html#sparsity
       "name":     "Sparsity for Efficient AI",
       "area":     "Sparsity & Efficient AI",   // the tag this theme collects (see below)
       "era":      "current",                   // "current" or "earlier" (groups the cards)
       "tagline":  "One-line summary shown under the title.",
       "keywords": ["sparse representations", "..."],         // small chips
       "body":     ["First paragraph...", "Second paragraph..."]  // shown on the theme page
     }

   • The ORDER of the array is the order the cards appear (current ones first,
     then earlier work).

   IMPORTANT — "area" must EXACTLY match the tags used in publications.js (the
   "areas" field) and the keys in the AREA_COLOR_HEX color map (currently inside
   index.html / research-theme.html). The 6 areas are:
       "Sparsity & Efficient AI"        "Cortical Theory & HTM"
       "Continual Learning"             "Anomaly Detection & Streaming"
       "Vision & Attention"             "Neural Networks (foundations)"

   • Each card also shows a small icon from images/icons/<slug>.svg, and each
     theme page shows two images at images/research/<slug>-1.<ext> and -2.<ext>
     (ext = jpg / png / gif / webp). These are optional — a placeholder shows
     until you add the files.

   • OPTIONAL per-image settings: add "fig1" and/or "fig2" objects to a theme to
     give an image a caption and/or shrink its displayed size:
         "fig1": { "caption": "Shown under the image.", "scale": 0.4 }
     - caption : text under the image (omit → no caption under a real image)
     - scale   : 0–1 fraction of the displayed width (e.g. 0.4 = 40%; omit → full width)
   ============================================================================= */
const THEMES = [
  {"slug":"sparsity","name":"Sparsity for Efficient AI","area":"Sparsity & Efficient AI","era":"current","tagline":"Brains use a tiny fraction of their neurons at once — that's a big part of why they're so efficient.","keywords":["sparse representations","sparse-sparse networks","efficient inference","robustness","LLM inference"],"body":["Biological networks are extraordinarily sparse, and that sparsity is a large part of why they're so efficient and robust. I've worked on bringing the same principle to machine learning: highly sparse representations, sparse-sparse networks, and the mathematics of why sparsity makes neurons and networks more robust to noise.","Most recently this has turned into very practical work — dramatically faster and cheaper large-language-model inference on commodity CPUs, and a broader argument that we should be paying a lot more attention to the energy cost of AI."],"fig1":{"caption":"Video of cells firing in a mouse neocortex while performing task. (Courtesy: Prof. Hasan, Max-Planck-Institut for Research).","scale":0.8}},
  {"slug":"cortical-theory","name":"Cortical Theory & the Thousand Brains Framework","area":"Cortical Theory & HTM","era":"current","tagline":"How a sheet of tissue a few millimeters thick learns a model of the whole world.","keywords":["sequence memory","cortical columns","grid cells","reference frames","Thousand Brains","HTM","NuPIC"],"body":["Much of my research with Jeff Hawkins and our colleagues has chased a single question: how does the neocortex manage to learn models of the entire world? We proposed that the cortex is full of grid-cell-like maps, that every cortical column learns complete models of objects through movement and sensation, and that intelligence emerges from thousands of these models voting together — the Thousand Brains Theory.","This thread runs from our work on sequence memory in neurons, to cortical columns, to sensorimotor object recognition with reference frames. It's also where Hierarchical Temporal Memory (HTM) and our open-source NuPIC software grew from — a biologically grounded framework for online sequence learning."]},
  {"slug":"continual-learning","name":"Continual Learning & Active Dendrites","area":"Continual Learning","era":"current","tagline":"Real neurons are far more capable than the 'point neurons' deep learning borrowed.","keywords":["active dendrites","catastrophic forgetting","multi-task learning","continual learning"],"body":["Biological neurons do a lot of computation in their dendrites — far more than the simple point neurons used in deep learning. We've shown that adding active dendrites and sparse representations to artificial networks lets them learn many tasks over time without catastrophically forgetting earlier ones.","It's a step toward systems that keep learning the way brains do, and it ties directly back to the cortical theory and sparsity work."]},
  {"slug":"anomaly-detection","name":"Anomaly Detection & Streaming Data","area":"Anomaly Detection & Streaming","era":"earlier","tagline":"Earlier work: spotting the unexpected in real time, with no labels and without storing the data.","keywords":["real-time","unsupervised","Numenta Anomaly Benchmark (NAB)","streaming analytics"],"body":["One of the most practical things our cortical models turned out to be good at was detecting anomalies in streaming data in real time — without labels, and without storing history. The streaming anomaly detection paper has become one of my most-cited works.","To give the field a fair way to compare real-time detectors, we built and open-sourced the Numenta Anomaly Benchmark (NAB), which has since become a widely used standard."]},
  {"slug":"vision-attention","name":"Vision & Attention","area":"Vision & Attention","era":"earlier","tagline":"Earlier work: how do you decide where to look, and what to make of what you see?","keywords":["visual attention","VISIT","hand tracking","gesture recognition","video understanding"],"body":["Before the cortical theory years, much of my research was in computer vision and visual attention — models of covert attention (VISIT), real-time 3D hand tracking, gesture recognition, and video understanding.","Some of this turned into consumer products well ahead of their time, including one of the first consumer computer-vision applications and early digital video work."]},
  {"slug":"neural-net-foundations","name":"Neural Network Foundations","area":"Neural Networks (foundations)","era":"earlier","tagline":"Earlier work: the fundamentals, back when 'connectionism' was a fringe idea.","keywords":["generalization","scaling","missing data","early connectionism"],"body":["My earliest research, in the late 1980s and early 1990s, was on the fundamentals of neural networks — scaling and generalization, learning from missing or uncertain data, and blending rule-based knowledge with networks.","This was back when 'connectionism' was a fringe topic and NeurIPS (then NIPS) had only a couple hundred attendees. It's where I learned to love this field."]}
];

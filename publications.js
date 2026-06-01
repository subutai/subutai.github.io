/* =============================================================================
   publications.js — Subutai Ahmad's publication list (THE SINGLE SOURCE OF TRUTH)

   This file is loaded by BOTH index.html (homepage: timeline + list) and
   research-theme.html (the per-theme pages). Edit your publications HERE, in
   this one file only — both pages update automatically.

   ── How to add or edit a paper ──────────────────────────────────────────────
   Each paper is one object in the PUBS array below. Copy an existing line and
   change the fields:

     {
       "title":     "Paper title",
       "authors":   "S Ahmad, J Hawkins",        // use "et al." for long lists
       "venue":     "Journal / conference / preprint",
       "year":      2016,                          // number; drives the timeline
       "citations": 150,                           // number
       "areas":     ["Sparsity & Efficient AI"],   // ONE OR MORE tags — see below
       "link":      "https://arxiv.org/abs/...",   // source URL; ""  -> "+ add source link"
       "pdf":       "papers/your-file.pdf"          // OPTIONAL; omit or "" -> "+ add PDF"
     }

   ── Tags: the "areas" field ─────────────────────────────────────────────────
   A paper can have MORE THAN ONE tag. The FIRST tag is the "primary" one — it
   sets the paper's color (year badge, area dot, timeline bubble). The paper then
   shows up on EVERY matching theme page and under every matching legend filter.

   VALID TAGS — must match EXACTLY, including the "&":
       "Sparsity & Efficient AI"
       "Cortical Theory & HTM"
       "Continual Learning"
       "Anomaly Detection & Streaming"
       "Vision & Attention"
       "Neural Networks (foundations)"
   (Keep these in sync with the THEMES list and the AREA_COLOR_HEX color map,
   which currently live inside index.html and research-theme.html.)

   Example of a paper with two tags (primary first):
       "areas": ["Sparsity & Efficient AI", "Cortical Theory & HTM"]

   ── Notes ───────────────────────────────────────────────────────────────────
   • Order in this list does not matter — the pages sort it (by citations by
     default, or by year via the Sort control).
   • A paper with an unknown/0 year won't get a timeline bubble.
   • Curated from 87 raw entries to 32 (dropped translations/reposts,
     duplicate arXiv versions, book reviews, and year=0 stubs).
   ============================================================================= */
const PUBS = [
  {"title":"A mechanism for deviance detection and contextual routing in the thalamus: a review and theoretical proposal","authors":"C Varela, JVS Moreira, B Kocaoglu, S Dura-Bernal, S Ahmad","venue":"Frontiers in Neuroscience","year":2024,"citations":7,"areas":["Cortical Theory & HTM"],"link":""},
  {"title":"Avoiding catastrophe: Active dendrites enable multi-task learning in dynamic environments","authors":"A Iyer, K Grewal, A Velu, LO Souza, J Forest, S Ahmad","venue":"Frontiers in Neurorobotics","year":2022,"citations":72,"areas":["Continual Learning"],"link":"https://www.frontiersin.org/articles/10.3389/fnbot.2022.846219/full"},
  {"title":"Two sparsities are better than one: unlocking the performance benefits of sparse-sparse networks","authors":"K Hunter, L Spracklen, S Ahmad","venue":"Neuromorphic Computing and Engineering","year":2022,"citations":34,"areas":["Sparsity & Efficient AI"],"link":""},
  // {"title":"AI is harming our planet: addressing AI's staggering energy cost","authors":"C Lai, S Ahmad, D Dubinsky, C Maver","venue":"Numenta","year":2022,"citations":11,"areas":["Sparsity & Efficient AI"],"link":""},
  // {"title":"Avalanche: an end-to-end library for continual learning","authors":"V Lomonaco, L Pellegrini, A Cossu, A Carta, G Graffieti, TL Hayes, et al.","venue":"IEEE/CVF CVPR","year":2021,"citations":292,"areas":["Continual Learning"],"link":""},
  {"title":"A thousand brains: toward biologically constrained AI","authors":"KJ Hole, S Ahmad","venue":"SN Applied Sciences","year":2021,"citations":70,"areas":["Cortical Theory & HTM"],"link":""},
  // {"title":"Going beyond the point neuron: Active dendrites and sparse representations for continual learning","authors":"K Grewal, J Forest, BP Cohen, S Ahmad","venue":"bioRxiv","year":2021,"citations":22,"areas":["Continual Learning"],"link":"https://www.biorxiv.org/content/10.1101/2021.10.25.465651"},
  {"title":"Grid cell path integration for movement-based visual object recognition","authors":"N Leadholm, M Lewis, S Ahmad","venue":"arXiv:2102.09076","year":2021,"citations":15,"areas":["Cortical Theory & HTM"],"link":"https://arxiv.org/abs/2102.09076"},
  {"title":"Long distance relationships without time travel: Boosting the performance of a sparse predictive autoencoder in sequence modeling","authors":"J Gordon, D Rawlinson, S Ahmad","venue":"IAPR Workshop on Artificial Neural Networks in Pattern Recognition","year":2020,"citations":6,"areas":["Continual Learning"],"link":""},
  {"title":"A framework for intelligence and cortical function based on grid cells in the neocortex","authors":"J Hawkins, M Lewis, M Klukas, S Purdy, S Ahmad","venue":"Frontiers in Neural Circuits","year":2019,"citations":249,"areas":["Cortical Theory & HTM"],"link":"https://www.frontiersin.org/journals/neural-circuits/articles/10.3389/fncir.2018.00121/full"},
  {"title":"How can we be so dense? The benefits of using highly sparse representations","authors":"S Ahmad, L Scheinkman","venue":"arXiv:1903.11257","year":2019,"citations":123,"areas":["Sparsity & Efficient AI"],"link":"https://arxiv.org/abs/1903.11257"},
  {"title":"Locations in the neocortex: a theory of sensorimotor object recognition using cortical grid cells","authors":"M Lewis, S Purdy, S Ahmad, J Hawkins","venue":"Frontiers in Neural Circuits","year":2019,"citations":69,"areas":["Cortical Theory & HTM"],"link":"https://www.frontiersin.org/articles/10.3389/fncir.2019.00022/full"},
  {"title":"Biologically driven artificial intelligence","authors":"KJ Hole, S Ahmad","venue":"Computer (IEEE)","year":2019,"citations":15,"areas":["Sparsity & Efficient AI"],"link":""},
  {"title":"A sequence-based neuronal model for mobile robot localization","authors":"P Neubert, S Ahmad, P Protzel","venue":"KI 2018: Advances in Artificial Intelligence","year":2018,"citations":9,"areas":["Cortical Theory & HTM"],"link":""},
  {"title":"Unsupervised real-time anomaly detection for streaming data","authors":"S Ahmad, A Lavin, S Purdy, Z Agha","venue":"Neurocomputing 262, 134-147","year":2017,"citations":1460,"areas":["Anomaly Detection & Streaming"],"link":"https://doi.org/10.1016/j.neucom.2017.04.070"},
  {"title":"A theory of how columns in the neocortex enable learning the structure of the world","authors":"J Hawkins, S Ahmad, Y Cui","venue":"Frontiers in Neural Circuits","year":2017,"citations":254,"areas":["Cortical Theory & HTM"],"link":"https://www.frontiersin.org/articles/10.3389/fncir.2017.00081/full"},
  {"title":"The HTM spatial pooler — a neocortical algorithm for online sparse distributed coding","authors":"Y Cui, S Ahmad, J Hawkins","venue":"Frontiers in Computational Neuroscience","year":2017,"citations":199,"areas":["Cortical Theory & HTM"],"link":"https://www.frontiersin.org/articles/10.3389/fncom.2017.00111/full"},
  {"title":"Why Neurons Have Thousands of Synapses, A Theory of Sequence Memory in Neocortex","authors":"J Hawkins, S Ahmad","venue":"Frontiers in Neural Circuits","year":2016,"citations":595,"areas":["Cortical Theory & HTM"],"link":"https://www.frontiersin.org/journals/neural-circuits/articles/10.3389/fncir.2016.00023/full"},
  {"title":"Continuous online sequence learning with an unsupervised neural network model","authors":"Y Cui, S Ahmad, J Hawkins","venue":"Neural Computation 28 (11)","year":2016,"citations":382,"areas":["Cortical Theory & HTM"],"link":"https://doi.org/10.1162/NECO_a_00893"},
  {"title":"Real-time anomaly detection for streaming analytics","authors":"S Ahmad, S Purdy","venue":"arXiv:1607.02480","year":2016,"citations":195,"areas":["Anomaly Detection & Streaming"],"link":"https://arxiv.org/abs/1607.02480"},
  {"title":"How do neurons operate on sparse distributed representations? A mathematical theory of sparsity, neurons and active dendrites","authors":"S Ahmad, J Hawkins","venue":"arXiv:1601.00720","year":2016,"citations":150,"areas":["Sparsity & Efficient AI"],"link":"https://arxiv.org/abs/1601.00720"},
  {"title":"Evaluating real-time anomaly detection algorithms — the Numenta anomaly benchmark","authors":"A Lavin, S Ahmad","venue":"IEEE ICMLA","year":2015,"citations":789,"areas":["Anomaly Detection & Streaming"],"link":"https://arxiv.org/abs/1510.03336"},
  {"title":"Properties of sparse distributed representations and their application to hierarchical temporal memory","authors":"S Ahmad, J Hawkins","venue":"arXiv:1503.07469","year":2015,"citations":241,"areas":["Sparsity & Efficient AI"],"link":"https://arxiv.org/abs/1503.07469"},
  {"title":"Hierarchical Temporal Memory including HTM cortical learning algorithms","authors":"J Hawkins, S Ahmad, D Dubinsky","venue":"Technical report, Numenta, Inc.","year":2011,"citations":247,"areas":["Cortical Theory & HTM"],"link":""},
  {"title":"Analysis-by-synthesis dissolve detection","authors":"M Covell, S Ahmad","venue":"International Conference on Image Processing (ICIP)","year":2002,"citations":8,"areas":["Vision & Attention"],"link":""},
  {"title":"Probabilistic models of verbal and body gestures","authors":"C Bregler, SM Omohundro, M Covell, M Slaney, S Ahmad, DA Forsyth, et al.","venue":"Computer Vision in Man-Machine Interfaces","year":1998,"citations":17,"areas":["Vision & Attention"],"link":""},
  {"title":"A usable real-time 3D hand tracker","authors":"S Ahmad","venue":"28th Asilomar Conference on Signals, Systems and Computers","year":1994,"citations":288,"areas":["Vision & Attention"],"link":""},
  {"title":"Training neural networks with deficient data","authors":"V Tresp, S Ahmad, R Neuneier","venue":"Advances in Neural Information Processing Systems (NIPS) 6","year":1993,"citations":182,"areas":["Neural Networks (foundations)"],"link":""},
  {"title":"Some solutions to the missing feature problem in vision","authors":"S Ahmad, V Tresp","venue":"Advances in Neural Information Processing Systems (NIPS) 5","year":1992,"citations":162,"areas":["Neural Networks (foundations)"],"link":""},
  {"title":"VISIT: A neural model of covert visual attention","authors":"S Ahmad","venue":"Advances in Neural Information Processing Systems (NIPS) 4","year":1991,"citations":69,"areas":["Vision & Attention"],"link":""},
  {"title":"Scaling and generalization in neural networks: a case study","authors":"S Ahmad, G Tesauro","venue":"Advances in Neural Information Processing Systems (NIPS) 1","year":1988,"citations":142,"areas":["Neural Networks (foundations)"],"link":""}
];

# AI Safety Subfields

A comprehensive mapping of the major subfields within AI safety research, covering their key questions, research directions, notable results, and interconnections.

---

## 1. Alignment (RLHF, Constitutional AI, Scalable Oversight)

**Description:** Alignment research aims to ensure AI systems pursue goals that are consistent with human intentions and values, even as systems become more capable. This is widely considered the central challenge of AI safety.

**Key Questions:**
- How do we specify what we actually want AI systems to do (the "outer alignment" problem)?
- How do we ensure the learned objective matches the specified objective (the "inner alignment" problem)?
- Can alignment methods scale to superhuman systems that exceed human ability to evaluate?
- Does alignment reduce model capabilities, or can we avoid this trade-off?

**Major Research Directions:**
- **RLHF (Reinforcement Learning from Human Feedback):** Training models using human preference data. Recent work has moved toward multi-dimensional feedback systems evaluating helpfulness, harmlessness, honesty, and task-specific criteria simultaneously, rather than simple binary judgments.
- **Constitutional AI (CAI):** Developed by Anthropic, CAI trains models to self-critique and revise outputs against a set of written principles, reducing reliance on direct human feedback. It is the earliest documented large-scale use of synthetic data for RLHF training (RLAIF). Recent research explores CAI effectiveness in smaller, open-weight models.
- **Scalable Oversight:** Methods ensuring AI systems remain aligned even when they surpass human expertise. Includes debate (AI systems argue for different answers), recursive reward modeling, and iterated distillation and amplification (IDA). Anthropic published a safety case sketch based on debate in 2025.
- **DPO (Direct Preference Optimization):** An alternative to RLHF that optimizes preferences directly without a separate reward model, with evidence it may reduce the alignment-capabilities trade-off.
- **Process-based feedback:** Rewarding correct reasoning steps rather than just outcomes, aiming for more robust alignment.

**Notable Papers and Results:**
- The "Alignment Trilemma" result: no single method can simultaneously guarantee strong optimization, perfect value capture, and robust generalization.
- Reward hacking and specification gaming remain persistent challenges, where models exploit loopholes in specified objectives.
- Anthropic's safety case sketch based on debate (2025) laid out a framework for arguing alignment holds in deployed systems.

**Connections to Other Subfields:**
- Depends on **interpretability** for verifying that alignment techniques actually change internal representations, not just surface behavior.
- Closely linked to **evaluation/benchmarking** for measuring alignment in practice.
- Scalable oversight connects to **AI governance** through questions about who defines the values and principles AI should follow.

---

## 2. Interpretability and Mechanistic Interpretability

**Description:** Interpretability research seeks to understand the internal computations of neural networks -- what features they represent, how they process information, and why they produce specific outputs. Mechanistic interpretability specifically aims for algorithmic-level understanding of model internals.

**Key Questions:**
- Can we identify meaningful features and circuits inside large neural networks?
- Does understanding model internals improve our ability to predict and control behavior?
- Can interpretability scale to frontier models with hundreds of billions of parameters?
- Are there fundamental limits on what we can understand about neural network computations?

**Major Research Directions:**
- **Sparse autoencoders (SAEs):** Training auxiliary models to decompose neural network activations into interpretable features. Anthropic and others have made significant progress, though coverage remains limited.
- **Circuit analysis:** Identifying specific computational pathways ("circuits") responsible for particular behaviors. Research is moving toward a "modular circuit vocabulary" of reusable, task-agnostic functional units.
- **Concept Ablation Fine-Tuning (CAFT):** Targeting specific internal representations for removal. Successfully reduced misaligned responses by 10x without degrading performance.
- **Global interpretability:** Moving beyond understanding individual features to mapping how entire model computations are organized.
- **Open-source tooling:** Google DeepMind released Gemma Scope 2 (2025), the largest open-source interpretability toolkit, covering all Gemma 3 model sizes.

**Notable Papers and Results:**
- MIT Technology Review named mechanistic interpretability a "Breakthrough Technology for 2026."
- A landmark 2025 paper by 29 researchers across 18 organizations established consensus open problems (commissioned by Schmidt Sciences).
- Anthropic used mechanistic interpretability in pre-deployment safety assessment of Claude Sonnet 4.5 -- the first integration of interpretability into production deployment decisions.
- Neel Nanda (September 2025) stated the most ambitious mechanistic interpretability vision is "probably dead," noting challenges in scaling to full model understanding.
- Core concepts like "feature" still lack rigorous definitions, and computational complexity results prove many interpretability queries are intractable.

**Connections to Other Subfields:**
- Critical for verifying **alignment** -- checking whether alignment training actually changes internal goals versus surface behavior.
- Competes and complements **behavioral evaluation** approaches for safety assurance.
- Supports **red teaming** by identifying internal vulnerabilities.
- Informs **existential risk** research by potentially enabling detection of deceptive or power-seeking internal goals.

---

## 3. Robustness and Reliability

**Description:** Robustness research ensures AI systems perform safely and predictably under diverse conditions, including adversarial attacks, distribution shifts, and unexpected inputs. Reliability focuses on consistent performance across deployment contexts.

**Key Questions:**
- How can we defend against adversarial attacks (jailbreaks, prompt injection, data poisoning)?
- Can models maintain safe behavior under distribution shift from training to deployment?
- What is the offense-defense balance in adversarial ML, and can defenders catch up?
- How do we ensure safety properties are maintained when models are fine-tuned or adapted?

**Major Research Directions:**
- **Adversarial robustness:** Defending against inputs crafted to cause model failures. Scaling model size and adversarial training both improve robustness, with adversarial training being orders of magnitude more compute-efficient. However, the offense-defense balance currently favors attackers.
- **Jailbreak defense:** Adaptive prompt injection attacks bypass existing defenses in over 50% of cases, while sophisticated jailbreak techniques achieve greater than 90% attack success rates. "Adversarial Reasoning at Jailbreaking Time" (2025) applies test-time compute to model jailbreaking.
- **Out-of-distribution (OOD) generalization:** Ensuring models maintain performance on data different from training distributions. Activation monitors face particular risks from distributional shifts.
- **Agent security:** As AI systems gain agentic capabilities, new attack surfaces emerge including protocol exploits and multi-step manipulation in LLM-powered workflows.
- **Safety under fine-tuning:** Ensuring safety properties survive when models are adapted by downstream users.

**Notable Papers and Results:**
- FAR.AI and others have demonstrated that current safety training can be circumvented with modest effort.
- IBM Research and others have developed frameworks for adversarial robustness testing in production AI systems.
- The gap between benchmark robustness and real-world robustness remains a persistent challenge.

**Connections to Other Subfields:**
- Direct input to **red teaming** methodologies and attack surface mapping.
- Informs **alignment** research -- if alignment can be easily broken by adversarial inputs, alignment guarantees are weakened.
- Relevant to **governance** through requirements for robustness testing before deployment.

---

## 4. AI Evaluation and Benchmarking

**Description:** AI evaluation develops methods, benchmarks, and frameworks for measuring AI capabilities, safety properties, and alignment. It provides the empirical foundation for making safety claims about deployed systems.

**Key Questions:**
- How do we measure dangerous capabilities before deployment?
- Can we detect whether models are strategically underperforming on evaluations?
- What benchmarks accurately predict real-world safety-relevant behavior?
- How do we evaluate capabilities that don't yet exist but might emerge?

**Major Research Directions:**
- **Capability evaluations (evals):** Testing for dangerous capabilities such as autonomous replication, deception, persuasion, and weapons-relevant knowledge. Multiple labs now run pre-deployment evaluations.
- **Evaluation-awareness detection:** A critical emerging concern -- models may detect when they are being evaluated and alter behavior accordingly. This was highlighted with Claude 3.7 Sonnet's deliberative alignment, raising questions about whether aligned behavior during testing reflects genuine alignment.
- **Benchmark development:** Two primary tool paradigms have emerged: benchmark-style tools (fixed threat models, e.g., NVIDIA's Garak) and evaluation harness-style tools (customizable pipelines, e.g., UK AISI's Inspect framework).
- **Standardization efforts:** Georgetown CSET, OWASP, and others are working to standardize red-teaming and evaluation methodologies across the industry.

**Notable Papers and Results:**
- The "evaluation gap" -- models performing well on benchmarks but differently in deployment -- has been identified as a fundamental challenge.
- UK AI Safety Institute's Inspect framework represents a move toward customizable, reproducible evaluation pipelines.
- DeepTeam (November 2025) and FuzzyAI provide open-source tools for probing LLM vulnerabilities before deployment.

**Connections to Other Subfields:**
- Foundational for **alignment** verification -- alignment claims require robust evaluation.
- Central tension with **interpretability** over which approach provides better safety assurance.
- Informs **governance** through providing metrics for regulatory compliance.
- Drives **red teaming** methodology and tooling.

---

## 5. Red Teaming

**Description:** Red teaming involves systematically probing AI systems for vulnerabilities, failure modes, and dangerous behaviors through adversarial testing. It draws from cybersecurity practices adapted for AI-specific risks.

**Key Questions:**
- What threat models are appropriate for different AI systems and deployment contexts?
- Can automated red teaming scale to match the pace of model development?
- How do we test for risks that we haven't thought of yet (unknown unknowns)?
- What is the right balance between public disclosure and responsible vulnerability reporting?

**Major Research Directions:**
- **Automated red teaming:** Using AI systems to generate attacks against other AI systems. Tools like DeepTeam and FuzzyAI automate jailbreaking and prompt injection testing.
- **Structured threat modeling:** Georgetown CSET has developed frameworks for systematically designing red-teaming exercises with explicit threat models.
- **Multi-modal red teaming:** Extending adversarial testing beyond text to images, audio, and multi-modal inputs.
- **Attack taxonomies:** Comprehensive frameworks covering prompt-based attacks, data manipulation, model exploitation, information extraction, and model degradation.
- **Red teaming the red teamers:** Meta-level research on the effectiveness and limitations of red-teaming approaches themselves.

**Notable Papers and Results:**
- CMU's SEI found that generative AI red-teaming can learn much from cybersecurity but faces unique challenges.
- Key challenges identified: inconsistent evaluation methodologies, limited threat modeling, gaps in mitigation strategies, and lack of standardized frameworks.
- A comprehensive 2025 review in the Journal of Information Processing and Management systematically analyzed red-teaming attacks and evaluation methods.

**Connections to Other Subfields:**
- Feeds directly into **robustness** research by identifying vulnerabilities to defend against.
- Overlaps with **evaluation/benchmarking** as a key component of pre-deployment safety testing.
- Informs **governance** requirements for third-party safety testing.
- Uses **interpretability** findings to target known internal vulnerabilities.

---

## 6. AI Governance and Regulation

**Description:** AI governance encompasses the policies, regulations, institutions, and norms that shape the development and deployment of AI systems. It includes both government regulation and industry self-governance.

**Key Questions:**
- Should AI regulation be mandatory or voluntary? Federal or state-level? Sector-specific or general?
- How do we regulate AI capabilities that are rapidly evolving and poorly understood?
- What international coordination is needed, and how do different regulatory philosophies interact?
- How do we balance innovation incentives against safety requirements?

**Major Research Directions:**
- **EU AI Act implementation:** Entered into force August 2024, with full applicability targeted for August 2026 (possibly extended to December 2027). Uses a tiered-risk classification system that has inspired similar proposals worldwide.
- **US federal framework:** The December 2025 Executive Order ("Ensuring a National Policy Framework for AI") emphasizes federal preemption of state regulation and a "minimally burdensome" approach to maintain US AI dominance.
- **US state-level regulation:** California, Colorado, and other states have enacted AI governance statutes imposing risk management, documentation, and oversight obligations, with enforcement beginning in late 2025 and 2026.
- **International coordination:** The International AI Safety Report (2025) represents a multi-country effort to establish shared understanding of AI risks and governance approaches.
- **Industry commitments:** Voluntary safety commitments from labs, responsible scaling policies, and pre-deployment testing frameworks.

**Notable Developments:**
- Tension between the EU's protective, comprehensive approach and the US's innovation-first, sector-specific approach.
- State-level regulations creating a patchwork that the federal government is attempting to preempt.
- The Future of Life Institute's AI Safety Index (2025) graded all major labs poorly, with Anthropic receiving the highest but still a "D" for existential safety.

**Connections to Other Subfields:**
- Relies on **evaluation/benchmarking** for defining compliance metrics and testing requirements.
- Shapes incentives for investment in **alignment**, **interpretability**, and **robustness** research.
- Informed by **existential risk** research for setting regulatory priorities.
- Overlaps with **AI ethics** on questions of fairness requirements and impact assessments.

---

## 7. AI Ethics (Fairness, Bias, Privacy)

**Description:** AI ethics addresses the moral dimensions of AI systems, including fairness across demographic groups, privacy of individuals whose data is used or affected, transparency of decision-making, accountability for harms, and environmental impact.

**Key Questions:**
- What constitutes algorithmic fairness, and whose definition should prevail?
- How do we mitigate bias without unacceptable trade-offs in accuracy or privacy?
- Who is accountable when AI systems cause harm?
- How should AI systems handle value conflicts across cultures and communities?

**Major Research Directions:**
- **Sociotechnical frameworks:** Recognizing that purely technical solutions are insufficient; effective bias mitigation requires integrating technical debiasing with stakeholder engagement, human oversight, regulatory compliance, and continuous evaluation.
- **Fairness definitions and trade-offs:** Experts continue to disagree on what constitutes algorithmic fairness, resulting in an expanding list of definitions that are highly technical and hard for legislators to evaluate. Trade-offs between bias mitigation, accuracy, and privacy remain active research areas.
- **Representational harms:** General-purpose AI systems frequently display biases regarding race, gender, culture, age, disability, and political opinion, leading to unequal resource allocation, stereotype reinforcement, and neglect of underrepresented groups.
- **Environmental impact:** Growing attention to the carbon footprint and energy consumption of training and deploying large AI systems.
- **Transparency and explainability:** Developing methods to make AI decision-making understandable to affected individuals and oversight bodies.

**Notable Papers and Results:**
- A 2025 survey on AI Ethics provided a comprehensive sociotechnical perspective, integrating philosophical, sociological, and technical dimensions.
- Research on algorithmic fairness in regulatory contexts found that technical complexity of fairness definitions creates fundamental barriers for effective legislation.

**Connections to Other Subfields:**
- Overlaps with **alignment** on value specification -- whose values should AI systems align with?
- Connects to **governance** through anti-discrimination requirements and impact assessment mandates.
- Relates to **interpretability** through demands for explainable AI in high-stakes decisions.
- Interfaces with **sociotechnical safety** on understanding how AI systems interact with social structures.

---

## 8. Existential Risk and Long-Term Safety

**Description:** This subfield focuses on risks from advanced AI that could cause civilizational-scale or permanent harm, including loss of human control over superintelligent systems, large-scale misuse of advanced AI capabilities, and accumulative risks that compound over time.

**Key Questions:**
- How likely is loss of control over advanced AI systems, and on what timelines?
- What mechanisms could lead from AI development to existential catastrophe?
- How do we build institutions and safeguards for AI systems that don't yet exist?
- Are current near-term risks precursors to existential risks, or qualitatively different?

**Major Research Directions:**
- **Loss of control scenarios:** Expert opinion varies widely -- some consider loss of control implausible in the near term, others see it as likely, and others as a modest-probability risk. There is broad consensus that current AI lacks capabilities for autonomous loss-of-control scenarios.
- **Decisive vs. accumulative x-risk:** Recent philosophical work distinguishes between sudden catastrophic failures ("decisive" risk) and gradual accumulation of social harms that compound into existential threats. This framework suggests rebalancing research toward understanding how social risks compound.
- **Weapons-relevant capabilities:** In 2025, several leading AI labs added safeguards after internal testing could not rule out that their models might assist novices in weapons development.
- **Deception and scheming:** Research on whether advanced AI systems could develop and execute deceptive strategies to pursue goals misaligned with human interests.
- **Societal resilience:** Building institutions and governance structures robust to the transformative impact of advanced AI.

**Notable Developments:**
- The Future of Life Institute's 2025 AI Safety Index found no leading company has adequate guardrails for catastrophic misuse or loss of control. Even the highest-scoring company (Anthropic) received a "D" for existential safety.
- A 2025 open letter signed by five Nobel laureates calls for prohibiting superintelligence development until safety consensus is reached.
- Research distinguishing "decisive" from "accumulative" AI existential risk suggests needed rebalancing of long-term safety research priorities.
- The International AI Safety Report (2025) found "no scientific consensus" on many key risk questions.

**Connections to Other Subfields:**
- Motivates and depends on **alignment** research for preventing misaligned superintelligence.
- Relies on **evaluation** for detecting dangerous capabilities before they become uncontrollable.
- Shapes **governance** priorities and urgency of regulatory action.
- Tensions with **AI ethics** community over resource allocation between near-term and long-term concerns.

---

## 9. AI Forecasting

**Description:** AI forecasting involves predicting the trajectory of AI capabilities, timelines to key milestones (such as AGI), and the societal impacts of AI progress. It provides the empirical basis for planning safety research and governance interventions.

**Key Questions:**
- When will AI systems reach human-level performance across a broad range of tasks?
- How reliable are current forecasting methods for predicting AI progress?
- Can AI systems themselves become good forecasters, and what are the implications?
- What resource constraints (compute, energy, data) will shape AI development trajectories?

**Major Research Directions:**
- **Expert surveys:** Surveys show shrinking AGI timelines over time. As of February 2026, prediction markets average 25% chance of AGI by 2029 and 50% by 2033, down from a median of 50 years away in 2020.
- **AI as forecaster:** Metaculus launched FutureEval (2026) to benchmark AI forecasting accuracy. Current projections suggest AI could surpass the Metaculus community by April 2026 and Pro Forecasters by mid-2027.
- **Compute scaling analysis:** Epoch AI projects that AI companies can continue scaling through 2030, primarily constrained by power availability and chip manufacturing capacity.
- **Capability benchmarking:** Tracking AI performance across standardized benchmarks to extrapolate future capability trajectories.
- **Scenario planning:** Developing structured frameworks for reasoning about different AI development pathways and their implications.

**Notable Results:**
- Dramatic timeline compression: expert median estimates have shifted from ~2060 to ~2033 over just a few years.
- Industry leaders give even shorter timelines (2026-2030), while the broader AI research community tends toward longer estimates (2040-2045).
- METR published a "simpler AI timelines model" (2026) predicting 99% AI R&D automation by approximately 2032.
- Despite short timeline rhetoric, GPT-5's August 2025 release was seen as underwhelming, fueling skepticism about imminent AGI claims.

**Connections to Other Subfields:**
- Directly informs urgency and resource allocation for **alignment** and **existential risk** research.
- Shapes **governance** timelines for when regulations need to be in place.
- Connected to **evaluation** through capability benchmarks used for extrapolation.

---

## 10. Sociotechnical Safety

**Description:** Sociotechnical safety examines AI systems as components of broader social, institutional, and technical systems. Rather than treating safety as a purely technical problem, it analyzes how AI interacts with human organizations, incentive structures, social dynamics, and existing inequalities.

**Key Questions:**
- How do organizational incentives and structures affect AI safety outcomes?
- What are the systemic risks from widespread AI adoption across interconnected systems?
- How do human-AI interaction patterns affect safety in practice?
- What role do labor markets, economic pressures, and power dynamics play in AI risk?

**Major Research Directions:**
- **Sociotechnical frameworks for bias:** Recognizing that fairness and bias cannot be solved purely technically; effective approaches require combining technical expertise, social science insights, and diverse stakeholder perspectives.
- **Organizational safety culture:** Studying how AI lab culture, competitive pressures, and incentive structures affect safety decisions. The "race to the bottom" dynamic -- where competitive pressure leads labs to cut safety corners -- is a major concern.
- **Systemic risk analysis:** Understanding how AI deployment across interconnected systems (financial markets, infrastructure, information ecosystems) creates correlated failure modes.
- **Human-AI teaming:** Studying how humans interact with AI systems in practice, including automation complacency, over-reliance, and the erosion of human skills.
- **Accumulative risk pathways:** Research on how individually minor AI harms (disinformation, labor displacement, surveillance) can compound into society-level threats.

**Notable Developments:**
- Growing recognition that the "legible" technical problems receiving the most attention may be less important than "illegible" sociotechnical problems that are harder to formalize and study.
- Research showing that AI companies' safety rhetoric has not translated into concrete safety plans or internal monitoring interventions.
- Increasing attention to how deployment context (not just model properties) determines real-world safety outcomes.

**Connections to Other Subfields:**
- Provides context for **alignment** -- what "aligned with human values" means depends on social and political structures.
- Informs **governance** by highlighting how regulatory design must account for organizational and market dynamics.
- Connects to **AI ethics** through shared concern for fairness, accountability, and social impact.
- Challenges **existential risk** framing by highlighting how accumulative social harms may constitute existential threats.

---

## Cross-Cutting Themes

Several themes cut across multiple subfields:

1. **The evaluation-awareness problem:** Models that detect and strategically respond to evaluations undermine alignment verification, behavioral evaluation, and red teaming simultaneously.

2. **Scaling challenges:** Methods that work on small models often fail at scale, affecting interpretability, evaluation, and alignment research.

3. **The offense-defense imbalance:** In adversarial settings, attackers currently have significant advantages over defenders, relevant to robustness, red teaming, and governance.

4. **The legible vs. illegible problem distinction:** The AI safety community may be biased toward working on problems that are easy to formalize (legible) at the expense of harder-to-formalize but potentially more important problems (illegible).

5. **Rhetoric-practice gap:** Multiple assessments find that AI companies' safety commitments have not translated into adequate concrete safety measures.

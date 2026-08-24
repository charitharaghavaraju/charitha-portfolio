export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "AI Engineer Intern",
    company: "Spogen.ai",
    location: "Tampere, Finland",
    start: "Nov 2025",
    end: "Dec 2025",
    tags: ["Whisper", "GPT-4o", "vLLM", "Azure", "Python"],
    bullets: [
      "Benchmarked Whisper Large-v3, Voxtral, Azure speech-to-text (STT), and GPT-4o on domain-specific Finnish and English audio, applied AI-coustics enhancement and voice activity detection (VAD) pre-processing, then built an LLM ensemble refinement layer with custom prompts, cutting Finnish word error rate (WER) from 35.6% (Azure STT baseline) to 22.0%.",
      "Designed a domain-adapted GPT-4o transcription pipeline with terminology-tuned prompts, improving the perfect transcription rate from 44% to 58%, and achieving 4.3% WER with 86.7% perfect transcriptions on English audio.",
      "Enabled a cost-efficient, on-demand LLM server for the team by deploying a production vLLM inference server (NVIDIA T4, OpenAI-compatible API) on Azure Container Apps with dynamic Hugging Face model loading and fully automated CI/CD via GitHub Actions with scheduled container shutdowns.",
      "Evaluated ElevenLabs, Google text-to-speech (TTS), Chatterbox, and Coqui TTS against audio quality, inference speed, multilingual support, and deployment complexity, delivering a comparative report adopted by the engineering team.",
    ],
  },
  {
    title: "Research Assistant — Audio Research Group",
    company: "Tampere University",
    location: "Tampere, Finland",
    start: "Feb 2022",
    end: "Dec 2023",
    tags: ["PyTorch", "AAC", "SELD", "LoRA", "BART"],
    bullets: [
      "Researched automated audio captioning (AAC) and sound event localisation and detection (SELD) within the EU MARVEL project, spanning model development, synthetic data generation, and a peer-reviewed IEEE publication.",
      "In generic automated audio captioning (AAC), improved the SPIDEr score from 0.291 to 0.301 (+3.4%) by applying layer-wise fine-tuning on a patchout fast spectrogram transformer (PaSST) + bidirectional and auto-regressive transformer (BART) and training domain-specific byte-pair encoding (BPE) tokenisers.",
      "Improved domain-specific captioning accuracy through dataset mixing, parameter-efficient fine-tuning (PEFT / LoRA), and systematically comparing audio encoder and caption-decoder configurations to select the best-performing architecture, increasing SPIDEr score from 0.315 to 0.323 on the animal audio dataset (+2.5%) and 0.298 to 0.308 on the vehicle audio dataset (+3.4%).",
      "Built the SELD synthetic spatial audio dataset using pyroomacoustics and FSD50K, automating onset detection, randomised SNR mixing, and 3D spatial labelling, then trained a SELDnet convolutional recurrent neural network (CRNN) + multi-head self attention (MHSA) model (Multi-ACCDOA output) on it, contributing to the EUSIPCO 2024 (IEEE) publication.",
    ],
  },
  {
    title: "Backend Software Developer",
    company: "Virtusa · British Telecom",
    location: "Bangalore, India",
    start: "Jul 2019",
    end: "Jul 2021",
    tags: ["Java", "Spring Boot", "Angular", "MongoDB"],
    bullets: [
      "Built OneGWET (Getafix UI), a BT-internal tool using Java, Spring Boot, and Angular 8 that converted Getafix framework XMLs into interactive flowcharts, letting engineers update, delete, and modify business logic through a UI without needing to learn Getafix syntax or touch raw XML. Adopted as the standard tool across BT OpenReach teams.",
      "Implemented multiple REST microservices (flowchart fetch, user profiles, story/release, hotfix, testing, auto Git commit, and rollback) using Spring Boot and MongoDB, secured with OAuth 2.0 authentication to control role-based access across the platform.",
      "Integrated an XML diff checker into the Angular frontend, giving engineers a clear side-by-side comparison of XML changes before committing to GitLab, reducing review errors and speeding up validation.",
      "Customised the open-source Hygieia DevOps dashboard to surface live performance and security metrics for BT OpenReach projects, giving the client a single consolidated view of project health.",
    ],
  },
];

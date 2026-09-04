export type SkillGroup = {
  name: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    name: "Programming Languages",
    items: ["Python", "C++", "Java", "JavaScript / TypeScript", "SQL", "Bash"],
  },
  {
    name: "AI / ML / NLP",
    items: [
      "PyTorch",
      "TensorFlow",
      "Transformers (LLaMA, PEGASUS)",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "LlamaIndex",
      "Hugging Face",
      "Fine-tuning (LoRA / PEFT)",
      "NLP",
      "Computer Vision",
      "Audio & Speech ML",
      "Model Evaluation & Testing",
      "vLLM",
      "Ollama",
    ],
  },
  {
    name: "Cloud & MLOps",
    items: [
      "AWS (EC2, ECR, S3)",
      "Azure (Container Apps, Durable Functions, Event Grid, Registry)",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "MLOps",
      "CI/CD",
    ],
  },
  {
    name: "Frameworks",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "FastAPI",
      "Streamlit",
      "React",
      "Node.js",
      "Express.js",
      "REST",
    ],
  },
  {
    name: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Vector Databases (Pinecone / ChromaDB / FAISS)",
    ],
  },
  {
    name: "AI Dev Tools",
    items: ["Claude Code", "GitHub Copilot", "Cursor"],
  },
];

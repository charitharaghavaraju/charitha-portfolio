export type ProjectItem = {
  title: string;
  summary: string;
  tags: string[];
  repo: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Document Question-Answering System (RAG)",
    summary:
      "Built a RAG pipeline with dense vector retrieval (FAISS) and LLM reranking for context-aware Q&A. Optimised chunking strategy reduced irrelevant context retrieval and improved answer accuracy on long-form technical documents.",
    tags: ["LlamaIndex", "LangChain", "FAISS"],
    repo: "https://github.com/charitharaghavaraju/rag_llama_index",
  },
  {
    title: "Abstractive Text Summarisation — AWS Production Deployment",
    summary:
      "Fine-tuned Google PEGASUS for domain-specific summarisation, containerised with Docker, pushed to Amazon ECR, and served on EC2 — a full MLOps cycle from training to scalable cloud inference.",
    tags: ["PEGASUS", "Docker", "AWS EC2"],
    repo: "https://github.com/charitharaghavaraju/TextSummarizer",
  },
  {
    title: "MRI-Based Autism Spectrum Disorder Detection",
    summary:
      "U-Net segmentation pipeline on the ABIDE neuroimaging dataset for automated ASD detection, using custom loss functions and data augmentation to handle imbalanced medical imaging data.",
    tags: ["PyTorch", "U-Net", "ABIDE"],
    repo: "https://github.com/charitharaghavaraju/ABIDE_segmentation_UNet",
  },
];

export type ProjectItem = {
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Business Central AI Search",
    summary:
      "A proof of concept that syncs Microsoft Dynamics 365 Business Central data and documents, generates embeddings locally, and serves semantic search with open-source tools. The pipeline covers ingest, processing, storage, and search: a backend handles incremental sync plus a search API, and a Streamlit UI queries it. The local Docker stack rebuilds both services from source — API on port 8000, UI on 8501 — so the full path from ERP records to ranked search can run on a laptop.",
    tags: [
      "Dynamics 365",
      "Semantic Search",
      "Embeddings",
      "FastAPI",
      "Streamlit",
      "Docker",
    ],
  },
  {
    title: "Audio-to-Insight Assistant",
    summary:
      "An offline meeting and lecture assistant that turns speech into searchable knowledge. Faster-Whisper transcribes .mp3, .wav, and .m4a files; the transcript is chunked, embedded with Sentence Transformers, and stored in ChromaDB so questions retrieve the right moments. LangChain plus a local Ollama model (LLaMA 3 / Mistral) answers from that context, and a Streamlit UI lets you upload audio and query it with no cloud API cost.",
    tags: ["Faster-Whisper", "ChromaDB", "Ollama", "LangChain", "Streamlit"],
    repo: "https://github.com/charitharaghavaraju/audio-to-insight",
  },
  {
    title: "Research Document Q&A with LlamaIndex",
    summary:
      "A RAG system for academic PDFs: ingest documents, split them into sentence-level chunks, index embeddings, and answer with a knowledge-assistant prompt. Four notebooks compare Gemini and Ollama backends, measure faithfulness and relevancy across chunk sizes, and rank embedding models on generated question–context pairs so retrieval quality is chosen from evidence rather than defaults.",
    tags: ["LlamaIndex", "Hugging Face", "Gemini", "Ollama", "Evaluation"],
    repo: "https://github.com/charitharaghavaraju/rag_llama_index",
  },
  {
    title: "Abstractive Text Summariser on AWS",
    summary:
      "An end-to-end summarisation service built around a fine-tuned Google PEGASUS model. Training and inference are modular (config, components, pipeline), the app is containerised with Docker, images are stored in Amazon ECR, and GitHub Actions deploys to a self-hosted EC2 runner — a full path from research notebook to cloud inference.",
    tags: ["PEGASUS", "Docker", "AWS ECR", "EC2", "GitHub Actions"],
    repo: "https://github.com/charitharaghavaraju/TextSummarizer",
  },
  {
    title: "Multi-Agent AI Apps",
    summary:
      "Three Phidata agents for different modalities. A Groq LLaMA 3.3 team combines DuckDuckGo search with Yahoo Finance tools for analyst recommendations and news. A PDF assistant loads documents into Postgres + pgvector with Sentence Transformer embeddings and keeps chat history. A Streamlit video summariser uses Gemini 2.0 Flash to analyse uploaded video and answer questions with optional web search.",
    tags: ["Phidata", "Groq", "pgvector", "Gemini", "Streamlit"],
    repo: "https://github.com/charitharaghavaraju/Agentic_AI_app",
  },
  {
    title: "U-Net Neuroimaging Segmentation",
    summary:
      "A PyTorch U-Net (encoder–decoder with skip connections, batch norm, and 1×1 output convolution) for biomedical image segmentation, trained with a configurable pipeline on the ABIDE-related imaging setup. Includes dataset loading, training, and a separate inference script so a saved checkpoint can be run on new scans.",
    tags: ["PyTorch", "U-Net", "ABIDE", "Medical Imaging"],
    repo: "https://github.com/charitharaghavaraju/ABIDE_segmentation_UNet",
  },
];

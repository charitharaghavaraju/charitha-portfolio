export type PublicationItem = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi: string;
  pdf?: string;
};

export const publications: PublicationItem[] = [
  {
    title: "UNS Exterior Spatial Sound Events Dataset for Urban Monitoring",
    authors:
      "S. Suzic, I. Martín-Morató, N. Simic, C. Raghavaraju, T. Heittola, V. Stanojev, D. Bajovic",
    venue: "EUSIPCO 2024 (IEEE), Lyon, France",
    year: "2024",
    doi: "https://doi.org/10.23919/eusipco63174.2024.10715448",
    pdf: "https://eurasip.org/Proceedings/Eusipco/Eusipco2024/pdfs/0000176.pdf",
  },
  {
    title:
      "A data fusion based data aggregation and sensing technique for fault detection in wireless sensor networks",
    authors: "S. Gavel, C. Raghavaraju, P. Biswas, A. S. Raghuvanshi",
    venue: "Computing (Springer), vol. 103(11), pp. 2597–2618",
    year: "2021",
    doi: "https://doi.org/10.1007/s00607-021-01011-y",
  },
  {
    title:
      "Fault Detection using Hybrid of KF-ELM for Wireless Sensor Networks",
    authors: "P. Biswas, C. Raghavaraju, S. Gavel, A. S. Raghuvanshi",
    venue:
      "3rd Intl. Conference on Trends in Electronics and Informatics (ICOEI), IEEE",
    year: "2019",
    doi: "https://doi.org/10.1109/icoei.2019.8862687",
  },
];

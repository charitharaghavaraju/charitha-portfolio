export type EducationItem = {
  degree: string;
  field: string;
  school: string;
  location: string;
  start: string;
  end: string;
  gpa: string;
  thesis: string;
};

export const education: EducationItem[] = [
  {
    degree: "M.Sc. Tech",
    field: "Signal Processing and Machine Learning",
    school: "Tampere University",
    location: "Tampere, Finland",
    start: "2021",
    end: "2024",
    gpa: "4.19 / 5.00",
    thesis:
      "Enhancing Domain-Specific Automated Audio Captioning: Adaptation Techniques and Transfer Learning",
  },
  {
    degree: "B.Tech",
    field: "Electronics and Telecommunications Engineering",
    school: "National Institute of Technology",
    location: "Raipur, India",
    start: "2015",
    end: "2019",
    gpa: "8.74 / 10.00",
    thesis:
      "Fault Detection using a Hybrid Grey Model, KELM, and Kalman Filter for WSN",
  },
];

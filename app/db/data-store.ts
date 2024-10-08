export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  slug: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Company A",
    location: "Remote",
    description: "Develop and maintain software applications.",
    slug: "software-engineer",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Tech Company B",
    location: "New York, NY",
    description: "Lead product development and strategy.",
    slug: "product-manager",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Tech Company C",
    location: "San Francisco, CA",
    description: "Analyze data to support business decisions.",
    slug: "data-analyst",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Tech Company D",
    location: "Austin, TX",
    description: "Design user-friendly interfaces and experiences.",
    slug: "ui-ux-designer",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Tech Company E",
    location: "Seattle, WA",
    description: "Automate deployment and manage infrastructure.",
    slug: "devops-engineer",
  },
  // Add more job listings as needed
];

export async function getJobs() {
  // Simulating a database call
  return new Promise<Job[]>((resolve) => {
    setTimeout(() => {
      resolve(jobs);
    }, 1000);
  });
}

'use client';  // This line tells Next.js that this is a Client Component

import { useEffect, useState } from 'react';

export default function JobDetail({ params }) {
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchJob() {
      const res = await fetch(`/api/jobs/${params.slug}`);
      const data = await res.json();
      setJob(data);
    }
    
    fetchJob();
  }, [params.slug]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
}

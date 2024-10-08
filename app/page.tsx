import JobCard from './components/JobCard';
import { getJobs } from './db/data-store';
import styles from './styles/Home.module.css';

export default async function Home() {
  const jobs = await getJobs();
  
  return (
    <div className={styles.container}>
      <h1>Job Listings</h1>
      <div className={styles.jobList}>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}



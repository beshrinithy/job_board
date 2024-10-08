import Link from 'next/link';
import styles from '../styles/JobCard.module.css';

interface JobCardProps {
  job: {
    title: string;
    company: string;
    location: string;
    slug: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <div className={styles.buttonContainer}>
        <Link href="https://my-agency-website-mu.vercel.app/" legacyBehavior>
          <a>
            <button className={styles.button}>View Details</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;

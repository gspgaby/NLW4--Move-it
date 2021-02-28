import { useChallenges } from '../hooks/useChallenges';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/61751324?s=460&u=243f3c56f2ee7081b88e794671a15dc6fd622697&v=4" alt="Gabriella dos Santos Pereira"/>
      <div>
        <strong>Gabriella dos Santos Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
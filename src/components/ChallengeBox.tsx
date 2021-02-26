import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasActiveChallege = true;

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallege ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>Novo desafio</strong>
            <p>Levante e beba agua carai!!</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            >Falhei</button>

            <button
              type="button"
              className={styles.challengeSucceededButton}
            >Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Inicie um ciclo para receber desafios</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios
        </p>
          </div>
      )}
    </div>
  );
}
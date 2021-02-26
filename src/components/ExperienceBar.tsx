import styles from '../styles/components/ExperienceBar.module.css'


export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className={styles.currrentExperience} style={{ left: '50%' }}> 300px</span>
            </div>
            <span>600px</span>
        </header>
    )
}
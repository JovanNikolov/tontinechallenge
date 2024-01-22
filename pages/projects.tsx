import styles from './projects.module.scss';

export default function Projects(){
    return(        
    <div className={styles.projectsPage}>
        <h1>My projects page</h1>
        <img src="/in-progress.svg" alt="In progress"/>
    </div>
    ) 
}


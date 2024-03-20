import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/48637793?v=4" alt="" className={styles.avatar}/>
                    <div className={styles.authorInfo}>
                        <strong>Denis Cardoso</strong>
                        <span>Mechanical Designer</span>
                    </div>
                </div>

                <time title='19 de março às 22:14' dateTime='2024-03-19 22:14'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala pessoal 👋 </p>
                <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 </p>
                <p>Acesse e deixe seu feedback 👉 <a href="">devonlane.design</a></p>
                <p><a href="">#uiux #userexperience</a></p>
            </div>
        </article>
    )
}

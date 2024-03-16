import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
        
            <div className={styles.profile}>
                <strong>Denis Cardoso</strong>
                <span>Mechanical designer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
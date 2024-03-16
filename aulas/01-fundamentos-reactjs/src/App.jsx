import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
          author="Denis Cardoso"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias suscipit neque architecto, voluptatibus, id quam laboriosam ullam velit omnis sint quos nesciunt commodi porro! Consequatur excepturi dicta impedit adipisci doloremque!"
        />
        <Post
          author="Gisele Lopes"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsam pariatur quo ipsa, eius nobis laudantium suscipit provident repellendus similique totam officia magni sit recusandae architecto. Pariatur natus distinctio culpa."
        />
        </main>
      </div>
    </div>
  )
}

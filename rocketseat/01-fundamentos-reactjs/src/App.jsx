import {Post} from "./Post.jsx";
import './global.css'
import styles from './App.module.css'
import {Header} from "./components/Header.jsx";
import {Sidebar} from "./components/Sidebar.jsx";

export function App() {
    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author="Lucas Cavalcante"
                        content="Lorem impifdsafhi eordksf oieqwe sdasd"
                    />
                    <Post
                        author="Mariana Leonel"
                        content="Um novo post muito legal."
                    /></main>
            </div>
        </div>
    )
}


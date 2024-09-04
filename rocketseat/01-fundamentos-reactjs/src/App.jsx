import {Post} from "./Post.jsx";
import './global.css'
import {Header} from "./components/Header.jsx";

export function App() {
    return (
        <div>
            <Header/>
            <Post
                author="Lucas Cavalcante"
                content="Lorem impifdsafhi eordksf oieqwe sdasd"
            />
            <Post
                author="Mariana Leonel"
                content="Um novo post muito legal."
            />
        </div>
    )
}


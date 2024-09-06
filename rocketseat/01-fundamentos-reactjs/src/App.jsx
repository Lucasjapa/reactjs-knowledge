import {Header} from "./components/Header.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {Post} from "./components/Post.jsx";

import styles from './App.module.css'
import './global.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Lucasjapa.png",
      name: "Lucas Cavalcante",
      role: "Software Engineer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀',
      },
      {type: 'link', content: 'jane.design/doctorcare',}
    ],
    publishedAt: new Date('2024-05-03 19:04:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Lucasjapa.png",
      name: "Cópia do Lucas Cavalcante",
      role: "Software Engineer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀',
      },
      {type: 'link', content: 'jane.design/doctorcare',}
    ],
    publishedAt: new Date('2024-05-19 13:04:00')
  },
];

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";

export function Comment({content, onDeleteComment}) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }


  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Lucasjapa.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Cavalcante</strong>
              <time title="05 de Setembro as 23:15" dateTime="2024-09-05 23:15:12">Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24}/>
            </button>
          </header>


          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>


    </div>
  )
}
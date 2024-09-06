import styles from './Post.module.css'
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";
import {format, formatDistanceToNow} from "date-fns";
import {ptBR} from "date-fns/locale";

export function Post({author, publishedAt, content}) {
  // Usando o INTL
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit'
  // }).format(publishedAt)

  // Usando o date-fns
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(item =>{
          if(item.type === 'paragraph') {
            return <p>{item.content}</p>
          } else {
            return <p><a href="#">{item.content}</a></p>
          }
        })}
        <p>
          <a href="">#novoprojeto </a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}
import React from "react"
import useFetch from "../../hooks/useFetch"
import { RANDOM_JOKES_API, RANDOM_USER_API } from "../../utils/const"
import styles from "./jokes.module.css"
import USER_IMAGE from "../../assets/jokes/jokes-avatar.png"
import BACK from "../../assets/jokes/back.svg"
import LIKE from "../../assets/jokes/like.svg"
import RETWEET from "../../assets/jokes/retweet.svg"
import SAVED from "../../assets/jokes/saved.svg"
import COMMENT from "../../assets/jokes/comment.svg"
import BLUE_TICK from "../../assets/jokes/blue-tick.svg"
import CHAI_LOGO from "../../assets/chai.png"


export default function RandomJokes() {
    const { data, loading, error, refetch } = useFetch(RANDOM_JOKES_API)

    return (
        <>
        <div className={styles.body} />
            <div className={`${styles.overlay}`} />
            <div className={`${styles.container}`}>
                <div className={`${styles.card}`}>
                    <div className={`${styles.header}`}>
                        <img className={`${styles.pointer}`} height={16} width={16} src={BACK} />
                        <div>Post</div>
                    </div>
                    <div className={`${styles.middlecontainer}`}>
                        <div className={`${styles.usercontainer}`}>
                            <img className={`${styles.avatar}`} src={USER_IMAGE} />
                            <div className={`${styles.namecontainer}`}>
                                <div className={`${styles.name}`}>Elon Musk <img src={BLUE_TICK} /></div>
                                <div className={`${styles.username}`}>@elonmusk</div>
                            </div>

                        </div>
                        <div>
                            <span className={`${styles.activity}`}>...</span>
                        </div>
                    </div>
                    <div className={`${styles.content}`}>
                        {data?.content}
                    </div>
                    <div className={`${styles.details}`}>
                        <span>11:18PM</span> <span> &#183; </span>
                        <span>Jul 30, 2024</span>  <span> &#183; </span>
                        <span><span className={`${styles.highlight}`}> 20.5M </span> Views</span>
                    </div>
                    <div className={`${styles.actioncontainer}`}>
                        <div><img src={COMMENT} />4.6K</div>
                        <div><img src={RETWEET} />4.6K</div>
                        <div><img src={LIKE} />4.6K</div>
                        <div><img src={SAVED} />4.6K</div>
                    </div>
                    <footer>© chai aur code</footer>
                <a href="https://chaicode.com/" referrerPolicy="no-referrer"><img className={`${styles.chailogo}`} src={CHAI_LOGO} /></a>

                </div>

            </div>
           
            
        </>
    )
}
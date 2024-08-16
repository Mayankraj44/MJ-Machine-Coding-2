import useFetch from "../../hooks/useFetch"
import { RANDOM_USER_API } from "../../utils/const"
import BACK from "../../assets/user/back.png"
import CHAI_LOGO from "../../assets/chai.png"
import LocationIcon from "../../assets/user/location.svg"
import Call from "../../assets/user/phone.svg"
import REFRESH from "../../assets/refresh.png"
import styles from  "./user.module.css"

export default function RandomUser() {
    const { data, loading, error, refetch } = useFetch(RANDOM_USER_API)

    const formatDate=(date)=>{
        if(!date) return 
        return new Intl.DateTimeFormat('en-GB', {
            year: "numeric",
              month: "long",
              day: "numeric",
              }).format(new Date(date))
            
    }
    return (
        <>
        <div className={styles.body} />
            <div className={`${styles.overlay}`} />
           <div className={`${styles.parentContainer}`}>
           <div className={`${styles.container}`}>
                <div className={`${styles.card}`}>
                    <div className={`${styles.header}`}>
                        <img className={`pointer`} height={16} width={16} src={BACK} />
                        <span height={24} width={24} className={`${styles.headeText}`}>Profile Overview</span>
                        <img className={`pointer`} onClick={() => refetch()} src={REFRESH} />
                    </div>
                    <div className={`${styles.imgParent}`}>
                        <div className={`${styles.imgContainer}`}>
                            <img className={`${styles.avatar}`} src={data?.picture?.large} />
                            <span >{data?.name?.title}</span>
                        </div>
                    </div>
                    <p className={`${styles.name}`}>{`${data?.name.first} ${data?.name.last}`}</p>
                    <p className={`${styles.username}`}>{data?.login?.username}</p>
                    <div className={`${styles.actionContainer}`}>
                        <a href={`https://www.google.com/maps/@${data?.location?.coordinates?.latitude},${data?.location?.coordinates?.longitude}`} target="_blank"><div className={`${styles.iconContainer}`}><img src={LocationIcon} /></div>
                            <span className={`${styles.actionText}`}>Location</span></a>
                        <a href={`tel:${data?.phone}`}>
                            <div className={`${styles.iconContainer}`}><img src={Call} /></div>
                            <span className={`${styles.actionText}`}>Call me</span>
                        </a>
                    </div>
                    <div className={`${styles.details}`}>
                        <div>
                            <p className={`${styles.heading}`}>City</p>
                            <p className={`${styles.value}`}>{data?.location?.city}</p>
                        </div>
                        <div>
                            <p className={`${styles.heading}`}>Nationality</p>
                            <p className={`${styles.value}`}>{data?.location?.country}</p>
                        </div>
                        <div>
                            <p className={`${styles.heading}`}>Date of Birth</p>
                            <p className={`${styles.value}`}>{formatDate(data?.dob.date)}</p>
                        </div>
                        <div>
                            <p className={`${styles.heading}`}>Phone No.</p>
                            <p className={`${styles.value}`}>{data?.phone}</p>
                        </div>
                        <div>
                            <p className={`${styles.heading}`}>Timezone</p>
                            <p className={`${styles.value}`}>{data?.location?.timezone?.offset} ({data?.location?.timezone?.description})</p>
                        </div>
                        <div>
                            <p className={`${styles.heading}`}>Registerd Since</p>
                            <p className={`${styles.value}`}>{formatDate(data?.registered?.date)}</p>
                        </div>

                    </div>
                    <footer>© chai aur code</footer>
                    <a href="https://chaicode.com/" referrerPolicy="no-referrer"><img className={`${styles.chaiLogo}`} src={CHAI_LOGO} /></a>
                </div>
            </div></div></>
    )
}
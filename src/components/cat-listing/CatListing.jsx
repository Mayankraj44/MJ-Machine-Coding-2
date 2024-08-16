import React, { useEffect, useState } from "react"
import CHAI_LOGO from "../../assets/chai.png"
import useFetch from "../../hooks/useFetch"
import useIsVisible from "../../hooks/useIsVisible"
import styles from "./cat.module.css"
import ShimmerCat from "./ShimmerCat"


export default function CatListing() {
    const [currentPage,setCurrentPage]=useState(1)
    const { data, loading, error, refetch } = useFetch(`https://api.freeapi.app/api/v1/public/cats?page=${currentPage}&limit=4`)
    const [elementRef,isVisible]=useIsVisible()
    const [catData,setCatData]=useState([])
    

    useEffect(()=>{
        if(!loading && isVisible){
            setCurrentPage(p=>p+1)
        }
    },[isVisible])


    useEffect(()=>{
        if(data?.data){
            setCatData(prev=>[...prev,...data?.data])
        }
    },[data])

    useEffect(()=>{
        refetch()
    },[currentPage])

    console.log(catData)
    
    return (
        <>
        <div className={styles.body} />

            <div className={`${styles.overlay}`} />
            <div className={`${styles.container}`}>
                <a href="https://chaicode.com/" referrerPolicy="no-referrer"><img className={`${styles.chailogo}`} src={CHAI_LOGO} /></a>
                <div className={`${styles.header}`}>Cat around us</div>
                <div className={`${styles.scrollcontainer}`}>
                    {catData?.map((cat,ind) => <div key={ind} className={`${styles.card}`}>
                        <img className={`${styles.image}`} src={cat?.image} />
                        <div className={`${styles.content}`}>
                            <div className={`${styles.name}`}>{cat?.name}</div>
                            <div className={`${styles.description}`}>
                                {cat?.description}
                            </div>
                            <div className={`${styles.detail}`}>
                                <span className={`${styles.heading } italic`}>Origin</span>
                                <span className={`${styles.value}`}>Russia</span>
                            </div>
                            <div className={`${styles.detail2}`}>
                                <div className={`${styles.heading } italic`}>Temperament</div>
                                <div className={`${styles.pillcontainer}`}>
                                    {cat?.temperament?.split(",")?.map((item,ind) => (
                                        <div className={`${styles.pill}`} key={ind}>{item}</div>
                                    ))}
                                </div>
                            </div>
                            <div className={`${styles.detail}`}>
                                <span className={`${styles.heading}  italic`}>Life Span</span>
                                <span className={`${styles.value}`}>15-20 Years</span>
                            </div>
                            <div className={`${styles.link}`}>
                                <a href={cat?.wikipedia_url} >Learn More</a>

                            </div>
                        </div>



                    </div>)}
                 
                 
                    <div ref={elementRef} className={styles.endoflist}></div>
                </div>
               
                
            </div>


        </>
    )
}
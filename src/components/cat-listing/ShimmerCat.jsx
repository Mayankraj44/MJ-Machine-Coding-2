export default function ShimmerCat() {
    return (
        <div className="scard">
            <img className="simg" />
            <div className="scontent">
                <div className="sname"></div>
                <div className="sdescription"></div>
                <div className="sdetail">
                    <span className="sheading"></span>
                    <span className="svalue"></span>
                </div>
                <div className="sdetail-2">
                    <div className="spill-container">
                        {[1, 2, 3].map((item, ind) => (
                            <div className="spill" key={ind}></div>
                        ))}
                    </div>
                </div>
                <div className="sdetail">
                    <span className="sheading"> </span>
                    <span className="svalue"></span>
                </div>
                <div className="slink">
                    <a href="https://www.wikipedia.org/" >Learn More</a>

                </div>
            </div>



        </div>
    )
}
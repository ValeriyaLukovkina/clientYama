import cl from "../../styles/Loader.module.css"
import mops from "../../YamaNeon.png"


export function MenuLoader() {
    return (
            <div className="fixed flex items-center content-center justify-center">
                <div className={cl.menuLoader}>
                    <img src={mops}/>
                </div>
            </div>
    )
}
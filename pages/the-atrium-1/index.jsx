import { useEffect, useState } from "react";

const { TheAtriumSectionsSixAndSeven } = require("@/components/TheAtrium/TheAtrium")



const TheAtriumOne = () => {
    const [fatherWidth, setFatherWidth] = useState(320);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setFatherWidth(window.innerWidth);
        })

        return () => {
            window.removeEventListener('resize', () => {
                setFatherWidth(window.innerWidth);
            })
        }
    })

    return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: 'orange', display: 'flex' , alignItems: 'flex-start'}}>
            <TheAtriumSectionsSixAndSeven fatherWidth={fatherWidth} />
        </div>
    );
}

export default TheAtriumOne;
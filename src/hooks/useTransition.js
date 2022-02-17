import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const useTransition = () => {

    const controls = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return { ref, controls }
}

export default useTransition;
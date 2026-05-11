import {getLenis} from "@/hooks/useLenis";


const scrollTo = (id: string) => {
    const target = document.getElementById(id)
    if (target) getLenis()?.scrollTo(target, {duration: 3.0 })
}

export default scrollTo;
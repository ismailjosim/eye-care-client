import { useEffect } from 'react'

const useTitle = title => {
    useEffect(() => {
        document.title = `${ title } - EyeCare Best eye care Service`;
    }, [title])

}
export default useTitle;

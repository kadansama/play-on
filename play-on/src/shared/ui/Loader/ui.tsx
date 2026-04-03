import { CircularProgress } from "@mui/material"

interface ILoader {
    loading: boolean,
    children: React.ReactNode
    size? : number
}

export const Loader = ({ loading, children, size=60 }: ILoader) => {
    return (
        <>
            {loading ? <CircularProgress style={{height: size, width: size}}/> : children}
        </>
    )
}
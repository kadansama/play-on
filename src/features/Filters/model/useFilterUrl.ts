import { Filtered } from "entities/filmCollection/types"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export const useFilterUrl = (filters: Filtered, setFilters: (f: Filtered)=> void)=>{
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(()=>{
        const params = new URLSearchParams()
        if (filters.yearFrom) params.set("yf", String(filters.yearFrom))
        if (filters.yearTo) params.set("yt", String(filters.yearTo))
        if (filters.genres.length) params.set("g", filters.genres.join(","))
        if (filters.countries.length) params.set("c", filters.countries.join(","))
        setSearchParams(params)
    }, [filters, setSearchParams])
    useEffect(() => {
    setFilters({
      yearFrom: Number(searchParams.get("yf")) || 1000,
      yearTo: Number(searchParams.get("yt")) || 3000,
      genres: searchParams.get("g")?.split(",").filter(Boolean).map(Number) || [],
      countries: searchParams.get("c")?.split(",").filter(Boolean).map(Number) || [],
    });
  }, [searchParams, setFilters]);
}
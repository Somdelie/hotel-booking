'use client'

import qs from 'query-string'
import { ChangeEventHandler, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebounceValue } from '@/hooks/useDebounceValue';

const SearchHotel = () => {
    const searchParams = useSearchParams()
    const title = searchParams.get('title')

    const [value, setValue] = useState(title || '')

    const pathname = usePathname()
    const router = useRouter()

    const debounceValue = useDebounceValue<string>(value)

    useEffect(() => {
        const query = {
            title: debounceValue
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true, skipEmptyString: true })

        router.push(url)
    }, [debounceValue, router])

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    if (pathname !== '/') return null
  return (
    <div className="form">
    <button>
        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    </button>
    {/* <Input value={value} onChange={onChange} placeholder="Search" className=" " /> */}
    <input className="input" placeholder="Search for a hotel" value={value} onChange={onChange}/>
    <button className="reset" type="reset" onClick={() => setValue('')}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button></div>
  )
}

export default SearchHotel
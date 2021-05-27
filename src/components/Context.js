import React, { useContext, useEffect,useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children})=>{


    const headersData = [
        {
          label: "New",
          href: "/new",
          class: 'linkAttr'
        },
        {
          label: "Past",
          href: "/past",
          class: 'linkAttr'
        },
        {
          label: "Comments",
          href: "/comments",
          class: 'linkAttr'
        },
        {
          label: "ask",
          href: "/ask",
          class: 'linkAttr'
        },
        {
          label: "Show",
          href: "/show",
          class: 'linkAttr'
        }, {
          label: "Jobs",
          href: "/jobs",
          class: 'linkAttr'
        }, {
          label: "Submit",
          href: "/login",
          class: 'linkAttr'
        },
    
      ];

      const footersData = [
        {
          label: "GuideLines",
          href: "/guidelines",
          class: 'linkAttr'
        },
        {
          label: "FAQ",
          href: "/faq",
          class: 'linkAttr'
        },
        {
          label: "Lists",
          href: "/lists",
          class: 'linkAttr'
        },
        {
          label: "API",
          href: "https://github.com/HackerNews/API",
          class: 'linkAttr'
        },
        {
            label: "Security",
            href: "/security",
            class: 'linkAttr'
          },{
            label: "Legal",
            href: "/legal",
            class: 'linkAttr'
          },{
            label: "Apply to YC",
            href: "/apply",
            class: 'linkAttr'
          },
          {
            label: "Contact",
            href: "/contact",
            class: 'linkAttr'
          }
      ];





      const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'
      const [post, setPost] = useState([''])
      const [totalPageNumber, setTotalPageNumber] = useState(1)
      const [pageNumber, setPageNumber] = useState(1)
      const [searchInput, setSearchInput] = useState('')
      const fetchStories = async (url) => {
          try {
              const response = await fetch(url)
              const data = await response.json()
            //   console.log(data.nbPages)
              setPost(data.hits)
              setTotalPageNumber(data.nbPages)
          } catch (error) {
              console.log(error)
          }
      }
      useEffect(() => {
          fetchStories(`${API_ENDPOINT}query=${searchInput}&page=${pageNumber}`)
      }, [searchInput, pageNumber])
  
  
      const previousPage = () => {
  
          let prevPageNumber = pageNumber - 1
          if (prevPageNumber < 1) {
              prevPageNumber = 1
          }
          setPageNumber(prevPageNumber)
      }
  
  
      const nextPage = () => {
          let nextPageNumber = pageNumber + 1
          if (nextPageNumber > totalPageNumber) {
              nextPageNumber = 1
          }
  
          setPageNumber(nextPageNumber)
      }
  
      const [signIn, setSignIn] = useState(true)
      const signUpUser = (e)=>{
        e.preventDefault()
        setSignIn(!signIn)
    }
    

    return(
        <AppContext.Provider value={{ headersData,footersData,previousPage,nextPage,searchInput,totalPageNumber,pageNumber,setSearchInput,post,signIn,signUpUser }}>{children}</AppContext.Provider>
    )

}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export { AppContext, AppProvider }
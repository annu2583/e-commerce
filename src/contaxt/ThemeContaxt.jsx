// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContaxt = createContext()


// export const Provider = ({ children }) => {
//     const [mode, setMode] = useState('light')


//     useEffect(() => {
//         document.body.className = mode
//     }, [mode])


//     const thememode = () => {
//         setMode((pre) => (pre === 'light' ? 'dark' : 'light'))
//     }

//     return (
//         <>
//             <ThemeContaxt.Provider value={{
//                 thememode,
//                 mode
//             }}>
//                 {children}
//             </ThemeContaxt.Provider>
//         </>
//     )

// }

// export const useTheme = () => useContext(ThemeContaxt)








import { createContext, useState } from "react"

const initialBoard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

export const BoardContext = createContext(initialBoard);

export const BoardContextProvider = ({ children }) => {
    const [board, setBoard] = useState(initialBoard)
    return <BoardContext.Provider value={{board, setBoard}}>
        {children}
    </BoardContext.Provider>
}
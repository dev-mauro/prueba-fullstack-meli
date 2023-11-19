import { Header } from "../components"

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header/>
      {
        children
      }
      
    </>
  )
}

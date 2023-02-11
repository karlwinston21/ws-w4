import Navbar from "@/components/Navbar"

export default function MainLayout({ children }){

    return(
        <div>
            <Navbar />
            {children}
            
            <footer>
                This is footer
            </footer>
        </div>
    )
}
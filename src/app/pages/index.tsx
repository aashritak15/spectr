const HomePage = () => {
    return (
        <div className = "flex justify-end w-full pr-60"> 
            <video  
            className = "max-w-full" 
            src = "/home.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline />
        </div>
        
    
    )
}

export default HomePage;
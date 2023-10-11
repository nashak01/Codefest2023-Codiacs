import './landing.css';
function LandingPage(){
    return(
        <div class="container">
            <div class="profile">

            </div>

            <div>
                <img src="img/LISTENING EAR CMYK.jpg"/>
            </div>

            <div class="welcome_message">
                <h1>Welcome <span>Matt</span></h1>
            </div>
            <div class="row">
                <div class="Game col">
                    <div href="">
                        <div class="content">
                            <div class="image" id="Memory_Jar">
                                <img src="img/MemoryJar2.png" alt="Profile Image"/>
                            </div>

                            <div class="text">
                                <p class="name">Memory Jar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Game col">
                    <div href="">
                        <div class="content">
                            <div class="image" id="Canvas">
                                <img src="img/canvas.png" alt="Profile Image"/>
                            </div>

                            <div class="text">
                                <p class="name">Canvas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Game col">
                    <div href=""> 
                        <div class="content">
                            <div class="image volcano">
                                <img src="img/volcano.png" alt="Profile Image"/>
                            </div>

                            <div class="text">
                                <p class="name">Volcano</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;
import './landing.css';
function LandingPage(){
    return(
        <div class="container">
            <button type="button" data-toggle="modal" data-target="#profile">
                <div id="butterfly">

                    <div className="wing wingl">
                        <div id="leftwing">
                            <div id="lwtop"></div>
                            <div id="lwbottom"></div>
                        </div>
                    </div>


                    <div className="wing wingr">
                        <div id="rightwing" className="">
                            <div id="rwtop"></div>
                            <div id="rwbottom"></div>
                        </div>
                    </div>

                    <div id="body"></div>

                    <div id="leftant"><div className="ball"></div></div>
                    <div id="rightant"><div className="ball"></div></div>	

                </div>
            </button>

            <div class="modal fade" id="profile" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
                </div>   

            <div>
                <img src="img/LISTENING EAR CMYK.jpg" alt="Listening Ear logo" />
            </div>

            <div className="welcome_message">
                <h1>
                Welcome <span>Matt</span>
                </h1>
            </div>
            <div className="row">
                <div className="Game col">
                    <div href="">
                        <div className="content">
                            <div className="image" id="Memory_Jar">
                                <img src="img/MemoryJar2.png" alt="Memory Jar" />
                            </div>

                            <div className="text">
                                <p className="name">Memory Jar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Game col">
                    <div href="">
                        <div className="content">
                            <div className="image" id="Canvas">
                                <img src="img/canvas.png" alt="Canvas" />
                            </div>

                            <div className="text">
                                <p className="name">Canvas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Game col">
                    <div href="">
                        <div className="content">
                            <div className="image volcano">
                                <img src="img/volcano.png" alt="Volcano" />
                            </div>

                            <div className="text">
                                <p className="name">Volcano</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default LandingPage;

export default function Projects(){
    return(
        <div className="projects-section section" id="Projects">
        <div className="projects-container container">
            <div className="section-title" data-reveal="toUp">
                <h3 className="title-section">My <span>Projects</span></h3>
            </div>
            <div className="tab-galery">
                <div id="myBtnContainer">
                  <button className="btn active" onclick="filterSelection('all')"> Show all</button>
                  <button className="btn" onclick="filterSelection('Web')"> Web</button>
                  <button className="btn" onclick="filterSelection('Sosmed')"> Social Media</button>
                  <button className="btn" onclick="filterSelection('Design')"> Design</button>
                </div>
                
       
                <div className="row">
                  <div className="column Web">
                    <div className="content">
                      <img src="img/project-1.jpg" alt="Mountains"  data-tab="img01"/>
                    </div>
                  </div>
                  <div className="column Web">
                    <div className="content">
                    <img src="img/project-2.png" alt="Lights" data-tab="img02"/>
                    </div>
                  </div>
                  <div className="column Web">
                    <div className="content">
                    <img src="img/project-3.jpg" alt="Nature" data-tab="img03"/>
                    </div>
                  </div>        
                  <div className="column Sosmed">
                    <div className="content">
                      <img src="img/project-4.png" alt="Car" data-tab="img04"/>
                    </div>
                  </div>
                  <div className="column Sosmed">
                    <div className="content">
                    <img src="img/project-5.png" alt="Car" data-tab="img05"/>
                    </div>
                  </div>
                  <div className="column Sosmed">
                    <div className="content">
                    <img src="img/project-6.png" alt="Car" data-tab="img06"/>
                    </div>
                  </div>
                
                  <div className="column Design">
                    <div className="content">
                      <img src="img/project-7.png" alt="Car" data-tab="img07"/>
                    </div>
                  </div>
                  <div className="column Design">
                    <div className="content">
                    <img src="img/project-8.jpg" alt="Car" data-tab="img08"/>
                    </div>
                  </div>
                  <div className="column Design">
                    <div className="content">
                    <img src="img/project-9.png" alt="Car" data-tab="img09"/>
                    </div>
                  </div>
              
                </div>
                {/* // MODAL IMAGE */}
                <div className="modalImg" id="img01">
                    <span className="close">&times;</span>
                        <div className="contentIgdialog">
                            <img className="modal-content-img"/>
                        </div>
                </div>
                <div className="modalImg" id="img02">
                    <span className="close">&times;</span>
                    <div className="contentIgdialog">
                        <img className="modal-content-img"/>
                    </div>
                </div>
                <div className="modalImg" id="img03">
                    <span className="close">&times;</span>
                    <div className="contentIgdialog">
                        <img className="modal-content-img"/>
                    </div>
                </div>
                <div className="modalImg" id="img04">
                    <span className="close">&times;</span>
                    <div className="contentIgdialog">
                        <img className="modal-content-img"/>
                    </div>
                </div>
                <div className="modalImg" id="img05">
                    <span className="close">&times;</span>
                    <div className="contentIgdialog">
                        <img className="modal-content-img"/>
                    </div>
                </div>
                <div className="modalImg" id="img06">
                    <span className="close">&times;</span>
                    <div className="contentIgdialog">
                        <img className="modal-content-img"/>
                    </div>
                </div>
                <div className="modalImg" id="img07">
                    <span className="close">&times;</span>
                    <div className="contentIgdialog">
                        <img className="modal-content-img"/>
                    </div>
                </div>
                <div className="modalImg" id="img08">
                    <span className="close">&times;</span>
                    <div className="contentIgdialog">
                        <img className="modal-content-img"/>
                    </div>
                </div>
                <div className="modalImg" id="img09">
                    <span className="close">&times;</span>
                    <div className="contentIgdialog">
                        <img className="modal-content-img"/>
                    </div>
                </div>
                </div>
        </div>
    </div>
    )
}
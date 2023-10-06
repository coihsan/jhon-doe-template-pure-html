import React, { useState, useEffect } from 'react';

function Projects() {
  useEffect(() => {
    filterSelection("all");

    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("column");
      if (c === "all") c = "";
      for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
      }
    }

    function addClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    function removeClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }
  }, []);

  return (
    <div className="projects-section section" id="Projects">
        <div className="projects-container container">
            <div className="section-title" data-reveal="toUp">
                <h3 className="title-section">My <span>Projects</span></h3>
            </div>
            <div className="tab-galery">
                <div id="myBtnContainer">
                <button className="btn active" onClick={() => filterSelection("all")}>
                  Show all
                </button>
                <button className="btn" onClick={() => filterSelection("Web")}>
                  Web
                </button>
                <button className="btn" onClick={() => filterSelection("Sosmed")}>
                  Social Media
                </button>
                <button className="btn" onClick={() => filterSelection("Design")}>
                  Design
                </button>
                </div>
                
                {/* Portfolio Gallery Grid */}
                <div className="row">
                  <div className="column Web">
                    <div className="content">
                      <img src="https://coihsan.github.io/iseng/assets/project-1.jpg" alt="Projects 1"  data-tab="img01"/>
                    </div>
                  </div>
                  <div className="column Web">
                    <div className="content">
                    <img src="https://coihsan.github.io/iseng/assets/project-2.png" alt="Projects 2" data-tab="img02"/>
                    </div>
                  </div>
                  <div className="column Web">
                    <div className="content">
                    <img src="https://coihsan.github.io/iseng/assets/project-3.jpg" alt="Projects 3" data-tab="img03"/>
                    </div>
                  </div>        
                  <div className="column Sosmed">
                    <div className="content">
                      <img src="https://coihsan.github.io/iseng/assets/project-4.png" alt="Projects 4" data-tab="img04"/>
                    </div>
                  </div>
                  <div className="column Sosmed">
                    <div className="content">
                    <img src="https://coihsan.github.io/iseng/assets/project-5.png" alt="Projects 5" data-tab="img05"/>
                    </div>
                  </div>
                  <div className="column Sosmed">
                    <div className="content">
                    <img src="https://coihsan.github.io/iseng/assets/project-6.png" alt="Projects 6" data-tab="img06"/>
                    </div>
                  </div>
                
                  <div className="column Design">
                    <div className="content">
                      <img src="https://coihsan.github.io/iseng/assets/project-7.png" alt="Projects 7" data-tab="img07"/>
                    </div>
                  </div>
                  <div className="column Design">
                    <div className="content">
                    <img src="https://coihsan.github.io/iseng/assets/project-8.jpg" alt="Projects 8" data-tab="img08"/>
                    </div>
                  </div>
                  <div className="column Design">
                    <div className="content">
                    <img src="https://coihsan.github.io/iseng/assets/project-9.png" alt="Projects 9" data-tab="img09"/>
                    </div>
                  </div>
                  {/* END GRID */}
                </div>
                {/* MODAL IMAGE */}
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
  );
}

export default Projects;

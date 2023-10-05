export default function Modal (){
    return(
        <div className="modal" id="modal1" data-animation="slideInOutLeft">
        <div className="modal-dialog">
            <div className="modal-contain personal-info-section">
                <img src="img/1690805230779.jpg" alt=""/>
                <h1 className="center">Jhon Doe</h1>
                <h3 className="center">Digital Marketing & Web Designer</h3>
                <p className="center">I'm a digital marketer, which means I spend all day online. I'm not sure if that's a good thing or a bad thing, but it's definitely made me a pro at finding cat videos</p>
                <div className="personal-info">

                    <div className="personal-info-detail">
                      <div><i className='bx bxs-graduation' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">Degree</div>
                        <div className="table-isi">Lorem ipsum</div>
                      </div>
                    </div>
                    <div className="personal-info-detail">
                      <div><i className='bx bx-envelope' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">G-Mail</div>
                        <div className="table-isi">jhondoe@example.com</div>
                      </div>
                    </div>
                    <div clasclassNames="personal-info-detail">
                      <div><i className='bx bxl-whatsapp' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">WhatsApp</div>
                        <div className="table-isi">0812-3456-7890</div>
                      </div>
                    </div>
                    <div className="personal-info-detail">
                      <div><i className='bx bx-calendar' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">Birthday</div>
                        <div className="table-isi">3000 BCE</div>
                      </div>
                    </div>
                    <div className="personal-info-detail">
                      <div><i className='bx bxs-map-pin' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">Location</div>
                        <div className="table-isi">Kota Tangerang</div>
                      </div>
                    </div>
                    <div className="personal-info-detail">
                      <div><i className='bx bx-user-pin' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">Freelance / Work</div>
                        <div className="table-isi">Available</div>
                      </div>
                    </div>
                  </div>
        
                <div className="modal-footer">
                    <button type="button" className="close-modal" data-close>Close</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default function Modal (){
    return(
        <div class="modal" id="modal1" data-animation="slideInOutLeft">
        <div class="modal-dialog">
            <div class="modal-contain personal-info-section">
                <img src="img/1690805230779.jpg" alt=""/>
                <h1 class="center">Jhon Doe</h1>
                <h3 class="center">Digital Marketing & Web Designer</h3>
                <p class="center">I'm a digital marketer, which means I spend all day online. I'm not sure if that's a good thing or a bad thing, but it's definitely made me a pro at finding cat videos</p>
                <div class="personal-info">

                    <div class="personal-info-detail">
                      <div><i class='bx bxs-graduation' ></i></div>
                      <div class="personal-info-contain">
                        <div class="table-title">Degree</div>
                        <div class="table-isi">Lorem ipsum</div>
                      </div>
                    </div>
                    <div class="personal-info-detail">
                      <div><i class='bx bx-envelope' ></i></div>
                      <div class="personal-info-contain">
                        <div class="table-title">G-Mail</div>
                        <div class="table-isi">jhondoe@example.com</div>
                      </div>
                    </div>
                    <div class="personal-info-detail">
                      <div><i class='bx bxl-whatsapp' ></i></div>
                      <div class="personal-info-contain">
                        <div class="table-title">WhatsApp</div>
                        <div class="table-isi">0812-3456-7890</div>
                      </div>
                    </div>
                    <div class="personal-info-detail">
                      <div><i class='bx bx-calendar' ></i></div>
                      <div class="personal-info-contain">
                        <div class="table-title">Birthday</div>
                        <div class="table-isi">3000 BCE</div>
                      </div>
                    </div>
                    <div class="personal-info-detail">
                      <div><i class='bx bxs-map-pin' ></i></div>
                      <div class="personal-info-contain">
                        <div class="table-title">Location</div>
                        <div class="table-isi">Kota Tangerang</div>
                      </div>
                    </div>
                    <div class="personal-info-detail">
                      <div><i class='bx bx-user-pin' ></i></div>
                      <div class="personal-info-contain">
                        <div class="table-title">Freelance / Work</div>
                        <div class="table-isi">Available</div>
                      </div>
                    </div>
                  </div>
        
                <div class="modal-footer">
                    <button type="button" class="close-modal" data-close>Close</button>
                </div>
            </div>
        </div>
    </div>
    )
}
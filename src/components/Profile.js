import React from "react";

export default function () {
    return (
        <div class="mx-auto text-white text-center profile" style={{ width: "26.5rem", backgroundColor: "#1f2124", paddingBottom: "120px" }}>
            <img class="mx-auto py-3" src="/profile.jpg" alt="Muhammad Damar Kusumo"
                style={{ maxWidth: "150px", height: "auto" }}></img>
            <p class="text-muted py-0 mb-0">
                <span><a href='https://wa.me/+6285664545159' target='_blank' style={{ textDecoration: "none" }} className='text-muted'>085664545159&nbsp;</a>
                </span>
            </p>
            <p class="text-muted pt-0 mt-0">
                <span>
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=muhammaddamarkusumo@gmail.com'
                        target='_blank' style={{ textDecoration: "none" }} className='text-muted'>
                        &nbsp;muhammaddamarkusumo@gmail.com</a></span>
                        </p>
            <div className='row'>
                <div className="col">
                    <div><strong>Nationality</strong></div>
                    <div><strong>Town</strong></div>
                    <div><strong>Place & DOB</strong></div>
                </div>
                <div className="col">
                    <div className="text-start">Indonesia</div>
                    <div className="text-start">Tangerang, Banten</div>
                    <div className="text-start">Jakarta, 08 September 2002</div>
                </div>
            </div>
        </div>
    )
}
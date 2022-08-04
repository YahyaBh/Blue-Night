import React, { Fragment } from 'react'

export default function Navbar() {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
                <a class="navbar-brand" href="#">BLUE <span className='sec-h-brand'>NIGHT</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#about">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">CONTACT</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#home">HOME <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

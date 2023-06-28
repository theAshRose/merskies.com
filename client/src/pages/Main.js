import React from 'react';

const Main = () => {
    return (
        <>
            <header class="d-flex justify-content-between align-items-center">
                <h1 class="ms-5">Get yer pokermans hurr!</h1>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active text-white fw-bold" aria-current="page" href="#">Log In/Create
                                        account</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white fw-bold" href="#">Cart</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white fw-bold" href="#">Cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div class="container-fluid">
                    <div class="row">
                        <div class="d-flex justify-content-center col-9">
                            <div id="twitch-embed"></div>


                            <script src="https://embed.twitch.tv/embed/v1.js"></script>



                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
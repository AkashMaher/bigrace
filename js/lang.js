
 const MainEnglish=`
 <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid px-0 d-flex justify-content-between">
        <a class="navbar-brand" href="#">Big Race</a>

        <div class="ml-auto d-flex align-items-center button-container">
          <div class="select-dropdown">
            <div class="textBox d-flex justify-content-between">
              <div class="d-flex justify-content-center align-items-center">
                <img
                  id="textBox-img"
                  class="ml-0"
                  src="./assets/img/russia.png"
                  alt=""
                />
                <p id="textBox-text">Русский</p>
              </div>
              <img
                class="ml-auto select-arrow"
                src="./assets/img/select.svg"
                alt=""
              />
            </div>
            <div class="option">
              <div class="languageOption" id="A0" data-lang="ru" onclick="show('Русский')">
                <img src="./assets/img/russia.png" alt="" />
                <p>Русский</p>
              </div>
              <div class="languageOption" id="A1" data-lang="en" onclick="show('English')">
                <a langName href="./en/index.html" target="_self"></a>
                <img src="./assets/img/eng.png" alt="" />
                <p>English</p>
                </a>
              </div>
              <div class="languageOption" id="A2" data-lang="hi" onclick="show('Hindi')">
                <a class="langName" href="./hi/index.html" target="_self">
                <img src="./assets/img/hindi.png" alt="" />
                <p>Hindi</p>
                </a>
              </div>
            </div>
          </div>
          
          
          <button class="menu-btn dropbtn" id="menu" onclick="openNavs()">
            <img class="menu-icon" src="./assets/img/sidebar/menu.png" alt="" />
          </button>
          
          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNavs()">&times;</a>
            <a href="./game.html">Играть сейчас</a>
            <a href="./farms.html">Фермы</a>
            <a href="./stat.html">Статистика</a>
            <a href="./info.html">Информация</a>
            <a href="./profile.html">мои аккаунт</a>
            <div class="notification-container-m">
              <img class="tgicon" src="./assets/img/sidebar/telegram.png" alt="" />
              <a href="https://t.me/BIGRACE_game" target="_blank">Официальный канал</a>
            </div>
            
          </div>
          
          </div>
        </div>
      </div>
    </nav>
        <section>
            <div class="headline-container">
                <div class="container col-12 d-flex justify-content-center justify-content-md-end">
                    <div class="headline-main-container">
                        <h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">big race</font></font></h1>
                        <h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Register or Login</font></font></h4>
                        <div class="smalltext" id="ifNo">
                            <button type="button" id="register">
                  Login or Register
                </button>
                        </div>
                        <div class="noview smalltext" id="ifYes">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                Войдите или зарегистрируйтесь
                            </button>
                        </div>
                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <button type="button" class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body modal-body-wallet activated-body-wallet">
                                        <h1 class="mb-0">Activated</h1>
                                        <div>
                                            <p class="text-center">
                                                Congratulations! You’re already Big Race farm 16
                                                activated
                                            </p>
                                        </div>
                                        <div class="d-flex mt-5 justify-content-center">
                                            <button class="w-50">Okay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <button type="button" class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-dialog modal-dialog-centered modal">
                                <div class="modal-content">
                                    <div class="modal-body modal-body-wallet">
                                        <h1 class="mb-0">Активировать кошелек</h1>
                                        <div>
                                            <p>Активируйте Big Race за одну транзакцию с BNB</p>
                                            <div class="activate-wallet-input">
                                                <label for="basic-url" class="form-label">Выберите ферму</label>
                                                <div class="selectLvls">
                                                    <select name="lvls" id="lvls" class="lvls">
                                                        <option value="1">Уровень 1д (0,05 BNB)</option>
                                                        <option value="2">Уровень 2д (0,07 BNB)</option>
                                                        <option value="3">Уровень 3д (0,1 BNB)</option>
                                                        <option value="4">Уровень 4д (0,14 BNB)</option>
                                                        <option value="16">Уровень 16 (8 BNB)</option>
        
                                                    </select>
                                                </div>
                                                <!-- <div class="input-group mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="basic-url"
                                    aria-describedby="basic-addon3"
                                  />
                                </div> -->
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <button id="activate2">Активировать ферму</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <button type="button" class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body modal-body-wallet">
                                        <h1 class="mb-0">Connect Wallet</h1>
                                        <div class="d-flex wallet-card align-items-center">
                                            <img src="./assets/img/metamask.png" alt="">
                                            <div>
                                                <h4 class="mb-0">Metamask</h4>
                                                <p class="mb-0">Desktop/DApp in app</p>
                                            </div>
                                        </div>
                                        <div class="d-flex wallet-card mb-0 align-items-center">
                                            <img src="./assets/img/trust-wallet.png" alt="">
                                            <div>
                                                <h4 class="mb-0">Trust Wallet</h4>
                                                <p class="mb-0">Desktop/DApp in app</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div class="desc-game-container container">
                <div class="desc-game-main-container">
                    <h2 class="text-center desc-game-title mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">"Farms"</font></font></h2>
                    <p class="desc-game-text text-cetr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        The game "Big Race" consists of 16 farms. </font><font style="vertical-align: inherit;">Everyone can activate any of the already available farms. </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        Farms gradually become available, at the same time, they open sequentially from the 16th to the cheapest farm No. 1. Farms open with a certain interval of time. </font></font><br> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        Everyone can activate any number of farms and receive their passive income. </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        The earlier the participant entered the game, the more chances to get a quick passive income! </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        In Big Race, each farm is a separate structure that follows the simple rules of a smart contract.</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        All new players are randomly placed in one large structure on each farm, </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        giving everyone an equal chance to earn rewards without having to invite personal partners. </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
        
                        Everyone chooses any available farm. </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        By activating the farm, the participant automatically stands on the line in which there are empty seats. </font><font style="vertical-align: inherit;">Free seats are distributed and assigned randomly by a smart contract. </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        Participants who have all 16 farms, they receive passive income from the game "horses" and other subsequent created gambling games.</font></font><br>
                    </p>
                    <div>
                        <img class="farmimg" src="./assets/img/horse/farms.png" alt="">
                    </div>
        
        
                    <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">100% OF THE LEVEL ACTIVATION AMOUNT IS DIVIDED INTO 4 PARTS: 74%, 13%, 8%, 5%</font></font></h3>
                    <p class="desc-game-text text-cetr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
        
        
                        - these 4 parts from one transaction are immediately distributed to the wallets of the participants according to the rules of the game. </font></font><br> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        BASE REWARD - 74% goes to a random upline member in the tier structure </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        REFERRAL BONUS - 26% split between upline referral partners up to 3rd affiliate upline. </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        1st upstream farm gets 13% </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        2nd upstream farm gets 8% </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        3rd upstream farm gets 5%</font></font><br><br>
                    </p>
        
                    <div>
                        <img class="farmimg" src="./assets/img/horse/farm2.jpg" alt="">
                    </div>
        
        
        
        
                </div>
            </div>
            </section></div>
        
        
        <section>
            <div class="desc-game-container container">
                <div class="desc-game-main-container">
                    <h2 class="text-center desc-game-title mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Description of the game "Horse racing"</font></font></h2>
                    <p class="desc-game-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        Horse racing has been betting for over 300 years. </font><font style="vertical-align: inherit;">In the world, only dedicated people know about the features of this sport.
                        </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        Big Race invites you not only to bet on the selected horse, but also to take an active part in the competition by accelerating the horse.
                        </font></font><br>
                        <br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        The main features of participation in horse racing.
                    </font></font></p>
                    <div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">one</font></font></p>
                                <img class="mob-condition-img" src="./assets/img/clock.png" alt="">
                                <div class="step-desc-container">
                                    <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        The race lasts 30 minutes: 10 minutes to choose a horse, 10 minutes to run and 10 minutes to distribute winnings to the winners.
                                    </font></font></p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/clock.png" alt="">
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2</font></font></p>
                                <img class="mob-condition-img" src="./assets/img/horses.png" alt="">
                                <div class="step-desc-container">
                                    <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        You can only select a horse once per race (0.05 BNB)
                                    </font></font></p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/horses.png" alt="">
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3</font></font></p>
                                <img class="mob-condition-img" src="./assets/img/imgBtn.png" alt="">
                                <div class="step-desc-container">
                                    <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        During the race, you can speed up your horse (using the &lt;acceleration from 0.01 BNB&gt; button) on which you have placed a bet and it will finish faster
                                    </font></font></p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/imgBtn.png" alt="">
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">four</font></font></p>
                                <img class="mob-condition-img" src="./assets/img/champ.png" alt="">
                                <div class="step-desc-container">
                                    <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        After the finish, the winnings are distributed among the winners in accordance with the size of your contribution to the horse's acceleration.
                                    </font></font></p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/champ.png" alt="">
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container mb-0">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5</font></font></p>
                                <div class="step-desc-container">
                                    <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        You can also organize teams and thus increase the chances that your horse will win.
                                    </font></font></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="present-back">
                <h1 class="text-center document-card-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Presentations</font></font></h1>
                <div class="d-flex justify-content-center document-card-container align-items-center">
                    <div class="mob-document-container">
                        <div class="d-flex flex-column align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_Ru.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Russian pdf</font></font></button></a>
                        </div>
                        <div class="d-flex flex-column align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_ English.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">English pdf</font></font></button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_Hindi.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hindi pdf</font></font></button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_ Indonesia.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">indonesian pdf</font></font></button></a>
                        </div>
        
                    </div>
        
        
        
                </div>
                <div class="d-flex justify-content-center document-card-container align-items-center">
                    <div class="mob-document-container">
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_ Italian.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Italian pdf</font></font></button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_ Vietnam.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vietnam pdf</font></font></button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_FARSI.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Farsi pdf</font></font></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div id="video">
                <h1 class="videotitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Big race video</font></font></h1>
                <iframe width="800" height="450" src="https://www.youtube.com/embed/p1dvMqgHJp8" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen">
                </iframe>
            </div>
        </section>
        <section>
            <div class="horses-back-container">
                <div class="d-flex flex-column align-items-center">
                    <div class="people-count-container d-flex flex-column align-items-center">
                        <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Now participants</font></font></h2>
                        <h1><span id="participants"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></h1>
                        <p id="logintoPlay"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">login to play</font></font></p>
                        <button class="noview" id="playy" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">Хочу в игру</button>
                    </div>
                    <div class="preview-container">
                        <h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Preview Mode</font></font></h1>
                        <p class="preview-subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                            Find any BigRace account in preview mode. </font><font style="vertical-align: inherit;">Enter your BNB ID or address to preview.
                        </font></font></p>
                        <div class="preview-search-container">
                            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Enter ID or BNB wallet</font></font></p>
                            <div class="d-flex align-items-center">
                                <div class="input-group mob-search-container">
                                    <input type="text" class="form-control" id="inputPreviewId" aria-describedby="inputGroup-sizing-default" placeholder="Search by user ID or BNB address">
                                    <button id="preview"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Find</font></font></button>
                                </div>
                            </div>
                        </div>
                        <div class="result-container d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-0"><span id="userID"></span></p>
                                <p class="mb-0"><span id="refferee"></span></p>
                                <p class="mb-0"><span id="WalletAddress"></span></p>
                                <p class="mb-0"><span id="errr"></span></p>
        
                            </div>
                            <div>
        
                                <p class="result-sub-text mb-0"><span id="userlvl"></span></p>
                            </div>
        
                        </div>
        
                    </div>
                </div>
            </div>
        </section>`;


const  MainHindi=`
<nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid px-0 d-flex justify-content-between">
        <a class="navbar-brand" href="#">Big Race</a>

        <div class="ml-auto d-flex align-items-center button-container">
          <div class="select-dropdown">
            <div class="textBox d-flex justify-content-between">
              <div class="d-flex justify-content-center align-items-center">
                <img
                  id="textBox-img"
                  class="ml-0"
                  src="./assets/img/russia.png"
                  alt=""
                />
                <p id="textBox-text">Русский</p>
              </div>
              <img
                class="ml-auto select-arrow"
                src="./assets/img/select.svg"
                alt=""
              />
            </div>
            <div class="option">
              <div class="languageOption" id="A0" data-lang="ru" onclick="show('Русский')">
                <img src="./assets/img/russia.png" alt="" />
                <p>Русский</p>
              </div>
              <div class="languageOption" id="A1" data-lang="en" onclick="show('English')">
                <a langName href="./en/index.html" target="_self"></a>
                <img src="./assets/img/eng.png" alt="" />
                <p>English</p>
                </a>
              </div>
              <div class="languageOption" id="A2" data-lang="hi" onclick="show('Hindi')">
                <a class="langName" href="./hi/index.html" target="_self">
                <img src="./assets/img/hindi.png" alt="" />
                <p>Hindi</p>
                </a>
              </div>
            </div>
          </div>
          
          
          <button class="menu-btn dropbtn" id="menu" onclick="openNavs()">
            <img class="menu-icon" src="./assets/img/sidebar/menu.png" alt="" />
          </button>
          
          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNavs()">&times;</a>
            <a href="./game.html">Играть сейчас</a>
            <a href="./farms.html">Фермы</a>
            <a href="./stat.html">Статистика</a>
            <a href="./info.html">Информация</a>
            <a href="./profile.html">мои аккаунт</a>
            <div class="notification-container-m">
              <img class="tgicon" src="./assets/img/sidebar/telegram.png" alt="" />
              <a href="https://t.me/BIGRACE_game" target="_blank">Официальный канал</a>
            </div>
            
          </div>
          
          </div>
        </div>
      </div>
    </nav>
        <section>
            <div class="headline-container">
                <div class="container col-12 d-flex justify-content-center justify-content-md-end">
                    <div class="headline-main-container">
                        <h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बड़ी दौड़</font></font></h1>
                        <h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रजिस्टर या लॉगिन</font></font></h4>
                        <div class="smalltext" id="ifNo">
                            <button type="button" id="register"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                भाग लें या पंजीकरण करें
                            </font></font></button>
                        </div>
                        <div class="noview smalltext" id="ifYes">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                भाग लें या पंजीकरण करें
                            </font></font></button>
                        </div>
                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <button type="button" class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body modal-body-wallet activated-body-wallet">
                                        <h1 class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">सक्रिय</font></font></h1>
                                        <div>
                                            <p class="text-center">
                                                Congratulations! You’re already Big Race farm 16
                                                activated
                                            </p>
                                        </div>
                                        <div class="d-flex mt-5 justify-content-center">
                                            <button class="w-50">Okay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <button type="button" class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-dialog modal-dialog-centered modal">
                                <div class="modal-content">
                                    <div class="modal-body modal-body-wallet">
                                        <h1 class="mb-0">Активировать кошелек</h1>
                                        <div>
                                            <p>Активируйте Big Race за одну транзакцию с BNB</p>
                                            <div class="activate-wallet-input">
                                                <label for="basic-url" class="form-label">Выберите ферму</label>
                                                <div class="selectLvls">
                                                    <select name="lvls" id="lvls" class="lvls">
                                                        <option value="1">Уровень 1д (0,05 BNB)</option>
                                                        <option value="2">Уровень 2д (0,07 BNB)</option>
                                                        <option value="3">Уровень 3д (0,1 BNB)</option>
                                                        <option value="4">Уровень 4д (0,14 BNB)</option>
                                                        <option value="16">Уровень 16 (8 BNB)</option>
        
                                                    </select>
                                                </div>
                                                <!-- <div class="input-group mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="basic-url"
                                    aria-describedby="basic-addon3"
                                  />
                                </div> -->
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <button id="activate2">Активировать ферму</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <button type="button" class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body modal-body-wallet">
                                        <h1 class="mb-0">Connect Wallet</h1>
                                        <div class="d-flex wallet-card align-items-center">
                                            <img src="./assets/img/metamask.png" alt="">
                                            <div>
                                                <h4 class="mb-0">Metamask</h4>
                                                <p class="mb-0">Desktop/DApp in app</p>
                                            </div>
                                        </div>
                                        <div class="d-flex wallet-card mb-0 align-items-center">
                                            <img src="./assets/img/trust-wallet.png" alt="">
                                            <div>
                                                <h4 class="mb-0">Trust Wallet</h4>
                                                <p class="mb-0">Desktop/DApp in app</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div class="desc-game-container container">
                <div class="desc-game-main-container">
                    <h2 class="text-center desc-game-title mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">"खेतों"</font></font></h2>
                    <p class="desc-game-text text-cetr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        खेल "बिग रेस" में 16 फार्म होते हैं। </font><font style="vertical-align: inherit;">हर कोई पहले से उपलब्ध किसी भी फ़ार्म को सक्रिय कर सकता है। </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        फार्म धीरे-धीरे उपलब्ध हो जाते हैं, साथ ही, वे क्रमानुसार 16वें से सबसे सस्ते फार्म नंबर 1 तक खुलते हैं। फार्म एक निश्चित अंतराल के साथ खुलते हैं। </font></font><br> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        हर कोई किसी भी संख्या में फ़ार्म को सक्रिय कर सकता है और अपनी निष्क्रिय आय प्राप्त कर सकता है। </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        पहले प्रतिभागी ने खेल में प्रवेश किया, एक त्वरित निष्क्रिय आय प्राप्त करने की अधिक संभावना! </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        बिग रेस में, प्रत्येक फ़ार्म एक अलग संरचना है जो स्मार्ट अनुबंध के सरल नियमों का पालन करती है।</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        सभी नए खिलाड़ियों को बेतरतीब ढंग से प्रत्येक फ़ार्म पर एक बड़ी संरचना में रखा जाता है, </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        जिससे सभी को व्यक्तिगत भागीदारों को आमंत्रित किए बिना पुरस्कार अर्जित करने का समान अवसर मिलता है। </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
        
                        हर कोई कोई उपलब्ध खेत चुनता है। </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        फार्म को सक्रिय करने से प्रतिभागी स्वत: ही उस लाइन पर खड़ा हो जाता है जिसमें खाली सीटें होती हैं। </font><font style="vertical-align: inherit;">एक स्मार्ट अनुबंध द्वारा मुफ्त सीटों को बेतरतीब ढंग से वितरित और आवंटित किया जाता है। </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        जिन प्रतिभागियों के पास सभी 16 फार्म हैं, वे खेल "घोड़ों" और अन्य बाद में बनाए गए जुआ खेलों से निष्क्रिय आय प्राप्त करते हैं।</font></font><br>
                    </p>
                    <div>
                        <img class="farmimg" src="./assets/img/horse/farms.png" alt="">
                    </div>
        
        
                    <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">लेवल एक्टिवेशन राशि का 100% 4 भागों में विभाजित है: 74%, 13%, 8%, 5%</font></font></h3>
                    <p class="desc-game-text text-cetr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
        
        
                        - एक लेन-देन के इन 4 भागों को खेल के नियमों के अनुसार प्रतिभागियों के पर्स में तुरंत वितरित किया जाता है। </font></font><br> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        आधार पुरस्कार - 74% टियर संरचना में एक यादृच्छिक अपलाइन सदस्य के पास जाता है </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        रेफ़रल बोनस - 26% तृतीय संबद्ध अपलाइन तक अपलाइन रेफरल भागीदारों के बीच विभाजित होता है। </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        
                        पहले अपस्ट्रीम फार्म को 13% मिलता है </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        दूसरे अपस्ट्रीम फार्म को 8% मिलता है </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        तीसरे अपस्ट्रीम फार्म को 5% मिलता है</font></font><br><br>
                    </p>
        
                    <div>
                        <img class="farmimg" src="./assets/img/horse/farm2.jpg" alt="">
                    </div>
        
        
        
        
                </div>
            </div>
            </section></div>
        
        
        <section>
            <div class="desc-game-container container">
                <div class="desc-game-main-container">
                    <h2 class="text-center desc-game-title mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">"घुड़दौड़" खेल का विवरण</font></font></h2>
                    <p class="desc-game-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        घुड़दौड़ 300 से अधिक वर्षों से सट्टेबाजी कर रही है। </font><font style="vertical-align: inherit;">दुनिया में केवल समर्पित लोग ही इस खेल की विशेषताओं के बारे में जानते हैं।
                        </font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        बिग रेस आपको न केवल चयनित घोड़े पर दांव लगाने की पेशकश करता है, बल्कि घोड़े को तेज करके प्रतियोगिता में सक्रिय भाग लेने की भी पेशकश करता है।
                        </font></font><br>
                        <br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        घुड़दौड़ में भागीदारी की मुख्य विशेषताएं।
                    </font></font></p>
                    <div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">एक</font></font></p>
                                <img class="mob-condition-img" src="./assets/img/clock.png" alt="">
                                <div class="step-desc-container">
                                    <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        दौड़ 30 मिनट तक चलती है: घोड़े को चुनने के लिए 10 मिनट, दौड़ने के लिए 10 मिनट और विजेताओं को जीत बांटने के लिए 10 मिनट।
                                    </font></font></p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/clock.png" alt="">
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2</font></font></p>
                                <img class="mob-condition-img" src="./assets/img/horses.png" alt="">
                                <div class="step-desc-container">
                                    <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        आप प्रति दौड़ में केवल एक बार घोड़े का चयन कर सकते हैं (0.05 बीएनबी)
                                    </font></font></p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/horses.png" alt="">
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3</font></font></p>
                                <img class="mob-condition-img" src="./assets/img/imgBtn.png" alt="">
                                <div class="step-desc-container">
                                    <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        दौड़ के दौरान, आप अपने घोड़े को गति दे सकते हैं (&lt;0.01 बीएनबी से त्वरण&gt; बटन का उपयोग करके) जिस पर आपने दांव लगाया है और यह तेजी से समाप्त होगा
                                    </font></font></p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/imgBtn.png" alt="">
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">चार</font></font></p>
                                <img class="mob-condition-img" src="./assets/img/champ.png" alt="">
                                <div class="step-desc-container">
                                    <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        खत्म होने के बाद, विजेताओं के बीच घोड़े के त्वरण में आपके योगदान के आकार के अनुसार जीत का वितरण किया जाता है।
                                    </font></font></p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/champ.png" alt="">
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container mb-0">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5</font></font></p>
                                <div class="step-desc-container">
                                    <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        आप टीमों को भी व्यवस्थित कर सकते हैं और इस प्रकार आपके घोड़े के जीतने की संभावना बढ़ा सकते हैं।
                                    </font></font></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="present-back">
                <h1 class="text-center document-card-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">प्रस्तुतियों</font></font></h1>
                <div class="d-flex justify-content-center document-card-container align-items-center">
                    <div class="mob-document-container">
                        <div class="d-flex flex-column align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_Ru.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">रूसी पीडीएफ</font></font></button></a>
                        </div>
                        <div class="d-flex flex-column align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_ English.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अंग्रेजी पीडीएफ</font></font></button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_Hindi.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">हिंदी पीडीएफ</font></font></button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_ Indonesia.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">इंडोनेशियाई पीडीएफ</font></font></button></a>
                        </div>
        
                    </div>
        
        
        
                </div>
                <div class="d-flex justify-content-center document-card-container align-items-center">
                    <div class="mob-document-container">
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_ Italian.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">इतालवी पीडीएफ</font></font></button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_ Vietnam.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">वियतनाम पीडीएफ</font></font></button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class="pdfsname" href="./assets/pdfs/Big Race_FARSI.pdf">
                                <img src="./assets/img/document.png" alt=""><br>
                                <button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">फारसी पीडीएफ</font></font></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div id="video">
                <h1 class="videotitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">बड़ी दौड़ वीडियो</font></font></h1>
                <iframe width="800" height="450" src="https://www.youtube.com/embed/p1dvMqgHJp8" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen">
                </iframe>
            </div>
        </section>
        <section>
            <div class="horses-back-container">
                <div class="d-flex flex-column align-items-center">
                    <div class="people-count-container d-flex flex-column align-items-center">
                        <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">अब प्रतिभागी</font></font></h2>
                        <h1><span id="participants"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></h1>
                        <p id="logintoPlay"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">खेलने के लिए लॉगिन करें</font></font></p>
                        <button class="noview" id="playy" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">Хочу в игру</button>
                    </div>
                    <div class="preview-container">
                        <h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पूर्वावलोकन मोड</font></font></h1>
                        <p class="preview-subtitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                            पूर्वावलोकन मोड में कोई भी BigRace खाता खोजें। </font><font style="vertical-align: inherit;">पूर्वावलोकन करने के लिए अपनी बीएनबी आईडी या पता दर्ज करें।
                        </font></font></p>
                        <div class="preview-search-container">
                            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">आईडी या बीएनबी वॉलेट दर्ज करें</font></font></p>
                            <div class="d-flex align-items-center">
                                <div class="input-group mob-search-container">
                                    <input type="text" class="form-control" id="inputPreviewId" aria-describedby="inputGroup-sizing-default" placeholder="यूजर आईडी या बीएनबी पते के आधार पर खोजें">
                                    <button id="preview"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">पाना</font></font></button>
                                </div>
                            </div>
                        </div>
                        <div class="result-container d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-0"><span id="userID"></span></p>
                                <p class="mb-0"><span id="refferee"></span></p>
                                <p class="mb-0"><span id="WalletAddress"></span></p>
                                <p class="mb-0"><span id="errr"></span></p>
        
                            </div>
                            <div>
        
                                <p class="result-sub-text mb-0"><span id="userlvl"></span></p>
                            </div>
        
                        </div>
        
                    </div>
                </div>
            </div>
        </section>`

const MainRussian=`
<nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid px-0 d-flex justify-content-between">
        <a class="navbar-brand" href="#">Big Race</a>

        <div class="ml-auto d-flex align-items-center button-container">
          <div class="select-dropdown">
            <div class="textBox d-flex justify-content-between">
              <div class="d-flex justify-content-center align-items-center">
                <img
                  id="textBox-img"
                  class="ml-0"
                  src="./assets/img/russia.png"
                  alt=""
                />
                <p id="textBox-text">Русский</p>
              </div>
              <img
                class="ml-auto select-arrow"
                src="./assets/img/select.svg"
                alt=""
              />
            </div>
            <div class="option">
              <div class="languageOption" id="A0" data-lang="ru" onclick="show('Русский')">
                <img src="./assets/img/russia.png" alt="" />
                <p>Русский</p>
              </div>
              <div class="languageOption" id="A1" data-lang="en" onclick="show('English')">
                <a langName href="./en/index.html" target="_self"></a>
                <img src="./assets/img/eng.png" alt="" />
                <p>English</p>
                </a>
              </div>
              <div class="languageOption" id="A2" data-lang="hi" onclick="show('Hindi')">
                <a class="langName" href="./hi/index.html" target="_self">
                <img src="./assets/img/hindi.png" alt="" />
                <p>Hindi</p>
                </a>
              </div>
            </div>
          </div>
          
          
          <button class="menu-btn dropbtn" id="menu" onclick="openNavs()">
            <img class="menu-icon" src="./assets/img/sidebar/menu.png" alt="" />
          </button>
          
          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNavs()">&times;</a>
            <a href="./game.html">Играть сейчас</a>
            <a href="./farms.html">Фермы</a>
            <a href="./stat.html">Статистика</a>
            <a href="./info.html">Информация</a>
            <a href="./profile.html">мои аккаунт</a>
            <div class="notification-container-m">
              <img class="tgicon" src="./assets/img/sidebar/telegram.png" alt="" />
              <a href="https://t.me/BIGRACE_game" target="_blank">Официальный канал</a>
            </div>
            
          </div>
          
          </div>
        </div>
      </div>
    </nav>
        <section>
            <div class="headline-container">
                <div class="container col-12 d-flex justify-content-center justify-content-md-end">
                    <div class="headline-main-container">
                        <h1>Big Race</h1>
                        <h4>Зарегистрируйтесь или войдите</h4>
                        <div class="smalltext" id='ifNo'>
                            <button type="button" id="register">
                                Войдите или зарегистрируйтесь
                            </button>
                        </div>
                        <div class="noview smalltext" id='ifYes'>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                Войдите или зарегистрируйтесь
                            </button>
                        </div>
                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <button type="button" class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body modal-body-wallet activated-body-wallet">
                                        <h1 class="mb-0">Activated</h1>
                                        <div>
                                            <p class="text-center">
                                                Congratulations! You’re already Big Race farm 16
                                                activated
                                            </p>
                                        </div>
                                        <div class="d-flex mt-5 justify-content-center">
                                            <button class="w-50">Okay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <button type="button" class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-dialog modal-dialog-centered modal">
                                <div class="modal-content">
                                    <div class="modal-body modal-body-wallet">
                                        <h1 class="mb-0">Активировать кошелек</h1>
                                        <div>
                                            <p>Активируйте Big Race за одну транзакцию с BNB</p>
                                            <div class="activate-wallet-input">
                                                <label for="basic-url" class="form-label">Выберите ферму</label>
                                                <div class="selectLvls">
                                                    <select name="lvls" id="lvls" class="lvls">
                                                        <option value="1">Уровень 1д (0,05 BNB)</option>
                                                        <option value="2">Уровень 2д (0,07 BNB)</option>
                                                        <option value="3">Уровень 3д (0,1 BNB)</option>
                                                        <option value="4">Уровень 4д (0,14 BNB)</option>
                                                        <option value="16">Уровень 16 (8 BNB)</option>
        
                                                    </select>
                                                </div>
                                                <!-- <div class="input-group mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="basic-url"
                                    aria-describedby="basic-addon3"
                                  />
                                </div> -->
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <button id="activate2">Активировать ферму</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <button type="button" class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body modal-body-wallet">
                                        <h1 class="mb-0">Connect Wallet</h1>
                                        <div class="d-flex wallet-card align-items-center">
                                            <img src="./assets/img/metamask.png" alt="" />
                                            <div>
                                                <h4 class="mb-0">Metamask</h4>
                                                <p class="mb-0">Desktop/DApp in app</p>
                                            </div>
                                        </div>
                                        <div class="d-flex wallet-card mb-0 align-items-center">
                                            <img src="./assets/img/trust-wallet.png" alt="" />
                                            <div>
                                                <h4 class="mb-0">Trust Wallet</h4>
                                                <p class="mb-0">Desktop/DApp in app</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div class="desc-game-container container">
                <div class="desc-game-main-container">
                    <h2 class="text-center desc-game-title mb-0">«Фермы»</h2>
                    <p class="desc-game-text text-cetr">
        
                        Игра “Big Race” состоит из 16 ферм. Каждый может активировать любую из уже доступных ферм. <br />
                        Фермы постепенно становятся доступнымы, при этом, открываются последовательно с 16-й до самой дешёвой
                        фермы No 1. Фермы открываются с определенным интервалом времени.<br /> <br />
        
                        Каждый может активировать любое количество ферм и получать свой пассивный доход. <br />
                        Чем раньше участник вошел в игру - тем больше шансов получить быстрый пассивный доход!<br /><br />
        
                        В Big Race каждая ферма представляет собой отдельную структуру, выполняющую простые правила
                        смарт-контракта.<br />
                        Все новые игроки случайным образом размещаются в единой большой структуре на каждой ферме, <br />
                        предоставляя всем равные шансы заработать награды без необходимости приглашать личных
                        партнеров.<br /><br />
        
        
                        Каждый выбирает любую доступную ферму.<br />
                        Активировав ферму, участник автоматически встает на линию, в которой есть свободные места. Свободные
                        места распределяются и назначаются случайным образом смарт-контрактом.<br /><br />
        
                        Участники у которых все 16 ферм,они получают пассивный заработок с игры «скачки» и других последующих
                        создаваемых гемблинг игр.<br />
                    </p>
                    <div>
                        <img class="farmimg" src="./assets/img/horse/farms.png" alt="">
                    </div>
        
        
                    <h3>100% ОТ СУММЫ АКТИВАЦИИ УРОВНЯ ДЕЛИТСЯ НА 4 ЧАСТИ: 74%, 13%, 8%, 5%</h3>
                    <p class="desc-game-text text-cetr">
        
        
        
                        – эти 4 части от одной транзакции сразу же распределяются на кошельки участников согласно правилам
                        игры.<br /> <br />
        
                        БАЗОВАЯ НАГРАДА — 74% переходит к случайному вышестоящему участнику в уровневой структуре<br /><br />
        
                        РЕФЕРАЛЬНЫЙ БОНУС — 26% делится между вышестоящими реферальными партнерами до 3-й партнёрской восходящей
                        линии.<br /><br />
        
                        1-й вышестоящая ферма получает 13% <br /><br />
                        2-й вышестоящая ферма получает 8%<br /><br />
                        3-й вышестоящая ферма получает 5%<br /><br />
                    </p>
        
                    <div>
                        <img class="farmimg" src="./assets/img/horse/farm2.jpg" alt="">
                    </div>
        
        
        
        
                </div>
            </div>
            </div>
        </section>
        
        <section>
            <div class="desc-game-container container">
                <div class="desc-game-main-container">
                    <h2 class="text-center desc-game-title mb-0">Описание игры "Скачки на лошадях"</h2>
                    <p class="desc-game-text">
                        Ставки на скачки делают уже более 300 лет. В мире об особенностях
                        этого спорта знают только посвящённые.
                        <br /><br />
                        Big Race вам предлагает не только поставить на выбранную лошадь, но
                        и принимать активное участие в соревнованиях разгоняя лошадь.
                        <br />
                        <br /><br />
                        Основные особенности участия на лошадинных скачках.
                    </p>
                    <div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded">1</p>
                                <img class="mob-condition-img" src="./assets/img/clock.png" alt="" />
                                <div class="step-desc-container">
                                    <p class="mb-0">
                                        Скачки длятся 30 минут: 10 минут на выбор лошади, 10 минут
                                        забег и 10 минут распределение выигрыша победителям.
                                    </p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/clock.png" alt="" />
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded">2</p>
                                <img class="mob-condition-img" src="./assets/img/horses.png" alt="" />
                                <div class="step-desc-container">
                                    <p class="mb-0">
                                        Выбрать лошадь можно только один раз в забег (0.05 BNB)
                                    </p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/horses.png" alt="" />
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded">3</p>
                                <img class="mob-condition-img" src="./assets/img/imgBtn.png" alt="" />
                                <div class="step-desc-container">
                                    <p class="mb-0">
                                        Во время забега можно ускорить свою лошадь ( с помощью
                                        кнопки <ускорение от 0.01 BNB>)на которую вы сделали ставку
                                            и она быстрее финиширует
                                    </p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/imgBtn.png" alt="" />
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded">4</p>
                                <img class="mob-condition-img" src="./assets/img/champ.png" alt="" />
                                <div class="step-desc-container">
                                    <p class="mb-0">
                                        После финиша между победителями распределяется выигрыш в
                                        соответствии с размером вашего вклада в ускорения лошади.
                                    </p>
                                </div>
                            </div>
                            <div class="w-50 d-flex justify-content-center desc-condition-img">
                                <img src="./assets/img/champ.png" alt="" />
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between desc-step-container mb-0">
                            <div class="d-flex align-items-start mob-card-condition">
                                <p class="number-rounded">5</p>
                                <div class="step-desc-container">
                                    <p class="mb-0">
                                        Также вы можете организовывать команды и таким образом
                                        увеличивать шансы что ваша лошадь победит.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="present-back">
                <h1 class="text-center document-card-title">Презентации</h1>
                <div class="d-flex justify-content-center document-card-container align-items-center">
                    <div class="mob-document-container">
                        <div class="d-flex flex-column align-items-center document-card">
                            <a class='pdfsname' href="./assets/pdfs/Big Race_Ru.pdf">
                                <img src="./assets/img/document.png" alt="" /><br />
                                <button>Русский pdf</button></a>
                        </div>
                        <div class="d-flex flex-column align-items-center document-card">
                            <a class='pdfsname' href="./assets/pdfs/Big Race_ English.pdf">
                                <img src="./assets/img/document.png" alt="" /><br />
                                <button>English pdf</button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class='pdfsname' href="./assets/pdfs/Big Race_Hindi.pdf">
                                <img src="./assets/img/document.png" alt="" /><br />
                                <button>Hindi pdf</button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class='pdfsname' href="./assets/pdfs/Big Race_ Indonesia.pdf">
                                <img src="./assets/img/document.png" alt="" /><br />
                                <button>Indonesia pdf</button></a>
                        </div>
        
                    </div>
        
        
        
                </div>
                <div class="d-flex justify-content-center document-card-container align-items-center">
                    <div class="mob-document-container">
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class='pdfsname' href="./assets/pdfs/Big Race_ Italian.pdf">
                                <img src="./assets/img/document.png" alt="" /><br />
                                <button>Italian pdf</button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class='pdfsname' href="./assets/pdfs/Big Race_ Vietnam.pdf">
                                <img src="./assets/img/document.png" alt="" /><br />
                                <button>Vietnam pdf</button></a>
                        </div>
                        <div class="d-flex flex-column mr-0 align-items-center document-card">
                            <a class='pdfsname' href="./assets/pdfs/Big Race_FARSI.pdf">
                                <img src="./assets/img/document.png" alt="" /><br />
                                <button>Farsi pdf</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div id="video">
                <h1 class="videotitle">Видео большой гонки</h1>
                <iframe width="800" height="450" src="https://www.youtube.com/embed/p1dvMqgHJp8"
                    allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen">
                </iframe>
            </div>
        </section>
        <section>
            <div class="horses-back-container">
                <div class="d-flex flex-column align-items-center">
                    <div class="people-count-container d-flex flex-column align-items-center">
                        <h2>Сейчас участников</h2>
                        <h1><span id="participants">0</span></h1>
                        <p id="logintoPlay">войдите, чтобы играть</p>
                        <button class="noview" id='playy' type="button" data-bs-toggle="modal"
                            data-bs-target="#exampleModal2">Хочу в игру</button>
                    </div>
                    <div class="preview-container">
                        <h1>Режим предварительного просмотра</h1>
                        <p class="preview-subtitle">
                            Найдите любую учетную запись BigRace в режиме предварительного просмотра. Введите идентификатор
                            или адрес BNB для предварительного просмотра.
                        </p>
                        <div class="preview-search-container">
                            <p>Введите ID или кошелек BNB</p>
                            <div class="d-flex align-items-center">
                                <div class="input-group mob-search-container">
                                    <input type="text" class="form-control" id="inputPreviewId"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="Поиск по идентификатору пользователя или адресу BNB" />
                                    <button id="preview">Найти</button>
                                </div>
                            </div>
                        </div>
                        <div class="result-container d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-0"><span id="userID"></span></p>
                                <p class="mb-0"><span id="refferee"></span></p>
                                <p class="mb-0"><span id="WalletAddress"></span></p>
                                <p class="mb-0"><span id="errr"></span></p>
        
                            </div>
                            <div>
        
                                <p class="result-sub-text mb-0"><span id="userlvl"></span></p>
                            </div>
        
                        </div>
        
                    </div>
                </div>
            </div>
        </section>`;



async function translaterApi(value) {
    if (value == '0') {
        document.getElementById('mainId').innerHTML = MainRussian;
        await sessionStorage.setItem('detectLang', 0)
    } else if (value == '1') {
        document.getElementById('mainId').innerHTML = MainEnglish;
        await sessionStorage.setItem('detectLang', 1)
    } else if (value == '2') {
        document.getElementById('mainId').innerHTML = MainHindi;
        await sessionStorage.setItem('detectLang', 2)
    } else {
        document.getElementById('mainId').innerHTML = MainRussian;
        await sessionStorage.setItem('detectLang', 0)
    }
}

async function onRu() {
    sessionStorage.setItem('detectLang', 0)
    document.getElementById('mainId').innerHTML = MainRussian;
    document.querySelector('#activate2').addEventListener('click', activate)
    automate()
    document.querySelector("#register").addEventListener("click", onConnect);
    document.querySelector('#preview').addEventListener('click', PreviewId)
}

async function onEn() {
    sessionStorage.setItem('detectLang', 1)
    document.getElementById('mainId').innerHTML = MainEnglish;
    document.querySelector('#activate2').addEventListener('click', activate)
    automate()
    document.querySelector("#register").addEventListener("click", onConnect);
    document.querySelector('#preview').addEventListener('click', PreviewId)
}

async function onHi() {
    sessionStorage.setItem('detectLang', 2)
    document.getElementById('mainId').innerHTML = MainHindi;
    document.querySelector('#activate2').addEventListener('click', activate)
    automate()
    document.querySelector("#register").addEventListener("click", onConnect);
    document.querySelector('#preview').addEventListener('click', PreviewId)
}


async function onreload() {
    let detect = await sessionStorage.getItem('detectLang');
    console.log(detect)
    if (detect == null) {
        sessionStorage.setItem('detectLang', 0)
        document.getElementById('mainId').innerHTML = MainRussian;
        document.querySelector('#activate2').addEventListener('click', activate)
        automate()
        document.querySelector("#register").addEventListener("click", onConnect);
        document.querySelector('#preview').addEventListener('click', PreviewId)
    } else {
        translaterApi(detect)
    }

}



window.addEventListener('load', async () => {
    onreload();
    document.querySelector("#A0").addEventListener("click", onRu);
    document.querySelector("#A1").addEventListener("click", onEn);
    document.querySelector("#A2").addEventListener("click", onHi);
});


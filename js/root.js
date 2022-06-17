
const main = `<section>
      <div class="headline-container">
        <div
          class="container col-12 d-flex justify-content-center justify-content-md-end"
        >
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
            <div
              class="modal fade"
              id="exampleModal3"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                class="btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div
                    class="modal-body modal-body-wallet activated-body-wallet"
                  >
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
            <div
              class="modal fade"
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                class="btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="modal-dialog modal-dialog-centered modal">
                <div class="modal-content">
                  <div class="modal-body modal-body-wallet">
                    <h1 class="mb-0">Активировать кошелек</h1>
                    <div>
                      <p>Активируйте Big Race за одну транзакцию с BNB</p>
                      <div class="activate-wallet-input">
                        <label for="basic-url" class="form-label"
                          >Выберите ферму</label
                        >
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
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                class="btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
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

            Игра “Big Race” состоит из 16 ферм. Каждый может активировать любую из уже доступных ферм. <br/>
            Фермы постепенно становятся доступнымы, при этом, открываются последовательно с 16-й до самой дешёвой фермы No 1. Фермы открываются с определенным интервалом времени.<br/> <br/>

            Каждый может активировать любое количество ферм и получать свой пассивный доход. <br/>
            Чем раньше участник вошел в игру - тем больше шансов получить быстрый пассивный доход!<br/><br/>

            В Big Race каждая ферма представляет собой отдельную структуру, выполняющую простые правила смарт-контракта.<br/>
            Все новые игроки случайным образом размещаются в единой большой структуре на каждой ферме, <br/>
            предоставляя всем равные шансы заработать награды без необходимости приглашать личных партнеров.<br/><br/>


            Каждый выбирает любую доступную ферму.<br/>
            Активировав ферму, участник автоматически встает на линию, в которой есть свободные места. Свободные места распределяются и назначаются случайным образом смарт-контрактом.<br/><br/>

            Участники у которых все 16 ферм,они получают пассивный заработок с игры «скачки» и других последующих создаваемых гемблинг игр.<br/>
          </p>
          <div>
          <img class="farmimg" src="./assets/img/horse/farms.png" alt="">
          </div>


          <h3>100% ОТ СУММЫ АКТИВАЦИИ УРОВНЯ ДЕЛИТСЯ НА 4 ЧАСТИ: 74%, 13%, 8%, 5%</h3>
          <p class="desc-game-text text-cetr">

          

            – эти 4 части от одной транзакции сразу же распределяются на кошельки участников согласно правилам игры.<br/> <br/>

            БАЗОВАЯ НАГРАДА — 74% переходит к случайному вышестоящему участнику в уровневой структуре<br/><br/>

            РЕФЕРАЛЬНЫЙ БОНУС — 26% делится между вышестоящими реферальными партнерами до 3-й партнёрской восходящей линии.<br/><br/>

            1-й вышестоящая ферма получает 13% <br/><br/>
            2-й вышестоящая ферма получает 8%<br/><br/>
            3-й вышестоящая ферма получает 5%<br/><br/>
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
            <div
              class="d-flex align-items-center justify-content-between desc-step-container"
            >
              <div class="d-flex align-items-start mob-card-condition">
                <p class="number-rounded">1</p>
                <img
                  class="mob-condition-img"
                  src="./assets/img/clock.png"
                  alt=""
                />
                <div class="step-desc-container">
                  <p class="mb-0">
                    Скачки длятся 30 минут: 10 минут на выбор лошади, 10 минут
                    забег и 10 минут распределение выигрыша победителям.
                  </p>
                </div>
              </div>
              <div
                class="w-50 d-flex justify-content-center desc-condition-img"
              >
                <img src="./assets/img/clock.png" alt="" />
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between desc-step-container"
            >
              <div class="d-flex align-items-start mob-card-condition">
                <p class="number-rounded">2</p>
                <img
                  class="mob-condition-img"
                  src="./assets/img/horses.png"
                  alt=""
                />
                <div class="step-desc-container">
                  <p class="mb-0">
                    Выбрать лошадь можно только один раз в забег (0.05 BNB)
                  </p>
                </div>
              </div>
              <div
                class="w-50 d-flex justify-content-center desc-condition-img"
              >
                <img src="./assets/img/horses.png" alt="" />
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between desc-step-container"
            >
              <div class="d-flex align-items-start mob-card-condition">
                <p class="number-rounded">3</p>
                <img
                  class="mob-condition-img"
                  src="./assets/img/imgBtn.png"
                  alt=""
                />
                <div class="step-desc-container">
                  <p class="mb-0">
                    Во время забега можно ускорить свою лошадь ( с помощью
                    кнопки <ускорение от 0.01 BNB>)на которую вы сделали ставку
                    и она быстрее финиширует
                  </p>
                </div>
              </div>
              <div
                class="w-50 d-flex justify-content-center desc-condition-img"
              >
                <img src="./assets/img/imgBtn.png" alt="" />
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between desc-step-container"
            >
              <div class="d-flex align-items-start mob-card-condition">
                <p class="number-rounded">4</p>
                <img
                  class="mob-condition-img"
                  src="./assets/img/champ.png"
                  alt=""
                />
                <div class="step-desc-container">
                  <p class="mb-0">
                    После финиша между победителями распределяется выигрыш в
                    соответствии с размером вашего вклада в ускорения лошади.
                  </p>
                </div>
              </div>
              <div
                class="w-50 d-flex justify-content-center desc-condition-img"
              >
                <img src="./assets/img/champ.png" alt="" />
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between desc-step-container mb-0"
            >
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
        <div
          class="d-flex justify-content-center document-card-container align-items-center"
        >
          <div class="mob-document-container">
            <div class="d-flex flex-column align-items-center document-card">
                <a class='pdfsname'  href="./assets/pdfs/Big Race_Ru.pdf">
                <img src="./assets/img/document.png" alt="" /><br/>
                <button>Русский pdf</button></a>
              </div>
              <div class="d-flex flex-column align-items-center document-card">
                <a class='pdfsname'  href="./assets/pdfs/Big Race_ English.pdf">  
                <img src="./assets/img/document.png" alt="" /><br/>
                <button>English pdf</button></a>
              </div>
              <div class="d-flex flex-column mr-0 align-items-center document-card">
                <a class='pdfsname'  href="./assets/pdfs/Big Race_Hindi.pdf">
                <img src="./assets/img/document.png" alt="" /><br/>
                <button>Hindi pdf</button></a>
              </div>
              <div class="d-flex flex-column mr-0 align-items-center document-card">
              <a class='pdfsname'  href="./assets/pdfs/Big Race_ Indonesia.pdf">  
              <img src="./assets/img/document.png" alt="" /><br/>
                <button>Indonesia pdf</button></a>
              </div>
              
          </div>

          

        </div>
        <div
          class="d-flex justify-content-center document-card-container align-items-center"
        >
        <div class="mob-document-container">
        <div class="d-flex flex-column mr-0 align-items-center document-card">
              <a class='pdfsname' href="./assets/pdfs/Big Race_ Italian.pdf">  
              <img src="./assets/img/document.png" alt="" /><br/>
                <button>Italian pdf</button></a>
              </div>
              <div class="d-flex flex-column mr-0 align-items-center document-card">
                <a class='pdfsname' href="./assets/pdfs/Big Race_ Vietnam.pdf">
              <img src="./assets/img/document.png" alt="" /><br/>
                <button>Vietnam pdf</button></a>
              </div>
              <div class="d-flex flex-column mr-0 align-items-center document-card">
              <a class='pdfsname'  href="./assets/pdfs/Big Race_FARSI.pdf">  
              <img src="./assets/img/document.png" alt="" /><br/>
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
      allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
        >
      </iframe>
    </div>
    </section>
    <section>
      <div class="horses-back-container">
        <div class="d-flex flex-column align-items-center">
          <div
            class="people-count-container d-flex flex-column align-items-center"
          >
            <h2>Сейчас участников</h2>
            <h1><span id="participants">0</span></h1>
            <p  id="logintoPlay">войдите, чтобы играть</p>
            <button class="noview" id='playy' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">Хочу в игру</button>
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
                  <input
                    type="text"
                    class="form-control"
                    id="inputPreviewId"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Поиск по идентификатору пользователя или адресу BNB"
                  />
                  <button id="preview">Найти</button>
                </div>
              </div>
            </div>
            <div class="result-container d-flex justify-content-between align-items-center">
                <div>
                  <p class="mb-0" ><span id="userID"></span></p>
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

const invited = `<section class="section-bg section-back-h-100 d-flex align-items-start">
      
      
      <div
              class="modal fade"
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                class="btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="modal-dialog modal-dialog-centered modal">
                <div class="modal-content">
                  <div class="modal-body modal-body-wallet">
                    <h1 class="mb-0">Activate wallet</h1>
                    <div>
                      <p>Activate Big Race in one transaction with BNB</p>
                      <div class="activate-wallet-input">
                        <label for="basic-url" class="form-label"
                          >Amount for activation</label
                        >
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
                      <button id="activate">Activate Farm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      <div class="content-container d-flex justify-content-center w-100">
        <div class="position-relative">
          <img
            class="mob-none width-tablet"
            src="./assets/img/invite-paper.png"
            alt=""
          />
          <img
            class="desk-none invite-padding"
            src="./assets/img/invite-paper-mob.png"
            alt=""
          />
          <div class="position-absolute profile-container w-100">
            <div
              class="d-flex align-items-center justify-content-center flex-column invite-inner-container"
            >
              <img src="./assets/img/avatar.png" alt="" />
              <h1><span id="inviteCode"></span></h1>
              <h2 class="text-center">
                приглашает вас <br />
                Big Race
              </h2>
              
            </button>
            <div class="invitesss smalltext" id='ifNo'>
                <button type="button" id="register">
                  Зарегистрируйтесь сейчас
                </button>
              </div>
              <div class="noview smalltext" id='ifYes'>
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Зарегистрируйтесь сейчас
              </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>`


const game = `<section class="section-bg d-flex align-items-start">
      <div id="mySidebar" class="sidebar-container">
        <div>
          <div class="d-flex align-items-center sidebar-card-container">
            <img src="./assets/img/sidebar/play.png" alt="" />
            <a href="#" id="play">Play now</a>
          </div>
          <div class="d-flex align-items-center sidebar-card-container">
            <img src="./assets/img/sidebar/dashboard.png" alt="" />
            <a href="farms.html" id="dashboardView">FARMS</a>
          </div>
          <div class="d-flex align-items-center sidebar-card-container">
            <img src="./assets/img/sidebar/stats.png" alt="" />
            <a href="#" id="statView">Stats</a>
          </div>
          
          <div class="d-flex align-items-center sidebar-card-container">
            <img src="./assets/img/sidebar/information.png" alt="" />
            <a href="#">Information</a>
          </div>
          
        </div>
        <div>
          <div class="notification-container">
            <img src="./assets/img/sidebar/telegram.png" alt="" />
            <a href="https://t.me/BIGRACE_game" target="_blank">Notifier bot</a>
          </div>
        </div>
      </div>
      
      <div
        id="main"
        class="content-container content-h-full w-100 d-flex flex-column justify-content-center"
      >
        <div class="position-relative d-flex justify-content-center" >
          <img
            class="mob-none horse-tablet-back-none width-tablet"
            src="./assets/img/profile-paper.png"
            alt=""
          />
          <img
            class="desk-none horse-tablet-back"
            src="./assets/img/profile-paper-mob.png"
            alt=""
          />
          <div
            class="position-absolute profile-container game-container-mob horses-rent-container"
          >
            <h1 class="text-center">Прием ставок</h1>
            <div>
              <div class="d-flex align-items-center horses-bar-container" >
                <h1>1</h1>
                <img
                  class="position-absolute"
                  src="./assets/img/horse/1.png"
                  alt=""
                />
                <div class="progress w-100 position-relative">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 0%"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div
                class="d-flex align-items-center horses-bar-container second" 
              >
                <h1>2</h1>
                <img
                  class="position-absolute"
                  src="./assets/img/horse/2.png"
                  alt=""
                />
                <div class="progress w-100 position-relative">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 0%"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="d-flex align-items-center horses-bar-container third" >
                <h1>3</h1>
                <img
                  class="position-absolute"
                  src="./assets/img/horse/3.png"
                  alt=""
                />
                <div class="progress w-100 position-relative">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 0%"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div
                class="d-flex align-items-center horses-bar-container fourth" 
              >
                <h1>4</h1>
                <img
                  class="position-absolute"
                  src="./assets/img/horse/4.png"
                  alt=""
                />
                <div class="progress w-100 position-relative">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 0%"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 class="text-center choose-horse-text">
          Выберите лошадь <br />
          До старта осталось <span id="startCountDown"></span> минут
        </h1>
        <div
          class="d-flex mob-horse-container-choose justify-content-center mb-5"
        >
          <div
            class="add-amount-wallet col-8 d-flex flex-column justify-content-center"
          >
            <div
              class="d-flex mob-horse-choose-container justify-content-between align-items-center"
            >
              <div class="total-wallet">
                <h2 class="mb-0">Баланс кошелька:</h2>
                <p class="mb-0"><span id="balanceonBuyPage"></span></p>
              </div>
              <div class="wallet-add-btn">
                <button id="StartRace">Start Racing</button>
                
                <button id="buyTicket">Buy Ticket (0,05 BNB)</button>
              </div>
            </div>
            <div
              class="flex-wrap d-flex align-items-center choose-horse-container"
            >
              <div
                class="d-flex align-items-center horse-card"
                style="background-color: #eec2a4"
                id="horse1"
              >
                <img src="./assets/img/horse/1x.png" alt="" />
                <h1 class="mb-0" style="color: #9f4b11">0.05 BNB</h1>
              </div>
              <div
                class="d-flex align-items-center horse-card"
                style="background-color: #abb7f5"
                id="horse2"
              >
                <img src="./assets/img/horse/2x.png" alt="" />
                <h1 class="mb-0" style="color: #3f59c9">0.05 BNB</h1>
              </div>
              <div
                class="d-flex align-items-center horse-card"
                style="background-color: #c5e9b2"
                id="horse3"
              >
                <img src="./assets/img/horse/3x.png" alt="" />
                <h1 class="mb-0" style="color: #53ac25">0.05 BNB</h1>
              </div>
              <div
                class="d-flex align-items-center horse-card"
                style="background-color: #f87a7a"
                id="horse4"
              >
                <img src="./assets/img/horse/4x.png" alt="" />
                <h1 class="mb-0" style="color: #b01a23">0.05 BNB</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="position-relative d-flex justify-content-center">
          <img
            class="mob-none width-tablet"
            src="./assets/img/game-layer.png"
            alt=""
          />
          <img class="desk-none" src="./assets/img/game-layer-mob.png" alt="" />
          <div class="position-absolute profile-container">
            <div class="game-container game-tablet-container">
              <div
                class="d-flex align-items-center stat-title-container justify-content-center"
              >
                <h1>Участники</h1>
              </div>
              <table class="table px-5">
                <!-- <tbody class="stat-t-body">
                  <tr class="">
                    <div class="d-flex align-items-center">
                      <th class="wallet-th" scope="row">
                        blueladybug463
                        <p>50 BNB</p>
                      </th>
                      <th class="wallet-th">won</th>
                    </div>
                  </tr>
                  <tr class="">
                    <div class="d-flex align-items-center">
                      <th class="wallet-th" scope="row">
                        blueladybug463
                        <p>50 BNB</p>
                      </th>
                      <th class="wallet-th">won</th>
                    </div>
                  </tr>
                  <tr class="">
                    <div class="d-flex align-items-center">
                      <th class="wallet-th" scope="row">
                        blueladybug463
                        <p>50 BNB</p>
                      </th>
                      <th class="wallet-th">won</th>
                    </div>
                  </tr>
                </tbody> -->
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    `






async function invCheck() {

  if (!account) return;
  await delay(4000);
  let Url = window.location.href;
  let url = new URL(Url);
  code = url.searchParams.get("invite");
  console.log(code)
  
  if (code == null || code == undefined) {
    code = 0;
  }
  // if (code.length != 6) {document.getElementById('inviteCode').textContent = 'Invalid invite code'}
  document.getElementById('inviteCode').textContent = `ID ${code}`;
  maxNum = await matrix.methods.ReferalNum(1).call()
  console.log(maxNum)
  if (code > maxNum - 1) {
    document.getElementById('inviteCode').textContent = `Invalid Id`
    code = 0
  }

  
}
const byPass = [
  { '999978': '0x93965A19CD9f32Ea9bF8E15BCa3C5BE1Dd2D220A' },
  { '999979': '0x5fC94d1f94189Aac055D4C38431dBCde64d32E23' },
  { '999980': '0x5d92df666a2c293510654c8bd7B210359728635E' },
  { '999981': '0xBB4661E3281d3D9537017B4DC8753c006c7237a7' },
  { '999982': '0xd2393B19689593502F90D2097A365dfeAA6101A6' },
  { '999983': '0xd72730056CF8125c0f4cB9c85078163E268746A7' },
  { '999984': '0x06634FF3738BbFb97206e3626d58E1cF999D891e' },
  { '999985': '0xe5a6E7aC5E62Aab66AFF665c8C12fB077CFB56B4' },
  { '999986': '0x3e8b347e6cd277743244bc5ff03356195e274667' },
  { '999987': '0xC30EaDc42380632B8f79a0dD36A088D6c0FE0573' },
  { '999988': '0xeaBE666dE328895dba3b062a518ca33B70ca87d5' },
  { '999989': '0xCc11c67513307b609Cfb5d8446eA25A1E0305552' },
  { '999990': '0x39adeBF21EE873247FfE7d4C892ddF9E491d1440' },
  { '999991': '0xCf84f0faB243Bd2FD6267073540fbfD3B7DC7016' },
  { '999992': '0x737d023E6aafC8e859C6939c041f98Fa13cF84CE' },
  { '999993': '0xF203d98c761BD9fcFaEa55dc7C35aAC31c65458e' },
  { '999994': '0xad5255a0bcc0787154D7339cB6633479b0dEFb7b' },
  { '999995': '0xF314BE2bA72897A2feCd7041bc8BE593DA54f6d6' },
  { '999996': '0x92Cf5a24B631ECA5619b83DB429A7Df28eCC4Abd' },
  { '999997': '0x1aaFedF0282D5A5322233260c4B8a59C2eAC7CAF' },
  { '999998': '0xb643E289A9C70f8C11096b1A304537362d05aE13' },
  { '999999': '0xcD7268a31562264e58C9D807f0e3AD64ca63539A' }
]

async function activate() {
  if (!account) return;
  let id = document.getElementById('lvls').value;
  
  if (code =='999978') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x93965A19CD9f32Ea9bF8E15BCa3C5BE1Dd2D220A'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }


  else if(code == '999979') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x5fC94d1f94189Aac055D4C38431dBCde64d32E23'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }


  else if (code == '999980') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x5d92df666a2c293510654c8bd7B210359728635E'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999981') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xBB4661E3281d3D9537017B4DC8753c006c7237a7' 

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999982') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xd2393B19689593502F90D2097A365dfeAA6101A6' 

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999983') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xd72730056CF8125c0f4cB9c85078163E268746A7'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999984') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x06634FF3738BbFb97206e3626d58E1cF999D891e' 

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999985') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xe5a6E7aC5E62Aab66AFF665c8C12fB077CFB56B4'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if(code == '999986') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x3e8b347e6cd277743244bc5ff03356195e274667'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999987') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xC30EaDc42380632B8f79a0dD36A088D6c0FE0573'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999988') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xeaBE666dE328895dba3b062a518ca33B70ca87d5'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999989') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xCc11c67513307b609Cfb5d8446eA25A1E0305552'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999990') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x39adeBF21EE873247FfE7d4C892ddF9E491d1440'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999991') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xCf84f0faB243Bd2FD6267073540fbfD3B7DC7016'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999992') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x737d023E6aafC8e859C6939c041f98Fa13cF84CE' 

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999993') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xF203d98c761BD9fcFaEa55dc7C35aAC31c65458e'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999994') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xad5255a0bcc0787154D7339cB6633479b0dEFb7b'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999995') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xF314BE2bA72897A2feCd7041bc8BE593DA54f6d6'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999996') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x92Cf5a24B631ECA5619b83DB429A7Df28eCC4Abd'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999997') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x1aaFedF0282D5A5322233260c4B8a59C2eAC7CAF'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999998') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xb643E289A9C70f8C11096b1A304537362d05aE13'

    if (id == '16') {
      Referval = '50000000000000000'
    }
    else if (id == '4') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "2") {
      Referval = '140000000000000000'
    }
    else if (id == "1") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999999') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xcD7268a31562264e58C9D807f0e3AD64ca63539A'

    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(id, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  








  // code = await parseInt(code)
  else if (code == NaN) {
    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id, Referval,account)

    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')

  }else if (code == null) {
    code = 0
    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }
    console.log(id)

    await matrix.methods.addUser(id, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')

  } else{

    let Url = window.location.href;
    let url = new URL(Url);
    code = await url.searchParams.get("invite");
    console.log(code)


    if (id == '1') {
      Referval = '50000000000000000'
    }
    else if (id == '2') {
      Referval = '70000000000000000'
    }
    else if (id == "3") {
      Referval = '100000000000000000'
    }
    else if (id == "4") {
      Referval = '140000000000000000'
    }
    else if (id == "16") {
      Referval = '8000000000000000000'
    }

    let adderrr = await matrix.methods.UniqueAddress(code).call()
    console.log(adderrr)
    let ReferId = await matrix.methods.ReferalNumber(id,adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id,ReferId)

    await matrix.methods.addUser(id, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }
  console.log(code)

  
}

async function isInvited() {
  
    let Url = window.location.href;
    let url = new URL(Url);
    code = url.searchParams.get("invite");
  let search =  window.location.search;
  console.log(search)
    let pathname = window.location.pathname
    console.log('code is: '+code)
    console.log(pathname)
    if(search){
      if(!code){
          // document.getElementById('root').innerHTML = main;
        // automate()
        // document.querySelector('#activate2').addEventListener('click', activate)
        // document.querySelector("#register").addEventListener("click", onConnect);
      } else{
          // document.getElementById('root').innerHTML = invited;
          window.open(`./invite.html?invite=${code}`,'_self')
        invCheck()
        automate2()
        document.querySelector("#register").addEventListener("click", onConnect)
        document.querySelector('#activate').addEventListener('click', activate)
      }
    } 
    
    else {
      // document.getElementById('root').innerHTML = main;
      document.querySelector('#activate2').addEventListener('click', activate)
      automate()
      document.querySelector("#register").addEventListener("click", onConnect);
      document.querySelector('#preview').addEventListener('click', PreviewId)
    }

  }





async function automate2() {
  setInterval(async function () {
    if (!account) {
      document.getElementById('ifYes').style.display = 'none'
      document.getElementById('ifNo').style.display = 'flex'
      // console.log('test1')
    } else {
      
      document.getElementById('ifNo').style.display = 'none'
      document.getElementById('ifYes').style.display = 'flex'
      // console.log('test2')
    }
  }, 1000);

}


async function automate(){
  var y= setInterval(async function ()  {
    if (!account) {
      document.getElementById('playy').style.display = 'none'
      document.getElementById('ifYes').style.display = 'none'
      document.getElementById('ifNo').style.display = 'flex'
      // console.log('test1')
    } else {
      owner = await matrix.methods.owner().call()
      userId = await matrix.methods.ReferalNumber('1', account).call()
      if (userId == '0' && account != owner) {
        document.getElementById('ifNo').style.display = 'none'
        document.getElementById('logintoPlay').style.display = 'none'
        document.getElementById('ifYes').style.display = 'flex'
        document.getElementById('playy').style.display = 'flex'
      } else {
        clearInterval(y);
      } 
    }
  }, 1000);
  
}






window.addEventListener('load', async () => {
  // document.querySelector("#engPdf").addEventListener("click", readPdfEng);
});
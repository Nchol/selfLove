function getTime() {
    const dt = dayjs().format("HH:mm A | MMMM DD");
    return dt;
  }
  
  function generateChat(msg) {
    const txtSender = `<div class="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
    <div class="media-body ml-3">
        <div class="bg-light rounded py-2 px-3 mb-2">
        <p class="text-small mb-0 text-muted">${msg}</p>
        </div>
        <p class="small text-muted">${getTime()}</p>
    </div>
  </div>`;
    return txtSender;
  }
  
  function generateChatBotMsg(msg) {
    getTime();
    const reciever = ` <div class="media w-50 ml-auto mb-3">
    <div class="media-body">
      <div class="bg-primary rounded py-2 px-3 mb-2">
        <p class="text-small mb-0 text-white">${msg}</p>
      </div>
      <p class="small text-muted">${getTime()}</p>
    </div>
  </div>`;
    return reciever;
  }
  
  function actionToCall() {}
  
  function bot(msg) {
    const keyword = msg
      .toLowerCase()
      .match(/bully|cerita|coba|terima kasih|hi|bunuh diri/);
    let reply;
  
    switch (keyword[0]) {
      case "bully":
        reply =
          "Coba kamu perlahan-lahan lupakan itu dan selalu berpikir hal-hal yang positif";
        break;
      case "cerita":
        reply = "Halo, kamu boleh cerita disini. boleh tahu masalah mu apa?";
        break;
      case "hi":
        reply = "Halo, kamu boleh cerita disini. boleh tahu masalah mu apa?";
        break;
      case "coba":
        reply = "Semoga membantu. Apakah ada lagi yang bisa saya bantu?";
        break;
      case "terima kasih":
        reply = "sama-sama semoga hari mu menyenangkan!";
        break;
      case "bunuh diri":
        reply = "Tunggu staff kami akan segera menghubungi mu";
        break;
    }
  
    chat = generateChatBotMsg(reply);
    $("#container-chat").append(chat);
  }
  
  function sendText() {
    let msg = $("#txt-input").val();
    console.log(msg);
    $("#txt-input").val("");
  
    const chat = generateChat(msg);
    $("#container-chat").append(chat);
    setTimeout(() => {
      bot(msg);
    }, 2000);
  }
  
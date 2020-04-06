let countDeath = 0;
function getTime() {
  const dt = dayjs().format("HH:mm A | MMMM DD");
  return dt;
}

function generateChat(msg) {
  const txtSender = `<div class="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
    <div class="media-body ml-3">
        <div class="bg-light rounded py-2 px-3 mb-2" style="width: 200px;">
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
      <div class="bg-primary rounded py-2 px-3 mb-2" style="width: 200px;">
        <p class="text-small mb-0 text-white">${msg}</p>
      </div>
      <p class="small text-muted">${getTime()}</p>
    </div>
  </div>`;
  return reciever;
}

function autoGenerate() {
  const msg =
    "Sepertinya kamu sedang mengalami masa yang sulit. Apa yang kamu rasakan saat ini?";
  chat = generateChatBotMsg(msg);
  $("#container-chat").append(chat);
}

function actionToCall() {}

function bot(msg) {
  const keyword =
    msg
      .toLowerCase()
      .match(
        /cerita|hi|mencoba|terima kasih|merasa|mengejek|bunuh diri|mati/
      ) || [];
  console.log(keyword);
  let reply;
  console.log(countDeath);
  if (keyword[0] === "mati" && countDeath < 1) {
    countDeath++;
    reply = " Apakah kamu memiliki rencana bunuh diri?";
  } else if (keyword[0] === "mati" && countDeath > 0) {
    reply = "staf kami akan segera menghubungi anda";
  } else {
    switch (keyword[0]) {
      case "merasa":
        reply = "apa yang membuatmu merasa berbeda";
        break;
      case "cerita":
        reply = "Halo, kamu boleh cerita disini. boleh tahu masalah mu apa?";
        break;
      case "hi":
        reply = "Halo, kamu boleh cerita disini. boleh tahu masalah mu apa?";
        break;
      case "mencoba":
        reply = "Semoga membantu. Apakah ada lagi yang bisa saya bantu?";
        break;
      case "terima kasih":
        reply = "sama-sama semoga hari mu menyenangkan!";
        break;
      case "bunuh diri":
        console.log(countDeath);
        reply = "Apakah kamu tahu kapan kamu akan melakukan hal tersebut?";
        break;
      case "mengejek":
        reply = "sepertinya kamu benar-benar sedih saat ini";
        break;
      default:
        reply = "Saya tidak mengerti apa yang kamu maksud";
    }
  }

  chat = generateChatBotMsg(reply);
  $("#container-chat").append(chat);
}

function sendText() {
  let msg = $("#txt-input").val();
  if (!msg) {
    return;
  }
  console.log(msg);
  $("#txt-input").val("");

  const chat = generateChat(msg);
  $("#container-chat").append(chat);
  setTimeout(() => {
    bot(msg);
  }, 500);
}
function enterBtn() {
  if (event.keyCode === 122) {
    console.log('mantap');
    
  }
}


$(document).ready(() => {
  console.log("ready");
  autoGenerate();
});

function sendMessage(message) {
  if (message) {
    let date = new Date();

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    div2.classList.add("mine", "messages");
    div3.classList.add("message", "last");
    div3.textContent = message;
    div2.appendChild(div3);
    let span1 = document.createElement("span");
    span1.classList.add("time");
    span1.textContent = date.toLocaleString();
    div2.appendChild(span1);
    div1.appendChild(div2);

    let div = document.getElementById("chat-area");
    div.appendChild(div1);

    let inputMessage = document.getElementById("message");
    inputMessage.value = "";

    botMessage(message);
  } else {
    alert("メッセージを入力してください");
  }
}

function botMessage(message) {
  let date = new Date();
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  div2.classList.add("other", "messages");

  let divAvatar = document.createElement("div");
  divAvatar.classList.add("avatar");
  let i = document.createElement("i");
  i.classList.add("fas", "fa-user-circle", "fa-2x");
  divAvatar.appendChild(i);
  div2.appendChild(divAvatar);

  let div3 = document.createElement("div");
  let spanUser = document.createElement("span");
  spanUser.classList.add("user-name");
  spanUser.textContent = "経営者A";
  div3.appendChild(spanUser);
  let divMessage = document.createElement("div");
  divMessage.classList.add("message", "last");
  divMessage.textContent = message;
  div3.appendChild(divMessage);
  let divTime = document.createElement("div");
  divTime.classList.add("time");
  divTime.textContent = date.toLocaleString();
  div3.appendChild(divTime);
  div2.appendChild(div3);

  div1.appendChild(div2);

  // 最下部にスクロール
  var element = document.documentElement;
  var bottom = element.scrollHeight - element.clientHeight;
  window.scroll(0, bottom);

  // 最後のメッセージを名前の下に表示
  let div = document.getElementById("chat-area");
  div.appendChild(div1);

  const lastMessage = document.getElementById("last-message");
  if (message.length > 30) {
    let ms = message.substr(0, 27);
    let sub = ms + "...";
    lastMessage.innerHTML = "<p>" + sub + "</p>";
  } else {
    lastMessage.innerHTML = "<p>" + message + "</p>";
  }
}

// let m = document.getElementById("message").value;
// const message = escapeHTML(m);



function xss() {
    let m = document.getElementById('message').value
    const message = escapeHTML(m);
    return sendMessage(message)

    // xss対策
    function escapeHTML(string) {
      return string
        .replace(/\&/g, "&amp;")
        .replace(/\</g, "&lt;")
        .replace(/\>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/\'/g, "&#x27");
    }
}
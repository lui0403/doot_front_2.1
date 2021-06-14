function myMessage() {
    const messsage = document.getElementById('message').value
    if (message) {
        let date = new Date()

        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div2.classList.add("mine", "messages");
        let div3 = document.createElement("div");
        div3.classList.add("message", "last");
        div3.textContent = message;
        div2.appendChild(div3);
        let span1 = document.createElement("span");
        span1.classList.add("time")
        span1.textContent = date.toLocaleString();
        div2.appendChild(span1);
        div1.appendChild(div2);

        let div = document.getElementById("chat");
        div.append(div1);

        //textをクリアする
        let inputMessage = document.getElementById("message");
        inputMessage.value = '';

        botMessage(message)
    } else {
        alert("メッセージが未入力です。")
    }
}

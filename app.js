async function send() {

  //
//  const input = document.getElementById("input").value;
//
  const input = document.getElementById("input").value + "　を短歌の上の句や歌詞の先行するフレーズと解釈して、単価の下の句か歌詞の後行のフレーズ「のみ」を答えて。その他のテキストは一切いらないから。了解！とかもいらないから。";

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  document.getElementById("output").textContent = data.reply;

}

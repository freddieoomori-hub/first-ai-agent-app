async function send() {

  //
//  const input = document.getElementById("input").value;
//
  const input = "「" + document.getElementById("input").value + "」　を短歌や俳句の上の句と解釈して、それに対応する下の句のみを答えて。その他のテキストは一切要らないから。了解！とかも要らないから。解説も要らないから。";

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  document.getElementById("output").textContent = data.reply;

}


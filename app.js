async function send() {

  //
//  const input = document.getElementById("input").value;
//
  const input = "「" + document.getElementById("input").value + "」　を短歌や俳句の上句（かみのく）と解釈して、それに対応する下句（しものく）のみを答えて。有名な短歌や俳句がある場合は、そのまま下句（しものく）のみを答えても良い。その他のテキストは一切要らないから。了解！とかも要らないから。解説も要らないから。よろしく。";

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  document.getElementById("output").textContent = data.reply;

}




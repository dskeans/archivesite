document.getElementById("signupForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.querySelector("input[type='email']").value;
  const name = form.querySelector("input[type='text']").value;
  const interests = Array.from(form.querySelectorAll("input[type='checkbox']:checked")).map(cb => cb.value);

  const payload = { email, name, interests };

  const res = await fetch("/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const result = await res.json();
  const msg = document.getElementById("responseMsg");
  msg.textContent = result.message || result.error;
  msg.style.color = res.ok ? "green" : "red";
});
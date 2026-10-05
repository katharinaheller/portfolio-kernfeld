const menu = document.querySelector<HTMLButtonElement>(".menu-toggle");
const navigation = document.querySelector<HTMLElement>("#navigation");
function close() {
  menu?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("open");
}
menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  navigation?.classList.toggle("open", open);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const focusWasInside = navigation?.contains(document.activeElement);
    close();
    if (focusWasInside) menu?.focus();
  }
});
document
  .querySelectorAll<HTMLFormElement>("[data-demo-form]")
  .forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = Array.from(
        form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
          "input,textarea",
        ),
      );
      const invalid = fields.find((field) => !field.checkValidity());
      const status = form.querySelector<HTMLElement>(".form-status")!;
      fields.forEach((f) => f.removeAttribute("aria-invalid"));
      if (invalid) {
        invalid.setAttribute("aria-invalid", "true");
        status.textContent =
          invalid.type === "email"
            ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
            : "Bitte prüfen Sie die Pflichtfelder. Name und Unternehmen benötigen mindestens 2, die Nachricht mindestens 15 Zeichen.";
        invalid.focus();
        return;
      }
      status.textContent =
        "Ihre Demo-Anfrage ist vollständig. Es wurden keine Daten gespeichert oder versendet.";
      form.reset();
    });
  });

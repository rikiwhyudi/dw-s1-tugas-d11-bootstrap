function showData() {
  const name = document.getElementById("input-name").value;
  const email = document.getElementById("input-email").value;
  const phone = document.getElementById("input-phone").value;
  const subject = document.getElementById("input-subject").value;
  const message = document.getElementById("input-message").value;

  const emailReceiver = "rikiw259@gmail.com";
  const msg = `Hello, \nMy name is ${name} \nHandphone: ${phone} \n\n${message} \n\n\n`;

  if (
    name !== "" &&
    email !== "" &&
    phone !== "" &&
    subject !== "" &&
    message !== ""
  ) {
    const a = document.createElement("a");
    a.href = `mailto: ${emailReceiver}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(msg)}`;
    a.click();
  } else {
    alert("Tolong isi semua form dengan baik..");
  }
}

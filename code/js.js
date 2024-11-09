function displayData() {
    const form = document.getElementById("dataForm");
    const outputContainer = document.getElementById("outputContainer");

    const data = {
        "Status Dokumen": form.status.value,
        "Nama Suami": form.namaSuami.value,
        "Nama Istri": form.namaIstri.value,
        "Tanggal Kawin": form.tanggalKawin.value,
        "No. Akta": form.noAkta.value,
        "Daerah": form.daerah.value,
        "Penandatangan": form.penandatangan.value,
        "Tanggal Pindai": form.tglPindai.value,
        "Tanggal Penandatanganan": form.tglPenandatanganan.value
    };
    

    outputContainer.innerHTML = "";
    for (const [key, value] of Object.entries(data)) {
        const div = document.createElement("div");
        div.innerHTML = `<span>${key}:</span> ${value}`;
        outputContainer.appendChild(div);
    }
    localStorage.setItem("formData", JSON.stringify(data));

            // Redirect to the output page
            window.location.href = "output.html";
}

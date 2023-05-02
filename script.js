const form = document.getElementById("generate-form");

const qrcode = document.getElementById("qrcode");

const generateQRCode = (url, size) =>{
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
}

const clearUI = () => {
    qrcode.innerHTML = '';

}
const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById("text").value;
    const size = document.getElementById("size").value;

    if(url === ''){
        alert("Please enter a Text")
    }
    else{
        generateQRCode(url, size);
        const linka = document.getElementById('save-link');
        if(linka){
            linka.remove();
        }
        setTimeout(() => {
            const saveUrl = qrcode.querySelector('img').src;
            createSaveBtn(saveUrl);
        }, 50);
    }
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'btn btn-primary';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Download QRCode Image';
    document.getElementById('generated').appendChild(link);

};


form.addEventListener("submit", onGenerateSubmit);


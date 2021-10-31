function encodeAndDecodeMessages() {
    let container = document.getElementById('main');
    let firstMessage = container.children[0].children[1];
    let secondMessage = container.children[1].children[1];
    let encodeArr = [];
    let decodeArr = [];
    let finalArr = [];

    let encodeBtn = container.children[0].children[2];
    let decodeBtn = container.children[1].children[2];


    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode () {
        
        let firstMessageInput = firstMessage.value;
        secondMessage.textContent = '';
        for (let i = 0; i<firstMessageInput.length; i++) {
            encodeArr.push(firstMessageInput.charCodeAt(i));
        }
        for (let element of encodeArr) {
            decodeArr.push(String.fromCharCode(Number(element) + 1));
        }
        secondMessage.value = decodeArr.join('');
        
        firstMessage.value = '';
    }

    function decode () {
        for (let element of encodeArr) {
            finalArr.push(String.fromCharCode(element))
        }
        secondMessage.value = finalArr.join('');
        firstMessage.addEventListener('click', () => {
            
            encodeArr = [];
            decodeArr = []
            finalArr = []
        })
    }
}
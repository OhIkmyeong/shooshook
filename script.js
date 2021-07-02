const ipt_v = document.getElementsByClassName('ipt_v');
const chk = document.getElementById('chk');
const ipt_chk = document.getElementById('ipt_chk');
const btn = document.getElementById('btn');

const sect_result = document.getElementById('sect_result');

let arr = [];
let sentence = "";

/* 01. 체크박스 */
chk.addEventListener('click',()=>{
    if(chk.checked){
        ipt_chk.disabled = false;
    }else{
        ipt_chk.disabled = true;
    }
});

/* 02. 생성 */
btn.addEventListener('click',makeShoo);

function makeShoo(){
    makeArr();
    onSentence();
    sect_result.innerHTML = sentence;
}//makeShoo

function makeArr(){
    arr = [];
    for(let ipt of ipt_v){
        if(ipt.disabled){continue;}
        arr.push(ipt.value);
    }
}//makeArr

function onSentence(){
    const len_ss = arr[0].length;
    const len_sbrm = arr[1].length;

    const shook = arr[0].slice(0,len_ss/2);
    const shooshook = arr[0];
    const si = arr[1].charAt(0);
    const sibal = arr[1].slice(0,len_sbrm/2);
    const ruma = arr[1].slice(len_sbrm/2);
    const sibalrum = arr[1].slice(0,len_sbrm-1);
    const a = arr[1].slice(len_sbrm-1);
    const sibalruma = arr[1];
    const sibulrama = arr[2] ? arr[2] : arr[1];
    
    sentence = `
${shook}. ${shooshook} ${si}. ${sibalruma} ${shooshook}. ${shook} ${shook}${si}.
${sibulrama}. ${shook}. ${sibal}. ${shooshook} ${shook}. ${si}.
${sibal}. ${shook} ${ruma} ${shooshook}. ${sibal}. ${ruma} ${shook}.
${shooshook} ${shook}. ${shook} ${si}. ${sibalrum}. ${a}${shook} ${shooshook} ${shook}.
${sibulrama}. ${shook}${shook}. ${shooshook} ${si}. ${sibalruma}
${shooshook}. ${shook} ${shook}${si}. ${sibalruma}. ${shook}. ${sibal}.
${shooshook} ${shook}. ${si}. ${sibal}. ${shook} ${ruma} ${shooshook}. ${sibal}.
    `;
}//onSentence

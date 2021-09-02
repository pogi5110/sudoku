const easy = [
    "3-54-2-6-49-76-1-86--1-3245--39--58-96--587-3-813-4-92-5-6-14--2--549-7-149--73-6"
];
const medium = [
    "2--58--933--2-7--1--4----8--419-8------58--933--2-7--1--4----8--419-8--79-8------"
];
const hard = [
    "3--58--933--2-7--1--4----8--419-8------58--933--2-7--1--4----8--419-8--79-8------"
];

var difficulty=easy[0];
let presetDifficulty=1;
let td=document.createElement("td");
let input=document.createElement("input");
var selected;
let columnSum=0;
let rowSum=0;
var cellValue;

window.onload = function(){
    start();
}

function changeDiff(n){
    switch(n){
        case 1: window.difficulty=easy[0];
        break;
        case 2: window.difficulty=medium[0];
        break;
        case 3: window.difficulty=hard[0];
        break;
        default: window.difficulty=easy[0];
    }
    presetDifficulty=n;
    start();
}

function setup(board){
    
    for(let i=0;i<81;i++){
        let cell=document.getElementsByTagName("input");
        cell[i].id=i+1;
        if(board.charAt(i)!='-'){
            cell[i].value=board.charAt(i);
            cell[i].classList.add("fixed");
            cell[i].disabled=true;
        }
        else{
            cell[i].disabled=false;
            cell[i].value="";
            cell[i].addEventListener("click",function(){
                for(let i=0;i<81;i++){
                    let x=document.querySelectorAll("input");
                    x[i].classList.remove("selection");
                }
                cell[i].classList.add("selection");
                cellValue=cell[i];
                selected=cell[i].id;
                cell[i].addEventListener("keydown",(event)=>{
                    var key = event.key;
                    if(key>0 && key<10)
                    {
                        cell[i].value = key;
                    } 
                    else if(key==0){
                        cell[i].value = "";
                    }
                })
                selection(selected);
            })
        }
    }
}

function start(){
    var board=difficulty;
    setup(board);
}

function validate(){

    let cell=document.getElementsByTagName("input");
    var temp;
    var col;
    var row;
    temp=selected%9;
    if(temp==0){
        col=9;
        row=parseInt((selected-1)/9);
    }
    else {
        col=temp;
        row=parseInt(selected/9);
    }
    for(let i=col;i<col+73;i+=9)
    {   
        var x=parseInt(cell[i-1].value);
        columnSum=columnSum+x;
    }
    for(let i=row*9;i<row*9+9;i++)
    {
        var x=parseInt(cell[i].value);
        rowSum+=x;
    }
    if(rowSum==45 && columnSum==45){
        alert("Well Done!");
    }
    else alert("Something doesn't seem right");
    rowSum=0;
    columnSum=0;
}

function selection(s){
    for(let i=0;i<81;i++){
        let x=document.querySelectorAll("input");
        x[i].classList.remove("highlight");
    }

    s=parseInt(s);
    let col = parseInt(s% 9);
    let row = parseInt(s/ 9);
    for(let i=col;i<col+73;i+=9)
    {
        if(i!=s) {
            document.getElementById(i).classList.add("highlight");
        }       
    } 
    for(let i=row*9+1;i<row*9+10;i++)
    {
        if(i!=s) {
            document.getElementById(i).classList.add("highlight");
        }
    }

    s=s-1;
    
    

    
    let x = 0;
    let y = 3;
    if( (-1<s && s<3) || (8<s && s<12) || (17<s && s<21) ) {    
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                    document.getElementById(j+1).classList.add("highlight");
                }
                }
            }
        }
        x = 3;
    y = 6;
    if( (2<s && s<6) || (11<s && s<15) || (20<s && s<24) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                   document.getElementById(j+1).classList.add("highlight");
                }
                }
            }
    }
    x = 6;
    y = 9;
    if( (5<s && s<9) || (14<s && s<18) || (23<s && s<27) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                   document.getElementById(j+1).classList.add("highlight");
                }
                }
            }       
    }
    x=27;
    y=30;
    if( (26<s && s<30) || (35<s && s<39) || (44<s && s<48) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                   document.getElementById(j+1).classList.add("highlight");
                }
                }
            }    
    }
    x = 30;
    y = 33;
    if( (29<s && s<33) || (38<s && s<42) || (47<s && s<51) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                   document.getElementById(j+1).classList.add("highlight");
                }
                }
            }    
    }
    x = 33;
    y = 36;
    if( (32<s && s<36) || (41<s && s<45) || (50<s && s<54) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                   document.getElementById(j+1).classList.add("highlight");
                }
                }
            }    
    }
    x = 54;
    y = 57;
    if( (53<s && s<57) || (62<s && s<66) || (71<s && s<75) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                   document.getElementById(j+1).classList.add("highlight");
                }
                }
            }    
    }
    x = 57;
    y = 60;
    if( (56<s && s<60) || (65<s && s<69) || (74<s && s<78) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                   document.getElementById(j+1).classList.add("highlight");
                }
                }
            }    
    }
    x = 60;
    y = 63;
    if( (59<s && s<63) || (68<s && s<72) || (77<s && s<81) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                   document.getElementById(j+1).classList.add("highlight");
                }
                }
            }   
    }
}
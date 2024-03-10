let view =document.querySelector(".view");
let selected =document.querySelector(".selected");
let inputCountry =document.querySelector(".views span");
let span=document.querySelector(".selected span");

view.onclick=function(){
    selected.classList.toggle("hideList");
};

if(window.localStorage.getItem('tasks')){
let task0=JSON.parse(window.localStorage.tasks);

task0.forEach((e)=>{
    let span=document.createElement('span');
    span.innerHTML=e;
    selected.append(span);
    span.onclick=function(){
        let inp=document.querySelector('.views span');
        console.log(inp.innerHTML);
        inp.innerHTML=span.innerHTML;
        selected.classList.toggle("hideList");
    }
});
}



const image_input=document.querySelector('#img1');
var uploaded_image="";
image_input.addEventListener("change",function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image=reader.result;
        document.querySelector('#displayImage').style.backgroundImage=`url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
    console.log("hhh");
})



let area=document.querySelector(".area");
let attr=area.getAttribute("maxlength");
let spanArea=document.querySelector(".counter");

area.oninput=function(){
    for(let i=0; i<=this.value.length;i++){
        spanArea.innerHTML=`${i}/600`;
    }
    
}



let btn=document.querySelector("#add");

let f1=document.querySelector("#f1");
let f2=document.querySelector("#f2");
let f3=document.querySelector("#f3");
let f4=document.querySelector("#f4");
let f5=document.querySelector("#f5");
let f6=document.querySelector("#f6");
let image1=document.querySelector("#img1");
let des=document.querySelector(".area");

let obj={
    title:[],
    country:[],
    price:[],
    days:[],
    sections:[],
    rates:[],
    images:[],
    details:[]
}
btn.onclick=function(){
    
    obj.title = obj.title.concat(f1.value);
    obj.country = obj.country.concat(f2.innerHTML);
    obj.price = obj.price.concat(f3.value);
    obj.days = obj.days.concat(f4.value);
    obj.sections = obj.sections.concat(f5.value);
    obj.rates = obj.rates.concat(f6.value);
    obj.images = obj.images.concat(image1.src);
    obj.details = obj.details.concat(des.value);

    window.localStorage.setItem('obj', JSON.stringify(obj));
}






/*
let box = document.createElement('div');
        box.className="box";

        let image = document.createElement('div');
        image.className="image";
        let img = document.createElement('img');
        img.src=`../${image1.value}`;

        let title = document.createElement('div');
        title.className="title";
        let p = document.createElement('p');
        p.innerHTML=des.value;

        let buttons = document.createElement('div');
        buttons.className="buttons";

        let button1 = document.createElement('div');
        button1.className="button";
        let button11 = document.createElement('button');
        button11.innerHTML="Edit";
        let i1=document.createElement('i');
        i1.className="fa-solid fa-pen";

        let button2 = document.createElement('div');
        button2.className="button";
        let button22 = document.createElement('button');
        button22.innerHTML="Delete";
        let i2=document.createElement('i');
        i2.className="fa-solid fa-trash-can";

        let button3 = document.createElement('div');
        button3.className="button";
        let button33 = document.createElement('button');
        button33.innerHTML="Share";
        let i3=document.createElement('i');
        i3.className="fa-solid fa-share";

        let info = document.createElement('div');
        info.className="info";

        let places = document.createElement('div');
        places.className="places";

        let span1=document.createElement('span');
        span1.className="special";
        span1.innerHTML=f1.value;

        let span2=document.createElement('span');
        span2.className="special";
        span2.innerHTML=f2.value;

        let span3=document.createElement('span');
        span3.innerHTML=f5.value;

        let rates = document.createElement('div');
        rates.className="rates";

        let span4=document.createElement('span');
        span4.className="special";
        span4.innerHTML=f6.value;

        let span5=document.createElement('span');
        span5.className="special";
        span5.innerHTML=`${f4.value}Days`;

        let span6=document.createElement('span');
        span6.innerHTML=`$${f3.value}Night`;


        places.append(span1);
        places.append(span2);
        places.append(span3);

        rates.append(span4);
        rates.append(span5);
        rates.append(span6);

        info.append(places);
        info.append(rates);

        button11.append(i1);
        button22.append(i2);
        button33.append(i3);

        button1.append(button11);
        button2.append(button22);
        button3.append(button33);

        buttons.append(button1);
        buttons.append(button2);
        buttons.append(button3);

        title.append(p);

        image.append(img);

        box.append(image);
        box.append(title);
        box.append(buttons);
        box.append(info);

        document.querySelector('#aaa').append(box);
/*
function form1(inp,arr){
    arr=arr.concat(inp.value);
    window.localStorage.setItem(`${arr}`, JSON.stringify(arr));
}
let arr1=[];
let arr2=[];
let arr3=[];
let arr4=[];
let arr5=[];
let arr6=[];
let arr7=[];

btn.onclick=function(){
    if(f1.value==""||f2.value==""||f3.value==""||f4.value==""||f5.value==""||f6.value==""){
        console.log("aaaa");
        return;
    }else{
        
        form1(f1,arr1);
        form1(f2,arr2);
        form1(f3,arr3);
        form1(f4,arr4);
        form1(f5,arr5);
        form1(f6,arr6);
        form1(image1,arr7);
    }
}

class userOne{
    constructor(title,country,price,days,section,rate,image){
        this.t=title;
        this.c=country;
        this.p=price;
        this.d=days;
        this.s=section;
        this.r=rate;
        this.i=image;
    }
}


*/ 

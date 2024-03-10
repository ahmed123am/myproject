let lis=document.querySelectorAll(".menu li a");

lis.forEach((li)=>{
    li.addEventListener('click', removeActive);
});

function removeActive(){
    lis.forEach((li)=> {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
///////
let more=document.querySelector(".more");
let alt=document.querySelector(".alt");

more.onclick=function(){
    alt.classList.toggle("hide");
}
///////////
if(window.localStorage.getItem('obj')){
let object= JSON.parse(window.localStorage.obj);

for(let i=0;i<object.title.length;i++){

        let box = document.createElement('div');
        box.className="box";

        let image = document.createElement('div');
        image.className="image";
        let img = document.createElement('img');
        img.src=object.images[i];

        let title = document.createElement('div');
        title.className="title";
        let p = document.createElement('p');
        p.innerHTML=object.details[i];

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
        button2.classList="delete";
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
        span1.innerHTML=object.title[i];

        let span2=document.createElement('span');
        span2.className="special";
        span2.innerHTML=object.country[i];

        let span3=document.createElement('span');
        span3.innerHTML=object.sections[i];

        let rates = document.createElement('div');
        rates.className="rates";

        let star=document.createElement('i');
        star.className="fa-solid fa-star";

        let span4=document.createElement('span');
        span4.className="special";
        span4.innerHTML=object.rates[i];

        let span5=document.createElement('span');
        span5.className="special";
        span5.innerHTML=`${object.days[i]}Days`;

        let span6=document.createElement('span');
        span6.innerHTML=`$${object.price[i]}Night`;




        places.append(span1);
        places.append(span2);
        places.append(span3);

        rates.append(star);
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

        
}

let box=Array.from(document.querySelectorAll('.box'));
box.forEach((i)=>{
    let del=document.querySelector('.delete');
        del.addEventListener('click', (e) => {
            console.log('aaaa');
        object.title = object.title.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
        window.localStorage.setItem('obj', JSON.stringify(object.title));

        object.country = object.country.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
        window.localStorage.setItem('obj', JSON.stringify(object.country));

        object.price = object.price.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
        window.localStorage.setItem('obj', JSON.stringify(object.price));

        object.days = object.days.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
        window.localStorage.setItem('obj', JSON.stringify(object.days));

        object.sections = object.sections.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
        window.localStorage.setItem('obj', JSON.stringify(object.sections));

        object.rates = object.rates.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
        window.localStorage.setItem('obj', JSON.stringify(object.rates));

        object.images = object.images.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
        window.localStorage.setItem('obj', JSON.stringify(object.images));

        object.details = object.details.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
        window.localStorage.setItem('obj', JSON.stringify(object.details));

        e.currentTarget.parentElement.parentElement.remove();
});
});
}



const back_pic=document.querySelector('.full_main');
const hitch_img=document.querySelector('.hitch_img');
const hitch_name=document.querySelector('.hitch_name');
const hitch_detail=document.querySelector('.hitch_detail');
const right=document.querySelector('.right');
const slide_box=document.querySelector('.slide_box_2')
const circle=document.querySelectorAll('.circle');
const temple_container=document.querySelector('.temple_container')
const line_box=document.querySelector('.line_box');
const line=document.querySelectorAll('.line');
const pic=[
          "colton-jones-DJpn9gapAWI-unsplash.jpg",
           "fasfdju92404.jpg",
            "saha2452faf.jpg",
            "connor-scheidler-KDO90aaDRKo-unsplash.jpg",
            "chris-khani-mq0hUlBJvA0-unsplash.jpg",
            "kristina-tamasauskaite-iqrFZIza3KM-unsplash.jpg",
            "savvas-kalimeris-XyP5DldMslg-unsplash.jpg",
        "cassie-smart-krW4kCq4oG4-unsplash.jpg",
        "spencer-davis-I4VkLBwsa9s-unsplash.jpg",
        "frederik-lower-XCkem83mRlM-unsplash.jpg"
    ]

     const hitchHiker=[
         {
          name:"Heinrich Barth ",
          detail:" made the first recorded crossing of  the Sahara from west to east by camel and on foot",
          pic:'/sahara/Hitchhiker/Heinrich_Barth_H.Günter_BNF_Gallica.jpg'
         },
         {
          name:"Eva Dickson",
          detail:'was the first woman to cross the Sahara Desert by car',
          pic:'/sahara/Hitchhiker/EvaDickson.jpg'
         },
         {
       name:'Friedrich Gerhard Rohlfs',
       detail:'German geographer. First person the cross Africa north to south. Namplace Regenfeld near Dakhla Oasis',
       pic:'/sahara/Hitchhiker/Gerhard_Rohlfs_-_J_E_(...)Feilner_Jean_btv1b84509150_(cropped).jpg'
         },
         {
        name:'Henri Duveyrier',
        detail:'(28 February 1840,[citation needed] in Paris[1] – 25 April 1892, in Sèvres), was a French explorer and geographer, most well known for his exploration of the Sahara.',
        pic:"/sahara/Hitchhiker/Henri_Duveyrier.jpg"
         },
         {
             name:'Karl Alfred von Zittel',
             detail:'l (25 September 1839 – 5 January 1904) was a German palaeontologist best known for his Handbuch der Palaeontologie (1876–1880).[1][2]',
             pic:'/sahara/Hitchhiker/Karl_Alfred_von_Zittel.jpg'
         },
         {
             name:'James Richardson',
             detail:'Richardson made an expedition in 1845 from Tunis and Tripoli in Libya to Ghadames and Ghat in the middle of the Sahara. ',
             pic:'/sahara/Hitchhiker/James_Richardson_in_Ghadamsee_costume.jpg'
         }

     ]


    
//TYping animation script

var typed= new Typed(".typing",{
    strings:["Sahara","Desert","Sand","desolation"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
var typed_2=new Typed(".hi",{
    strings:["HitchHiker","HitchHiker"],
    typeSpeed:200,
    backSpeed:200,
    loop:true
})
     var count=0;
     var i=0;
     var j=0;
    setInterval(function(){
     
     back_pic.style.backgroundImage=`url(/sahara/${pic[i]})`
     back_pic.classList.add('full_main');
     back_pic.style.transition='1s';
     
     hitch_name.innerHTML=hitchHiker[j].name;
     hitch_detail.innerHTML=hitchHiker[j].detail;
     hitch_img.innerHTML=hitchHiker[j].pic;

     j++;
     i++;
     

      if(i==9){
         i=0;
     }
     else if(j>=5)
     {
         j=0;
     }
    },4000)


window.onload=function(){
    if((window.innerWidth<=1260)&&(window.innerWidth>=871))
    {
         right.classList.add('horizontal')
    }
     if(window.innerWidth<=1150){
      temple_container.classList.add('temple_move');
    }
    else if(window.innerWidth<=870)
    {
        right.classList.add('vertical')
    }

}
window.addEventListener('resize',function(){
    
    if((window.innerWidth<=1260)&&(window.innerWidth>=871))
    {
        if(!right.classList.contains('horizontal'))
       { 
           right.classList.remove('vertical');
        right.classList.add('horizontal');
    }
    
    }
    if(window.innerWidth<=1150)
    {
        if(!temple_container.classList.contains('temple_move'))
        {
            temple_container.classList.add('temple_move');
        }
    }
     if(window.innerWidth<=870)
    {
              if(!right.classList.contains('vertical'))
           {right.classList.add('vertical');
           right.classList.remove('horizontal');}
    }
    else{
        right.classList.remove('vertical');
        right.classList.remove('horizontal');
        temple_container.classList.remove('temple_move');
    }
    
})
var count=0;
var temple_count=0
var op=0;
var line_iteration=0;
setInterval(function(){
    
    if(temple_container.classList.contains('temple_move'))
    {     
        if(line_iteration>=1)
        {
            line[line_iteration-1].style.opacity=`0.3`;
         if(line_iteration==3)
        {
            line_iteration=0
        }
  } 
        line[line_iteration].style.opacity= `1`;
        temple_container.style.transform=`translateX(${temple_count}px)`;
       
   
         line_iteration++;
     
    }
   
    if(!temple_container.classList.contains('temple_move'))
    {
        temple_container.style.transform=`translateX(${0}px)`;
    }
temple_count=temple_count-725;
if(right.classList.contains('horizontal'))
{
    right.style.transform=`translateX(${count}px)`
    if(op>=1){
        circle[op-1].style.opacity='0.2';
        if(op==4)
{
    op=0;
}
    }
    circle[op].style.opacity='1';
    slide_box.style.transform=`translateY(${0}px)`
count=count-303;
op++;

}
else if(right.classList.contains('vertical'))
{
    
// slide_box.style.transform=`translateX(${0}px)`
right.style.transform=`translateX(${0}px)`
slide_box.style.transform=`translateY(${count}px)`
count=count-319;
}

else{
    right.style.transform=`translateX(${0}px)`
    slide_box.style.transform=`translateY(${0}px)`;
}

if(temple_count<-1500)
{
    console.log('junaid');
    temple_count=0;
}
if((count<-906)&&(right.classList.contains('vertical')))
{
    count=0;
}
else if((count<-909)&&(right.classList.contains('horizontal')))
{
    count=0;
}


},3000)



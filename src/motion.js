export const FadeIn = (direction,delay) => {
    return{
       hidden :{
           y:direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
           x:direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
           filter: 'blur(1px)',
           opacity:0,

       },
       show:{
           y:0,
           x:0,
           filter: 'blur(0px)',
           opacity:1,
           transition : {
               type:'tween',
               duration:1,
               delay:delay,
               ease:[0.25,0.25,0.25,0.75],
           }
       }
    }
}




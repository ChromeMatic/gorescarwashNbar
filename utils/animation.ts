export const stagger_effect = (Delay:number,y_axes:number, x_axes:number) => {

    let motion = {

        initial:{
            x: x_axes || 0,
            y: y_axes || 0,
            opacity: 0
        },
        enter:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                delay: Delay,
                type:'spring',
                stiffness:75
            }
        },
        leave:{
            x: x_axes || 0,
            y: y_axes || 0,
            opacity: 0,
            transition:{
                delay: Delay,
                type:'spring',
                stiffness:75
            }
        }
    }
    return motion
}

export const drop_down_menu = {
    initial:{
        y:-25,
        opacity:0
    },
    enter:{
        y:0,
        opacity:1,
        transition:{
            delay: 375,
            type:'spring',
            stiffness:75
        }
    },
    leave:{
        y:-25,
        opacity:0,
        transition:{
            delay: 375,
            type:'spring',
            stiffness:75
        }
    }
}

export const page_animation ={
    initial:{
        x:100,
        opacity:0
    },
    enter:{
        x:0,
        opacity:1,
        transition:{
            delay: 375,
            type:'spring',
            stiffness:75
        }
    },
    leave:{
        x:100,
        opacity:0,
        transition:{
            delay: 375,
            type:'spring',
            stiffness:75
        }
    }
}
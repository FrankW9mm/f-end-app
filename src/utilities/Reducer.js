export const reducer =( state, action)=>{
    if( action.type === 'CHANGE_COMPELETE'){
        return{
            ...state,
            color:action.data, 
        }
    }

    if( action.type === 'COLOR_CHANGE'){
        return{
            ...state,
            color:action.data,
            hex:action.hex_data
        }
    }

    if( action.type ==='SAVE_FAIL_FULL'){
        return{
            ...state,
            ModalMessage:'Too Much Item in Storage',
            showModal:action.data,
        }
    }

    if( action.type ==='SAVE_FAIL_OVER'){
        return{
            ...state,
            showModal:action.data,
        }
    }

    if( action.type ==='OPEN_SAVE'){
        return{
            ...state,
            showSave:action.data,
        }
    }

    if( action.type ==='CLOSE_SAVE'){
        return{
            ...state,
            showSave:action.data,
        }
    }
    if( action.type === 'SAVE_FAIL_DUPLICATED'){
        return{
            ...state,
            ModalMessage:'ALREADY SAVED',
            showModal:action.data,
        }
    }
    if( action.type ==="SHADE"){
        return{
            ...state,
            color:action.data,
        }
    }
    if( action.type ==='SET_SHADE_OPTION'){
        return{
            ...state,
            option:action.data
        }
    }
    if( action.type ==='SHADE_ENTRY'){
        return{
            ...state,
            list:action.data
        }
    }
    if(action.type ==='SHADE_MODAL_CLOSE'){
        return{
            ...state,
            ShowModal:action.data
        }
    }
     if(action.type ==='SHADE_MODAL_OPEN'){
        return{
            ...state,
            ShowModal:action.data
        }
    }
    if(action.type === 'PALETTE_MODEL_OPEN'){
        return{
            ...state,
            ShowPalette:action.data
        }
    }
    if(action.type === 'PALETTE_MODEL_CLOSE'){
        return{
            ...state,
            ShowPalette:action.data
        }
    }
    if(action.type === 'PALETTE_INCOME'){
        return{
            ...state,
            palette:action.data
        }
    }
    // if(action.type === 'IMG_INCOME'){
    //     return{
    //         ...state,
    //         palette:action.data
    //     }
    // }
    if(action.type === 'COLOR_CODE_INCOME'){
        return{
            ...state,
            requestColor:action.data
        }
    }
    if(action.type === 'COLOR_LIST_INCOME'){
        return{
            ...state,
            palette:action.data
        }
    }
}





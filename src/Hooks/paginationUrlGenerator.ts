var index = 0;
export const URL = "https://pokeapi.co/api/v2/pokemon/"

export const usePaginationUrlGenerator = function () {

    function changeIndex(val:number) {
        index += val;
        if(index >= 140){
          index= 150;
        }
    }
  
    return {
      incrementPagination() {
        changeIndex(20);
      },
  
      decrementPagination() {
        changeIndex(-20);
      },

      isFirstIndex (){
        return index === 0 || index < 0;
      },
  
      value() {
        if(index === 0 || index < 0){
            return URL
        }else{
            return `${URL}?offset=${index}&limit=${index >=140 ? 10 :20}` 
        }
      },
    };
  };



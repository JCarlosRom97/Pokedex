let index = 0;
export const usePaginationUrlGenerator = function () {

    function changeIndex(val:number) {
        index += val;
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
            return 'https://pokeapi.co/api/v2/pokemon/'
        }else{
            return `https://pokeapi.co/api/v2/pokemon/?offset=${index}&limit=20`
        }
      },
    };
  };


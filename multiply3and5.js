function solution(number){
    var total = 0;
    if(number > 0){
    for(let i = 1; i < number;i++){
      if(i % 3 == 0  || i % 5 == 0){
       
        total = total + i;
        
        }
      } 
      console.log(total);
      } else {
        return 0;
      }
    
  }

  solution(10);

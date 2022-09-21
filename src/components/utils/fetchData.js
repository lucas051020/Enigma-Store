let is_ok = true;

const fetchData = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // is_ok ? resolve(task) : reject('Error in the fetchData');
        if(is_ok){
          resolve(task);
         };
    }, time);
  });
}

export default fetchData;
//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(",");
      
        const objectInCache = cache.find(item => item.hash === hash);
        if (objectInCache) {
          console.log("Из кеша: " + objectInCache.result);
          return "Из кеша: " + objectInCache.result;
        }
        else {
          const result = func.call(this, ...args);
          cache.push({ hash, result });
      
          if (cache.length > 5) {
            cache.shift(); 
          }
      
          console.log("Вычисляем: " + result);
          return "Вычисляем: " + result;
        }
      }
  
    return wrapper;
}



//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = false;
  let count = 0;
  let allCount = 0;
  let savedArgs;
  let savedThis;
  wrapper.count = 0;
  wrapper.allCount = 0;
  
  
  function wrapper(...args) {
      if (!timeoutId) {
          func.apply(this, args);
          count += 1;
      } else {
          count = 1;
      }

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
          timeoutId = false;
          func.apply(savedThis, savedArgs);
          if (delay % 100 === 0) {
            count += 1;
            
          }
          
      }, delay);
      wrapper.count = count;
      savedArgs = args;
      savedThis = this;

      allCount += 1;
      
      wrapper.allCount = allCount;
  }
 

  return wrapper;
}




/**
 * number increment animation with the async await function call
 * by selecting the all score and apply the increment animation of that score
 */

export const numberIncrementAnimation = () => {
  // all score selected
  const counters = document.querySelectorAll(".score");

  const speed = 500; //speed

  counters.forEach(async(counter) => {

    // update count function that return the promise
    const updateCount = () => {
      return new Promise(resolve => {
        // @ts-ignore
        const target = parseInt(+counter?.getAttribute("data-value"));

        // @ts-ignore
        const count = parseInt(+counter?.innerHTML);

        const increment = Math.trunc(target / speed);

        if (count < target) {
          // @ts-ignore
          counter.innerHTML = count + increment;
          setTimeout(updateCount, 1);
        }
        resolve
      })
    };
  await updateCount();
  });
}
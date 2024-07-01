export function useIntersectionObserver() {
  const observer = ref(null);
  const isIntersecting = ref(false);
  const elRef = ref(null);

  const intersectionObserver = (el, options = {
      root: null,
      threshold: 0,
    }
  ) =>{
    // elRef.value = el
    observer.value = new IntersectionObserver((entries)=>{
      entries.forEach((item) => {
        isIntersecting.value = item.isIntersecting
      });
    },options);

    observer.value.observe(el)
  }


  // const unobserver = () =>{
  //   if(observer.value){
  //     observer.value.unobserver(elRef.value)
  //   }
  // }

  // onUnmounted(()=>{
  //   unobserver();
  // })

  return { elRef, isIntersecting, intersectionObserver };
}

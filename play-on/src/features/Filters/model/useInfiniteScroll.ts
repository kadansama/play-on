import { useEffect } from "react"

export type InfiniteScrollProps ={
    onLoad: ()=>void
    isLoading: boolean,
    hasMore: boolean,
}

export const useInfiniteScroll = ({onLoad, isLoading, hasMore}: InfiniteScrollProps)=>{
    useEffect(() => {
    const handler = () => {
      const { scrollHeight, scrollTop } = document.documentElement;
      const windowHeight = window.innerHeight;
      const closeToBottom = scrollHeight - scrollTop - windowHeight < windowHeight * 2;

      if (closeToBottom && !isLoading && hasMore) {
        onLoad();
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [onLoad, isLoading, hasMore]);
}
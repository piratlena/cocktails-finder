import { useEffect, useState } from "react";

class ScrollCache {
  static #queryMap = new Map();

  static setYOffset(page: number, offset: number) {
    this.#queryMap.set(page, offset);
  }

  static getYOffset(page: number) {
    return this.#queryMap.get(page);
  }

  static resetYOffset() {
    for (const key of this.#queryMap.keys()) {
      this.#queryMap.set(key, 0);
    }
  }
}

export const resetYOffset = ScrollCache.resetYOffset.bind(ScrollCache);

const useScrollCache = (page: number) => {
  const [allowCache, setAllowCache] = useState(false);
  const currentScroll = ScrollCache.getYOffset(page) ?? 0;

  useEffect(() => {
    const scrollHandler = () => ScrollCache.setYOffset(page, window.scrollY);
    if (allowCache) {
      window.scrollTo({ top: currentScroll, behavior: "smooth" });
      window.addEventListener("scroll", scrollHandler);
    }
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [page, currentScroll, allowCache]);

  return setAllowCache;
};

export default useScrollCache;

const CACHE_NAME = "hueys-recipes-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./items_sides.json",
  "./sauces_spices.json",
  "./dressings.json",
  "./food_prepped.json",
  "./desserts.json",
  "./brunch.json"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(response=>{
      return response || fetch(e.request);
    })
  );
});

const CACHE_NAME="huey-kitchen-v2";

const urlsToCache=[
"./",
"./index.html",
"./items_sides.json",
"./sauces_spices.json",
"./dressings.json",
"./food_prepped.json",
"./desserts.json",
"./brunch.json"
];

self.addEventListener("install",event=>{
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache=>cache.addAll(urlsToCache))
);
});

self.addEventListener("fetch",event=>{
event.respondWith(
caches.match(event.request)
.then(response=>response||fetch(event.request))
);
});

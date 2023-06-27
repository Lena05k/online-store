<template>
  <div>
    <header class="relative w-full">
      <div class="w-full">
        <div class="w-full my-3">
          <nav class="flex flex-nowrap items-center mx-4 my-3">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24px" class="text-gray-300">
              <path d="M22 2v4H2V2h20zm-4 8H2v4h16v-4zM2 22h20v-4H2v4z" fill="currentColor"></path>
            </svg>
            <h3 class="text-sky-400 text-2xl font-semibold text-center ml-4">КРУПО</h3>
            <h3 class="text-pink-500 text-2xl font-semibold text-center">МАРКЕТ</h3>
            <button class="rounded-md text-xs border border-solid border-gray-300 px-3.5 py-1.5 ml-auto">
              <span  class="text-center text-sm font-medium">Войти</span>
            </button>
          </nav>
        </div>
      </div>
      <div>
        <div class="w-full">
          <nav class="flex flex-nowrap rounded-full bg-gray-100 mx-4 my-3 px-1 py-1
          ">
            <button class="w-full rounded-full bg-sky-400 text-white py-1 mr-1">
              <span class="text-center text-sm font-semibold">Доставка</span>
            </button>
            <button class="w-full rounded-full bg-sky-400 text-white py-1">
              <span class="text-center text-sm font-semibold">Самовывоз</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
    <main>
      <div class="relative">
        <div class="mobile:w-full bg-sky-400">
          <div class="flex flex-col box-border mx-4
                      mobile:pb-32 mobile:pt-4
          ">
            <h3 class="text-center my-4 text-white
                       mobile:text-3xl mobile:font-medium
            ">
              Доставка из магазинов и ресторанов в Москве
            </h3>
            <button class="flex flex-nowrap box-border justify-center rounded-lg bg-white my-4 py-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-sky-400">
                <path d="M12 3.5c-3.87 0-7 3.13-7 7 0 2.08.76 3.81 2.82 6.02C9.6 18.43 12 21 12 21s2.4-2.57 4.18-4.48C18.24 14.31 19 12.58 19 10.5c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                      fill="currentColor">
                </path>
              </svg>
              <span class="text-sky-400 font-medium ml-1">Добавьте свой адрес</span>
            </button>
          </div>
<!--          Modal-card-->
          <div></div>
        </div>
        <div class="flex flex-nowrap justify-center box-border mx-4 mt-8">
          <button class="">
            <span class="text-sky-400 font-bold
                         mobile:text-2xl
            ">
              Магазины
            </span>
          </button>
          <button class="ml-4">
            <span class="text-sky-400 font-bold
                         mobile:text-2xl
            ">
              Рестораны
            </span>
          </button>
        </div>
        <div class="relative mx-4 mt-6">
          <h4 class="text-sky-400 text-sm font-medium">Напишите свой адрес — покажем, откуда к вам могут привезти товары</h4>
          <div
              class="Retailer_contentWrapper__drLDH"
              style="background-color: rgb(15, 68, 124);">
            <picture class="Picture_root__5uXZZ Retailer_sideImage__nHZPC">
              <source
                  type="image/avif"
                  srcset="https://imgproxy.sbermarket.ru/imgproxy/size-130-182:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL3NpZGVfaW1hZ2VzL0ltZy1taW4uanBnPzE2Nzg5ODE0MDQ.avif 1x, https://imgproxy.sbermarket.ru/imgproxy/size-130-182-2x:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL3NpZGVfaW1hZ2VzL0ltZy1taW4uanBnPzE2Nzg5ODE0MDQ.avif 2x">
              <source
                  type="image/webp"
                  srcset="https://imgproxy.sbermarket.ru/imgproxy/size-130-182:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL3NpZGVfaW1hZ2VzL0ltZy1taW4uanBnPzE2Nzg5ODE0MDQ.webp 1x, https://imgproxy.sbermarket.ru/imgproxy/size-130-182-2x:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL3NpZGVfaW1hZ2VzL0ltZy1taW4uanBnPzE2Nzg5ODE0MDQ.webp 2x">
              <img
                  class="Image_root__yieXw"
                  loading="lazy"
                  height="182"
                  alt="METRO"

                  src="https://imgproxy.sbermarket.ru/imgproxy/size-130-182:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL3NpZGVfaW1hZ2VzL0ltZy1taW4uanBnPzE2Nzg5ODE0MDQ.jpg"
                  srcset="https://imgproxy.sbermarket.ru/imgproxy/size-130-182-2x:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL3NpZGVfaW1hZ2VzL0ltZy1taW4uanBnPzE2Nzg5ODE0MDQ.jpg 2x">
            </picture>
            <div
                class="Retailer_hider__KKYyh"
                style="background-color: rgb(15, 68, 124);">

            </div>
            <div
                class="">
              <picture
                  class="">
                <source
                    type="image/avif"
                    srcset="https://imgproxy.sbermarket.ru/imgproxy/size-220-56:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL2xvZ29faW1hZ2VzL01ldHJvLnBuZz8xNjc4OTgxNDA0.avif 1x, https://imgproxy.sbermarket.ru/imgproxy/size-220-56-2x:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL2xvZ29faW1hZ2VzL01ldHJvLnBuZz8xNjc4OTgxNDA0.avif 2x">
                <source
                    type="image/webp"
                    srcset="https://imgproxy.sbermarket.ru/imgproxy/size-220-56:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL2xvZ29faW1hZ2VzL01ldHJvLnBuZz8xNjc4OTgxNDA0.webp 1x, https://imgproxy.sbermarket.ru/imgproxy/size-220-56-2x:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL2xvZ29faW1hZ2VzL01ldHJvLnBuZz8xNjc4OTgxNDA0.webp 2x">
                <img
                    class=""
                    loading="lazy"
                    height="56"
                    alt="METRO"
                    src="https://imgproxy.sbermarket.ru/imgproxy/size-220-56:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL2xvZ29faW1hZ2VzL01ldHJvLnBuZz8xNjc4OTgxNDA0.png"
                    srcset="https://imgproxy.sbermarket.ru/imgproxy/size-220-56-2x:width-auto/aHR0cHM6Ly9zYmVybWFya2V0LnJ1L3N0YXRpY3MvcmV0YWlsZXJfYmFubmVycy8xL2xvZ29faW1hZ2VzL01ldHJvLnBuZz8xNjc4OTgxNDA0.png 2x">
              </picture>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  </div>
  <footer></footer>
</template>

<script>
</script>

<style scoped>
</style>

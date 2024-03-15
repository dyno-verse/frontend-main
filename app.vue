<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <NuxtSnackbar/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

* {
  font-family: 'Krub', sans-serif;
}

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 1);
}

.dark body {
  background-color: #12141A;
  color: #ebf4f1;
}

.sepia body {
  background-color: #f1e7d0;
  color: #433422;
}

</style>

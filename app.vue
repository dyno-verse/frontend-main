<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <NuxtSnackbar/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bolder;
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

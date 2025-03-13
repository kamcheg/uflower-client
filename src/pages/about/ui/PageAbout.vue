<script setup lang="ts">

</script>

<template>
  <div class="page-about">
    <div class="container">
      <div class="preview">
        <div class="title">
          Мы рады видеть вас на MyFlower
        </div>
        <div class="postscript">
          8 лет мы создаём композиции и сервис с душой для вас
        </div>
        <div class="description">
          Команда MyFlower работает, чтобы вы могли дарить эмоции: светлые и яркие, романтичные и страстные, нежные и откровенные - такие же разные и неповторимые как и вы!
        </div>
      </div>

      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Af26f7f9677c3bf56bf7ff7bdd8aebe714daedb8a3acd07f38d717e11b8b49e36&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
      />

      <ul>
        <li>Название компании</li>
        <li>График работы</li>
        <li>Карта</li>
        <li>Адрес</li>
        <li>Контакты</li>
        <li>ссылки на соц сети</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-about {
  .preview {
    background: #f6f6f6;
    border-radius: 32px;
    height: fit-content;
    min-height: 440px;
    overflow: hidden;
    pointer-events: none;
    position: relative;
    width: 100%;
    padding: 100px;

    .title {
      text-align: center;
      font-size: 44px;
      margin-bottom: 16px;
    }
    .postscript {
      text-align: center;
      font-size: 20px;
      margin-bottom: 24px;
    }
    .description {
      text-align: center;
      font-size: 24px;
      margin: 0 auto;
      max-width: 788px;
    }
  }
}
</style>

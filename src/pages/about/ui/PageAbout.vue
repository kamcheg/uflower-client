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

      <div
        class="preview contact-info"
      >
        <div class="map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A8dccaf7729aa6b7b9839c17e51ccbe03378e9b51c1eeff705e198282357e5896&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
          />
        </div>

        <div class="desc">
          <p class="desc__item">
            <b>Наш адрес:</b> г. Махачкала, Улица Титова, 144 к3
          </p>

          <p class="desc__item">
            <b>Номер телефона:</b> +7 (999) 666-88-77
          </p>

          <p class="desc__item">
            <b>Электронный адрес:</b> myflower@mail.ru
          </p>

          <p class="desc__item">
            <b>График работы:</b>  ежедневно с 09:00 до 21:00
          </p>

          <div class="social">
            <div class="social__title">
              Наши соц. сети
            </div>
          </div>
        </div>
      </div>
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

  .contact-info {
    margin-top: 24px;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .map {
    }

    .desc {
      padding: 32px;

      &__item {
        &:not(:first-child) {
          margin-top: 12px;
        }

        b {
          font-weight: 600;
        }
      }

      .social {
        display: none;
        margin-top: 100px;

        &__title {
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>

import type {IBouquet, IFlowerType, IReason} from "~/types/types";

export const products: IBouquet[] = [
    {
        id: 1,
        name: "Мимоза итальяно",
        price: 5600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/b40/6grrxyw9w36bc7ari2m3fuyry9thw7e3.jpeg&w=312&h=312"
    },
    {
        id: 2,
        name: "Махровые тюльпаны Дабл Блю S",
        price: 5800,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/35b/mna8s67ae23f7lyoca4lv0bxw1x33y03.jpg&w=312&h=312"
    },
    {
        id: 3,
        name: "Микси",
        price: 7900,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/f78/9tmt9ep3bjxrrenni8go2cr91gh8j448.jpeg&w=312&h=312"
    },
    {
        id: 4,
        name: "Загадай желание",
        price: 8900,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/e28/vcrotv8r24pq0rile42mg8ylh0pt2rf2.jpeg&w=312&h=312"
    },
    {
        id: 5,
        name: "Весеннее дуновение",
        price: 10500,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/077/jnbjqk6l1ld0ck3e1zukb2hepzbzh7l6.jpg&w=312&h=312"
    },
    {
        id: 6,
        name: "Гиацинты с генистой S",
        price: 6500,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/444/zgvtm4joltj0bwlh0juykmpuk0kshwrl.jpg&w=312&h=312"
    },
    {
        id: 7,
        name: "Махровые тюльпаны Коламбус с генистой S",
        price: 7600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/24b/y5bg52pbopjml83481cggnch2jp489cf.jpg&w=312&h=312"
    },
    {
        id: 8,
        name: "Летняя свежесть",
        price: 12900,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/da6/3e5pjw6nc53rd5yiev119xfzlb5e9y51.jpg&w=312&h=312"
    },
    {
        id: 9,
        name: "Чувствуешь весну",
        price: 7600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/7ea/pdhws6u0z5efaqfmtngiy3a597l1lykn.jpg&w=312&h=312"
    },
    {
        id: 10,
        name: "Махровые тюльпаны Коламбус S",
        price: 6600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/732/dw6b9u4atmjs7cvdhizem22761y164e6.jpg&w=312&h=312"
    },
    {
        id: 11,
        name: "Солнечное 8 марта",
        price: 13500,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/236/62g02y9otz196n7aq6g5lwa8x31e75vv.jpeg&w=312&h=312"
    },
    {
        id: 12,
        name: "Махровые тюльпаны Коламбус с мимозой M",
        price: 10100,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/79e/md26grmlw9p23ejx8mq5dspfaa7q6mw8.jpg&w=312&h=312"
    },
    {
        id: 13,
        name: "Нежнейшие лютики",
        price: 11300,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/860/08iucck92vbzkufhm1v2yq2ud45tudyf.jpg&w=312&h=312"
    },
    {
        id: 14,
        name: "Махровые тюльпаны Дабл Блю",
        price: 16600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/32f/vz1s7yx9ndy1mppl582i0abmwa7gk386.jpg&w=312&h=312"
    },
    {
        id: 15,
        name: "Пинкс",
        price: 6700,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/82b/a2qxt7sv40nboguop0t76a12q55v3gl4.jpeg&w=312&h=312"
    },
    {
        id: 16,
        name: "Нежное чувство",
        price: 7900,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/301/qzcmwq7x1ylhmb0ox88gjbqnd8t1m68b.jpeg&w=312&h=312"
    },
    {
        id: 17,
        name: "Букет из 15 тюльпанов с генистой",
        price: 7600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/cb6/er6lay57de2dw12ai6ulwikkm2f94mo6.jpg&w=312&h=312"
    },
    {
        id: 18,
        name: "Тюльпаны Дабл Блю c мимозой S",
        price: 7600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/437/jp2exk8jzyl7exp7nq9ti5j2jytop2za.jpg&w=312&h=312"
    },
    {
        id: 19,
        name: "Хрустальный замок",
        price: 15100,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/982/qabsc0g60hqb76j5q6nx65z2i3bomkvw.jpg&w=312&h=312"
    },
    {
        id: 20,
        name: "Сиреневые гиацинты M",
        price: 7600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/cc7/r76x6veabdm8y4eo77xdbcnn4yuiq467.jpg&w=312&h=312"
    },
    {
        id: 21,
        name: "Альстра севен",
        price: 5900,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/0c5/pp09m3psh4k4c89sk5l77dea8pxuk4d5.jpeg&w=312&h=312"
    },
    {
        id: 22,
        name: "Гиацинты с мимозой микс",
        price: 20100,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/bd3/5aymtalwzy6wsd1sea79g0b132et1pb4.jpg&w=312&h=312"
    },
    {
        id: 23,
        name: "Нежное дуновение",
        price: 9900,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/231/9u7t5ioddt79iml9zvltpq8qiydle5hq.jpg&w=312&h=312"
    },
    {
        id: 24,
        name: "Тюльпаны Дабл Блю с генистой S",
        price: 7600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/040/x812z49zce0dl1pstxscsagtvcx787j2.jpg&w=312&h=312"
    },
    {
        id: 25,
        name: "Великая княжна",
        price: 20300,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/4c0/l5ft2a17cefn413vq1qwtpen62qx0w3d.jpeg&w=312&h=312"
    },
    {
        id: 26,
        name: "Микс гиацинтов с мимозой в коробке",
        price: 19200,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/356/26ptsypgbdce8qia72o004blfb0h09f9.jpg&w=312&h=312"
    },
    {
        id: 27,
        name: "Миром правит любовь",
        price: 8700,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/92f/8yae0t8zo4c6lkfm78bg33xc7gfjz15u.jpeg&w=312&h=312"
    },
    {
        id: 28,
        name: "Карамельные тюльпаны",
        price: 17300,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/918/p5kudkyq2g27hfjrj3ox2a609emwv4cy.jpg&w=312&h=312"
    },
    {
        id: 29,
        name: "Элегантный реверанс",
        price: 15100,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/92a/b5lcuszpa300957p0y1fg3egs0yqi5h3.jpg&w=312&h=312"
    },
    {
        id: 30,
        name: "Нежное дуновение",
        price: 9900,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/231/9u7t5ioddt79iml9zvltpq8qiydle5hq.jpg&w=312&h=312"
    },
    {
        id: 31,
        name: "Тюльпаны Дабл Блю с генистой S",
        price: 7600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/040/x812z49zce0dl1pstxscsagtvcx787j2.jpg&w=312&h=312"
    },
    {
        id: 32,
        name: "Великая княжна",
        price: 20300,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/4c0/l5ft2a17cefn413vq1qwtpen62qx0w3d.jpeg&w=312&h=312"
    },
    {
        id: 33,
        name: "Микс гиацинтов с мимозой в коробке",
        price: 19200,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/356/26ptsypgbdce8qia72o004blfb0h09f9.jpg&w=312&h=312"
    },
    {
        id: 34,
        name: "Миром правит любовь",
        price: 8700,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/92f/8yae0t8zo4c6lkfm78bg33xc7gfjz15u.jpeg&w=312&h=312"
    },
    {
        id: 35,
        name: "Карамельные тюльпаны",
        price: 17300,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/918/p5kudkyq2g27hfjrj3ox2a609emwv4cy.jpg&w=312&h=312"
    },
    {
        id: 36,
        name: "Элегантный реверанс",
        price: 15100,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/92a/b5lcuszpa300957p0y1fg3egs0yqi5h3.jpg&w=312&h=312"
    },
    {
        id: 37,
        name: "Нежное дуновение",
        price: 9900,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/231/9u7t5ioddt79iml9zvltpq8qiydle5hq.jpg&w=312&h=312"
    },
    {
        id: 38,
        name: "Тюльпаны Дабл Блю с генистой S",
        price: 7600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/040/x812z49zce0dl1pstxscsagtvcx787j2.jpg&w=312&h=312"
    },
    {
        id: 39,
        name: "Великая княжна",
        price: 20300,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/4c0/l5ft2a17cefn413vq1qwtpen62qx0w3d.jpeg&w=312&h=312"
    },
    {
        id: 40,
        name: "Микс гиацинтов с мимозой в коробке",
        price: 19200,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/356/26ptsypgbdce8qia72o004blfb0h09f9.jpg&w=312&h=312"
    },
    {
        id: 41,
        name: "Миром правит любовь",
        price: 8700,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/92f/8yae0t8zo4c6lkfm78bg33xc7gfjz15u.jpeg&w=312&h=312"
    },
    {
        id: 42,
        name: "Карамельные тюльпаны",
        price: 17300,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/918/p5kudkyq2g27hfjrj3ox2a609emwv4cy.jpg&w=312&h=312"
    },
    {
        id: 43,
        name: "Элегантный реверанс",
        price: 15100,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/92a/b5lcuszpa300957p0y1fg3egs0yqi5h3.jpg&w=312&h=312"
    },
    {
        id: 44,
        name: "Нежное дуновение",
        price: 9900,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/231/9u7t5ioddt79iml9zvltpq8qiydle5hq.jpg&w=312&h=312"
    },
    {
        id: 45,
        name: "Тюльпаны Дабл Блю с генистой S",
        price: 7600,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/040/x812z49zce0dl1pstxscsagtvcx787j2.jpg&w=312&h=312"
    },
    {
        id: 46,
        name: "Великая княжна",
        price: 20300,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/4c0/l5ft2a17cefn413vq1qwtpen62qx0w3d.jpeg&w=312&h=312"
    },
    {
        id: 47,
        name: "Микс гиацинтов с мимозой в коробке",
        price: 19200,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/356/26ptsypgbdce8qia72o004blfb0h09f9.jpg&w=312&h=312"
    },
    {
        id: 48,
        name: "Миром правит любовь",
        price: 8700,
        image: "https://uflor.ru/api-v2/thumbnail/?src=/upload/iblock/92f/8yae0t8zo4c6lkfm78bg33xc7gfjz15u.jpeg&w=312&h=312"
    }
    // Добавьте остальные объекты по аналогии
];

export const flowerTypes: IFlowerType[] = [
    {"id": 1, "name": "Розы"},
    {"id": 2, "name": "Гипсофила"},
    {"id": 3, "name": "Ранункулюс"},
    {"id": 4, "name": "Роза кустовая"},
    {"id": 5, "name": "Ирис"},
    {"id": 6, "name": "Сирень"},
    {"id": 7, "name": "Роза пионовидная"},
    {"id": 8, "name": "Лилии"},
    {"id": 9, "name": "Тюльпаны"},
    {"id": 10, "name": "Альстромерия"},
    {"id": 11, "name": "Лизиантусы"},
    {"id": 12, "name": "Тюльпаны пионовидные"},
    {"id": 13, "name": "Анемоны"},
    {"id": 14, "name": "Ландыши"},
    {"id": 15, "name": "Фрезия"},
    {"id": 16, "name": "Гиацинт"},
    {"id": 17, "name": "Мимозы"},
    {"id": 18, "name": "Хризантемы"},
    {"id": 19, "name": "Герберы"},
    {"id": 20, "name": "Орхидея"},
    {"id": 21, "name": "Эустома"},
    {"id": 22, "name": "Гвоздики"},
    {"id": 23, "name": "Подсолнух"},
    {"id": 24, "name": "Гортензия"},
    {"id": 25, "name": "Ромашки"}
]

export const reasons: IReason[] = [
    {"id": 1, "name": "Свадьба"},
    {"id": 2, "name": "Кобилей"},
    {"id": 3, "name": "Выписка - Мальчик"},
    {"id": 4, "name": "Свидание"},
    {"id": 5, "name": "Годовщина свадьбы"},
    {"id": 6, "name": "День рождения"},
    {"id": 7, "name": "Выписка - Девочка"}
]

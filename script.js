
const BookItem = {
    template: `<div class="card" style="width: 18rem;">
        <img v-bind:src="item.img" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title" v-text="item.title"></h5>
        <p class="card-text" v-text="item.isbn"></p>
        <a href="#" class="btn btn-primary">В карзину</a>
        </div></div>`,
    props: ['item']
}

const CategoryItem = {
    template: `<li class="list-group-item" v-text="item"></li>`,
    props: ['item']
}

const AboutCompanyMenuItem ={
    template: `<li v-text="item.title">/li>`,
    props: ['item']
}

var main = new Vue({
    el: '#app',
    components: { 'book-item': BookItem, 
        'category-item': CategoryItem,
        'about-menu-item': AboutCompanyMenuItem},
    data() {
        return {
            title: 'Книжный магазин',
            bookList: [{
                img : "img/978-5-91878-503-4.jpg", category: 'Фантастика', isbn: '978-5-91878-503-4', title: 'Воители и вожди', page_count: 100, author: 'Хейли Г., Макнилл Г., Харрисон Р. и др.', description: `Человечество, обитающее в Галактике бесконечной войны, непрерывно сражается лишь ради того, чтобы вы жить. Империум, разделенный Великим Разломом, со всех направлений окружен древними врагами - демонами, ксеносами и еретиками. Именно в таком горниле закаляются герои битв. Изнемогающие рядовые солдаты Астра Милитарум и летчики-асы Имперского Космофлота, полные тайн инквизиторы и доблестные Адептус Астартес... Воины государства людей бьются в тускнеющем свете цивилизации, который стремятся погасить анархические вожди. На кону - вся Галактика, кому же суждено стать триумфатором на пепелище? В этом сборнике рассказов о мире Warhammer 40,000 представлены истории Криса Райта, Питера Маклина, Джоша Рейнольдса, Стива Лайонса, Рэйчел Харрисон, Робби Макнивена, Фила Келли, Гэва Торпа, Мэтта Смита, Гая Хейли и Грэма Макнилла.`
            },
            {img : "img/978-5-91878-455-6.jpg", category: 'Фантастика', isbn: '978-5-91878-455-6', title: 'Солнечная война', page_count: 416, author: 'Джон френч', description: `После семи лет ожесточенных битв чудовищная междоусобная война, названная Ересью Хоруса, наконец приближается к завершению. Теперь взор магистра войны обратился на Терру - Тронный мир и средоточие власти его отца. Хорус жаждет лишь одного исхода - смерти Императора и полного подчинения Империума. Мятежный сын принял Хаос, став его вознесенным сосудом, и собрал под свои знамена несметную армию, призванную вершить его волю и возмездие. Но путь к Трону предстоит нелегкий, ибо защищает его примарх Рогал Дорн - Преторианец Терры и главнокомандующий обороной. Прежде всего Хорус должен бросить вызов самой системе Сол, ее многочисленным армадам и крепостям. Лишь победив в Солнечной войне, Хорус сможет ступить на землю Терры. Тем знаменуется первый этап величайшего сражения за всю историю человечества` }],
            categoryList: ['Фантастика', 'Приключения', 'Наука', 'Сказки', 'Поэзия', 'Фентези'],
            aboutCompanyMenuList: [ {title: 'О компании', link : '#adderss'}],
            buyersMenuList:[{title: 'Адреса магазинов', link : '#adderss'}, {title: 'Услуги', link : '#adderss'}]
        }

    }
});
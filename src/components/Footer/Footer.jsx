import React from "react";
import footerStylesheet from "./footer.module.css"

const Footer = (props) => {
    return (
        <div className={footerStylesheet.style}>
            © 1999–2019 ЗАО «Альфа-Банк». Лицензия на осуществление банковской деятельности НБРБ № 22 выдана 23.04.2019.
            Юридический адрес: г. Минск, ул. Сурганова, 43-47. ЗАО «Альфа-Банк» использует файлы «cookie» для повышения
            удобства пользования веб-сайтом и персонализации сервисов. «Cookie» представляют собой небольшие файлы,
            содержащие информацию о предыдущих посещениях веб-сайта. Если вы не хотите использовать файлы «cookie»,
            измените настройки браузера.
            <div>@created  by Tolya_Kravtsov</div>
            </div>
    )
};

export default Footer
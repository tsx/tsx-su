---

layout: post

title: Никому не верьте!

---

Никому никогда не верьте, слышите, никому!

Программисты!

Программисты, не верьте своим админам!

Не верьте, что они знают вашу билд-систему и могут установить зависимости.
Напишите скрипты для установки «для тупых», чтобы запустил make install, и оно автоматом притащило и поставило из интернета всё, что требуется.
Если в вашей компании используются нормальные пакетные дистрибутивы, запакуйте свой код в готовый пакет.

Не верьте заявлениям админов, что из системы никогда не ломаются.
Ломается всё.
Ломается железо, люди ошибаются, питание пропадает в самый ненужный момент.
Никто, кроме вас, не позаботится о том, чтобы система пережила стихийные бедствия в виде случайного резета «не того» сервера службой мониторинга или одновременно дохнущих дисков в зеркальном raid.

Не верьте админам, обещающим в случае любых проблем с вашей системой сообщить об этом вам.
О проблемах вы узнаете из жалоб пользователей.
Потрудитесь настроить себе оповещения в почту/jabber/телефон обо всех исключениях, возникших в системе.

Программисты, не верьте другим программистам!

Не верьте, что ваши коллеги поняли и соблюдают стиль кодирования, архитектуру и философию вашей системы.
Прикручивайте автоматические проверки всего, что можно автоматически проверить.
Настраивайте Continious Integration; запускайте тесты после каждого чужого коммита, пользуйтесь инструментами проверки кода на стиль, ошибки и «вонючий» код; критически относитесь к любым крупным изменениям кода.

Не верьте, что другие думают как вы, и что они вообще понимают, что они делают.
Обучайте тех, с кем вы работаете, и в тоже время ограничивайте их свободу там, где требуется принятие такого архитектурного решения, которое не всякий сможет принять.
Стройте вместе хорошую архитектуру, но при этом не верьте, что они смогут построить её сами.

Не верьте тому, что говорят другие программисты.
Особенно тому, что они говорят о своем коде.
Не верьте комментариям, не верьте документации.
Единственная истина в системе — код.
Только посмотрев в код, можно выяснить, как работает система.

Программисты, не верьте своим пользователям!

Не верьте, что они смогут пользоваться вашей системой без обучения, что они будут действовать только так, как вы задумали.
Упрощайте интерфейсы, добавляйте подсказки, направляйте пользователя.
Используйте принцип наименьшего удивления, защищайте от опасных и необдуманных действий.

Не верьте багрепортам от пользователей.
Если программа падает, то это запросто может быть из-за неисправной оперативной памяти на пользовательской машине, а не ваш баг.
Не верьте описаниям багов: ошибка может проявлять себя совершенно не так, как записал по своей дырявой памяти юзер.
Формализуйте форму отправки багрепорта, автоматизируйте сбор и отправку информации об ошибке на стороне программы.

Не верьте, что пользователи вообще будут слать вам эти проклятые багрепорты.
Одни баги могут посчитать за нормальное поведение, другие проблемы не настолько беспокоят пользователя, чтобы он поднял мышку тыкнуть в кнопку отправки отчета, а еще часть юзеров просто не знают о том, что можно сообщить или не верят в возможность исправления ошибки.
Мотивируйте пользователей, сделайте отправку багрепортов настолько легкой, насколько она может быть.
Не требуйте при регистрации в bug-tracking системе кучу ненужных данных, а лучше не требуйте регистрации вообще.



Админы!

Админы, не верьте своим программистам!

Не верьте, что программисты пишут код без ошибок или тестируют его.
Вам запросто могут отдать на развертывание кусок недопиленного неработоспособного дерьма, и потом вам отдуваться за нерабочий production.
Разворачивайте staging системы, ставьте тестовые стенды, нагружайте их систему такой нагрузкой, о которой программисты и думать не смели.

Не верьте, что программисты пишут оптимизированный код, дружественный к развертыванию в сложной системе.
Ограничивайте права испольняемому коду, жестко лимитируйте использование ресурсов.
Не давайте программистам писать в произвольные папки и запрашивать левые базы данных; ругайте их, когда используются ресурсы, которых приложение использовать не должно.

Не верьте программистам, которые говорят, что знают о своей системе все.
Отправляйте им сообщения обо всех неожиданных побочных эффектах, будь то вывод на stderr или неожиданная строчка в системных логах.

Админы, не верьте своим пользователям!

Не верьте, что они не полезут куда не надо и не будут страдать фигней на рабочем месте.
Ограничивайте права на установку левого софта, закрывайте развлекательные ресурсы, ставьте запрещающие фаерволы.

Не верьте, что пользователи сообщат вам о проблеме, когда она возникнет.
О планке битой оперативки вы узнаете только после задушевного разговора с программистом, который за кружкой пива пожалуется на юзеров, которые все время достают багрепортами, которые не воспроизводятся и наблюдаются только на некоторых машинах.

Не верьте пользователям, заявляющим, что они способны разобраться со своими проблемами сами.
Ничего хорошего из этого не выходит.
Опечатывайте системники, развешивайте поясняющие записки, старайтесь быть доступнее для помощи.

Админы, не верьте другим админам!

Не верьте, что ваши представления о «правильной» настройке совпадают с представлениями коллег.
Пишите четкие инструкции, документируйте, и по возможности автоматизируйте свою работу, чтобы избежать человеческих ошибок.

Не верьте админам, уверенным в защищенности и стабильности своих систем.
Проверяйте, проверяйте и еще раз проверяйте.
Подписывайтесь на рассылки по безопасности, экспериментируйте, изучайте «черную» сторону дела.
Используйте здравый смысл, сдерживая желание следовать за прогрессом и гонку за фичами в ущерб качественным характеристикам.

Не верьте админам других организаций.
Они могут быть некомпетентны, могут просто забивать на всё, а могут и специально вводить вас в заблуждение.
Проверяйте работоспособность не только своих систем, но и доступной вам части чужих, прежде чем обращаться в другую организацию при проблемах.
Старайтесь иметь представление, с кем вы взаимодействуете и какие у него полномочия, а то вдруг вы требуете изменить настройки глобальной маршрутизации у младшего помощника третьего заместителя сотрудника первой линии техподдержки.
Используйте ваши личностные качества для успешного сотрудничества.



Пользователи!

Пользователи, не верьте ни админам, ни программистам! У тех и у других бывает склонность отмахиваться от проблем, в которых виноваты они.
Часто им лень искать и устранять причину вашей проблемы, и они будут вам говорить, что именно вы что-то делаете не так.
Однако помните, что если вы что-то делаете не так, это значит именно админы и программисты не позаботились направить вас по верному пути в их сложных и запутанных системах и программах.
Будьте открыты для сотрудничества, помогайте им в поисках проблем, и помните, что все мы люди, и иногда заслуживаем человеческого отношения.



Читатели, не верьте этому посту! Ведь только на вере в других людей можно построить лучший мир, правда? ;-)


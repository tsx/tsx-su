---
layout: post
title: Как выбирать хороший софт или библиотеки?
---

К сожалению, сервиса независимой оценки качества софта еще не существует (да и вряд ли появится в современном анархичном интернете), так что я расскажу, как избежать использования разработанных сферически-вакуумным способом программ.



В первую очередь, конечно же, стоит посмотреть на список и известность компаний, которые этот софт используют.
Если такого списка нет - либо проект просто умер, либо разработчикам на него просто наплевать.
В идеале нужно, чтобы компания-разработчик сама же его активно использовала.
Ну к примеру, основатели фреймворка Ruby on Rails сами используют его, создавая коммерческие веб-сервисы.
Но будьте осторожны! Маркетологи могут нагло врать, и запихнуть на страницу компаний-партнеров парочку известных брендов просто так.

Конечно, это не относится к маленьким заточенным под конкретную задачу библиотекам, а только к довольно масштабным системам и платформам вроде менеджмента конфигураций Puppet или того же RoR.



Если программа открытая, обязательно нужно почитать код.
Хотя бы поверхностно проглядеть, разобрать парочку рандомных функций, оценить качество документации, посмотреть на наличие явных антипаттернов.
Вы не программист/сисадмин и не умеете читать код? А какого фига тогда именно вам доверили выбор продукта, который будет поддерживать и обеспечивать работу бизнеса?

Если вы ориентирутесь на заявленные в маркетинговых материалах числа-показатели, смело их делите на два и даже на десять.
Свитчи D-Link умеют держать 8 тысяч мак-адресов? Ожидайте, что они загнутся на четырех тысячах.
Zabbix поддерживает до миллиона элементов данных? Уже на сотне тысяч он начинает творить такие непотребности с базой данных, от чего она уходит в даун практически полностью.



Еще одним из очень важных критериев выбора является change log.
Обязательно почитайте историю разработки, из неё вы узнаете, как долго ждать исправлений, регулярность цикла разработки, темп развития.
Возможно, вы увидите, что заинтересовавший вас проект уже давно мертв, или появился позавчера и буквально кишит багами.
Очень плохой признак - большое количество записей про добавление новой функциональности.
Это означает, что проектом руководит желание левой пятки какого-то человека добавить еще какую-то фишку в ущерб стабильности, быстродействию или применимости к изначальной задаче.
Отличный пример такой проблемы - опять заббикс.
Взгляните на его историю: http://www.zabbix.com/news.php.
Даже выпуски, помеченные как RC (Release Candidate), которые по общепринятым правилам предназначаются именно для отлова багов и стабилизации, у заббикса идут с добавлением новых функций, а значит новых багов и проблем.
И такой софт предлагается для критически важной задачи - мониторинга?



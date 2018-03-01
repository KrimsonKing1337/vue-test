import Vue from 'vue';

/**
 * глобальная шина для обмена данными.
 * если нужно перебросить данные между двумя
 * потомками, глубоко вложенными в родителя.
 * и находящиеся на разных уровнях вложенности,
 * лучше использовать локальный компонент bus
 */
export const globalBus = new Vue();


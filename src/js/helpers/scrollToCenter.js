export const scrollToCenter = (element, container) => {
  // Получаем позиции и размеры элементов
  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  // Вычисляем центр контейнера
  const containerCenter = containerRect.left + containerRect.width / 2;

  // Вычисляем центр элемента
  const elementCenter = elementRect.left + elementRect.width / 2;

  // Вычисляем необходимый скролл
  const scrollOffset = elementCenter - containerCenter;

  // Применяем скролл
  container.scrollBy({
    left: scrollOffset,
    behavior: "smooth",
  });
};

const spells = [
  ['Продукты', 'PRODUCTS'],
  ['Алкоголь', 'ALCOHOL'],
  ['Развлечения', 'ENTERTAIMENT'],
  ['Здоровье', 'HEALTH'],
  ['Транспорт', 'TRANSPORT'],
  ['Всё для дома', 'HOUSING'],
  ['Техника', 'Technique'],
  ['Коммуналка и связь', 'Communal, communication'],
  ['Спорт и хобби', 'Sports, hobbies'],
  ['Образование', 'Education'],
  ['Прочее', 'Other'],
];

const translate = name => {
  for (let key of spells)
    if (key[0].toLowerCase().includes(name.toLowerCase())) return key[1];
  return 'OTHER';
};

export default translate;

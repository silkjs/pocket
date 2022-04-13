export function getAge(birthday: Date, target: Date = new Date()): number {
  const birthday_info = {
    year: birthday.getFullYear(),
    month: birthday.getMonth() + 1,
    day: birthday.getDate(),
  };
  const target_info = {
    year: target.getFullYear(),
    month: target.getMonth() + 1,
    day: target.getDate(),
  };

  let age = target_info.year - birthday_info.year;
  if (
    target_info.month < birthday_info.month ||
    (target_info.month === birthday_info.month && target_info.day < birthday_info.day)
  ) {
    age--;
  }

  return age;
}

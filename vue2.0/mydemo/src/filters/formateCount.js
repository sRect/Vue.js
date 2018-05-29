export const formateCount = data => {
  let num = Number.parseInt(data);

  return "￥" + num / 100;
}